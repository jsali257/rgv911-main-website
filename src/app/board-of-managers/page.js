"use client";

import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function BoardOfManagers() {
  // Board officers data
  const boardOfficers = [
    {
      title: "President",
      name: "Mayor Gilbert Gonzales",
      organization: "City of Raymondville",
      image: "/images/boardOfManagers/JZamora.jpg"
    },
    {
      title: "Vice President",
      name: "Mayor Pro-Tem Joaquin 'J.J.' Zamora",
      organization: "City of McAllen",
      image: "/images/boardOfManagers/JZamora.jpg"
    },
    {
      title: "Secretary",
      name: "Judge Aurelio 'Keeter' Guerra",
      organization: "Willacy County",
      image: "/images/boardOfManagers/JZamora.jpg"
    },
    {
      title: "Treasurer",
      name: "Mayor Ramiro Garza Jr.",
      organization: "City of Edinburg",
      image: "/images/boardOfManagers/JZamora.jpg"
    }
  ];

  // Board members data
  const boardMembers = [
    {
      title: "Board Member",
      name: "Mayor Pro Tem Arturo Galvan Jr",
      organization: "City of Alton",
      image: "/images/boardOfManagers/JZamora.jpg"
    },
    {
      title: "Board Member",
      name: "Sheriff J.E 'Eddie' Guerra",
      organization: "Hidalgo County Sheriff",
      image: "/images/boardOfManagers/JZamora.jpg"
    },
    {
      title: "Board Member",
      name: "Mayor Alonzo 'AL' Perez Jr",
      organization: "City of Elsa",
      image: "/images/boardOfManagers/JZamora.jpg"
    },
    {
      title: "Board Member",
      name: "Mayor Yvette Cabrera",
      organization: "City of Granjeno",
      image: "/images/boardOfManagers/JZamora.jpg"
    },
    {
      title: "Board Member",
      name: "Mayor Oscar D. Montoya",
      organization: "City of Mercedes",
      image: "/images/boardOfManagers/JZamora.jpg"
    },
    {
      title: "Board Member",
      name: "Mayor Adrian Gonzales",
      organization: "City of Weslaco",
      image: "/images/boardOfManagers/JZamora.jpg"
    }
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Board of Managers</h1>
          
          <section className={styles.boardSection}>
            <h2 className={styles.sectionTitle}>Board Officers</h2>
            <div className={styles.boardGrid}>
              {boardOfficers.map((officer, index) => (
                <div key={index} className={styles.boardMember}>
                  <div className={styles.memberImageContainer}>
                    <Image 
                      src={officer.image}
                      alt={officer.name}
                      width={200}
                      height={200}
                      className={styles.memberImage}
                    />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberTitle}>{officer.title}</h3>
                    <h4 className={styles.memberName}>{officer.name}</h4>
                    <p className={styles.memberOrg}>{officer.organization}</p>
                    <div className={styles.socialIcons}>
                      <a href="#" className={styles.socialIcon}><FaFacebook /></a>
                      <a href="#" className={styles.socialIcon}><FaTwitter /></a>
                      <a href="#" className={styles.socialIcon}><FaLinkedin /></a>
                      <a href="#" className={styles.socialIcon}><FaEnvelope /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className={styles.boardSection}>
            <h2 className={styles.sectionTitle}>Board Members</h2>
            <div className={styles.boardGrid}>
              {boardMembers.map((member, index) => (
                <div key={index} className={styles.boardMember}>
                  <div className={styles.memberImageContainer}>
                    <Image 
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className={styles.memberImage}
                    />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberTitle}>{member.title}</h3>
                    <h4 className={styles.memberName}>{member.name}</h4>
                    <p className={styles.memberOrg}>{member.organization}</p>
                    <div className={styles.socialIcons}>
                      <a href="#" className={styles.socialIcon}><FaFacebook /></a>
                      <a href="#" className={styles.socialIcon}><FaTwitter /></a>
                      <a href="#" className={styles.socialIcon}><FaLinkedin /></a>
                      <a href="#" className={styles.socialIcon}><FaEnvelope /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
