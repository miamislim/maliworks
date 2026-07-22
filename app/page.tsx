import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedServices from "./components/FeaturedServices";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import ContactForm from "./components/ContactForm";
import Payment from "./components/Payment";
import CTASection from "./components/CTASection";

// Gallery is hidden until before/after photos are ready.
// Restore: import Gallery from "./components/Gallery"; + <Gallery /> after <About />

// Reviews temporarily removed — restore by importing Reviews and adding <Reviews /> before <ContactForm />.

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <About />
      <Services />
      <WhyChoose />
      <ContactForm />
      <Payment />
      <CTASection />
    </main>
  );
}
