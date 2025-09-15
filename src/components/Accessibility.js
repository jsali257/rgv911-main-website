"use client";

import { useState } from 'react';
import styles from './Accessibility.module.css';

export default function Accessibility() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  
  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };
  
  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };
  
  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };
  
  const toggleHighContrast = () => {
    const newState = !highContrast;
    setHighContrast(newState);
    
    if (newState) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };
  
  return (
    <div className={styles.accessibilityContainer}>
      <button 
        className={styles.accessibilityButton} 
        onClick={togglePanel}
        aria-expanded={isOpen}
        aria-label="Accessibility options"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm5 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-8-3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1z" />
        </svg>
        <span>Accessibility</span>
      </button>
      
      {isOpen && (
        <div className={styles.accessibilityPanel} role="dialog" aria-label="Accessibility options">
          <div className={styles.accessibilityHeader}>
            <h3>Accessibility Options</h3>
            <button 
              className={styles.closeButton} 
              onClick={togglePanel}
              aria-label="Close accessibility panel"
            >
              &times;
            </button>
          </div>
          
          <div className={styles.accessibilityOption}>
            <span>Text Size</span>
            <div className={styles.accessibilityControls}>
              <button 
                onClick={decreaseFontSize} 
                disabled={fontSize <= 80}
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button 
                onClick={resetFontSize}
                aria-label="Reset font size"
              >
                Reset
              </button>
              <button 
                onClick={increaseFontSize} 
                disabled={fontSize >= 150}
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          </div>
          
          <div className={styles.accessibilityOption}>
            <span>High Contrast</span>
            <div className={styles.accessibilityControls}>
              <button 
                className={highContrast ? styles.active : ''}
                onClick={toggleHighContrast}
                aria-pressed={highContrast}
                aria-label="Toggle high contrast mode"
              >
                {highContrast ? 'On' : 'Off'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
