"use client";

import Link from 'next/link';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  link = '', 
  linkText = 'Learn More',
  color = 'var(--rgv-blue)'
}) {
  const cardContent = (
    <>
      <div className={styles.cardIcon} style={{ '--card-color': color }}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      {link && (
        <div className={styles.cardAction}>
          <span className={styles.learnMore}>{linkText}</span>
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <Link href={link} className={styles.serviceCard} style={{ '--card-color': color }}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={styles.serviceCard} style={{ '--card-color': color }}>
      {cardContent}
    </div>
  );
}
