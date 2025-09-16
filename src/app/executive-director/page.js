"use client";

import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function ExecutiveDirector() {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <Breadcrumb />
          <h1 className={styles.pageTitle}>Executive Director</h1>
          
          <section className={styles.directorSection}>
            <div className={styles.directorProfile}>
              <div className={styles.directorImageContainer}>
                <Image 
                  src="/images/directors/CRUZ.jpg"
                  alt="Manuel Cruz - Executive Director"
                  width={400}
                  height={500}
                  className={styles.directorImage}
                  priority
                  quality={100}
                />
              </div>
              
              <div className={styles.directorInfo}>
                <h2 className={styles.directorName}>Manuel Cruz</h2>
                <h3 className={styles.directorTitle}>Executive Director</h3>
              </div>
            </div>
            
            <div className={styles.messageContent}>
              <p>
                The Rio Grande Valley Emergency Communication District – RGV9-1-1 is proud to represent the Rio Grande Valley serving Hidalgo and Willacy County. The support of this dynamic and fast-growing region, with slightly under one million in population between the two counties, encompasses the unique urban, coastal, agricultural, and rural landscapes. With as many opportunities in this region, so are the challenges in providing resources, services, funding, and general support through coordination, strategic collaboration, and increasing capacity. The RGV9-1-1 District will ensure the continuance in identifying new and robust systems and technology that will further improve 9-1-1 call delivery.
              </p>
              
              <p>
                These past two years, 2021 and 2022, have been nothing less than critical and unprecedented for 9-1-1. What a time for change it&apos;s been for the district despite the unfolding of some of the greatest global challenges in recent times, the ongoing pandemic. The rewards of endless hours of collaboration and effort enabled to accomplish many achievements.
              </p>
              
              <p>
                RGV9-1-1 milestones and accomplished within the first two years since the inception of the district were:
              </p>
              
              <ul className={styles.milestonesList}>
                <li>Formally, creating the Rio Grande Valley Emergency Communication District RGV9-1-1 on August 31, 2021.</li>
                <li>The continuation of working through a rapidly evolving 9-1-1 environment by implementing Next Generation 9-1-1 (NG9-1-1) Digital System.</li>
                <li>Applied and received a $2.6 million federal grant award to assist with NG9-1-1.</li>
                <li>Upgrading to a GIS driven 9-1-1 call delivery GeoMSAG.</li>
              </ul>
              
              <p>
                The RGV9-1-1 District will continue to support the increasing demand of 9-1-1 Professionals, telecommunicators, police, fire, and EMS department responses. In doing so this will help increase the time that police and 9-1-1 professionals can dedicate to responding to emergencies, as other elements help to prioritize scarce resources more efficiently and equitably to where they are needed the most.
              </p>
              
              <p>
                As we have adjust to the &quot;new normal&quot; the mission of the RGV9-1-1 remains unchanged: To help our county partners sustain their public safety operations through a collaborative approach of financial management, operational guidance, and strategic planning.
              </p>
              
              <div className={styles.quoteContainer}>
                <FaQuoteLeft className={styles.quoteIcon} />
                <blockquote className={styles.quote}>
                  I would like to commend our Board of Managers and all our resilient staff not only at the RGV9-1-1 District but also at the Lower Rio Grande Valley Development Council (LRGVDC) for ensuring the safety of all and continuing to support the district with its mission and vital services in Public Safety – Emergency Communication.
                </blockquote>
                <FaQuoteRight className={styles.quoteIcon} />
              </div>
              
              <p>
                I am compelled to extend my deepest gratitude to serve as your Executive Director for the RGV9-1-1 District and exhilarated about our endeavors that the future has in store for the RGV9-1-1 District and the Rio Grande Valley!
              </p>
              
              <div className={styles.signature}>
                <p>Manuel Cruz</p>
                <p>Executive Director</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
