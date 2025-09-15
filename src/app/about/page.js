"use client";

import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function About() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero 
        title="About RGV 9-1-1"
        subtitle="Our Mission & Vision"
        description="Learn about our history, mission, and the team behind Rio Grande Valley's emergency communication services."
        primaryButtonText="Meet Our Team"
        primaryButtonLink="/team"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      
      <main className={styles.main}>
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <h2>Our History</h2>
            <p>
              The Rio Grande Valley 9-1-1 Emergency Communications District was established to provide
              advanced emergency communication services to the residents of Hidalgo and Willacy Counties.
              Since our inception, we have been dedicated to implementing cutting-edge technology and
              maintaining reliable infrastructure to ensure public safety.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              To ensure optimal public safety throughout the region and work collaboratively to prevent,
              protect, respond to and recover from threats.
            </p>
            
            <h2>Our Vision</h2>
            <p>
              Providing a reliable, resilient, and sustainable regional emergency communication and 9-1-1
              network to include advancements in technology, meet contingency strategies, and NextGen 9-1-1
              infrastructure.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
