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
  "Dog Walking",
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
      <section id="contact" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white border border-green-100 shadow-sm rounded-3xl p-12">
            <CheckCircle2 size={52} className="text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-3 text-gray-900">Thanks!</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Your quote request has been sent. Mali will contact you as soon as possible.
            </p>
            <button
              onClick={() => setFormState("idle")}
              className="bg-brand-green text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-opacity-85 transition-all"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50">
      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 stagger">
          <span className="animate-on-scroll text-xs font-bold tracking-widest text-green-700 uppercase block mb-3">
            Get Started
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Request a <span className="gradient-text">Free Quote</span>
          </h2>
          <p className="animate-on-scroll text-gray-500 max-w-md mx-auto">
            Fill out the form below and Mali will reach out within 24 hours to confirm your service.
          </p>
          <p className="animate-on-scroll text-xs text-gray-400 mt-3">
            Currently serving homeowners throughout{" "}
            <span className="text-gray-500 font-medium">Copperstone</span>.
          </p>
        </div>

        {/* Form card */}
        <div className="animate-on-scroll bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
            aria-label="Request a service quote"
          >
            {/* Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Service Address *
              </label>
              <div className="relative">
                <MapPin size={15} className="absolute left-3.5 top-3.5 text-gray-400" aria-hidden="true" />
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  placeholder="123 Main St, City, State 00000"
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Service Needed *
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm text-gray-900 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400">
                    Select a service...
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} className="text-gray-900">
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" aria-hidden="true" />
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Tell Mali a little about your yard or what you need done..."
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors resize-none"
              />
            </div>

            {/* Date + Time */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <p className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  <Clock size={12} className="inline mr-1 -mt-0.5" aria-hidden="true" />
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
                          ? "border-brand-green bg-brand-green/10 text-green-800"
                          : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      <p className="text-xs font-semibold">{label}</p>
                      <p className="text-[10px] text-gray-400">{sub}</p>
                    </button>
                  ))}
                </div>
                {selectedTimes.map((t) => (
                  <input key={t} type="hidden" name="preferred_time[]" value={t} />
                ))}
              </div>
            </div>

            {/* Photo upload */}
            <div>
              <label htmlFor="photos" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Upload Photos{" "}
                <span className="normal-case font-normal text-gray-400">(optional)</span>
              </label>
              <label
                htmlFor="photos"
                className="flex flex-col items-center justify-center gap-3 w-full border border-dashed border-gray-200 rounded-xl py-8 px-4 cursor-pointer hover:border-brand-green/40 hover:bg-brand-green/[0.02] transition-all duration-200 group"
              >
                <Upload size={22} className="text-gray-400 group-hover:text-green-600 transition-colors" aria-hidden="true" />
                <div className="text-center">
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                    {fileName ?? "Click to upload yard photos"}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG, HEIC up to 10MB each</p>
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

            {/* Error */}
            {formState === "error" && (
              <div
                className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                role="alert"
              >
                <p className="text-sm text-red-600 leading-relaxed">
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
              className="w-full bg-brand-green text-black font-bold py-4 rounded-xl text-base hover:bg-opacity-85 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
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

            <p className="text-center text-xs text-gray-400">
              No payment required. Mali will contact you to confirm details.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
