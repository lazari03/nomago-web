


import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import BusinessAutomationSection from "@/components/BusinessAutomationSection";
import AutomationSection from "../components/AutomationSection";
import NetworkSection from "../components/NetworkSection";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white">
        <HeroSection />
        <FeaturesSection />
        <BusinessAutomationSection />
        <AutomationSection />
        <NetworkSection />
  <FeaturedSection />
      </main>
      <Footer />
    </>
  );
}
