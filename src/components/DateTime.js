"use client";

import { useState, useEffect } from 'react';
import styles from './DateTime.module.css';

export default function DateTime() {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  
  return (
    <div className={styles.dateTimeContainer}>
      <div className={styles.date}>{formattedDate}</div>
      <div className={styles.time}>{formattedTime}</div>
    </div>
  );
}
