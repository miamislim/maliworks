"use client";

import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTASection() {
  const { ref } = useScrollReveal();

  return (
    <>
      <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(1,240,16,0.07) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div ref={ref} className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center stagger">
          <span className="animate-on-scroll text-xs font-bold tracking-widest text-green-700 uppercase block mb-4">
            Get Started Today
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Need a Hand{" "}
            <span className="gradient-text">Around the House?</span>
          </h2>
          <p className="animate-on-scroll text-gray-500 mb-10 leading-relaxed max-w-md mx-auto">
            Whether it&apos;s keeping your lawn trimmed, your trash cans fresh, or your dog exercised,
            Mali is ready to help.
          </p>
          <div className="animate-on-scroll">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-green text-black font-bold px-8 py-4 rounded-full text-base hover:bg-opacity-85 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-brand-green/20"
            >
              Request Your Free Quote
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Minimal copyright footer */}
      <div className="py-6 bg-white border-t border-gray-100">
        <p className="text-center text-xs text-gray-400">
          © 2026 Mali&apos;s Neighborhood Services
        </p>
      </div>
    </>
  );
}
