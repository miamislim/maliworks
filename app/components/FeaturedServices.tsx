"use client";

import { Scissors, Droplets, Dog } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const features = [
  {
    icon: Scissors,
    title: "Lawn Mowing",
    desc: "Keep your yard looking clean and well maintained with dependable, reliable lawn care you can count on.",
  },
  {
    icon: Droplets,
    title: "Trash Can Cleaning",
    desc: "Deep cleaning that removes dirt, grime, bacteria, and odors — leaving your bins looking and smelling fresh.",
  },
  {
    icon: Dog,
    title: "Dog Walking",
    desc: "Reliable walks that keep your dog happy, active, and cared for with individual attention every time.",
  },
];

export default function FeaturedServices() {
  const { ref } = useScrollReveal();

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-5 stagger">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="animate-on-scroll bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
                <Icon size={22} className="text-green-700" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
