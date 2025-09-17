"use client";

import Link from 'next/link';
import styles from './ContactSection.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactSection({ 
  title = 'Contact Us', 
  phone = '', 
  email = '', 
  address = '', 
  hours = '',
  ctaText = 'Have a question?',
  ctaButtonText = 'Contact Us',
  ctaLink = '/contact'
}) {
  const sectionStyle = {
    background: 'linear-gradient(135deg, #3b7dd8 0%, #1a4f9c 100%)',
    backgroundColor: '#1a4f9c',
    padding: '60px 0',
    margin: '60px 0 40px', // Added bottom margin for white spacing
    position: 'relative',
    overflow: 'hidden',
    width: '100%'
  };

  return (
    <section className={styles.contactSection} style={sectionStyle}>
      <div className={styles.contactContent}>
        <h2 className={styles.contactTitle}>{title}</h2>
        
        <div className={styles.contactDetails}>
          {phone && (
            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <div>
                <h3 className={styles.contactLabel}>Phone</h3>
                <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className={styles.contactValue}>
                  {phone}
                </a>
              </div>
            </div>
          )}
          
          {email && (
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <div>
                <h3 className={styles.contactLabel}>Email</h3>
                <a href={`mailto:${email}`} className={styles.contactValue}>
                  {email}
                </a>
              </div>
            </div>
          )}
          
          {address && (
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <div>
                <h3 className={styles.contactLabel}>Address</h3>
                <address className={styles.contactValue}>
                  {address}
                </address>
              </div>
            </div>
          )}
          
          {hours && (
            <div className={styles.contactItem}>
              <FaClock className={styles.contactIcon} />
              <div>
                <h3 className={styles.contactLabel}>Hours</h3>
                <p className={styles.contactValue}>
                  {hours}
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className={styles.contactCta}>
          <p className={styles.ctaText}>{ctaText}</p>
          <Link href={ctaLink} className={styles.ctaButton}>
            {ctaButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
