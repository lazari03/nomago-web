import Image from "next/image";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";

import PartnersSection from "../components/PartnersSection";
import AutomationSection from "../components/AutomationSection";
import NetworkSection from "../components/NetworkSection";
import ListingsSection from "../components/ListingsSection";

import Footer from "../components/Footer";
import BusinessAutomationSection from "@/components/BusinessAutomationSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="font-sans bg-white">
        <HeroSection />
  <FeaturesSection />
  <BusinessAutomationSection />
  <PartnersSection />
  <AutomationSection />
  <NetworkSection />
  <ListingsSection />
      </main>
      <Footer />
    </>
  );
}
