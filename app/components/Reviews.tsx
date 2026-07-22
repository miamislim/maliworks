"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Local Homeowner",
    rating: 5,
    text: "Mali did an absolutely fantastic job on my front and back yard. He showed up right on time and didn't stop until everything looked perfect. I'll definitely be calling him again!",
    initials: "SM",
  },
  {
    name: "James T.",
    location: "Neighbor",
    rating: 5,
    text: "Hired him for a full yard cleanup before a family event. He worked hard the whole time and the yard looked better than it has in years. Great work ethic.",
    initials: "JT",
  },
  {
    name: "Linda R.",
    location: "Local Resident",
    rating: 5,
    text: "Very respectful and professional. He edged perfectly, cleaned up everything, and even asked if there was anything else I needed. Highly recommend MaliWorks!",
    initials: "LR",
  },
];

export default function Reviews() {
  const { ref } = useScrollReveal();

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-gray-50">
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14 stagger">
          <span className="animate-on-scroll text-xs font-bold tracking-widest text-green-700 uppercase block mb-3">
            Reviews
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            What the Neighborhood{" "}
            <span className="gradient-text">Says</span>
          </h2>
          <div className="animate-on-scroll flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-brand-green text-brand-green" aria-hidden="true" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-400 text-sm">· 5-star rated</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 stagger">
          {reviews.map(({ name, location, rating, text, initials }) => (
            <div
              key={name}
              className="animate-on-scroll bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <Quote size={20} className="text-brand-green/40 mb-3" aria-hidden="true" />
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5 italic">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-brand-green/10 flex items-center justify-center text-xs font-bold text-green-700 shrink-0"
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{name}</p>
                  <p className="text-xs text-gray-400">{location}</p>
                </div>
                <div className="ml-auto flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={11} className="fill-brand-green text-brand-green" aria-hidden="true" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
