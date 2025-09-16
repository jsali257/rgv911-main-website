"use client";

import { useState } from 'react';
import styles from './LanguageSelector.module.css';

export default function LanguageSelector() {
  const [language, setLanguage] = useState('en');
  
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    // In a real implementation, this would update content throughout the site
    // You would likely use a context provider or state management solution
  };
  
  return (
    <div className={styles.languageSelector}>
      <button 
        onClick={toggleLanguage}
        aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
        className={styles.langButton}
      >
        {language === 'en' ? (
          <>
            <span className={styles.flagIcon}>🇺🇸</span>
            <span>EN</span>
            <span className={styles.altLang}>/ ES</span>
          </>
        ) : (
          <>
            <span className={styles.flagIcon}>🇲🇽</span>
            <span>ES</span>
            <span className={styles.altLang}>/ EN</span>
          </>
        )}
      </button>
    </div>
  );
}
