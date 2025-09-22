"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import { FaPhone, FaMapMarkerAlt, FaQuestionCircle, FaExclamationTriangle } from "react-icons/fa";

export default function Hero({
  title = "Rio Grande Valley 9-1-1",
  subtitle = "Emergency Communications District",
  description = "Serving Hidalgo and Willacy counties with reliable emergency communication services. We ensure your 9-1-1 calls reach the right responders quickly when every second counts.",
  videoSrc = "/videos/background/VideoBackground.mp4", // Make sure this path is correct
  primaryButtonText = "Request 911 Address",
  primaryButtonLink = "/request-911-address",
  primaryButtonIcon = <FaMapMarkerAlt />,
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
  secondaryButtonIcon = <FaPhone />,
  children,
}) {
  const videoRef = useRef(null);

  // Set up video playback with slow motion effect
  useEffect(() => {
    const setupVideo = () => {
      if (!videoRef.current) return;
      
      // Make video visible immediately
      videoRef.current.style.opacity = '0.5';
      
      // Ensure looping is enabled
      videoRef.current.loop = true;
      
      // Slow down the playback rate significantly
      videoRef.current.playbackRate = 0.15; // Play at 15% of normal speed for more dramatic slow motion
      
      // Handle video ending to ensure it loops
      const handleEnded = () => {
        console.log('Video ended, restarting...');
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      };
      
      videoRef.current.addEventListener('ended', handleEnded);
      
      // Start playing
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
        // If autoplay fails, try again after user interaction
        document.addEventListener('click', () => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        }, { once: true });
      });
      
      // Log to confirm settings
      console.log('Video settings applied:', {
        playbackRate: videoRef.current.playbackRate,
        loop: videoRef.current.loop
      });
    };
    
    // Initial setup
    setupVideo();
    
    // Also set up when video is loaded
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', setupVideo);
    }
    
    return () => {
      // Clean up event listeners
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', setupVideo);
        videoRef.current.removeEventListener('ended', () => {});
      }
    };
  }, []);

  return (
    <main className={styles.main} style={{ backgroundColor: "#1e293b" }}>
      {/* Background Video */}
      <div className={styles.videoBackground}>
        <video
          ref={videoRef}
          className={styles.backgroundVideo}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          preload="auto"
          style={{ opacity: 0.5 }} /* Inline style to ensure visibility */
          src={videoSrc} /* Direct src attribute instead of source element */
        >
          Your browser does not support the video tag.
        </video>
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
