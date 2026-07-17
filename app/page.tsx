import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

// Gallery is intentionally hidden until before/after photos are ready.
// Restore by uncommenting the import and <Gallery /> below.
// import Gallery from "./components/Gallery";

// WhyChoose and FAQ have been removed in this revision.

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <div className="section-divider" aria-hidden="true" />

      <Services />
      <About />

      <div className="section-divider" aria-hidden="true" />

      {/* <Gallery /> */}

      <ContactForm />
      <Reviews />
      <Footer />
    </main>
  );
}
