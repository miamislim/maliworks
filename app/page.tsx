import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedServices from "./components/FeaturedServices";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import CTASection from "./components/CTASection";

// Gallery is hidden until before/after photos are ready.
// Restore: import Gallery from "./components/Gallery"; + <Gallery /> after <About />

// Payment (Cash App) and Footer are preserved in their files — re-add when needed.

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <About />
      <Services />
      <WhyChoose />
      <Reviews />
      <ContactForm />
      <CTASection />
    </main>
  );
}
