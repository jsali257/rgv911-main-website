"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { FaInfoCircle, FaExclamationTriangle, FaFileAlt, FaMapMarkedAlt, FaFileSignature, FaHome, FaRoad, FaBolt, FaCity, FaBook } from 'react-icons/fa';
import Link from 'next/link';

export default function SubdivisionRequest() {
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
          <h1 className={styles.title}>Subdivision Addressing Request</h1>
          
          <div className={styles.formLinkSection}>
            <h2 className={styles.formTitle}>Subdivision Addressing Request Form</h2>
            <p className={styles.formDescription}>Click the button below to access our Subdivision Addressing Request Form:</p>
            
            <div className={styles.formLinkContainer}>
              <a 
                href="https://survey123.arcgis.com/share/f6fc978790db4ed2b2328bcee05b6f51?version=3.21" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.formLinkButton}
              >
                <FaFileAlt className={styles.buttonIcon} /> Request Now!
              </a>
            </div>
          </div>
          
          <div className={styles.quickNavSection}>
            <h2 className={styles.quickNavTitle}>Need to submit a different request?</h2>
            <div className={styles.quickNavButtons}>
              <Link href="/request-911-address" className={styles.quickNavButton}>
                <FaHome className={styles.buttonIcon} /> 911 Address Request
              </Link>
              <Link href="/subdivision-request" className={`${styles.quickNavButton} ${styles.current}`}>
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
          
          <div className={styles.formInstructions}>
            <h3>Form Instructions</h3>
            <ol className={styles.instructionsList}>
              <li>Click the button above to open the form in a new tab</li>
              <li>Complete all required fields in the form</li>
              <li>Upload your recorded plat and any other required documents</li>
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
                This request form is specifically for <strong>developers and engineers</strong> who need to obtain addresses for a new subdivision.
              </p>
              <p>
                RGV911 provides addressing services for subdivisions in Hidalgo and Willacy counties to ensure that all properties have 
                accurate and consistent addresses for emergency response purposes.
              </p>
            </div>
          </div>
          
          <div className={styles.requirementsSection}>
            <h2>Required Documentation</h2>
            <p>
              To process your subdivision addressing request, we require a <strong>recorded plat</strong> with all signatures. 
              We cannot address preliminary plats as they may be subject to changes in layout, street names, and other critical details.
            </p>
            
            <div className={styles.documentList}>
              <div className={styles.documentItem}>
                <div className={styles.documentIcon}>
                  <FaFileSignature />
                </div>
                <div className={styles.documentContent}>
                  <h3>Recorded Plat</h3>
                  <p>The final plat that has been recorded with the county clerk, including all required signatures.</p>
                </div>
              </div>
              
              <div className={styles.documentItem}>
                <div className={styles.documentIcon}>
                  <FaMapMarkedAlt />
                </div>
                <div className={styles.documentContent}>
                  <h3>Digital Files</h3>
                  <p>CAD files or GIS shapefiles of the subdivision layout, if available.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.disclaimerSection}>
            <div className={styles.disclaimerIcon}>
              <FaExclamationTriangle />
            </div>
            <div className={styles.disclaimerContent}>
              <h2>Important Notice</h2>
              <p>
                We <strong>will not process</strong> addressing requests for subdivisions with:
              </p>
              <ul>
                <li>Preliminary plats that have not been recorded</li>
                <li>Missing signatures or approvals</li>
                <li>Incomplete documentation</li>
              </ul>
              <p>
                This ensures that our addressing database remains accurate and that emergency services can locate properties efficiently.
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