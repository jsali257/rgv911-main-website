"use client";

import Image from 'next/image';
import { useState } from 'react';
import styles from './WhoWeAre.module.css';
import { FaMapMarkedAlt, FaServer, FaUserFriends } from 'react-icons/fa';
import StatsSection from './StatsSection';

export default function WhoWeAre() {
  // State to track which department is active for mobile view
  const [activeDepartment, setActiveDepartment] = useState('gis');

  return (
    <section className={styles.whoWeAre}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Who We Are?</h2>
          <p className={styles.description}>
            RGV911 is the primary addressing and emergency communication authority for Hidalgo County and Willacy County. 
            Our mission is to ensure precise, up-to-date location information for efficient emergency response, 
            supporting the local 911 infrastructure and enhancing public safety.
          </p>
          <p className={styles.subDescription}>
            Our agency comprises three key departments, each with specialized roles:
          </p>
          

        </div>

        <div className={styles.departments}>
          {/* GIS Department */}
          <div className={styles.department}>
            <div className={styles.departmentHeader}>
              <div className={styles.departmentIconWrapper}>
                <FaMapMarkedAlt className={styles.departmentIcon} />
              </div>
              <h3 className={styles.departmentTitle}>GIS Department</h3>
            </div>
            <p className={styles.departmentDescription}>
              RGV911&apos;s Addressing Department maintains and updates the addressing systems that emergency responders 
              rely on to locate residents and businesses quickly and accurately. Our team collaborates closely with 
              local governments and emergency services to ensure that every address in Hidalgo and Willacy counties 
              is correctly recorded and accessible.
            </p>
          </div>

          {/* IT Department */}
          <div className={styles.department}>
            <div className={styles.departmentHeader}>
              <div className={styles.departmentIconWrapper}>
                <FaServer className={styles.departmentIcon} />
              </div>
              <h3 className={styles.departmentTitle}>Information Technology Department</h3>
            </div>
            <p className={styles.departmentDescription}>
              The IT team plays a crucial role in maintaining the Public Safety Answering Points (PSAPs), 
              where emergency calls are processed. This department manages the technical infrastructure, 
              conducts system installations, and ensures that our emergency communication systems remain 
              operational and secure.
            </p>
          </div>

          {/* Public Education Department */}
          <div className={styles.department}>
            <div className={styles.departmentHeader}>
              <div className={styles.departmentIconWrapper}>
                <FaUserFriends className={styles.departmentIcon} />
              </div>
              <h3 className={styles.departmentTitle}>Public Education Department</h3>
            </div>
            <p className={styles.departmentDescription}>
              Dedicated to community safety and awareness, our Public Education team provides resources 
              and presentations to educate the public on calling and texting 911. Through outreach events 
              and educational materials, they help residents understand when and how to contact emergency 
              services, ensuring that everyone knows how to get the help they need when it matters most.
            </p>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            At RGV911, we are committed to helping Hidalgo and Willacy County communities stay safe, 
            informed, and well-prepared.
          </p>
        </div>
        
        {/* Our Impact Section */}
        <div className={styles.impactSection}>
          <StatsSection />
        </div>
        
      </div>
    </section>
  );
}
