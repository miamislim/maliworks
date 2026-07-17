"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ImagePlus } from "lucide-react";

/*
  GALLERY SETUP
  -------------
  Replace these placeholders with real before/after photos.
  Drop images into /public/images/ and update the src paths below.
  Recommended size: 800×600px, WebP format for best performance.
*/
const galleryItems = [
  {
    before: "/images/gallery/before-1.jpg",
    after: "/images/gallery/after-1.jpg",
    label: "Front yard transformation",
  },
  {
    before: "/images/gallery/before-2.jpg",
    after: "/images/gallery/after-2.jpg",
    label: "Overgrown to pristine",
  },
  {
    before: "/images/gallery/before-3.jpg",
    after: "/images/gallery/after-3.jpg",
    label: "Full yard cleanup",
  },
];

function PlaceholderImage({ label, type }: { label: string; type: "before" | "after" }) {
  const isAfter = type === "after";
  return (
    <div
      className={`relative aspect-[4/3] rounded-xl overflow-hidden flex flex-col items-center justify-center gap-3 border border-dashed ${
        isAfter ? "border-brand-green/40 bg-brand-green/5" : "border-brand-border bg-brand-surface"
      }`}
      aria-label={`${type} photo placeholder for: ${label}`}
    >
      <ImagePlus
        size={28}
        className={isAfter ? "text-brand-green" : "text-gray-600"}
        aria-hidden="true"
      />
      <div className="text-center px-4">
        <p className={`text-xs font-bold uppercase tracking-widest ${isAfter ? "text-brand-green" : "text-gray-500"}`}>
          {type}
        </p>
        <p className="text-xs text-gray-600 mt-1">Photo coming soon</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { ref } = useScrollReveal();

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-brand-charcoal relative">
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16 stagger">
          <span className="animate-on-scroll text-xs font-bold tracking-widest text-brand-green uppercase block mb-3">
            Results
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Before & After
          </h2>
          <p className="animate-on-scroll text-gray-400 max-w-md mx-auto">
            The proof is in the yard. Real results from real clients in your neighborhood.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="space-y-10 stagger">
          {galleryItems.map(({ before, after, label }) => (
            <div key={label} className="animate-on-scroll">
              <p className="text-sm font-medium text-gray-400 mb-3">{label}</p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Before */}
                <div className="relative">
                  <span className="absolute top-3 left-3 z-10 text-[10px] font-bold bg-black/60 text-gray-300 backdrop-blur-sm px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Before
                  </span>
                  <PlaceholderImage label={label} type="before" />
                </div>
                {/* After */}
                <div className="relative">
                  <span className="absolute top-3 left-3 z-10 text-[10px] font-bold bg-brand-green/80 text-black backdrop-blur-sm px-2 py-0.5 rounded-full uppercase tracking-wide">
                    After
                  </span>
                  <PlaceholderImage label={label} type="after" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA under gallery */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-500 text-sm mb-4">
            Photos are being collected. Check back soon — or request a service and see for yourself.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-green text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            Request My Quote
          </a>
        </div>
      </div>
    </section>
  );
}
