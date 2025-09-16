"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { FaHome, FaInfoCircle, FaExclamationTriangle, FaBuilding, FaFileAlt, FaRoad, FaBolt, FaCity, FaBook } from 'react-icons/fa';
import Link from 'next/link';

export default function Request911Address() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state to true after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      
      <div className={styles.container}>
        <Breadcrumb />
        <div className={styles.header}>
          <h1 className={styles.title}>Request 911 Physical Address</h1>
          
          <div className={styles.infoSection}>
            <div className={styles.infoIcon}>
              <FaInfoCircle />
            </div>
            <div className={styles.infoContent}>
              <h2>About This Form</h2>
              <p>
                This request form is specifically for <strong>residents</strong> who need to:
              </p>
              <ul className={styles.infoList}>
                <li><FaHome className={styles.listIcon} /> Request a new 911 physical address</li>
                <li><FaFileAlt className={styles.listIcon} /> Verify their existing 911 physical address</li>
                <li><FaBuilding className={styles.listIcon} /> Receive an official 911 physical address letter</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.purposeSection}>
            <h2>Purpose of the 911 Physical Address Letter</h2>
            <p>
              The 911 physical address letter you will receive can be used with:
            </p>
            <ul>
              <li>The appraisal district</li>
              <li>Utility companies</li>
              <li>Other service providers</li>
            </ul>
            <p>
              This official document confirms your 911 address and can be used when you need to update information in their systems.
            </p>
          </div>
          
          <div className={styles.disclaimerSection}>
            <div className={styles.disclaimerIcon}>
              <FaExclamationTriangle />
            </div>
            <div className={styles.disclaimerContent}>
              <h2>Important Notice</h2>
              <p>
                This form is <strong>not intended</strong> for:
              </p>
              <ul>
                <li>Developers</li>
                <li>Engineers</li>
                <li>Cities</li>
                <li>Precincts</li>
              </ul>
              <p>
                If you represent one of these entities, please contact us directly as we have separate request processes for these purposes.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.quickNavSection}>
          <h2 className={styles.quickNavTitle}>Need to submit a different request?</h2>
          <div className={styles.quickNavButtons}>
            <Link href="/request-911-address" className={`${styles.quickNavButton} ${styles.current}`}>
              <FaHome className={styles.buttonIcon} /> 911 Address Request
            </Link>
            <Link href="/subdivision-request" className={styles.quickNavButton}>
              <FaRoad className={styles.buttonIcon} /> Subdivision Request
            </Link>
            <Link href="/utility-request" className={styles.quickNavButton}>
              <FaBolt className={styles.buttonIcon} /> Utility Request
            </Link>
            <Link href="/street-name-request" className={styles.quickNavButton}>
              <FaRoad className={styles.buttonIcon} /> Street Name Request
            </Link>
            <Link href="/city-request" className={styles.quickNavButton}>
              <FaCity className={styles.buttonIcon} /> City/Precinct Request
            </Link>
            <Link href="/road-naming-guidelines" className={styles.quickNavButton}>
              <FaBook className={styles.buttonIcon} /> Road Naming Guidelines
            </Link>
          </div>
        </div>
        
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>911 Address Request Form</h2>
          
          {isLoaded && (
            <div className={styles.surveyContainer}>
              <iframe 
                src="https://survey123.arcgis.com/share/d383d62a6b5a4ee49738933e5e371bc8?portalUrl=https://gis.rgv911.org/portal&version=3.21"
                title="Request 911 Address Form"
                className={styles.surveyFrame}
                allow="geolocation"
              />
            </div>
          )}
          
          {!isLoaded && (
            <div className={styles.loadingContainer}>
              <p>Loading form...</p>
            </div>
          )}
        </div>
        
        <div className={styles.homeButtonContainer}>
          <Link href="/" className={styles.homeButton}>
            <FaHome className={styles.buttonIcon} /> Back to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
