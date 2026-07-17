"use client";

import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Scissors, Wind, Leaf, Trash2, Wrench, Crop, Package, Droplets } from "lucide-react";

const services: { icon: React.ElementType; title: string; desc: string; badge?: string }[] = [
  {
    icon: Scissors,
    title: "Lawn Mowing",
    desc: "Clean, even cuts that keep your lawn looking sharp and well-maintained.",
  },
  {
    icon: Crop,
    title: "Edging",
    desc: "Crisp, defined borders along driveways, sidewalks, and garden beds.",
  },
  {
    icon: Wind,
    title: "Weed Eating",
    desc: "Trimming the tight spots your mower can't reach — fences, posts, and curbs.",
  },
  {
    icon: Trash2,
    title: "Yard Cleanup",
    desc: "Clearing debris and overgrowth so your yard looks spotless.",
  },
  {
    icon: Leaf,
    title: "Leaf Removal",
    desc: "Seasonal blowing and bagging to keep your yard clean year-round.",
  },
  {
    icon: Package,
    title: "Garage Cleanup",
    desc: "Helping organize and clear clutter so you can use your space again.",
  },
  {
    icon: Wrench,
    title: "Odd Jobs",
    desc: "Light hauling, general tidying, and other outdoor tasks — just ask.",
  },
  {
    icon: Droplets,
    title: "Trash Can Pressure Washing",
    desc: "Keep your trash cans looking and smelling fresh with professional pressure washing. We remove built-up dirt, grime, stains, and odors to leave your bins clean and refreshed.",
    badge: "Popular Add-On Service",
  },
];

export default function Services() {
  const { ref } = useScrollReveal();

  return (
    <section id="services" className="py-24 lg:py-32 bg-brand-charcoal relative">
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 stagger">
          <span className="animate-on-scroll text-xs font-bold tracking-widest text-brand-green uppercase block mb-3">
            What We Do
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Services Built for{" "}
            <span className="gradient-text">Your Yard</span>
          </h2>
          <p className="animate-on-scroll text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            From a quick mow to a full cleanup — MaliWorks handles the outdoor work so you don't have to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 stagger" role="list">
          {services.map(({ icon: Icon, title, desc, badge }) => (
            <div
              key={title}
              role="listitem"
              className="animate-on-scroll group relative glass border border-brand-border rounded-2xl p-6 hover:border-brand-green/40 hover:bg-brand-green/[0.03] transition-all duration-300 cursor-default bg-card-gradient"
            >
              {badge && (
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-wide text-brand-green bg-brand-green/10 border border-brand-green/20 rounded-full px-2.5 py-0.5">
                  {badge}
                </span>
              )}
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors duration-300">
                <Icon size={18} className="text-brand-green" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}

          {/* Overflow CTA card */}
          <div className="animate-on-scroll group relative border border-dashed border-brand-green/30 rounded-2xl p-6 hover:border-brand-green/60 transition-all duration-300 flex flex-col items-start justify-between bg-brand-green/[0.02]">
            <div>
              <p className="font-bold text-white mb-2">Need something else?</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Don't see your task? If it's outdoors, chances are Mali can help.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-4 text-sm font-semibold text-brand-green hover:underline underline-offset-4"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
