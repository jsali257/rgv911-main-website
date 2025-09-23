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
  FaServer, 
  FaNetworkWired, 
  FaShieldAlt,
  FaUsers,
  FaDesktop,
  FaHeadset,
  FaDatabase,
  FaLock,
  FaChartLine,
  FaGraduationCap
} from 'react-icons/fa';

export default function ITDepartment() {
  // Statistics
  const stats = [
    {
      value: '16',
      label: 'PSAPs Supported',
      description: 'Public Safety Answering Points'
    },
    {
      value: '100',
      label: 'Uptime',
      suffix: '%',
      description: 'Network Reliability',
      color: '#4cc9f0'
    },
    {
      value: '24/7',
      label: 'Support',
      description: 'Emergency Technical Assistance',
      color: '#f72585'
    }
  ];
  
  // Services
  const services = [
    {
      title: "Network Management",
      description: "We monitor and maintain the NextGen 9-1-1 network across all PSAPs, ensuring 100% reliability for emergency communications.",
      icon: <FaNetworkWired />,
      color: '#4361ee'
    },
    {
      title: "Technical Support",
      description: "We provide training and support for 9-1-1 staff to ensure they can utilize all features of our computer-aided dispatch systems.",
      icon: <FaHeadset />,
      color: '#4cc9f0'
    },
    {
      title: "Cybersecurity",
      description: "We implement and maintain robust physical and virtual security measures to protect our critical emergency communications infrastructure.",
      icon: <FaLock />,
      color: '#f72585'
    }
  ];
  
  // Team members from TeamPage.js
  const teamMembers = [
    {
      name: "Dennis Moreno",
      title: "Assistant Director",
      imageSrc: "/images/directors/Dennis.jpg",
      email: "it@rgv911.org"
    },
    {
      name: "Juan Chapa",
      title: "IT Supervisor",
      imageSrc: "/images/team/Joe.jpg", // Using existing image as placeholder
      email: "it@rgv911.org"
    },
    {
      name: "Javier Garza",
      title: "Systems Administrator",
      imageSrc: "/images/team/Joe.jpg", // Using existing image as placeholder
      email: "it@rgv911.org"
    },
    {
      name: "Ralph",
      title: "Systems Administrator",
      imageSrc: "/images/team/Joe.jpg", // Using existing image as placeholder
      email: "it@rgv911.org"
    },
    {
      name: "Juan Vazquez",
      title: "System Support Specialist III",
      imageSrc: "/images/team/Joe.jpg", // Using existing image as placeholder
      email: "it@rgv911.org"
    },
    {
      name: "Jesse",
      title: "System Support Specialist III",
      imageSrc: "/images/team/Joe.jpg", // Using existing image as placeholder
      email: "it@rgv911.org"
    }
  ];
  
  // Tab content
  const tabs = [
    {
      id: "ng911",
      label: "NextGen 9-1-1",
      icon: <FaServer />,
      content: (
        <div className={styles.tabContent}>
          <h3>Next Generation 9-1-1 System</h3>
          <p>
            In 2021, the Rio Grande Valley Emergency Communication District (RGV9-1-1) accomplished a huge milestone by fully migrating our regional emergency communication system to Next Generation 9-1-1 (NG9-1-1) System. Our 9-1-1 system is the most critical infrastructure that is relied upon every day for obtaining assistance in a variety of life-or-death situations.
          </p>
          
          <p>
            NG9-1-1 is identified as a &quot;system-of-systems&quot; and &quot;network-of-networks,&quot; that links our Public Safety Answering Points (PSAP) directly into emergency services networks by utilizing NG9-1-1 Core Services (NGCS). This provides the capability to reroute emergency calls quickly and easily to another PSAP when the primary answering point is unavailable or overloaded.
          </p>
          
          <p>
            The incorporation of these advanced capabilities has no doubt enhanced our ability as a region to provide more efficient, effective, and dynamic emergency responses. These interconnected NG9-1-1 systems serve as multiple input points for all 9-1-1 calls in Hidalgo and Willacy County.
          </p>
        </div>
      )
    },
    {
      id: "infrastructure",
      label: "IT Infrastructure",
      icon: <FaDatabase />,
      content: (
        <div className={styles.tabContent}>
          <h3>Our IT Infrastructure</h3>
          <p>
            The RGV9-1-1 IT Department maintains a robust and redundant infrastructure to ensure uninterrupted emergency communications:
          </p>
          
          <ul className={styles.infrastructureList}>
            <li><strong>Redundant Network Connections</strong> - Multiple network paths ensure calls are always routed properly</li>
            <li><strong>Backup Power Systems</strong> - Uninterruptible power supplies and generators at all locations</li>
            <li><strong>Geo-Diverse Data Centers</strong> - Multiple data centers to prevent single points of failure</li>
            <li><strong>24/7 Monitoring Systems</strong> - Constant surveillance of all network components</li>
            <li><strong>Cybersecurity Measures</strong> - Advanced firewalls, intrusion detection, and security protocols</li>
          </ul>
          
          <p>
            Our infrastructure is designed with multiple layers of redundancy to ensure that even during natural disasters or other emergencies, the 9-1-1 system remains operational and accessible to the public.
          </p>
        </div>
      )
    },
    {
      id: "innovations",
      label: "Innovations",
      icon: <FaChartLine />,
      content: (
        <div className={styles.tabContent}>
          <h3>Technology Innovations</h3>
          <p>
            We are constantly looking at new solutions, technology and added features to stay ahead of the game when it comes to public safety. Recent innovations include:
          </p>
          
          <ul className={styles.innovationsList}>
            <li><strong>Text-to-911</strong> - Allowing residents to text emergency services when voice calls aren&apos;t possible</li>
            <li><strong>Enhanced Location Services</strong> - Improved caller location accuracy, especially for mobile calls</li>
            <li><strong>Multimedia Support</strong> - Capability to receive images and video from callers</li>
            <li><strong>Real-time Translation</strong> - Support for multiple languages to better serve our diverse community</li>
            <li><strong>Integration with Smart City Systems</strong> - Connecting with traffic cameras and other municipal systems</li>
          </ul>
          
          <p>
            These innovations help our emergency responders receive more accurate information faster, improving response times and potentially saving lives.
          </p>
        </div>
      )
    },
    {
      id: "training",
      label: "Training Programs",
      icon: <FaGraduationCap />,
      content: (
        <div className={styles.tabContent}>
          <h3>Telecommunicator Training Programs</h3>
          <p>
            Our IT Department offers specialized training programs for telecommunicators to ensure they can effectively utilize all features of our emergency communication systems.
          </p>
          
          <ul className={styles.infrastructureList}>
            <li><strong>Power 911 Basics</strong> - Introduction to the Power 911 system for new telecommunicators</li>
            <li><strong>MapFlex Navigation</strong> - Comprehensive training on using MapFlex for location identification</li>
            <li><strong>Call Handling Advanced Techniques</strong> - Advanced training for experienced telecommunicators</li>
            <li><strong>Emergency System Troubleshooting</strong> - Learn to identify and resolve common technical issues</li>
          </ul>
          
          <p>
            Our training sessions focus on practical skills and real-world scenarios that telecommunicators encounter daily. Each program is conducted by experienced IT professionals who understand both the technical aspects of the systems and the critical nature of emergency communications.
          </p>
          
          <div className={styles.ctaContainer}>
            <Link href="/departments/it/training" className={styles.ctaButton}>
              View Training Programs
            </Link>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      
      <DepartmentHero 
        title="IT Department" 
        backgroundImage="/images/backgrounds/it-banner.jpg"
        subtitle="Powering the technology behind emergency communications"
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
              name="Dennis Moreno"
              title="Assistant Director"
              imageSrc="/images/directors/Dennis.jpg"
              email="it@rgv911.org"
              bio="Leading the IT Department with a focus on implementing cutting-edge technologies to enhance emergency communications throughout the Rio Grande Valley. As part of the Rio Grande Valley Emergency Communication District, our team of IT professionals oversee the management and operational efficiency of our NextGen 911 network across all 16 Public Safety Answering Points at various Emergency Communication Centers throughout Hidalgo and Willacy County."
              quote="Our future success is directly proportional to our ability to understand, adopt and integrate new technology into our work."
              quoteAuthor="Sukant Ratnakar"
            />
          </section>
          
          <section className={styles.statsSection}>
            <SectionTitle 
              title="IT Impact" 
              subtitle="Our department ensures reliable emergency communications 24/7/365"
              icon={<FaChartLine />}
              align="center"
            />
            
            <StatisticsRow stats={stats} />
          </section>
          
          <section className={styles.servicesSection}>
            <SectionTitle 
              title="Our Services" 
              subtitle="The IT Department provides critical technical services for emergency communications"
              icon={<FaServer />}
              align="center"
              underlineColor="#4361ee"
            />
            
            <ServiceGrid services={services} />
          </section>
          
          <section className={styles.tabSection}>
            <SectionTitle 
              title="Technology & Infrastructure" 
              subtitle="Learn more about our systems, infrastructure, and innovations"
            />
            
            <TabContainer tabs={tabs} />
          </section>
          
          <section className={styles.teamSection}>
            <SectionTitle 
              title="Meet Our Team" 
              subtitle="The professionals behind our IT operations"
              icon={<FaUsers />}
              align="center"
            />
            
            <TeamGrid members={teamMembers} />
          </section>
          
          <ContactSection 
            title="For More Information"
            phone="(956) 682-3481"
            email="it@rgv911.org"
            departmentName="IT"
            ctaText="Supporting Critical Emergency Communications Technology"
            ctaDescription="Our IT department ensures that emergency communication systems remain operational 24/7. We provide the technical foundation that enables first responders to save lives throughout the Rio Grande Valley."
            ctaButtonText="Learn About Our Training Programs"
            ctaLink="/departments/it/training"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
