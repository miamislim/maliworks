"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const { ref } = useScrollReveal();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <div className="animate-on-scroll relative flex justify-center lg:justify-start">
            <div className="relative w-80 sm:w-96 lg:w-[420px] aspect-[3/4]">
              <Image
                src="/images/mali-photo-2.png"
                alt="Malachi, founder of MaliWorks"
                fill
                className="object-contain object-top"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 420px"
              />
            </div>
          </div>

          {/* Content */}
          <div className="stagger">
            <span className="animate-on-scroll text-xs font-bold tracking-widest text-green-700 uppercase">
              About Mali
            </span>

            <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight text-gray-900">
              Hi, I&apos;m Malachi —<br />
              <span className="gradient-text">your neighbor.</span>
            </h2>

            <div className="animate-on-scroll space-y-5 text-gray-600 leading-relaxed">
              <p>
                I grew up right here in Copperstone, and I started MaliWorks because I genuinely enjoy helping my neighbors. There&apos;s something satisfying about showing up, doing the job right, and knowing someone&apos;s home looks a little better because of it.
              </p>
              <p>
                I take every job seriously — whether it&apos;s a weekly lawn mow, washing out your trash cans, walking your dog, or just tackling that one odd task you&apos;ve been putting off. Small job or big job, I show up on time, communicate clearly, and do the work with real attention to detail.
              </p>
              <p>
                I&apos;m honest about pricing, respectful of your property, and easy to reach. When you hire me, you&apos;re not calling a company — you&apos;re texting your neighbor, who actually cares about the outcome.
              </p>
              <p className="text-sm text-gray-400">
                Currently serving homeowners throughout{" "}
                <span className="text-gray-500 font-medium">Copperstone</span>.
              </p>
            </div>

            <div className="animate-on-scroll mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-opacity-85 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Request a Free Quote
              </a>
              <a
                href="tel:+17577776058"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full text-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              >
                Call (757) 777-6058
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
