"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const PHONE_DISPLAY = "(757) 777-6058";
const PHONE_HREF = "tel:+17577776058";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Request Quote", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-brand-border py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/maliworks-logo.png"
            alt="MaliWorks logo"
            width={140}
            height={48}
            className="h-9 w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-brand-green transition-colors duration-200"
            aria-label={`Call MaliWorks at ${PHONE_DISPLAY}`}
          >
            <Phone size={14} />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="bg-brand-green text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-brand-surface transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-brand-border px-4 py-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block text-base text-gray-200 hover:text-brand-green transition-colors font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-brand-border space-y-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-brand-green transition-colors"
              onClick={closeMenu}
            >
              <Phone size={14} />
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block w-full text-center bg-brand-green text-black text-sm font-semibold px-4 py-3 rounded-full hover:bg-opacity-90 transition-all"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
