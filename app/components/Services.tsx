"use client";

import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Scissors, Droplets, Dog, Check, Wrench } from "lucide-react";

const services: {
  icon: React.ElementType;
  title: string;
  desc: string;
  items: string[];
  badge?: string;
  note?: string;
}[] = [
  {
    icon: Scissors,
    title: "Lawn Mowing",
    desc: "A clean lawn makes a strong first impression. Whether you need a one-time cut or regular upkeep, Mali handles it with care.",
    items: ["Weekly mowing", "One-time mowing", "Edging", "Yard cleanup"],
  },
  {
    icon: Droplets,
    title: "Trash Can Cleaning",
    desc: "Professional pressure washing that leaves your trash cans looking fresh and smelling clean — inside and out.",
    items: ["Deep scrub", "Odor reduction", "Sanitizing rinse"],
    badge: "Popular Add-On",
  },
  {
    icon: Dog,
    title: "Dog Walking",
    desc: "Your dog gets personal attention on every walk. Mali loves animals and treats every pup like his own.",
    items: [
      "15, 30, or 60 minute walks",
      "Fresh water afterward if requested",
      "Individual attention",
      "Flexible scheduling",
    ],
  },
  {
    icon: Wrench,
    title: "Odd Jobs",
    desc: "Need something done around the yard or home? If it needs doing, Mali can probably help.",
    items: [
      "Weed pulling",
      "Leaf cleanup",
      "Patio furniture moving",
      "Sweeping",
      "Small yard cleanup",
      "Bringing trash cans in",
      "Minor neighborhood tasks",
    ],
    note: "Don't see what you need? Just ask.",
  },
];

export default function Services() {
  const { ref } = useScrollReveal();

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#1C1C1C]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16 stagger">
          <span className="animate-on-scroll text-xs font-bold tracking-widest text-brand-green uppercase block mb-3">
            What Mali Offers
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Services Built for{" "}
            <span className="gradient-text">Your Home</span>
          </h2>
          <p className="animate-on-scroll text-[#D1D5DB] max-w-xl mx-auto leading-relaxed">
            Mali helps with a wide range of household and neighborhood tasks — from regular yard work to the small jobs that just pile up. If it needs doing, chances are Mali can help.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
          {services.map(({ icon: Icon, title, desc, items, badge, note }) => (
            <div
              key={title}
              className="animate-on-scroll relative bg-[#262626] rounded-2xl p-7 border border-white/8 hover:border-white/16 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              {badge && (
                <span className="absolute top-5 right-5 text-[10px] font-bold tracking-wide text-brand-green bg-brand-green/10 border border-brand-green/20 rounded-full px-2.5 py-0.5">
                  {badge}
                </span>
              )}
              <div className="w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5">
                <Icon size={20} className="text-brand-green" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-5">{desc}</p>
              <ul className="space-y-2 flex-1">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[#D1D5DB]">
                    <Check size={13} className="text-brand-green flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              {note && (
                <p className="text-xs text-brand-green font-medium mt-5 pt-4 border-t border-white/8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  {note}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#9CA3AF] mt-10">
          Don&apos;t see what you need?{" "}
          <a href="#contact" className="text-brand-green font-semibold hover:underline underline-offset-4">
            Ask Mali directly →
          </a>
        </p>
      </div>
    </section>
  );
}
