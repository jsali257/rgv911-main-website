"use client";

import Image from 'next/image';
import styles from './TeamMember.module.css';

export default function TeamMember({ 
  name, 
  title, 
  imageSrc, 
  email = '', 
  phone = '',
  description = ''
}) {
  return (
    <div className={styles.teamMember}>
      <div className={styles.memberImageWrapper}>
        <Image 
          src={imageSrc}
          alt={`${name} - ${title}`}
          width={250}
          height={300}
          className={styles.memberImage}
        />
      </div>
      
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{name}</h3>
        <p className={styles.memberTitle}>{title}</p>
        
        {description && (
          <p className={styles.memberDescription}>{description}</p>
        )}
        
        <div className={styles.memberContact}>
          {email && (
            <a href={`mailto:${email}`} className={styles.contactDetail}>
              {email}
            </a>
          )}
          
          {phone && (
            <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className={styles.contactDetail}>
              {phone}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
