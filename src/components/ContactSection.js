"use client";

import Link from 'next/link';
import styles from './ContactSection.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactSection({ 
  title = 'For More Information', 
  phone = '', 
  email = '', 
  address = '', 
  hours = '',
  ctaText = 'Enhancing Emergency Response Through Location Intelligence',
  ctaDescription = 'Our GIS services provide critical location data that helps emergency responders reach those in need quickly and accurately. Explore how our GIS department supports the mission of RGV911.',
  ctaButtonText = 'Learn More',
  ctaLink = '/contact',
  departmentName = 'Department'
}) {
  return (
    <>
      {/* Info Section */}
      <section className={styles.infoSection}>
        <h2 className={styles.infoTitle}>{title}</h2>
        <p className={styles.infoText}>
          If you have questions about our {departmentName} services or need assistance, please contact our {departmentName}:
        </p>
        <div className={styles.infoContactRow}>
          {phone && (
            <div className={styles.infoContactItem}>
              <FaPhone className={styles.infoContactIcon} />
              <a href={`tel:${phone.replace(/[^0-9]/g, '')}`}>{phone}</a>
            </div>
          )}
          
          {email && (
            <div className={styles.infoContactItem}>
              <a href={`mailto:${email}`} className={styles.infoContactLink}>
                {email}
              </a>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>{ctaText}</h2>
        <p>
          {ctaDescription}
        </p>
        <Link href={ctaLink} className={styles.ctaButton}>
          {ctaButtonText}
        </Link>
      </section>
    </>
  );
}
