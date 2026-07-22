"use client";

import Image from "next/image";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.querySelectorAll(".hero-animate");
    children.forEach((child, i) => {
      (child as HTMLElement).style.animationDelay = `${i * 120}ms`;
      child.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Subtle green radial from top — signature atmosphere */}
      <div
        className="absolute inset-x-0 top-0 h-3/4 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(1,240,16,0.09) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Neighborhood badge */}
            <div className="hero-animate opacity-0 inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 text-green-800 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <MapPin size={11} aria-hidden="true" />
              Your Neighbor from Copperstone
            </div>

            {/* Headline */}
            <h1 className="hero-animate opacity-0 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight text-gray-900 mb-5">
              Reliable{" "}
              <span className="gradient-text">Neighborhood</span>
              <br />
              Services
            </h1>

            {/* Sub */}
            <p className="hero-animate opacity-0 text-lg text-gray-500 leading-relaxed mb-9 max-w-md mx-auto lg:mx-0">
              Proudly serving Copperstone with dependable help for your home, yard, and neighborhood — from lawn care to odd jobs and more.
            </p>

            {/* CTAs */}
            <div className="hero-animate opacity-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-green text-black font-bold px-7 py-3.5 rounded-full text-sm hover:bg-opacity-85 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-brand-green/20"
              >
                Request a Free Quote
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              >
                View Services
                <ChevronRight size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust strip */}
            <div className="hero-animate opacity-0 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mt-8">
              {["Free Quotes", "No Contracts", "Satisfaction Guaranteed"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs text-gray-400">
                  <span className="text-green-600 font-bold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Photo side */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4]">
              <Image
                src="/images/mali-photo.png"
                alt="Malachi, founder of MaliWorks"
                fill
                className="object-contain object-top"
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
