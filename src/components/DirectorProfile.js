"use client";

import Image from 'next/image';
import styles from './DirectorProfile.module.css';
import { FaLinkedin, FaEnvelope, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function DirectorProfile({ 
  name, 
  title, 
  imageSrc, 
  credentials = '', 
  bio = '', 
  email = '', 
  linkedin = '',
  quote = '',
  quoteAuthor = ''
}) {
  return (
    <div className={styles.directorProfile}>
      <div className={styles.directorImageWrapper}>
        <Image 
          src={imageSrc}
          alt={`${name} - ${title}`}
          width={300}
          height={375}
          className={styles.directorImage}
          priority
          quality={100}
        />
      </div>
      
      <div className={styles.directorInfo}>
        <h2 className={styles.directorName}>{name}</h2>
        <h3 className={styles.directorTitle}>{title}</h3>
        
        {credentials && (
          <p className={styles.directorCredentials}>{credentials}</p>
        )}
        
        {bio && (
          <p className={styles.directorBio}>{bio}</p>
        )}
        
        <div className={styles.directorContact}>
          {email && (
            <a href={`mailto:${email}`} className={styles.contactLink}>
              <FaEnvelope className={styles.contactIcon} />
              {email}
            </a>
          )}
          
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <FaLinkedin className={styles.contactIcon} />
              LinkedIn Profile
            </a>
          )}
        </div>
        
        {quote && (
          <div className={styles.quoteContainer}>
            <FaQuoteLeft className={styles.quoteIconLeft} />
            <blockquote className={styles.quote}>
              {quote}
            </blockquote>
            <FaQuoteRight className={styles.quoteIconRight} />
            {quoteAuthor && (
              <div className={styles.quoteAuthorContainer}>
                <p className={styles.quoteAuthor}>— {quoteAuthor}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
