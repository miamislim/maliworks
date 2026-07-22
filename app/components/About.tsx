"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const { ref } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <div className="animate-on-scroll relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative w-72 sm:w-80 lg:w-[360px] aspect-[3/4]">
                <Image
                  src="/images/mali-photo-2.png"
                  alt="Malachi, founder of MaliWorks"
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 360px"
                />
              </div>
              {/* Floating name tag */}
              <div className="absolute -bottom-5 -right-5 bg-white border border-gray-100 shadow-sm rounded-2xl px-5 py-3">
                <p className="text-base font-bold text-gray-900 leading-tight">Malachi</p>
                <p className="text-xs text-green-700 font-medium">Founder, MaliWorks</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="stagger">
            <span className="animate-on-scroll text-xs font-bold tracking-widest text-green-700 uppercase">
              About Mali
            </span>

            <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight text-gray-900">
              Hi, I&apos;m Mali.
            </h2>

            <div className="animate-on-scroll space-y-4 text-gray-500 leading-relaxed">
              <p>
                I&apos;m proud to serve my neighbors here in Copperstone by helping families with the tasks that pile up around the home and yard. No job is too small — if it needs doing, I&apos;m happy to help. I believe every job deserves hard work, reliability, and real attention to detail.
              </p>
              <p>
                When you hire me, you&apos;re supporting a{" "}
                <span className="text-gray-900 font-semibold">
                  young entrepreneur right here in your own neighborhood
                </span>{" "}
                — someone who genuinely cares about the work he does for you.
              </p>
              <p className="text-sm text-gray-400">
                Currently serving homeowners throughout{" "}
                <span className="text-gray-500 font-medium">Copperstone</span>.
              </p>
            </div>

            {/* Quality cards */}
            <div className="animate-on-scroll grid grid-cols-2 gap-3 mt-8">
              {[
                { label: "Shows up on time", sub: "Every single time." },
                { label: "Quality-focused", sub: "Details actually matter." },
                { label: "Respectful", sub: "To you and your property." },
                { label: "Community-driven", sub: "Serving Copperstone." },
              ].map(({ label, sub }) => (
                <div
                  key={label}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:border-brand-green/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                    <p className="text-sm font-semibold text-gray-900">{label}</p>
                  </div>
                  <p className="text-xs text-gray-400 pl-5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
