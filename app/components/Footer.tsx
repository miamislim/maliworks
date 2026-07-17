import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const PHONE_DISPLAY = "(757) 777-6058";
const PHONE_HREF = "tel:+17577776058";
const EMAIL = "matchesson@gmail.com";
const WEBSITE = "maliworks.com";

const services = [
  "Lawn Mowing",
  "Edging",
  "Weed Eating",
  "Yard Cleanup",
  "Leaf Removal",
  "Garage Cleanup",
  "Odd Jobs",
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Request Quote", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal border-t border-brand-border">
      {/* CTA band */}
      <div className="bg-brand-green/5 border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                Ready for a cleaner yard?
              </h3>
              <p className="text-gray-400">
                Call or text Mali directly — or request a free quote below.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 glass border border-brand-border text-white font-semibold px-6 py-3 rounded-full text-sm hover:border-brand-green/50 transition-all"
              >
                <Phone size={14} />
                {PHONE_DISPLAY}
              </a>
              <a
                href="#contact"
                className="bg-brand-green text-black font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 text-sm"
              >
                Get a Free Quote →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="inline-block mb-4">
              <Image
                src="/images/maliworks-logo.png"
                alt="MaliWorks logo"
                width={140}
                height={48}
                className="h-10 w-auto"
              />
            </a>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Reliable lawn care and yard services from a hardworking young entrepreneur in your community.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Follow MaliWorks on Instagram"
                className="w-9 h-9 glass border border-brand-border rounded-xl flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green/50 transition-colors"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Follow MaliWorks on Facebook"
                className="w-9 h-9 glass border border-brand-border rounded-xl flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green/50 transition-colors"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-2.5" role="list">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-gray-500 hover:text-brand-green transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-2.5" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-gray-500 hover:text-brand-green transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-start gap-3 text-sm text-gray-500 hover:text-brand-green transition-colors group"
                >
                  <Phone size={15} className="shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    {PHONE_DISPLAY}
                    <br />
                    <span className="text-xs text-gray-600">Call or Text</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-sm text-gray-500 hover:text-brand-green transition-colors"
                >
                  <Mail size={15} className="shrink-0 mt-0.5" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://${WEBSITE}`}
                  className="flex items-start gap-3 text-sm text-gray-500 hover:text-brand-green transition-colors"
                >
                  <MapPin size={15} className="shrink-0 mt-0.5" aria-hidden="true" />
                  {WEBSITE}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {currentYear} MaliWorks. All rights reserved.</p>
          <p>Built to support a young entrepreneur</p>
        </div>
      </div>
    </footer>
  );
}
