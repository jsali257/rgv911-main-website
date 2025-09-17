"use client";

import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import DepartmentHero from '../../../components/DepartmentHero';
import DirectorProfile from '../../../components/DirectorProfile';
import SectionTitle from '../../../components/SectionTitle';
import StatisticsRow from '../../../components/StatisticsRow';
import ServiceGrid from '../../../components/ServiceGrid';
import TabContainer from '../../../components/TabContainer';
import TeamGrid from '../../../components/TeamGrid';
import ContactSection from '../../../components/ContactSection';
import { 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaMapMarkedAlt, 
  FaDatabase, 
  FaPhoneVolume,
  FaMapMarked,
  FaStreetView,
  FaBuilding,
  FaRoad,
  FaUsers,
  FaLayerGroup
} from 'react-icons/fa';

export default function GISDepartment() {
  // Statistics
  const stats = [
    {
      value: '17',
      label: 'PSAPs Supported',
      description: 'Public Safety Answering Points'
    },
    {
      value: '2',
      label: 'Counties',
      description: 'Hidalgo and Willacy Counties',
      color: '#4cc9f0'
    },
    {
      value: '5000',
      label: 'Addresses',
      suffix: '+',
      description: 'Assigned and maintained',
      color: '#f72585'
    }
  ];
  
  // Services
  const services = [
    {
      title: "Address Assignment",
      description: "We assign and validate 9-1-1 addresses for properties in unincorporated areas of Hidalgo and Willacy Counties.",
      icon: <FaMapMarked />,
      link: "/request-911-address",
      linkText: "Request an Address"
    },
    {
      title: "Subdivision Processing",
      description: "We review and assign addresses for new subdivisions submitted by developers or cities.",
      icon: <FaBuilding />,
      link: "/subdivision-request",
      linkText: "Submit a Subdivision"
    },
    {
      title: "Street Verification",
      description: "We add and verify streets, maintain parity, and ensure proper road naming in coordination with city staff.",
      icon: <FaRoad />,
      link: "/street-name-request",
      linkText: "Street Name Request"
    }
  ];
  
  // Team members
  const teamMembers = [
    {
      name: "Joe",
      title: "GIS IT Director",
      imageSrc: "/images/directors/Joe.jpg",
      email: "joe@rgv911.org"
    },
    {
      name: "Jacob Salinas",
      title: "GIS II",
      imageSrc: "/images/team/Joe.jpg", // Using existing image as placeholder
      email: "gis@rgv911.org"
    },
    {
      name: "Selenne Vallejo",
      title: "Program Specialist I",
      imageSrc: "/images/team/Joe.jpg", // Using existing image as placeholder
      email: "gis@rgv911.org"
    },
    {
      name: "Monica Estrada",
      title: "Program Specialist I",
      imageSrc: "/images/team/Joe.jpg", // Using existing image as placeholder
      email: "gis@rgv911.org"
    },
    {
      name: "Rosemary Contreras",
      title: "Planner III",
      imageSrc: "/images/team/Joe.jpg", // Using existing image as placeholder
      email: "gis@rgv911.org"
    }
  ];
  
  // Tab content
  const tabs = [
    {
      id: "addressing",
      label: "Addressing Process",
      icon: <FaMapMarkedAlt />,
      content: (
        <div className={styles.tabContent}>
          <h3>Address Request Process</h3>
          <p>We process all incoming address requests through a defined 3-step workflow:</p>
          <ol className={styles.workflowList}>
            <li>Assigning and validating the property address</li>
            <li>Inserting the address into our 9-1-1 GIS Enterprise Geodatabase Management System</li>
            <li>Running QA/QC checks before pushing the data to our Location Validation Function (LVF)</li>
          </ol>
          
          <p>
            The LVF is critical to 9-1-1 call delivery. It provides the telephone companies with the information needed to correctly route 9-1-1 calls.
          </p>
          
          <div className={styles.ctaContainer}>
            <Link href="/request-911-address" className={styles.ctaButton}>
              Request a 9-1-1 Address
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "technology",
      label: "GIS Technology",
      icon: <FaDatabase />,
      content: (
        <div className={styles.tabContent}>
          <h3>Our GIS Technology Stack</h3>
          <p>
            In 2021, The Rio Grande Valley Emergency Communication District (RGV9-1-1) completed the transition from a tabular 9-1-1 database (MSAG) to the GIS-driven GeoMSAG. Our team uses the following technologies:
          </p>
          
          <ul className={styles.technologyList}>
            <li><strong>ESRI ArcGIS Pro 2.8.1</strong> - For advanced geospatial analysis and mapping</li>
            <li><strong>ESRI Address Data Management Toolset</strong> - For maintaining address data integrity</li>
            <li><strong>ArcGIS Enterprise 10.9.1</strong> - For enterprise-level GIS capabilities</li>
            <li><strong>ArcGIS Portal</strong> - For web-based mapping and collaboration</li>
            <li><strong>Location Validation Function (LVF)</strong> - For validating and routing 9-1-1 calls</li>
          </ul>
          
          <p>
            Our GIS data is replicated into the 9-1-1 mapping system used at each of our 17 Public Safety Answering Points (PSAPs), allowing telecommunicators to quickly locate callers and direct emergency service personnel.
          </p>
        </div>
      )
    },
    {
      id: "partnerships",
      label: "Partnerships",
      icon: <FaUsers />,
      content: (
        <div className={styles.tabContent}>
          <h3>Our Partnerships</h3>
          <p>
            The GIS Department works closely with various stakeholders to ensure accurate and up-to-date geospatial information for emergency services:
          </p>
          
          <ul className={styles.partnersList}>
            <li><strong>Municipal Governments</strong> - Coordinating address assignments and street naming within city limits</li>
            <li><strong>County Governments</strong> - Managing addressing in unincorporated areas</li>
            <li><strong>Developers</strong> - Processing new subdivisions and developments</li>
            <li><strong>Utility Companies</strong> - Sharing infrastructure data for emergency response</li>
            <li><strong>Emergency Service Providers</strong> - Ensuring accurate location data for response</li>
          </ul>
          
          <p>
            These partnerships are essential for maintaining a comprehensive and accurate geospatial database that supports emergency communications throughout the Rio Grande Valley.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      
      <DepartmentHero 
        title="GIS Department" 
        backgroundImage="/images/backgrounds/gis-banner.jpg"
        subtitle="Mapping the way for emergency services in the Rio Grande Valley"
      />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <Breadcrumb />
          
          {/* Intro content moved to director profile */}
          
          <section className={styles.directorSection}>
            <SectionTitle 
              title="Department Leadership" 
              icon={<FaUsers />}
            />
            
            <DirectorProfile
              name="Joe"
              title="GIS IT Director"
              imageSrc="/images/directors/Joe.jpg"
              email="joe@rgv911.org"
              bio="Leading the GIS Department with expertise in geospatial technologies and emergency communications systems. As part of the Rio Grande Valley Emergency Communication District, our GIS team is responsible for the public-facing side of 9-1-1 operations. We are the 9-1-1 addressing authority for areas outside city limits in Hidalgo and Willacy Counties, ensuring that every location has an accurate address for emergency response."
              quote="A map is the greatest of all epic poems. Its lines and colors show the realization of great dreams."
              quoteAuthor="Gilbert H. Grovenor, Editor of NatGeo (1903-1954)"
            />
          </section>
          
          <section className={styles.statsSection}>
            <SectionTitle 
              title="GIS Impact" 
              subtitle="Our department supports emergency communications across the Rio Grande Valley"
              icon={<FaLayerGroup />}
              align="center"
            />
            
            <StatisticsRow stats={stats} />
          </section>
          
          <section className={styles.servicesSection}>
            <SectionTitle 
              title="Our Services" 
              subtitle="The GIS Department provides critical addressing and mapping services"
              icon={<FaMapMarkedAlt />}
              align="center"
              underlineColor="#4cc9f0"
            />
            
            <ServiceGrid services={services} />
          </section>
          
          <section className={styles.tabSection}>
            <SectionTitle 
              title="How We Work" 
              subtitle="Learn more about our processes, technology, and partnerships"
            />
            
            <TabContainer tabs={tabs} />
          </section>
          
          <section className={styles.teamSection}>
            <SectionTitle 
              title="Meet Our Team" 
              subtitle="The professionals behind our GIS operations"
              icon={<FaUsers />}
              align="center"
            />
            
            <TeamGrid members={teamMembers} />
          </section>
        </div>
      </main>
      
      <ContactSection 
        title="Contact the GIS Department"
        phone="(956) 682-3481"
        email="gis@rgv911.org"
        address="510 S Pleasantview Dr, Weslaco, TX 78596"
        hours="Monday - Friday: 8:00 AM - 5:00 PM"
        ctaText="Need assistance with addressing or mapping?"
        ctaButtonText="Get in Touch"
      />
      
      <Footer />
    </div>
  );
}
