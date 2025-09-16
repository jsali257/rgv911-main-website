"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { FaPhone, FaMapMarkerAlt, FaQuestionCircle, FaExclamationTriangle } from "react-icons/fa";

export default function Hero({
  title = "Rio Grande Valley 9-1-1",
  subtitle = "Emergency Communications District",
  description = "Serving Hidalgo and Willacy counties with reliable emergency communication services. We ensure your 9-1-1 calls reach the right responders quickly when every second counts.",
  backgroundImages = [
    {
      src: "/images/other/officeBG.jpg",
      alt: "RGV911 Office",
    },
    {
      src: "https://res.cloudinary.com/dql3efszd/image/upload/v1748373089/LRGVDC2ndAnnualVetFest.jpg",
      alt: "RGV911 Community Event",
    },
    {
      src: "https://res.cloudinary.com/dql3efszd/image/upload/v1746653066/2.jpg",
      alt: "RGV911 Community Event",
    },
  ],
  primaryButtonText = "Request 911 Address",
  primaryButtonLink = "/request-911-address",
  primaryButtonIcon = <FaMapMarkerAlt />,
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
  secondaryButtonIcon = <FaPhone />,
  children,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    if (backgroundImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <main className={styles.main} style={{ backgroundColor: "#1e293b" }}>
      {/* Background Image Slider */}
      <div className={styles.backgroundSlider}>
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.backgroundSlide} ${
              index === currentSlide ? styles.active : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              quality={100}
              style={{ objectFit: "cover", opacity: 0.3 }}
            />
          </div>
        ))}
      </div>

      {/* Overlay for text readability */}
      <div className={styles.overlay}></div>

      {/* Curved shape at bottom */}
      <svg
        className={styles.curvedShape}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C240,95 480,100 720,80 C960,60 1200,40 1440,80 L1440,100 L0,100 Z"></path>
      </svg>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <p className={styles.description}>{description}</p>

          <div className={styles.emergencyNotice}>
            <FaExclamationTriangle className={styles.emergencyIcon} />
            <span>For emergencies, always dial <strong>9-1-1</strong></span>
          </div>

          <div className={styles.buttonGroup}>
            <Link href={primaryButtonLink} className={styles.ctaButton}>
              {primaryButtonIcon}
              {primaryButtonText}
            </Link>
            <Link href={secondaryButtonLink} className={styles.secondaryButton}>
              {secondaryButtonIcon}
              {secondaryButtonText}
            </Link>
          </div>
          
          <div className={styles.quickAccessLinks}>
            <Link href="/faq" className={styles.quickAccessLink}>
              <FaQuestionCircle />
              <span>Frequently Asked Questions</span>
            </Link>
            <Link href="/resources/maps" className={styles.quickAccessLink}>
              <FaMapMarkerAlt />
              <span>Interactive Maps</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Search bar container positioned at the bottom of hero */}
      <div className={styles.heroSearchWrapper}>
        {children}
      </div>
    </main>
  );
}
