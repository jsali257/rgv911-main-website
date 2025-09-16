"use client";

import { useState, useEffect } from 'react';
import { FaPhone, FaBuilding, FaMapMarkedAlt } from 'react-icons/fa';
import styles from './StatsIndicators.module.css';

export default function StatsIndicators() {
  // State for animated counters
  const [callCount, setCallCount] = useState(0);
  const [psapsCount, setPsapsCount] = useState(0);
  const [countiesCount, setCountiesCount] = useState(0);
  
  // Target values
  const targetCalls = 850000; // Example annual call volume
  const targetPsaps = 17;
  const targetCounties = 2;
  
  // Animation duration in milliseconds
  const animationDuration = 2000;
  const frameDuration = 1000 / 60; // 60fps
  
  // Animate counters on component mount
  useEffect(() => {
    // Helper function to animate counter
    const animateCounter = (setter, target, startTime, duration) => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuad = t => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      const value = Math.floor(easedProgress * target);
      setter(value);
      
      if (progress < 1) {
        requestAnimationFrame(() => animateCounter(setter, target, startTime, duration));
      } else {
        setter(target);
      }
    };
    
    const startTime = Date.now();
    animateCounter(setCallCount, targetCalls, startTime, animationDuration);
    animateCounter(setPsapsCount, targetPsaps, startTime, animationDuration * 0.7);
    animateCounter(setCountiesCount, targetCounties, startTime, animationDuration * 0.5);
  }, []);
  
  // Format numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  return (
    <div className={styles.statsContainer} data-aos="fade-up">
      <div className={styles.statsWrapper}>
        <div className={styles.statItem} data-aos="fade-up" data-aos-delay="100">
          <div className={styles.statIconWrapper}>
            <FaPhone className={styles.statIcon} />
          </div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{formatNumber(callCount)}+</div>
            <div className={styles.statLabel}>Annual 9-1-1 Calls</div>
          </div>
        </div>
        
        <div className={styles.statItem} data-aos="fade-up" data-aos-delay="200">
          <div className={styles.statIconWrapper}>
            <FaBuilding className={styles.statIcon} />
          </div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{psapsCount}</div>
            <div className={styles.statLabel}>PSAPs Served</div>
          </div>
        </div>
        
        <div className={styles.statItem} data-aos="fade-up" data-aos-delay="300">
          <div className={styles.statIconWrapper}>
            <FaMapMarkedAlt className={styles.statIcon} />
          </div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{countiesCount}</div>
            <div className={styles.statLabel}>Counties Covered</div>
          </div>
        </div>
      </div>
    </div>
  );
}
