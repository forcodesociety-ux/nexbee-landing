import Hero from "./components/Hero";
import AboutStory from "./components/AboutStory";
import FeatureRentals from "./components/FeatureRentals";
import FeatureResell from "./components/FeatureResell";
import RequestItem from "./components/RequestItem";
import TrustSection from "./components/TrustSection";
import CallToAction from "./components/CallToAction";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-[var(--brand-yellow)] selection:text-[var(--foreground)]">
      {/* <Navbar /> */}
      <div id="home"><Hero /></div>
      <div id="about"><AboutStory /></div>
      <div id="rentals"><FeatureRentals /></div>
      <div id="resell"><FeatureResell /></div>
      <div id="requests"><RequestItem /></div>
      <TrustSection />
      <div id="faq"><FAQSection /></div>
      <div id="contact"><CallToAction /></div>
      <Footer />
    </main>
  );
}
