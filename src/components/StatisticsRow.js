"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './StatisticsRow.module.css';

export default function StatisticsRow({ stats }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
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
  const CounterAnimation = ({ value, suffix = '', duration = 2000 }) => {
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
    <div className={styles.statisticsRow} ref={sectionRef}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard} style={{ '--stat-color': stat.color || 'var(--rgv-blue)' }}>
          <div className={styles.statNumber}>
            {isVisible ? <CounterAnimation value={stat.value} suffix={stat.suffix} /> : '0'}
          </div>
          <div className={styles.statLabel}>{stat.label}</div>
          {stat.description && <div className={styles.statDescription}>{stat.description}</div>}
        </div>
      ))}
    </div>
  );
}
