"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { FaInfoCircle, FaExclamationTriangle, FaBolt, FaWater, FaMobile, FaLightbulb, FaServer, FaHome, FaRoad, FaCity, FaBook } from 'react-icons/fa';
import Link from 'next/link';

export default function UtilityRequest() {
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
          <h1 className={styles.title}>Utility Infrastructure Addressing Request</h1>
          
          <div className={styles.infoSection}>
            <div className={styles.infoIcon}>
              <FaInfoCircle />
            </div>
            <div className={styles.infoContent}>
              <h2>About This Form</h2>
              <p>
                This request form is specifically for <strong>utility companies and service providers</strong> who need to assign or verify addresses for utility infrastructure.
              </p>
              <p>
                RGV911 provides addressing services for utility infrastructure to ensure that emergency services can quickly locate these facilities when needed.
              </p>
            </div>
          </div>
          
          <div className={styles.infrastructureSection}>
            <h2>Eligible Infrastructure Types</h2>
            <p>
              The following types of utility infrastructure are eligible for address assignment:
            </p>
            
            <div className={styles.infrastructureGrid}>
              <div className={styles.infrastructureItem}>
                <div className={styles.infrastructureIcon}>
                  <FaMobile />
                </div>
                <div className={styles.infrastructureLabel}>
                  Cell Towers
                </div>
              </div>
              
              <div className={styles.infrastructureItem}>
                <div className={styles.infrastructureIcon}>
                  <FaLightbulb />
                </div>
                <div className={styles.infrastructureLabel}>
                  Street Lights
                </div>
              </div>
              
              <div className={styles.infrastructureItem}>
                <div className={styles.infrastructureIcon}>
                  <FaWater />
                </div>
                <div className={styles.infrastructureLabel}>
                  Lift Stations
                </div>
              </div>
              
              <div className={styles.infrastructureItem}>
                <div className={styles.infrastructureIcon}>
                  <FaWater />
                </div>
                <div className={styles.infrastructureLabel}>
                  Water Meters
                </div>
              </div>
              
              <div className={styles.infrastructureItem}>
                <div className={styles.infrastructureIcon}>
                  <FaBolt />
                </div>
                <div className={styles.infrastructureLabel}>
                  Electric Cabinets
                </div>
              </div>
              
              <div className={styles.infrastructureItem}>
                <div className={styles.infrastructureIcon}>
                  <FaServer />
                </div>
                <div className={styles.infrastructureLabel}>
                  Telecom Cabinets
                </div>
              </div>
            </div>
            
            <p className={styles.additionalInfo}>
              Other standalone utility structures not listed above may also be eligible for address assignment.
            </p>
          </div>
          
          <div className={styles.requirementsSection}>
            <h2>Submission Requirements</h2>
            <p>
              Address requests should only be submitted once the utility site is confirmed and all necessary location information is available.
            </p>
            <p>
              Please be prepared to provide:
            </p>
            <ul className={styles.requirementsList}>
              <li>Precise location coordinates (latitude/longitude)</li>
              <li>Site plans or diagrams (if available)</li>
              <li>Access information for the facility</li>
              <li>Contact information for the utility company</li>
              <li>Type of utility infrastructure</li>
            </ul>
          </div>
          
          <div className={styles.warningSection}>
            <div className={styles.warningIcon}>
              <FaExclamationTriangle />
            </div>
            <div className={styles.warningContent}>
              <h2>Important Notice</h2>
              <p>
                Requests lacking clear site information or location details may be delayed or denied.
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
            <Link href="/utility-request" className={`${styles.quickNavButton} ${styles.current}`}>
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
          <h2 className={styles.formTitle}>Utility Infrastructure Addressing Request Form</h2>
          
          {isLoaded && (
            <div className={styles.surveyContainer}>
              <iframe 
                src="https://survey123.arcgis.com/share/66703727c9d94ef6ab305a8e8807ca8a"
                title="Utility Request Form"
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