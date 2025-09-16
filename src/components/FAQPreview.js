"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './FAQPreview.module.css';
import { FaQuestionCircle, FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa';

export default function FAQPreview() {
  // State to track which FAQ item is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  // Top FAQ items for preview
  const faqItems = [
    {
      question: "What is required to get a 9-1-1 physical address?",
      answer: "To request a 9-1-1 physical address, you'll need your property's Legal Description, Property ID Number (PID), and Tax Account Number. These can be found through your local appraisal district or in your property tax documentation."
    },
    {
      question: "How long does it take to get an address?",
      answer: "The average time to get a 9-1-1 Physical Address is 3-5 business days. However, delays may occur depending on the number of applications ahead of yours, the information provided, or if the road needs to be named by Commissioners Court."
    },
    {
      question: "What is the difference between 9-1-1 address and mailing address?",
      answer: "A mailing address is for mail delivery only, while a 9-1-1 address ensures emergency responders can locate you quickly in case of an emergency. These addresses may sometimes be different."
    },
    {
      question: "Is my address on the 9-1-1 system?",
      answer: "If you live outside city limits, we can verify whether your address is in the 9-1-1 system. For addresses inside city limits, you may need to contact your city office for confirmation. You can also check our interactive 9-1-1 Address Map."
    }
  ];

  return (
    <section className={styles.faqPreviewSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionDescription}>
            Find quick answers to common questions about our services and 9-1-1 addressing
          </p>
        </div>
        
        <div className={styles.faqContainer}>
          {faqItems.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openFAQ === index ? styles.active : ''}`}
            >
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.questionContent}>
                  <FaQuestionCircle className={styles.questionIcon} />
                  <h3>{faq.question}</h3>
                </div>
                <div className={styles.toggleIcon}>
                  {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              
              <div className={`${styles.faqAnswer} ${openFAQ === index ? styles.open : ''}`}>
                <div className={styles.answerContent}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAllContainer}>
          <Link href="/faq" className={styles.viewAllLink}>
            <span>View All FAQs</span>
            <FaArrowRight className={styles.linkIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}
