"use client";

import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const PHONE_DISPLAY = "(757) 777-6058";
const PHONE_HREF = "tel:+17577776058";

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
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="hero-animate opacity-0 inline-flex items-center gap-2 bg-brand-surface border border-brand-border rounded-full px-4 py-1.5 text-xs font-semibold text-brand-green mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-green" aria-hidden="true" />
              Now Accepting New Clients
            </div>

            {/* Headline */}
            <h1 className="hero-animate opacity-0 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">
              Hi, I&apos;m Mali.{" "}
              <span className="block mt-1 gradient-text">
                Reliable Help for Your Home &amp; Yard.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-animate opacity-0 text-lg text-gray-400 leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
              I&apos;m a hardworking young entrepreneur helping homeowners with lawn mowing, yard cleanup, and outdoor projects. Every job is treated like it&apos;s my own.
            </p>

            {/* CTAs */}
            <div className="hero-animate opacity-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-green text-black font-bold px-7 py-3.5 rounded-full text-sm hover:bg-opacity-90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-brand-green/20"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </a>
              <a
                href={PHONE_HREF}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass border border-brand-border text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:border-brand-green/50 transition-all duration-200"
              >
                <Phone size={15} />
                {PHONE_DISPLAY}
              </a>
            </div>

            {/* Trust micro-copy */}
            <div className="hero-animate opacity-0 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mt-8">
              {["Free Quotes", "No Contracts", "Satisfaction Guaranteed"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="text-brand-green font-bold">✓</span>
                  {badge}
                </div>
              ))}
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="text-brand-green font-bold">📍</span>
                Hunningdon Lakes
              </div>
            </div>

            {/* Service area */}
            <p className="hero-animate opacity-0 text-xs text-gray-600 mt-4 text-center lg:text-left leading-relaxed max-w-md mx-auto lg:mx-0">
              Proudly serving the Hunningdon Lakes community with dependable, affordable lawn care and outdoor services.
            </p>
          </div>

          {/* Photo side */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Branded background glow — sibling of overflow-hidden container so it isn't clipped */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(1,240,16,0.18) 0%, rgba(1,240,16,0.06) 45%, transparent 75%)",
                filter: "blur(48px)",
              }}
              aria-hidden="true"
            />
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 24px 64px rgba(1,240,16,0.07), 0 8px 24px rgba(0,0,0,0.4)" }}
            >
              <Image
                src="/images/mali-photo.png"
                alt="Malachi, founder of MaliWorks lawn care"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                style={{ background: "linear-gradient(to top, #0D0D0D 0%, transparent 100%)" }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-brand-green/50" />
        <span className="text-xs tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}
