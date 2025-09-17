"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaMapMarkedAlt, FaPhoneAlt, FaQuestionCircle, FaExclamationTriangle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './not-found.module.css';

export default function NotFound() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Common pages that users might be looking for
  const commonPages = [
    { name: "Home", icon: <FaHome />, url: "/" },
    { name: "Interactive Maps", icon: <FaMapMarkedAlt />, url: "/maps" },
    { name: "Contact Us", icon: <FaPhoneAlt />, url: "/contact" },
    { name: "FAQ", icon: <FaQuestionCircle />, url: "/faq" },
  ];

  // Animation for the 404 number
  useEffect(() => {
    const interval = setInterval(() => {
      const element = document.querySelector(`.${styles.errorCode}`);
      if (element) {
        element.classList.add(styles.pulse);
        setTimeout(() => {
          element.classList.remove(styles.pulse);
        }, 1000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className={styles.errorContainer} variants={itemVariants}>
            <div className={styles.errorCode}>404</div>
            <FaExclamationTriangle className={styles.errorIcon} />
          </motion.div>
          
          <motion.h1 className={styles.title} variants={itemVariants}>
            Page Not Found
          </motion.h1>
          
          <motion.p className={styles.description} variants={itemVariants}>
            We're sorry, but the page you're looking for doesn't exist or has been moved.
          </motion.p>
          
          <motion.div className={styles.linksSection} variants={itemVariants}>
            <h2 className={styles.linksTitle}>You might be looking for:</h2>
            
            <div className={styles.linkGrid}>
              {commonPages.map((page, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={page.url} className={styles.linkCard}>
                    <span className={styles.linkIcon}>{page.icon}</span>
                    <span className={styles.linkText}>{page.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.homeButtonContainer}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className={styles.homeButton}>
              <FaHome className={styles.buttonIcon} />
              Return to Home Page
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}
