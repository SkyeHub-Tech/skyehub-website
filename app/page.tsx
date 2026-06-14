import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreServices from "@/components/CoreServices";
import HowWeWork from "@/components/HowWeWork";
import ShippedSection from "@/components/ShippedSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CoreServices />
      <HowWeWork />
      <ShippedSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
