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

export default function Home() {
  return (
    <AnimationProvider>
      <div className={styles.page}>
        <Navbar />
        <Hero />
        <QuickLinks />
        <WhoWeAre />
        <Addressing />
        <PublicEducation />
        <Footer />
      </div>
    </AnimationProvider>
  );
}