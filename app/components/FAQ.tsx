"use client";

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How much does lawn mowing cost?",
    a: "Pricing depends on the size of your yard and the services needed. Mali provides free, no-obligation quotes — just fill out the form above and he'll get back to you within 24 hours with a fair price.",
  },
  {
    q: "What areas do you serve?",
    a: "MaliWorks serves local homeowners right here in the neighborhood. Reach out through the contact form or give us a call to confirm we cover your area — it's likely we do!",
  },
  {
    q: "Do I need to be home during the service?",
    a: "Nope! As long as Mali has access to the yard, you don't need to be present. Many clients leave a note or gate code and come home to a freshly cleaned yard.",
  },
  {
    q: "How do I pay?",
    a: "MaliWorks accepts cash, Venmo, Cash App, and Zelle. Payment is typically collected after the job is complete and you're satisfied with the work.",
  },
  {
    q: "How often should I get my lawn mowed?",
    a: "During peak growing season (spring and summer), every 1–2 weeks is ideal. In fall and winter, it slows down. Mali can help you figure out the right schedule for your yard.",
  },
  {
    q: "What if I'm not happy with the work?",
    a: "Your satisfaction is the priority. If something doesn't look right, just let Mali know and he'll fix it — no questions asked. He takes real pride in his work.",
  },
  {
    q: "Can I set up recurring service?",
    a: "Absolutely! Many clients set up weekly or bi-weekly mowing. Just mention it in your quote request and Mali will get you on the regular schedule.",
  },
  {
    q: "Do you bring your own equipment?",
    a: "Yes! Mali arrives with everything needed to get the job done — mower, trimmer, edger, blower, and cleanup tools.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div className="border border-brand-border rounded-2xl overflow-hidden hover:border-brand-green/30 transition-colors duration-300">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 group"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="font-semibold text-white group-hover:text-brand-green transition-colors duration-200 text-sm sm:text-base">
          {q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
            open
              ? "border-brand-green bg-brand-green text-black"
              : "border-brand-border text-gray-400 group-hover:border-brand-green/50"
          }`}
          aria-hidden="true"
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <div
        id={id}
        role="region"
        aria-hidden={!open}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400 text-sm leading-relaxed px-6 pb-5">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref } = useScrollReveal();

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 stagger">
          <span className="animate-on-scroll text-xs font-bold tracking-widest text-brand-green uppercase block mb-3">
            FAQ
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Common{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="animate-on-scroll text-gray-400">
            Everything you need to know about working with MaliWorks.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 stagger">
          {faqs.map((faq, i) => (
            <div key={i} className="animate-on-scroll">
              <FAQItem q={faq.q} a={faq.a} index={i} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-gray-500 text-sm">
            Still have questions?{" "}
            <a href="tel:+17577776058" className="text-brand-green hover:underline underline-offset-4 font-medium">
              Give us a call →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
