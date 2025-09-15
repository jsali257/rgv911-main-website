"use client";

import Image from 'next/image';
import styles from './PublicEducation.module.css';

export default function PublicEducation() {
  const handleEventRequest = () => {
    window.open('https://survey123.arcgis.com/share/d3bd9eabf54e42f9a3b169e41e4d01a2', '_blank');
  };

  return (
    <section className={styles.publicEducation}>
      <div className={styles.container}>
        <div className={styles.educationSection}>
          <div className={styles.educationContent}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>Public Education & Outreach</h2>
              <p className={styles.description}>
                Our Public Education team is dedicated to community safety and awareness through education about 
                emergency communications and the 911 system. We offer presentations, workshops, and resources 
                tailored to various audiences, including schools, community organizations, and businesses.
              </p>
              <p className={styles.description}>
                Learn about:
              </p>
              <ul className={styles.educationList}>
                <li>When and how to call 911</li>
                <li>What happens when you contact emergency services</li>
                <li>How to prepare for emergencies</li>
                <li>The importance of knowing your exact address</li>
                <li>Text-to-911 capabilities and limitations</li>
              </ul>
              <p className={styles.description}>
                Request our team to attend your event or schedule a presentation for your organization by clicking the button below.
              </p>
              <button 
                onClick={handleEventRequest}
                className={styles.requestButton}
              >
                Request Event or Presentation
              </button>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/icons/emergencyIcon.png" 
                alt="Emergency Education Icon" 
                width={200} 
                height={200}
                className={styles.educationImage}
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
