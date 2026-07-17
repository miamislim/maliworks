"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const { ref } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
<div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Single featured photo */}
          <div className="animate-on-scroll relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Photo */}
              <div className="relative w-72 sm:w-80 lg:w-[360px] aspect-[3/4] rounded-3xl overflow-hidden">
                <Image
                  src="/images/mali-photo-2.png"
                  alt="Malachi, founder of MaliWorks"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 360px"
                />
              </div>

              {/* Floating name tag */}
              <div className="absolute -bottom-5 -right-5 glass border border-brand-border rounded-2xl px-5 py-3">
                <p className="text-base font-bold text-white leading-tight">Malachi</p>
                <p className="text-xs text-brand-green font-medium">Founder, MaliWorks</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="stagger">
            <div className="animate-on-scroll">
              <span className="text-xs font-bold tracking-widest text-brand-green uppercase">
                About Mali
              </span>
            </div>

            <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              More Than Lawn Care —{" "}
              <span className="gradient-text">A Work Ethic</span>
            </h2>

            <div className="animate-on-scroll space-y-4 text-gray-400 leading-relaxed text-base">
              <p>
                Malachi — known as Mali — started MaliWorks with one simple belief: if you're going to do something, do it right. What began as helping neighbors has grown into a real business built on showing up, working hard, and taking pride in every yard he touches.
              </p>
              <p>
                He&apos;s <span className="text-white font-medium">dependable, respectful, and genuinely cares</span> about the quality of his work. When you hire MaliWorks, you&apos;re not just getting a cleaner yard — you&apos;re supporting a young entrepreneur who&apos;s building something real, one lawn at a time.
              </p>
            </div>

            {/* Qualities */}
            <div className="animate-on-scroll grid grid-cols-2 gap-3 mt-8">
              {[
                { label: "Shows up on time", sub: "Every single time." },
                { label: "Quality-focused", sub: "Details actually matter." },
                { label: "Respectful", sub: "To you and your property." },
                { label: "Community-driven", sub: "Proudly local." },
              ].map(({ label, sub }) => (
                <div
                  key={label}
                  className="glass border border-brand-border rounded-2xl p-4 hover:border-brand-green/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-brand-green text-sm font-bold">✓</span>
                    <p className="text-sm font-semibold text-white">{label}</p>
                  </div>
                  <p className="text-xs text-gray-500 pl-5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
