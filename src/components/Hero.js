"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero({ 
  title = "Rio Grande Valley 9-1-1",
  subtitle = "Emergency Communications District",
  description = "Serving the Rio Grande Valley with reliable emergency communication services.",
  backgroundImages = [
    {
      src: "https://res.cloudinary.com/dql3efszd/image/upload/v1748373089/LRGVDC2ndAnnualVetFest.jpg",
      alt: "RGV911 Community Event"
    },
    {
      src: "https://res.cloudinary.com/dql3efszd/image/upload/v1746653066/2.jpg",
      alt: "RGV911 Community Event"
    }
  ],
  primaryButtonText = "Contact Us",
  primaryButtonLink = "/contact",
  primaryButtonIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  ),
  secondaryButtonText = "Request 911 Address",
  secondaryButtonLink = "https://survey123.arcgis.com/share/d383d62a6b5a4ee49738933e5e371bc8?portalUrl=https://gis.rgv911.org/portal",
  secondaryButtonIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  )
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
    <main className={styles.main} style={{ backgroundColor: '#000' }}>
      {/* Background Image Slider */}
      <div className={styles.backgroundSlider}>
        {backgroundImages.map((image, index) => (
          <div 
            key={index} 
            className={`${styles.backgroundSlide} ${index === currentSlide ? styles.active : ''}`}
          >
            <Image 
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              quality={100}
              style={{ objectFit: 'cover', opacity: 0.6 }}
            />
          </div>
        ))}
      </div>
      
      {/* Overlay for text readability */}
      <div className={styles.overlay} ></div>
      
      {/* Curved shape at bottom */}
      <svg className={styles.curvedShape} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,0 C240,95 480,100 720,80 C960,60 1200,40 1440,80 L1440,100 L0,100 Z"></path>
      </svg>
      
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <p className={styles.description}>
            {description}
          </p>
          
          <div className={styles.buttonGroup}>
            <a href={primaryButtonLink} className={styles.ctaButton}>
              {primaryButtonIcon}
              {primaryButtonText}
            </a>
            <a href={secondaryButtonLink} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
              {secondaryButtonIcon}
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
