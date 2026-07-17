"use client";

import { useState, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Upload,
  CheckCircle2,
  Loader2,
  ChevronDown,
} from "lucide-react";

const services = [
  "Lawn Mowing",
  "Edging",
  "Weed Eating",
  "Yard Cleanup",
  "Leaf Removal",
  "Trash Can Pressure Washing",
  "Garage Cleanup",
  "Odd Jobs",
  "Multiple Services",
  "Other",
];

const timeSlots = [
  { id: "morning", label: "Morning", sub: "8am – 12pm" },
  { id: "afternoon", label: "Afternoon", sub: "12pm – 5pm" },
  { id: "evening", label: "Evening", sub: "5pm – 7pm" },
];

const FORMSPREE_URL = "https://formspree.io/f/mgoganao";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const { ref } = useScrollReveal();
  const [formState, setFormState] = useState<FormState>("idle");
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleTime = (id: string) => {
    setSelectedTimes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const data = new FormData(e.currentTarget);
      // Append selected times since they're controlled state
      selectedTimes.forEach((t) => data.append("preferred_time", t));

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        formRef.current?.reset();
        setSelectedTimes([]);
        setFileName(null);
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <section id="contact" className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass border border-brand-green/40 rounded-3xl p-12">
            <CheckCircle2 size={52} className="text-brand-green mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-3">Thanks!</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your quote request has been sent. Mali will contact you as soon as possible.
            </p>
            <button
              onClick={() => setFormState("idle")}
              className="bg-brand-green text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-opacity-90 transition-all"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 lg:py-32">

      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 stagger">
          <span className="animate-on-scroll text-xs font-bold tracking-widest text-brand-green uppercase block mb-3">
            Get Started
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Request a <span className="gradient-text">Free Quote</span>
          </h2>
          <p className="animate-on-scroll text-gray-400 max-w-md mx-auto">
            Fill out the form below and Mali will reach out within 24 hours to confirm your service.
          </p>
          <p className="animate-on-scroll text-xs text-gray-600 mt-3">
            Currently serving homeowners throughout <span className="text-gray-500 font-medium">Hunningdon Lakes</span>.
          </p>
        </div>

        {/* Form card */}
        <div className="animate-on-scroll glass border border-brand-border rounded-3xl p-6 sm:p-10">
          <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Request a lawn care quote">
            {/* Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" aria-hidden="true" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full bg-brand-surface border border-brand-border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" aria-hidden="true" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="w-full bg-brand-surface border border-brand-border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full bg-brand-surface border border-brand-border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Service Address *
              </label>
              <div className="relative">
                <MapPin size={15} className="absolute left-3.5 top-3.5 text-gray-500" aria-hidden="true" />
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  placeholder="123 Main St, City, State 00000"
                  className="w-full bg-brand-surface border border-brand-border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors"
                />
              </div>
            </div>

            {/* Service needed */}
            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Service Needed *
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-brand-surface border border-brand-border rounded-xl pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-600">
                    Select a service...
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-brand-surface text-white">
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" aria-hidden="true" />
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Tell Mali a little about your yard and what you need done..."
                className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors resize-none"
              />
            </div>

            {/* Date + Time */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" aria-hidden="true" />
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="w-full bg-brand-surface border border-brand-border rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <p className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Preferred Time
                </p>
                <div className="flex gap-2">
                  {timeSlots.map(({ id, label, sub }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => toggleTime(id)}
                      aria-pressed={selectedTimes.includes(id)}
                      className={`flex-1 py-2 px-2 rounded-xl border text-center transition-all duration-200 ${
                        selectedTimes.includes(id)
                          ? "border-brand-green bg-brand-green/10 text-brand-green"
                          : "border-brand-border bg-brand-surface text-gray-400 hover:border-gray-500"
                      }`}
                    >
                      <p className="text-xs font-semibold">{label}</p>
                      <p className="text-[10px] text-gray-500">{sub}</p>
                    </button>
                  ))}
                </div>
                {/* Hidden inputs to capture selected times */}
                {selectedTimes.map((t) => (
                  <input key={t} type="hidden" name="preferred_time[]" value={t} />
                ))}
              </div>
            </div>

            {/* Photo upload */}
            <div>
              <label htmlFor="photos" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Upload Photos{" "}
                <span className="normal-case font-normal text-gray-600">(optional)</span>
              </label>
              <label
                htmlFor="photos"
                className="flex flex-col items-center justify-center gap-3 w-full border border-dashed border-brand-border rounded-xl py-8 px-4 cursor-pointer hover:border-brand-green/40 hover:bg-brand-green/5 transition-all duration-200 group"
              >
                <Upload size={22} className="text-gray-600 group-hover:text-brand-green transition-colors" aria-hidden="true" />
                <div className="text-center">
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {fileName ?? "Click to upload yard photos"}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">PNG, JPG, HEIC up to 10MB each</p>
                </div>
                <input
                  id="photos"
                  name="photos"
                  type="file"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      setFileName(
                        files.length === 1
                          ? files[0].name
                          : `${files.length} photos selected`
                      );
                    }
                  }}
                />
              </label>
            </div>

            {/* Error message */}
            {formState === "error" && (
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3" role="alert">
                <p className="text-sm text-red-400 leading-relaxed">
                  Something went wrong. Please try again or call/text{" "}
                  <a href="tel:+17577776058" className="font-semibold underline underline-offset-4">
                    (757) 777-6058
                  </a>
                  .
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full bg-brand-green text-black font-bold py-4 rounded-xl text-base hover:bg-opacity-90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
            >
              {formState === "submitting" ? (
                <>
                  <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                  Sending Request...
                </>
              ) : (
                "Request My Quote →"
              )}
            </button>

            <p className="text-center text-xs text-gray-600">
              No payment required. Mali will contact you to confirm details.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
