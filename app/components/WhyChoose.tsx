"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { Check } from "lucide-react";

const reasons = [
  "Your neighbor from Copperstone",
  "Friendly and respectful",
  "Reliable communication",
  "Honest pricing",
  "Attention to detail",
  "Helping support a young entrepreneur",
];

export default function WhyChoose() {
  const { ref } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

        <div className="stagger mb-12">
          <span className="animate-on-scroll text-xs font-bold tracking-widest text-green-700 uppercase block mb-3">
            Why Mali?
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="gradient-text">Mali?</span>
          </h2>
        </div>

        <div className="animate-on-scroll grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 text-left hover:border-brand-green/30 hover:bg-brand-green/[0.02] transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                <Check size={16} className="text-green-700" aria-hidden="true" />
              </div>
              <p className="font-semibold text-gray-800 text-sm leading-snug">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
