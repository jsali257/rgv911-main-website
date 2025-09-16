"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MapPreview.module.css';
import { FaMapMarkedAlt, FaSearch, FaExternalLinkAlt } from 'react-icons/fa';

export default function MapPreview() {
  return (
    <section className={styles.mapPreviewSection}>
      <div className={styles.container}>
        <div className={styles.mapContent}>
          <div className={styles.mapInfo}>
            <h2 className={styles.sectionTitle}>
              <FaMapMarkedAlt className={styles.titleIcon} />
              Interactive Maps
            </h2>
            <p className={styles.sectionDescription}>
              Explore our interactive maps to find addresses, emergency service zones, and more. 
              Our GIS tools help you locate properties and verify addressing information.
            </p>
            
            <div className={styles.mapFeatures}>
              <div className={styles.mapFeature}>
                <div className={styles.featureIcon}>
                  <FaSearch />
                </div>
                <div className={styles.featureContent}>
                  <h3>Address Search</h3>
                  <p>Verify if your address is in the 9-1-1 system and find its exact location</p>
                </div>
              </div>
              
              <div className={styles.mapFeature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3>Service Zones</h3>
                  <p>View emergency service zones and jurisdictional boundaries</p>
                </div>
              </div>
              
              <div className={styles.mapFeature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3>Street Maps</h3>
                  <p>Find streets and roads with accurate naming and location data</p>
                </div>
              </div>
            </div>
            
            <div className={styles.mapButtons}>
              <Link href="/resources/maps" className={styles.primaryButton}>
                <span>Explore All Maps</span>
                <FaExternalLinkAlt className={styles.buttonIcon} />
              </Link>
              <a 
                href="https://gis.rgv911.org/portal/apps/webappviewer/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                <span>Open Interactive Map</span>
                <FaMapMarkedAlt className={styles.buttonIcon} />
              </a>
            </div>
          </div>
          
          <div className={styles.mapImageContainer}>
            <div className={styles.mapImageWrapper}>
              <Image 
                src="/images/other/gisMapBG.png"
                alt="RGV 9-1-1 Interactive Map Preview"
                width={600}
                height={400}
                className={styles.mapImage}
              />
              <div className={styles.mapOverlay}>
                <Link href="/resources/maps" className={styles.overlayButton}>
                  <FaSearch className={styles.overlayIcon} />
                  <span>View Maps</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
