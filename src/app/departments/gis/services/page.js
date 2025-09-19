"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Breadcrumb from '../../../../components/Breadcrumb';
import ServiceCard from '../../../../components/ServiceCard';
import { FaInfoCircle, FaNetworkWired, FaMobileAlt, FaMapMarkedAlt, FaPhoneAlt, FaVideo, FaDatabase, FaLaptopCode, FaMapSigns, FaRoute, FaSearchLocation, FaLayerGroup, FaServer, FaCode } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <div className={styles.container}>
        <Breadcrumb />
        
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>GIS Services</h1>
          <p className={styles.pageDescription}>
            Our Geographic Information Systems (GIS) department provides critical spatial data services and solutions 
            that support emergency response operations across the Rio Grande Valley. Explore our range of GIS services 
            designed to enhance location accuracy and data accessibility.
          </p>
        </div>
        
        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>Address Data Management</h2>
          <p className={styles.sectionDescription}>
            We maintain comprehensive and accurate address databases that are essential for emergency response. 
            Our address data management solutions ensure that responders can quickly locate emergencies.
          </p>
          
          <div className={styles.servicesGrid}>
            <ServiceCard 
              title="Master Address Database" 
              description="Centralized repository of all address points in our service area, continuously updated and validated for accuracy."
              icon={<FaDatabase />}
              color="var(--rgv-blue)"
            />
            
            <ServiceCard 
              title="Address Point Maintenance" 
              description="Regular updates and quality control processes to ensure address data remains current and accurate for emergency response."
              icon={<FaMapSigns />}
              color="var(--rgv-blue-dark)"
            />
            
            <ServiceCard 
              title="Road Centerline Management" 
              description="Comprehensive road network data with attributes for routing and location validation to support emergency vehicle navigation."
              icon={<FaRoute />}
              color="var(--rgv-red)"
            />
          </div>
        </div>
        
        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>REST Services & APIs</h2>
          <p className={styles.sectionDescription}>
            We provide programmatic access to our GIS data through standardized REST services and APIs, 
            allowing integration with various emergency response systems and applications.
          </p>
          
          <div className={styles.servicesGrid}>
            <ServiceCard 
              title="Geocoding Services" 
              description="Convert addresses to geographic coordinates and vice versa, supporting precise location identification for emergency calls."
              icon={<FaSearchLocation />}
              color="var(--rgv-blue)"
            />
            
            <div>
              <ServiceCard 
                title="Address Point REST API" 
                description="Access our comprehensive address point database through standardized REST endpoints."
                icon={<FaServer />}
                color="var(--rgv-blue-dark)"
              />
              <div className={styles.serviceEndpoint}>
                <div className={styles.endpointTitle}>Endpoint:</div>
                <div className={styles.endpointUrl}>https://gis.rgv911.org/arcgis/rest/services/AddressPoints/MapServer</div>
              </div>
            </div>
            
            <div>
              <ServiceCard 
                title="Road Centerline REST API" 
                description="Access our road network data through standardized REST endpoints for routing and navigation."
                icon={<FaServer />}
                color="var(--rgv-red)"
              />
              <div className={styles.serviceEndpoint}>
                <div className={styles.endpointTitle}>Endpoint:</div>
                <div className={styles.endpointUrl}>https://gis.rgv911.org/arcgis/rest/services/RoadCenterlines/MapServer</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.serviceSection}>
          <h2 className={styles.sectionTitle}>GIS Data Services</h2>
          <p className={styles.sectionDescription}>
            We provide specialized GIS data services to support emergency response planning, analysis, and operations.
          </p>
          
          <div className={styles.servicesGrid}>
            <ServiceCard 
              title="Emergency Service Boundaries" 
              description="Accurate mapping of emergency service zones, fire districts, law enforcement jurisdictions, and other response boundaries."
              icon={<FaLayerGroup />}
              color="var(--rgv-blue)"
            />
            
            <ServiceCard 
              title="Custom Map Services" 
              description="Tailored mapping solutions to meet specific emergency response needs, including specialized data layers and visualizations."
              icon={<FaMapMarkedAlt />}
              color="var(--rgv-blue-dark)"
            />
            
            <ServiceCard 
              title="GIS Integration Services" 
              description="Solutions for integrating GIS data with CAD systems, mobile applications, and other emergency response technologies."
              icon={<FaCode />}
              color="var(--rgv-red)"
            />
          </div>
        </div>
        
        <div className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>For More Information</h2>
          <p>
            If you have questions about our GIS services or need assistance with GIS data, please contact our GIS Department:
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <span>(956) 682-3481</span>
            </div>
            <div className={styles.contactItem}>
              <a href="mailto:gis@rgv911.org" className={styles.contactLink}>
                gis@rgv911.org
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.ctaSection}>
          <h2>Enhancing Emergency Response Through Location Intelligence</h2>
          <p>
            Our GIS services provide critical location data that helps emergency responders reach those in need quickly and accurately. 
            Explore how our GIS department supports the mission of RGV911.
          </p>
          <Link href="/departments/gis" className={styles.ctaButton}>
            Learn More About Our GIS Department
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
