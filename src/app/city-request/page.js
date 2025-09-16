"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { FaInfoCircle, FaExclamationTriangle, FaBuilding, FaMapMarkedAlt, FaFileAlt, FaRoad, FaCheck, FaHome, FaBook, FaCity, FaBolt } from 'react-icons/fa';
import Link from 'next/link';

export default function CityRequest() {
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
          <h1 className={styles.title}>City & Precinct Request</h1>
          
          <div className={styles.infoSection}>
            <div className={styles.infoIcon}>
              <FaInfoCircle />
            </div>
            <div className={styles.infoContent}>
              <h2>About This Form</h2>
              <p>
                This form is for <strong>cities or county precincts</strong> submitting requests related to addressing or street updates within their jurisdiction.
              </p>
              <p>
                RGV911 provides addressing services to ensure consistency and accuracy across jurisdictions for emergency response purposes.
              </p>
            </div>
          </div>
          
          <div className={styles.requestTypesSection}>
            <h2>Request Types</h2>
            <p>
              You may use this form to submit the following types of requests:
            </p>
            
            <div className={styles.requestGrid}>
              <div className={styles.requestItem}>
                <div className={styles.requestIcon}>
                  <FaBuilding />
                </div>
                <div className={styles.requestContent}>
                  <h3>Request New Addresses or Subdivisions</h3>
                  <p>Submit requests for new address assignments or subdivision addressing within your jurisdiction.</p>
                </div>
              </div>
              
              <div className={styles.requestItem}>
                <div className={styles.requestIcon}>
                  <FaCheck />
                </div>
                <div className={styles.requestContent}>
                  <h3>Verify Existing Addresses</h3>
                  <p>Request verification of existing addresses to ensure accuracy in our database.</p>
                </div>
              </div>
              
              <div className={styles.requestItem}>
                <div className={styles.requestIcon}>
                  <FaMapMarkedAlt />
                </div>
                <div className={styles.requestContent}>
                  <h3>Verify Address Ranges or Parities</h3>
                  <p>Confirm address ranges or parities (odd/even sides) for specific streets.</p>
                </div>
              </div>
              
              <div className={styles.requestItem}>
                <div className={styles.requestIcon}>
                  <FaRoad />
                </div>
                <div className={styles.requestContent}>
                  <h3>Submit New or Renamed Streets</h3>
                  <p>Provide information about new streets or street name changes in your area.</p>
                </div>
              </div>
              
              <div className={styles.requestItem}>
                <div className={styles.requestIcon}>
                  <FaFileAlt />
                </div>
                <div className={styles.requestContent}>
                  <h3>Report Annexations or Jurisdictional Changes</h3>
                  <p>Notify us of boundary changes or annexations that affect addressing.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.documentationSection}>
            <h2>Required Documentation</h2>
            <p>
              Be sure to include supporting documents or maps when applicable to help speed up the review process:
            </p>
            <ul className={styles.documentationList}>
              <li>Maps showing new annexation boundaries</li>
              <li>Ordinances for street name changes</li>
              <li>Subdivision plats</li>
              <li>Site plans for new developments</li>
              <li>Any other relevant documentation</li>
            </ul>
          </div>
          
          <div className={styles.warningSection}>
            <div className={styles.warningIcon}>
              <FaExclamationTriangle />
            </div>
            <div className={styles.warningContent}>
              <h2>Important Notice</h2>
              <p>
                Incomplete requests or missing documentation may delay processing.
              </p>
              <p>
                Please ensure all required information is provided to expedite the addressing process.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.quickNavSection}>
          <h2 className={styles.quickNavTitle}>Need to submit a different request?</h2>
          <div className={styles.quickNavButtons}>
            <Link href="/request-911-address" className={styles.quickNavButton}>
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
            <Link href="/city-request" className={`${styles.quickNavButton} ${styles.current}`}>
              <FaCity className={styles.buttonIcon} /> City/Precinct Request
            </Link>
            <Link href="/road-naming-guidelines" className={styles.quickNavButton}>
              <FaBook className={styles.buttonIcon} /> Road Naming Guidelines
            </Link>
          </div>
        </div>
        
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>City & Precinct Request Form</h2>
          
          {isLoaded && (
            <div className={styles.surveyContainer}>
              <iframe 
                src="https://survey123.arcgis.com/share/76554f3a4c4445b3b9d998e9a2020baa?version=3.21"
                title="City & Precinct Request Form"
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