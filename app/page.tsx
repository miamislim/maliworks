import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Payment from "./components/Payment";

// Gallery (bg-white): import Gallery from "./components/Gallery"; + <Gallery /> after <Services />
// Reviews (bg-[#1C1C1C]): import Reviews from "./components/Reviews"; + <Reviews /> before <ContactForm />

export default function Home() {
  return (
    <main className="bg-[#1C1C1C]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Payment />
    </main>
  );
}
