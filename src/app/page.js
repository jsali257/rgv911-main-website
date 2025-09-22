"use client";

import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import QuickLinks from "../components/QuickLinks";
import Addressing from "../components/Addressing";
import PublicEducation from "../components/PublicEducation";
import QuickHelp from "../components/QuickHelp";
import ResourcesSection from "../components/ResourcesSection";
import LanguageSelector from "../components/LanguageSelector";
import AnimationProvider from "../components/AnimationProvider";
import StatsIndicators from "../components/StatsIndicators";
import ServiceCards from "../components/ServiceCards";
import FAQPreview from "../components/FAQPreview";
import MapPreview from "../components/MapPreview";
import StatsSection from "../components/StatsSection";

export default function Home() {
  return (
    <AnimationProvider>
      <div className={styles.page}>
        <Navbar />
        <Hero videoSrc="/videos/background/VideoBackground.mp4" />
        <QuickLinks />
        <WhoWeAre />
        <Addressing />
        <PublicEducation />
        <ServiceCards />
        <MapPreview />
        <FAQPreview />
        <Footer />
      </div>
    </AnimationProvider>
  );
}