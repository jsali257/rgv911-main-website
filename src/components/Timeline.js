"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './Timeline.module.css';

export default function Timeline({ events }) {
  const [activeEvent, setActiveEvent] = useState(null);
  const timelineRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const timelineItems = document.querySelectorAll(`.${styles.timelineItem}`);
    timelineItems.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <div className={styles.timeline} ref={timelineRef}>
      {events.map((event, index) => (
        <div 
          key={index} 
          className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
          onMouseEnter={() => setActiveEvent(index)}
          onMouseLeave={() => setActiveEvent(null)}
        >
          <div className={styles.timelineContent}>
            <div className={styles.timelineDate}>{event.date}</div>
            <h3 className={styles.timelineTitle}>{event.title}</h3>
            <p className={styles.timelineDescription}>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
