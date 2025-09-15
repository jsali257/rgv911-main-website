"use client";

import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import QuickLinks from "../components/QuickLinks";
import Addressing from "../components/Addressing";
import PublicEducation from "../components/PublicEducation";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />
      <QuickLinks />
      <WhoWeAre />
      <Addressing />
      <PublicEducation />
      <Footer />
    </div>
  );
}