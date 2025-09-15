"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Addressing.module.css';

export default function Addressing() {
  const handleAddressRequest = () => {
    window.open('https://survey123.arcgis.com/share/d383d62a6b5a4ee49738933e5e371bc8?portalUrl=https://gis.rgv911.org/portal', '_blank');
  };

  return (
    <section className={styles.addressing}>
      <div className={styles.container}>
        <div className={styles.addressingSection}>
          <div className={styles.addressingContent}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>Need a 911 Physical Address?</h2>
              <p className={styles.description}>
                Having a 911 physical address is essential for ensuring that emergency services can quickly and 
                accurately locate your home or business when it matters most. A verified address helps first 
                responders, including police, fire, and medical personnel, reach you without delay in the event of an 
                emergency. If you need a 911 address, please click the button below to get started on your request and 
                help us keep our community safe and connected.
              </p>
              <button 
                onClick={handleAddressRequest}
                className={styles.requestButton}
              >
                Request 911 Address
              </button>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/icons/addressIcon.png" 
                alt="911 Address Illustration" 
                width={200} 
                height={200}
                className={styles.addressingImage}
                quality={100}
                priority
              />
            </div>
          </div>
        </div>

        <div className={styles.verificationSection}>
          <h2 className={styles.title}>Verify Your 911 Physical Address</h2>
          <p className={styles.description}>
            Use the RGV911 Address Verification Tool to check whether your home or business has an official 911 physical address on file. 
            Having a valid 911 address is essential to ensure that emergency responders can locate you quickly in the event of an emergency.
          </p>
          <p className={styles.description}>
            Simply enter your address in the search bar to see if it matches the official 911 database.
          </p>
          <ul className={styles.bulletList}>
            <li>If your address is correct, no further action is needed.</li>
            <li>If your address is missing or incorrect, please submit a request to receive or update your 911 address.</li>
          </ul>
          <div className={styles.verificationTool}>
            <div className={styles.buttonGroup}>
              <button 
                onClick={() => window.open('https://arcg.is/0qGKvn0', '_blank')}
                className={`${styles.requestButton} ${styles.mapButton}`}
              >
                Open Address Verification Map
              </button>
              <button 
                onClick={handleAddressRequest}
                className={styles.requestButton}
              >
                Submit Address Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
