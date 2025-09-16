"use client";

import React from 'react';
import Link from 'next/link';
import styles from './ServiceCards.module.css';
import { 
  FaMapMarkerAlt, 
  FaRoad, 
  FaHome, 
  FaBuilding, 
  FaWater,
  FaArrowRight
} from 'react-icons/fa';

export default function ServiceCards() {
  const services = [
    {
      title: "911 Address Request",
      description: "Request a new 9-1-1 physical address for your property in unincorporated areas of Hidalgo and Willacy counties.",
      icon: <FaMapMarkerAlt className={styles.serviceIcon} />,
      link: "/request-911-address",
      color: "#374d8a" // primary blue
    },
    {
      title: "Street Name Request",
      description: "Submit a request to name a street or road in unincorporated areas to ensure proper emergency response.",
      icon: <FaRoad className={styles.serviceIcon} />,
      link: "/street-name-request",
      color: "#daa520" // gold
    },
    {
      title: "City Request",
      description: "Request city services related to addressing and emergency communications within city limits.",
      icon: <FaBuilding className={styles.serviceIcon} />,
      link: "/city-request",
      color: "#059669" // emerald
    },
    {
      title: "Subdivision Request",
      description: "Submit subdivision plans for review to ensure proper addressing and emergency access.",
      icon: <FaHome className={styles.serviceIcon} />,
      link: "/subdivision-request",
      color: "#0ea5e9" // sky blue
    },
    {
      title: "Utility Request",
      description: "Request utility services for your property with proper 9-1-1 addressing information.",
      icon: <FaWater className={styles.serviceIcon} />,
      link: "/utility-request",
      color: "#dc2626" // red
    }
  ];

  return (
    <section className={styles.serviceCardsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionDescription}>
            RGV 9-1-1 provides essential addressing and emergency communication services 
            to ensure quick response times when you need help.
          </p>
        </div>
        
        <div className={styles.serviceCardsGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={styles.serviceCard}
              style={{ '--card-accent-color': service.color }}
            >
              <div className={styles.serviceIconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <Link href={service.link} className={styles.serviceLink}>
                <span>Learn More</span>
                <FaArrowRight className={styles.linkIcon} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
