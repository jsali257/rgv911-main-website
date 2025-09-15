"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './EventCarousel.module.css';

export default function EventCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000; // 3 seconds between slides

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    // Only set up autoplay if there are multiple images
    if (images.length > 1) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () => setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
        delay
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length]);

  const goToSlide = (index) => {
    resetTimeout();
    setCurrentIndex(index);
  };

  // If there's only one image, just return it without carousel functionality
  if (images.length <= 1) {
    return (
      <div className={styles.carouselContainer}>
        <img 
          src={images[0].url} 
          alt={images[0].originalFilename || "Event image"} 
          className={styles.carouselImage}
        />
      </div>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      <div 
        className={styles.carouselSlider} 
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className={styles.carouselSlide} key={index}>
            <img 
              src={image.url} 
              alt={image.originalFilename || `Event image ${index + 1}`} 
              className={styles.carouselImage}
            />
          </div>
        ))}
      </div>

      <div className={styles.carouselDots}>
        {images.map((_, index) => (
          <button 
            key={index} 
            className={`${styles.carouselDot} ${currentIndex === index ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
