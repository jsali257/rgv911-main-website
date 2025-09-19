"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './StatsSection.module.css';
import { FaPhoneAlt, FaMapMarkedAlt, FaUsers, FaBuilding } from 'react-icons/fa';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Stats data
  const stats = [
    {
      icon: <FaPhoneAlt className={styles.statIcon} />,
      value: 250000,
      label: "9-1-1 Calls Annually",
      suffix: "+",
      color: "#374d8a" // primary blue
    },
    {
      icon: <FaMapMarkedAlt className={styles.statIcon} />,
      value: 290271,
      label: "Addresses Assigned",
      suffix: "+",
      color: "#daa520" // gold
    },
    {
      icon: <FaUsers className={styles.statIcon} />,
      value: 934847,
      label: "Residents Served",
      suffix: "+",
      color: "#059669" // emerald
    },
    {
      icon: <FaBuilding className={styles.statIcon} />,
      value: 17,
      label: "PSAPs Supported",
      suffix: "",
      color: "#dc2626" // red
    }
  ];

  // Intersection Observer to trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Counter animation
  const CounterAnimation = ({ value, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      
      let start = 0;
      const end = parseInt(value);
      const incrementTime = duration / end;
      let timer;
      
      // Handle large numbers differently to make animation smoother
      const step = end > 1000 ? Math.floor(end / 100) : 1;
      
      const updateCount = () => {
        start += step;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
          return;
        }
        setCount(start);
      };
      
      timer = setInterval(updateCount, incrementTime);
      
      return () => clearInterval(timer);
    }, [value, duration]);
    
    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section className={styles.statsSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Impact</h2>
          <p className={styles.sectionDescription}>
            RGV 9-1-1 serves the Rio Grande Valley with reliable emergency communication services.
            Here&apos;s how we&apos;re making a difference:
          </p>
        </div>
        
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={styles.statCard}
              style={{ '--stat-color': stat.color }}
            >
              <div className={styles.statIconContainer}>
                {stat.icon}
              </div>
              <div className={styles.statValue}>
                {isVisible ? (
                  <CounterAnimation 
                    value={stat.value} 
                    suffix={stat.suffix} 
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
