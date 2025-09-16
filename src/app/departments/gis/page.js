"use client";

import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { FaQuoteLeft, FaQuoteRight, FaMapMarkedAlt, FaDatabase, FaPhoneVolume } from 'react-icons/fa';

export default function GISDepartment() {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <Breadcrumb />
          <h1 className={styles.pageTitle}>GIS Department</h1>
          
          <section className={styles.directorSection}>
            <div className={styles.directorProfile}>
              <div className={styles.directorImageContainer}>
                <Image 
                  src="/images/directors/Joe.jpg"
                  alt="GIS IT Director"
                  width={400}
                  height={500}
                  className={styles.directorImage}
                  priority
                  quality={100}
                />
              </div>
              
              <div className={styles.directorInfo}>
                <h2 className={styles.directorName}>Joe</h2>
                <h3 className={styles.directorTitle}>GIS IT Director</h3>
              </div>
            </div>
            
            <div className={styles.messageContent}>
              <div className={styles.quoteContainer}>
                <div className={styles.quoteIconLeft}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                </div>
                <blockquote className={styles.quote}>
                  A map is the greatest of all epic poems. Its lines and colors show the realization of great dreams.
                </blockquote>
                <div className={styles.quoteIconRight}>
                  <FaQuoteRight className={styles.quoteIcon} />
                </div>
                <div className={styles.quoteAuthorContainer}>
                  <p className={styles.quoteAuthor}>— Gilbert H. Grovenor, Editor of NatGeo (1903-1954)</p>
                </div>
              </div>
              
              <div className={styles.departmentInfo}>
                <p>
                  In 2021, The Rio Grande Valley Emergency Communication District (RGV9-1-1) completed the transition from a tabular 9-1-1 database (MSAG) in the GIS driven GeoMSAG. This GeoMSAG is used in our 9-1-1 network to route 9-1-1 calls to its corresponding Public Safety Answering Point (PSAP). Our RGV9-1-1 team migrated from ESRI&apos;s ArcMap 10.7.1 software to ArcGIS Pro 2.8.1 and began using ESRI&apos;s Address Data Management Toolset.
                </p>
                
                <p>
                  In 2022 RGV9-1-1 GIS Team in collaboration with our I.T. team created a new ArcGIS Enterprise 10.9.1 setup. We created a new ArcGIS Portal and created our new HUB site that is now functioning as our RGV9-1-1 Webpage. This HUB site will allow us to interconnect all of our workflows and interactions with our residents.
                </p>
                
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionIcon}><FaMapMarkedAlt /></span>
                  What We Do
                </h2>
                
                <div className={styles.departmentContent}>
                  <p>
                    As Part of the Rio Grande Valley Emergency Communication District, our team is responsible for the public facing side of 9-1-1 operations. We are the 9-1-1 addressing authority for any outside city limit areas of Hidalgo County and Willacy County.
                  </p>
                  
                  <h3 className={styles.subSectionTitle}>Address Request Process</h3>
                  <p>We process all incoming address requests through a defined 3-step workflow:</p>
                  <ol className={styles.workflowList}>
                    <li>Assigning and validating the property address</li>
                    <li>Inserting the address into our 9-1-1 GIS Enterprise Geodatabase Management System</li>
                    <li>Running QA/QC checks before pushing the data to our Location Validation Function (LVF)</li>
                  </ol>
                  
                  <p>
                    The LVF is critical to 9-1-1 call delivery. It provides the telephone companies with the information needed to correctly route 9-1-1 calls.
                  </p>
                  
                  <p>
                    Our GIS data is replicated into the 9-1-1 mapping system used at each of our 17 Public Safety Answering Points (PSAPs), allowing telecommunicators to quickly locate callers and direct emergency service personnel.
                  </p>
                  
                  <h3 className={styles.subSectionTitle}>Additional Services</h3>
                  <p>Beyond standard addressing, our team also:</p>
                  <ul className={styles.servicesList}>
                    <li>Reviews and assigns addresses for subdivisions submitted by developers or cities</li>
                    <li>Works with municipalities to add new address points, verify existing addresses, and update annexations</li>
                    <li>Adds and verifies streets, maintains parity, and ensures proper road naming in coordination with city staff</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
