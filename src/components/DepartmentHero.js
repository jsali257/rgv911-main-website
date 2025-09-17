"use client";

import styles from './DepartmentHero.module.css';

export default function DepartmentHero({ title, backgroundImage, subtitle }) {
  return (
    <section 
      className={styles.departmentHero} 
      style={{ 
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined 
      }}
    >
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
