import Hero from "./components/Hero";
import AboutStory from "./components/AboutStory";
import FeatureRentals from "./components/FeatureRentals";
import FeatureResell from "./components/FeatureResell";
import RequestItem from "./components/RequestItem";
import TrustSection from "./components/TrustSection";
import CallToAction from "./components/CallToAction";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-[var(--brand-yellow)] selection:text-[var(--foreground)]">
      <Navbar />
      <Hero />
      <AboutStory />
      <FeatureRentals />
      <FeatureResell />
      <RequestItem />
      <TrustSection />
      <CallToAction />
      <Footer />
    </main>
  );
}
