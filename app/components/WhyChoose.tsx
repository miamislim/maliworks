"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  Clock,
  DollarSign,
  Smile,
  Search,
  MapPin,
  ThumbsUp,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Reliable",
    desc: "Shows up when scheduled. Every single time, no excuses.",
  },
  {
    icon: DollarSign,
    title: "Affordable",
    desc: "Fair, transparent pricing — no hidden fees, ever.",
  },
  {
    icon: Smile,
    title: "Friendly",
    desc: "Respectful, kind, and easy to work with.",
  },
  {
    icon: Search,
    title: "Attention to Detail",
    desc: "Mali doesn't cut corners — literally or figuratively.",
  },
  {
    icon: MapPin,
    title: "Locally Owned",
    desc: "Serving your community from right here in the neighborhood.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Focused",
    desc: "Not done until you're happy with the results.",
  },
];

const stats = [
  { number: "100%", label: "Satisfaction Rate" },
  { number: "50+", label: "Yards Served" },
  { number: "5★", label: "Average Rating" },
  { number: "0", label: "Missed Appointments" },
];

export default function WhyChoose() {
  const { ref } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(1,240,16,0.04) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16 stagger">
          <span className="animate-on-scroll text-xs font-bold tracking-widest text-brand-green uppercase block mb-3">
            Why MaliWorks
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The Difference You'll{" "}
            <span className="gradient-text">Notice</span>
          </h2>
          <p className="animate-on-scroll text-gray-400 max-w-lg mx-auto">
            A lot of lawn services exist. Here's what makes MaliWorks stand out in your neighborhood.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 stagger">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="animate-on-scroll flex items-start gap-4 glass border border-brand-border rounded-2xl p-5 hover:border-brand-green/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green/20 transition-colors">
                <Icon size={18} className="text-brand-green" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 stagger">
          {stats.map(({ number, label }) => (
            <div
              key={label}
              className="animate-on-scroll text-center glass border border-brand-border rounded-2xl py-8 px-4 hover:border-brand-green/30 transition-all duration-300"
            >
              <p className="text-4xl font-bold gradient-text mb-2">{number}</p>
              <p className="text-sm text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
