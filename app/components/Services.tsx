"use client";

import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Scissors, Droplets, Dog, Check } from "lucide-react";

const services: {
  icon: React.ElementType;
  title: string;
  desc: string;
  items: string[];
  badge?: string;
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
];

export default function Services() {
  const { ref } = useScrollReveal();

  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16 stagger">
          <span className="animate-on-scroll text-xs font-bold tracking-widest text-green-700 uppercase block mb-3">
            What Mali Offers
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Services Built for{" "}
            <span className="gradient-text">Your Home</span>
          </h2>
          <p className="animate-on-scroll text-gray-500 max-w-lg mx-auto leading-relaxed">
            From lawn care to dog walking — all handled by a reliable neighbor who takes pride in every job.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 stagger">
          {services.map(({ icon: Icon, title, desc, items, badge }) => (
            <div
              key={title}
              className="animate-on-scroll relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {badge && (
                <span className="absolute top-5 right-5 text-[10px] font-bold tracking-wide text-green-700 bg-brand-green/10 border border-brand-green/20 rounded-full px-2.5 py-0.5">
                  {badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-5">
                <Icon size={22} className="text-green-700" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{desc}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Check size={14} className="text-green-600 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          Don&apos;t see what you need?{" "}
          <a href="#contact" className="text-green-700 font-semibold hover:underline underline-offset-4">
            Ask Mali directly →
          </a>
        </p>
      </div>
    </section>
  );
}
