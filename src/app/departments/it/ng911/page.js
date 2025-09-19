"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Breadcrumb from '../../../../components/Breadcrumb';
import { FaInfoCircle, FaNetworkWired, FaMobileAlt, FaMapMarkedAlt, FaPhoneAlt, FaVideo, FaDatabase, FaLaptopCode } from 'react-icons/fa';

export default function NG911Page() {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <div className={styles.container}>
        <Breadcrumb />
        
        <div className={styles.header}>
          <h1 className={styles.title}>Next Generation 911</h1>
          <div className={styles.subtitle}>The Future of Emergency Response</div>
        </div>
        
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2>Transforming Emergency Communications</h2>
            <p>
              Next Generation 911 (NG911) represents a significant advancement in emergency response technology, 
              transitioning from the traditional analog systems to a more robust, digital infrastructure. This 
              evolution enables our emergency services to receive and process not just voice calls, but also 
              text messages, images, videos, and other data from various devices.
            </p>
            <div className={styles.heroButtons}>
              <a href="#benefits" className={styles.primaryButton}>
                Key Benefits
              </a>
              <a href="#implementation" className={styles.secondaryButton}>
                Implementation Timeline
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image 
              src="/images/ng911/ng911-hero.jpg" 
              alt="Next Generation 911 Technology" 
              width={800} 
              height={500}
              quality={100}
              priority
              className={styles.image}
            />
          </div>
        </div>
        
        <div className={styles.infoSection}>
          <div className={styles.infoIcon}>
            <FaInfoCircle />
          </div>
          <div className={styles.infoContent}>
            <h2>What is NG911?</h2>
            <p>
              Next Generation 911 (NG911) is an initiative aimed at updating the 911 infrastructure to improve 
              public emergency communications services. It enables digital information (e.g., voice, photos, videos, text messages) 
              to flow seamlessly from the public, through the 911 network, and on to emergency responders.
            </p>
          </div>
        </div>
        
        <div id="benefits" className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Key Benefits of NG911</h2>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaNetworkWired />
              </div>
              <h3>Enhanced Network Reliability</h3>
              <p>IP-based networks provide greater redundancy and reliability compared to legacy systems, ensuring emergency services remain available even during network disruptions.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaMobileAlt />
              </div>
              <h3>Text-to-911</h3>
              <p>Enables citizens to send text messages to 911 call centers, critical for those who are deaf, hard of hearing, or in situations where speaking is dangerous.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaMapMarkedAlt />
              </div>
              <h3>Improved Location Accuracy</h3>
              <p>Advanced location services provide more precise caller locations, reducing response times and improving emergency outcomes.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaVideo />
              </div>
              <h3>Multimedia Support</h3>
              <p>Enables transmission of photos and videos to 911 centers, providing responders with critical visual information about emergency situations.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaDatabase />
              </div>
              <h3>Data Sharing</h3>
              <p>Facilitates seamless sharing of emergency data between different jurisdictions and agencies, improving coordination during large-scale incidents.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaLaptopCode />
              </div>
              <h3>Future-Ready Infrastructure</h3>
              <p>Built on modern technology standards that can adapt to future communication methods and emergency service needs.</p>
            </div>
          </div>
        </div>
        
        <div id="implementation" className={styles.timelineSection}>
          <h2 className={styles.sectionTitle}>Implementation Timeline</h2>
          
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2023</div>
              <div className={styles.timelineContent}>
                <h3>Planning & Assessment</h3>
                <p>Evaluation of current systems, needs assessment, and development of implementation strategy.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2024</div>
              <div className={styles.timelineContent}>
                <h3>Infrastructure Development</h3>
                <p>Building the necessary IP-based infrastructure and establishing connectivity with service providers.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2025</div>
              <div className={styles.timelineContent}>
                <h3>Testing & Training</h3>
                <p>Rigorous testing of new systems and comprehensive training for all personnel.</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2026</div>
              <div className={styles.timelineContent}>
                <h3>Full Implementation</h3>
                <p>Complete transition to NG911 systems with all features operational.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          
          <div className={styles.faqItem}>
            <h3>How will NG911 affect how I call for help?</h3>
            <p>
              For most people, calling 911 will remain the same - you'll still dial 911 in an emergency. However, NG911 will add new ways to contact emergency services, such as texting, sending photos, or videos, which can be especially helpful in certain situations.
            </p>
          </div>
          
          <div className={styles.faqItem}>
            <h3>Is texting to 911 available now?</h3>
            <p>
              Text-to-911 service is being implemented in phases. Please check our latest updates for availability in your area. Remember, "Call if you can, text if you can't" is still the recommended approach.
            </p>
          </div>
          
          <div className={styles.faqItem}>
            <h3>Will NG911 improve response times?</h3>
            <p>
              Yes, NG911 is expected to improve response times through better location accuracy, enhanced data sharing between agencies, and more efficient call routing capabilities.
            </p>
          </div>
          
          <div className={styles.faqItem}>
            <h3>How secure is the NG911 system?</h3>
            <p>
              NG911 systems are being built with robust security measures to protect sensitive emergency information and prevent service disruptions. The systems include encryption, authentication, and other cybersecurity protections.
            </p>
          </div>
        </div>
        
        <div className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>For More Information</h2>
          <p>
            If you have questions about Next Generation 911 implementation in our region, please contact our IT Department:
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <span>(956) 682-3481</span>
            </div>
            <div className={styles.contactItem}>
              <a href="mailto:it@rgv911.org" className={styles.contactLink}>
                it@rgv911.org
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.ctaSection}>
          <h2>Preparing for the Future of Emergency Response</h2>
          <p>
            Next Generation 911 represents a significant step forward in our ability to serve and protect our community. 
            Stay informed about our progress as we work to implement these life-saving technologies.
          </p>
          <Link href="/departments/it" className={styles.ctaButton}>
            Learn More About Our IT Department
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
