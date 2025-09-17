"use client";

import { useState } from 'react';
import styles from './FAQAccordion.module.css';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className={styles.faqAccordion}>
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
        >
          <button 
            className={styles.faqQuestion}
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <FaChevronDown className={styles.faqIcon} />
          </button>
          
          <div className={styles.faqAnswer} aria-hidden={openIndex !== index}>
            <div className={styles.faqAnswerContent}>
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
