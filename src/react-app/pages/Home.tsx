import Header from "@/react-app/components/Header";
import Hero from "@/react-app/components/Hero";
import Cases from "@/react-app/components/Cases";
import Features from "@/react-app/components/Features";

import Process from "@/react-app/components/Process";
import Benefits from "@/react-app/components/Benefits";
import Plans from "@/react-app/components/Plans";
import Testimonials from "@/react-app/components/Testimonials";
import FAQ from "@/react-app/components/FAQ";
import Contact from "@/react-app/components/Contact";
import Footer from "@/react-app/components/Footer";
import WhatsAppFloat from "@/react-app/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="bg-black text-gray-200 font-sans bg-grid">
      {/* Noise overlay */}
      <div className="noise"></div>
      
      <Header />
      <Hero />
      <Cases />
      <Features />
      <Process />
      <Benefits />
      <Plans />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
