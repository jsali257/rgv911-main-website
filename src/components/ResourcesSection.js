"use client";

import styles from './ResourcesSection.module.css';
import { FaDownload, FaFilePdf, FaFileAlt, FaPrint, FaChild } from 'react-icons/fa';

const resources = [
  {
    title: "Emergency Contact Card",
    description: "Printable card to keep important contacts handy",
    icon: <FaFilePdf />,
    downloadUrl: "/resources/emergency-contact-card.pdf",
    category: "preparedness"
  },
  {
    title: "Family Emergency Plan",
    description: "Template to create a comprehensive family emergency plan",
    icon: <FaFileAlt />,
    downloadUrl: "/resources/family-emergency-plan.pdf",
    category: "preparedness"
  },
  {
    title: "Medical Information Sheet",
    description: "Form for documenting important medical information",
    icon: <FaFilePdf />,
    downloadUrl: "/resources/medical-information.pdf",
    category: "preparedness"
  },
  {
    title: "Kids' Guide to 911",
    description: "Child-friendly guide to teach kids about emergency calls",
    icon: <FaChild />,
    downloadUrl: "/resources/kids-guide-to-911.pdf",
    category: "education"
  },
  {
    title: "Home Safety Checklist",
    description: "Checklist to identify and address home safety hazards",
    icon: <FaPrint />,
    downloadUrl: "/resources/home-safety-checklist.pdf",
    category: "safety"
  },
  {
    title: "Emergency Preparedness Guide",
    description: "Comprehensive guide for emergency situations",
    icon: <FaFileAlt />,
    downloadUrl: "/resources/emergency-preparedness.pdf",
    category: "preparedness"
  }
];

export default function ResourcesSection() {
  return (
    <section className={styles.resourcesSection}>
      <h2 className={styles.sectionTitle} data-aos="fade-up">Emergency Resources</h2>
      <p className={styles.sectionDescription} data-aos="fade-up" data-aos-delay="100">
        Download these free resources to help prepare yourself and your family for emergencies.
        Being prepared can make all the difference in an emergency situation.
      </p>
      
      <div className={styles.resourcesGrid}>
        {resources.map((resource, index) => (
          <div 
            className={styles.resourceCard} 
            key={index}
            data-category={resource.category}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className={styles.resourceIcon}>{resource.icon}</div>
            <div className={styles.resourceContent}>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </div>
            <a 
              href={resource.downloadUrl} 
              className={styles.downloadButton}
              download
              aria-label={`Download ${resource.title}`}
            >
              <FaDownload /> Download
            </a>
          </div>
        ))}
      </div>
      
      <div className={styles.resourceNote}>
        <p>
          <strong>Note:</strong> These resources are provided for educational purposes. 
          For the most up-to-date emergency information, always follow instructions from local authorities.
        </p>
      </div>
    </section>
  );
}
