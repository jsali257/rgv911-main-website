"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkedAlt, FaClipboardCheck, FaHome, FaSearchLocation, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import styles from './Addressing.module.css';

export default function Addressing() {

  return (
    <section className={styles.addressing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Need a 911 Physical Address?</h2>
          <p className={styles.description}>
            Having a 911 physical address is essential for ensuring that emergency services can quickly and 
            accurately locate your home or business when it matters most. A verified address helps first 
            responders, including police, fire, and medical personnel, reach you without delay in the event of an 
            emergency. If you need a 911 address, please click the button below to get started on your request and 
            help us keep our community safe and connected.
          </p>
          <Link href="/request-911-address" className={styles.requestButton}>
            <FaHome className={styles.buttonIcon} /> Request 911 Address
          </Link>
        </div>

        <div className={styles.verificationSection}>
          <div className={styles.header}>
            <h2 className={styles.title}>Verify Your 911 Physical Address</h2>
            <p className={styles.description}>
              Use the RGV911 Address Verification Tool to check whether your home or business has an official 911 physical address on file. 
              Having a valid 911 address is essential to ensure that emergency responders can locate you quickly in the event of an emergency.
            </p>
            <p className={styles.description}>
              Simply enter your address in the search bar to see if it matches the official 911 database.
            </p>
            <ul className={styles.bulletList}>
              <li>
                <span className={styles.bulletIcon}><FaCheckCircle /></span>
                If your address is correct, no further action is needed.
              </li>
              <li>
                <span className={styles.bulletIcon}><FaExclamationTriangle /></span>
                If your address is missing or incorrect, please submit a request to receive or update your 911 address.
              </li>
            </ul>
            <div className={styles.verificationTool}>
              <div className={styles.buttonGroup}>
                <button 
                  onClick={() => window.open('https://arcg.is/0qGKvn0', '_blank')}
                  className={`${styles.requestButton} ${styles.mapButton}`}
                >
                  <FaMapMarkedAlt className={styles.buttonIcon} /> Open Address Verification Map
                </button>
                <Link href="/request-911-address" className={styles.requestButton}>
                  <FaClipboardCheck className={styles.buttonIcon} /> Submit Address Request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
