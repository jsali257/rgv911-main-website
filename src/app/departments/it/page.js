"use client";

import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FaQuoteLeft, FaQuoteRight, FaServer, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';

export default function ITDepartment() {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>IT Department</h1>
          
          <section className={styles.directorSection}>
            <div className={styles.directorProfile}>
              <div className={styles.directorImageContainer}>
                <img 
                  src="/images/directors/Dennis.jpg"
                  alt="Dennis Moreno - Assistant Director"
                  width={400}
                  height={500}
                  className={styles.directorImage}
                />
              </div>
              
              <div className={styles.directorInfo}>
                <h2 className={styles.directorName}>Dennis Moreno</h2>
                <h3 className={styles.directorTitle}>Assistant Director</h3>
              </div>
            </div>
            
            <div className={styles.messageContent}>
              <div className={styles.quoteContainer}>
                <div className={styles.quoteIconLeft}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                </div>
                <blockquote className={styles.quote}>
                  Our future success is directly proportional to our ability to understand, adopt and integrate new technology into our work.
                </blockquote>
                <div className={styles.quoteIconRight}>
                  <FaQuoteRight className={styles.quoteIcon} />
                </div>
                <div className={styles.quoteAuthorContainer}>
                  <p className={styles.quoteAuthor}>— Sukant Ratnakar</p>
                </div>
              </div>
              
              <div className={styles.departmentInfo}>
                <p>
                  In 2021, the Rio Grande Valley Emergency Communication District (RGV9-1-1) accomplished a huge milestone by fully migrating our regional emergency communication system to Next Generation 9-1-1 (NG9-1-1) System. Our 9-1-1 system is the most critical infrastructure that is relied upon every day for obtaining assistance in a variety of life-or-death situations. NG9-1-1 provides us the ability to interconnect with our local, regional, and other emergency services networks.
                </p>
                
                <p>
                  NG9-1-1 is identified as a "system-of-systems" and "network-of-networks," that links our Public Safety Answering Points (PSAP) directly into emergency services networks by utilizing NG9-1-1 Core Services (NGCS). This provides the capability to reroute emergency calls quickly and easily to another PSAP when the primary answering point is unavailable or overloaded.
                </p>
                
                <p>
                  The incorporation of these advanced capabilities has no doubt enhanced our ability as a region to provide more efficient, effective, and dynamic emergency responses. These interconnected NG9-1-1 systems will serve as multiple input points for all 9-1-1 calls in Hidalgo and Willacy County.
                </p>
                
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionIcon}><FaServer /></span>
                  What We Do
                </h2>
                
                <div className={styles.departmentContent}>
                  <p>
                    As part of the Rio Grande Valley Emergency Communication District, our team of administrators oversee the management and operational efficiency of our NextGen 911 network across all 16 Public Safety Answering points at various Emergency Communication Centers throughout Hidalgo and Willacy County.
                  </p>
                  
                  <h3 className={styles.subSectionTitle}><FaNetworkWired className={styles.subSectionIcon} /> Network Management</h3>
                  <p>
                    This entails network monitoring, call logging/recording, system-wide quarterly audits, physical and virtual cybersecurity measures, and constant testing of our fail-safe redundant call taking infrastructure ensuring that the network has 100% reliability.
                  </p>
                  
                  <h3 className={styles.subSectionTitle}><FaShieldAlt className={styles.subSectionIcon} /> Training & Support</h3>
                  <p>
                    We also work closely with our public education department doing on-site education of various 911 staff to ensure they can utilize each of the built-in technologies and features that computer aided dispatch provides.
                  </p>
                  
                  <p>
                    We provide all this to ensure emergency services personnel have as much detailed information, quickly and efficiently as possible, in order to assist the individual on the other end of the 9-1-1 call when it matters most.
                  </p>
                  
                  <h3 className={styles.subSectionTitle}><FaServer className={styles.subSectionIcon} /> Technology Innovation</h3>
                  <p>
                    We are constantly looking at new solutions, technology and added features and have made it our goal to stay on top of the latest technology that keeps us ahead of the game when it comes to public safety.
                  </p>
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
