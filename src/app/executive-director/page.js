"use client";

import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import DepartmentHero from '../../components/DepartmentHero';
import DirectorProfile from '../../components/DirectorProfile';
import SectionTitle from '../../components/SectionTitle';
import Timeline from '../../components/Timeline';
import StatisticsRow from '../../components/StatisticsRow';
import FAQAccordion from '../../components/FAQAccordion';
import ContactSection from '../../components/ContactSection';
import { FaQuoteLeft, FaQuoteRight, FaTrophy, FaChartLine, FaLightbulb } from 'react-icons/fa';

export default function ExecutiveDirector() {
  // Timeline events
  const milestones = [
    {
      date: 'August 31, 2021',
      title: 'District Formation',
      description: 'Formally created the Rio Grande Valley Emergency Communication District (RGV9-1-1).'
    },
    {
      date: 'December 2021',
      title: 'Next Generation 9-1-1',
      description: 'Began implementing Next Generation 9-1-1 (NG9-1-1) Digital System to modernize emergency communications.'
    },
    {
      date: 'March 2022',
      title: 'Federal Grant Award',
      description: 'Applied for and received a $2.6 million federal grant award to assist with NG9-1-1 implementation.'
    },
    {
      date: 'June 2022',
      title: 'GIS Technology Upgrade',
      description: 'Upgraded to a GIS-driven 9-1-1 call delivery system (GeoMSAG) for improved location accuracy.'
    }
  ];
  
  // Statistics
  const stats = [
    {
      value: '2',
      label: 'Counties Served',
      description: 'Hidalgo and Willacy Counties'
    },
    {
      value: '1',
      label: 'Million',
      suffix: '+',
      description: 'Residents Protected',
      color: '#4cc9f0'
    },
    {
      value: '17',
      label: 'PSAPs',
      description: 'Public Safety Answering Points',
      color: '#f72585'
    },
    {
      value: '2.6',
      label: 'Million',
      suffix: 'M',
      description: 'Federal Grant Funding',
      color: '#4361ee'
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: 'What is the role of the Executive Director?',
      answer: 'The Executive Director oversees all operations of the RGV9-1-1 District, including strategic planning, financial management, and coordination with county partners to ensure effective emergency communication services.'
    },
    {
      question: 'What is Next Generation 9-1-1 (NG9-1-1)?',
      answer: 'NG9-1-1 is an advanced digital system that enhances emergency communications by allowing citizens to send texts, images, and videos to 9-1-1 centers, improving location accuracy, and providing more reliable service during disasters.'
    },
    {
      question: 'How is the RGV9-1-1 District funded?',
      answer: 'The district is funded through a combination of service fees, federal grants, and state allocations. This includes the $2.6 million federal grant received in 2022 to assist with NG9-1-1 implementation.'
    },
    {
      question: 'What areas does the RGV9-1-1 District serve?',
      answer: 'The district serves Hidalgo and Willacy Counties in the Rio Grande Valley of Texas, covering urban, coastal, agricultural, and rural landscapes with a combined population of nearly one million residents.'
    }
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      
      <DepartmentHero 
        title="Executive Director" 
        backgroundImage="/images/backgrounds/executive-director-banner.jpg"
        subtitle="Leading the RGV9-1-1 District into the future of emergency communications"
      />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <Breadcrumb />
          
          <section className={styles.directorSection}>
            <DirectorProfile
              name="Manuel Cruz"
              title="Executive Director"
              imageSrc="/images/directors/CRUZ.jpg"
              email="director@rgv911.org"
              bio="Leading the Rio Grande Valley Emergency Communication District with a focus on modernizing emergency services and ensuring the safety of nearly one million residents across Hidalgo and Willacy Counties."
            />
            
            <div className={styles.messageContent}>
              <p>
                The Rio Grande Valley Emergency Communication District – RGV9-1-1 is proud to represent the Rio Grande Valley serving Hidalgo and Willacy County. The support of this dynamic and fast-growing region, with slightly under one million in population between the two counties, encompasses the unique urban, coastal, agricultural, and rural landscapes. With as many opportunities in this region, so are the challenges in providing resources, services, funding, and general support through coordination, strategic collaboration, and increasing capacity. The RGV9-1-1 District will ensure the continuance in identifying new and robust systems and technology that will further improve 9-1-1 call delivery.
              </p>
              
              <p>
                These past two years, 2021 and 2022, have been nothing less than critical and unprecedented for 9-1-1. What a time for change it&apos;s been for the district despite the unfolding of some of the greatest global challenges in recent times, the ongoing pandemic. The rewards of endless hours of collaboration and effort enabled to accomplish many achievements.
              </p>
              
              <div className={styles.quoteContainer}>
                <FaQuoteLeft className={styles.quoteIcon} />
                <blockquote className={styles.quote}>
                  I would like to commend our Board of Managers and all our resilient staff not only at the RGV9-1-1 District but also at the Lower Rio Grande Valley Development Council (LRGVDC) for ensuring the safety of all and continuing to support the district with its mission and vital services in Public Safety – Emergency Communication.
                </blockquote>
                <FaQuoteRight className={styles.quoteIcon} />
              </div>
              
              <p>
                The RGV9-1-1 District will continue to support the increasing demand of 9-1-1 Professionals, telecommunicators, police, fire, and EMS department responses. In doing so this will help increase the time that police and 9-1-1 professionals can dedicate to responding to emergencies, as other elements help to prioritize scarce resources more efficiently and equitably to where they are needed the most.
              </p>
              
              <p>
                As we have adjust to the &quot;new normal&quot; the mission of the RGV9-1-1 remains unchanged: To help our county partners sustain their public safety operations through a collaborative approach of financial management, operational guidance, and strategic planning.
              </p>
              
              <div className={styles.signature}>
                <p>Manuel Cruz</p>
                <p>Executive Director</p>
              </div>
            </div>
          </section>
          
          <section className={styles.statsSection}>
            <SectionTitle 
              title="District Impact" 
              subtitle="The RGV9-1-1 District serves a diverse and growing population across the Rio Grande Valley"
              icon={<FaChartLine />}
              align="center"
            />
            
            <StatisticsRow stats={stats} />
          </section>
          
          <section className={styles.milestonesSection}>
            <SectionTitle 
              title="Key Milestones" 
              subtitle="Major achievements in the development of the RGV9-1-1 District"
              icon={<FaTrophy />}
              align="center"
              underlineColor="#f72585"
            />
            
            <Timeline events={milestones} />
          </section>
          
          <section className={styles.visionSection}>
            <SectionTitle 
              title="Vision & Strategy" 
              subtitle="Our approach to modernizing emergency communications in the Rio Grande Valley"
              icon={<FaLightbulb />}
              underlineColor="#4cc9f0"
            />
            
            <div className={styles.visionContent}>
              <p>
                The RGV9-1-1 District is committed to implementing cutting-edge technology and best practices to ensure that residents of Hidalgo and Willacy Counties have access to reliable, efficient emergency communication services. Our strategic priorities include:
              </p>
              
              <ul className={styles.strategyList}>
                <li>Continuing the implementation of Next Generation 9-1-1 technology</li>
                <li>Enhancing GIS capabilities for improved location accuracy</li>
                <li>Supporting the professional development of telecommunicators</li>
                <li>Strengthening partnerships with local emergency service providers</li>
                <li>Securing sustainable funding for ongoing system improvements</li>
              </ul>
            </div>
          </section>
          
          <section className={styles.faqSection}>
            <SectionTitle 
              title="Frequently Asked Questions" 
              subtitle="Learn more about the Executive Director's role and the RGV9-1-1 District"
              align="center"
            />
            
            <FAQAccordion faqs={faqs} />
          </section>
          
          <ContactSection 
            title="For More Information"
            phone="(956) 682-3481"
            email="director@rgv911.org"
            departmentName="Executive Director's Office"
            ctaText="Leading the RGV9-1-1 District into the Future"
            ctaDescription="The Rio Grande Valley Emergency Communication District is committed to implementing cutting-edge technology and best practices to ensure that residents of Hidalgo and Willacy Counties have access to reliable, efficient emergency communication services."
            ctaButtonText="Contact the Executive Director"
            ctaLink="/contact"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
