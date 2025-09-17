"use client";

import styles from './SectionTitle.module.css';

export default function SectionTitle({ 
  title, 
  subtitle = '', 
  icon = null, 
  align = 'left',
  underlineColor = 'var(--rgv-gold)'
}) {
  return (
    <div className={`${styles.sectionTitle} ${styles[align]}`}>
      <h2 className={styles.title} style={{ '--underline-color': underlineColor }}>
        {icon && <span className={styles.titleIcon}>{icon}</span>}
        {title}
      </h2>
      
      {subtitle && (
        <p className={styles.subtitle}>{subtitle}</p>
      )}
    </div>
  );
}
