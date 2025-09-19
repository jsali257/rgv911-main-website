"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { FaInfoCircle, FaExclamationTriangle, FaRoad, FaFileAlt, FaBook, FaHome, FaCity, FaBolt } from 'react-icons/fa';
import Link from 'next/link';

export default function StreetNameRequest() {
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
          <h1 className={styles.title}>Street Name Request</h1>
          
          <div className={styles.formLinkSection}>
            <h2 className={styles.formTitle}>Street Name Request Form</h2>
            <p className={styles.formDescription}>Click the button below to access our Street Name Request Form:</p>
            
            <div className={styles.formLinkContainer}>
              <a 
                href="https://survey123.arcgis.com/share/ddd797df17b54a4aa9861452921e2034" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.formLinkButton}
              >
                <FaRoad className={styles.buttonIcon} /> Request Now!
              </a>
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
              <Link href="/street-name-request" className={`${styles.quickNavButton} ${styles.current}`}>
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
          
          <div className={styles.formInstructions}>
            <h3>Form Instructions</h3>
            <ol className={styles.instructionsList}>
              <li>Click the button above to open the form in a new tab</li>
              <li>Complete all required fields in the form</li>
              <li>Provide your proposed street names following our guidelines</li>
              <li>Submit the form when finished</li>
              <li>You will receive a confirmation email once your request has been processed</li>
            </ol>
          </div>
          
          <div className={styles.infoSection}>
            <div className={styles.infoIcon}>
              <FaInfoCircle />
            </div>
            <div className={styles.infoContent}>
              <h2>About This Form</h2>
              <p>
                This request form is for submitting new street names for approval or requesting changes to existing street names.
              </p>
              <p>
                RGV911 provides street naming services to ensure that all roadways have unique, appropriate names that meet our guidelines for emergency response purposes.
              </p>
            </div>
          </div>
          
          <div className={styles.guidelinesSection}>
            <h2>Road Naming Guidelines</h2>
            <p>
              Before submitting a street name request, please review our comprehensive Road Naming Guidelines to ensure your proposed names meet our standards.
            </p>
            <p>
              Our guidelines cover important requirements such as:
            </p>
            <ul className={styles.guidelinesList}>
              <li>Road name characteristics and conventions</li>
              <li>Prohibited naming practices</li>
              <li>Duplication restrictions</li>
              <li>Street suffix requirements</li>
              <li>Character limitations</li>
            </ul>
            <Link href="/road-naming-guidelines" className={styles.guidelinesButton}>
              <FaBook className={styles.buttonIcon} /> View Road Naming Guidelines
            </Link>
          </div>
          
          <div className={styles.warningSection}>
            <div className={styles.warningIcon}>
              <FaExclamationTriangle />
            </div>
            <div className={styles.warningContent}>
              <h2>Important Notice</h2>
              <p>
                Street names that do not comply with our guidelines may be rejected. Common reasons for rejection include:
              </p>
              <ul>
                <li>Duplication of existing names within a service area</li>
                <li>Names that sound similar to existing streets</li>
                <li>Names that exceed character limitations</li>
                <li>Names with special characters or inappropriate content</li>
                <li>Names that do not include a proper street type</li>
              </ul>
              <p>
                Reserved street names are held for one year from the date of approval on preliminary plats.
              </p>
            </div>
          </div>
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