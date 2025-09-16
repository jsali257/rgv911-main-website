"use client";

import Image from 'next/image';
import { FaCalendarAlt, FaInfoCircle, FaMobileAlt, FaPhoneAlt, FaClipboardList, FaMapMarkerAlt, FaSms, FaBuilding, FaExclamationTriangle } from 'react-icons/fa';
import styles from './PublicEducation.module.css';

export default function PublicEducation() {
  const handleEventRequest = () => {
    window.open('https://survey123.arcgis.com/share/d3bd9eabf54e42f9a3b169e41e4d01a2', '_blank');
  };

  return (
    <section className={styles.publicEducation}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Public Education & Outreach</h2>
          <p className={styles.description}>
            Our Public Education team is dedicated to community safety and awareness through education about 
            emergency communications and the 911 system. We offer presentations, workshops, and resources 
            tailored to various audiences, including schools, community organizations, and businesses.
          </p>
          <p className={styles.description}>
            Learn about:
          </p>
          <ul className={styles.educationList}>
            <li>
              <span className={styles.listIcon}><FaPhoneAlt /></span>
              When and how to call 911
            </li>
            <li>
              <span className={styles.listIcon}><FaClipboardList /></span>
              What happens when you contact emergency services
            </li>
            <li>
              <span className={styles.listIcon}><FaInfoCircle /></span>
              How to prepare for emergencies
            </li>
            <li>
              <span className={styles.listIcon}><FaMapMarkerAlt /></span>
              The importance of knowing your exact address
            </li>
            <li>
              <span className={styles.listIcon}><FaSms /></span>
              Text-to-911 capabilities and limitations
            </li>
          </ul>
          <p className={styles.description}>
            Request our team to attend your event or schedule a presentation for your organization by clicking the button below.
          </p>
          <button 
            onClick={handleEventRequest}
            className={styles.requestButton}
          >
            <FaCalendarAlt className={styles.buttonIcon} /> Request Event or Presentation
          </button>
        </div>
        
        <div className={styles.verificationSection}>
          <div className={styles.header}>
            <h2 className={styles.title}>Kari&apos;s Law</h2>
            <p className={styles.description}>
              Kari&apos;s Law requires direct access to 911 emergency services from multi-line telephone systems (MLTS) without having to dial a prefix. This federal law was enacted after a tragedy in 2013 when Kari Hunt was killed in a hotel room, and her 9-year-old daughter couldn&apos;t reach emergency services because she didn&apos;t know to dial &quot;9&quot; first to get an outside line.
            </p>
            <p className={styles.description}>
              <strong>Key requirements of Kari&apos;s Law:</strong>
            </p>
            <ul className={styles.educationList}>
              <li>
                <span className={styles.listIcon}><FaPhoneAlt /></span>
                Direct dialing of 911 without any prefix or access code
              </li>
              <li>
                <span className={styles.listIcon}><FaExclamationTriangle /></span>
                Automatic notification to designated personnel when a 911 call is made
              </li>
              <li>
                <span className={styles.listIcon}><FaBuilding /></span>
                Applies to businesses, hotels, schools, and other organizations with multi-line phone systems
              </li>
            </ul>
            <p className={styles.description}>
              If your organization uses a multi-line telephone system, ensure it complies with Kari&apos;s Law to protect employees, customers, and visitors during emergencies.
            </p>
          </div>
        </div>

        <div className={styles.verificationSection}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              <span className={styles.text911Highlight}>Text 911</span>
              <span className={styles.text911Badge}>Now Available</span>
            </h2>
            <p className={styles.description}>
              In an emergency, when calling 911 isn&apos;t possible, you now have the option to text 911 for help. Texting
              911 is especially helpful for individuals who are deaf, hard of hearing, or speech-impaired, and in
              situations where speaking could put someone in danger.
            </p>
            <ol className={styles.instructionsList}>
              <li>Enter &quot;911&quot; in the recipient field of your text message</li>
              <li>Type your emergency situation and exact location</li>
              <li>Send the text and wait for a response</li>
              <li>Be prepared to answer questions from the dispatcher</li>
            </ol>
            <p className={styles.description}>
              <strong>Important:</strong> Calling is still the fastest way to reach help, but texting 911 is a valuable alternative when you need it most.
            </p>
            <button 
              onClick={() => window.open('https://www.fcc.gov/consumers/guides/what-you-need-know-about-text-911', '_blank')}
              className={`${styles.requestButton} ${styles.mapButton}`}
            >
              <FaMobileAlt className={styles.buttonIcon} /> Learn More About Text-to-911
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
