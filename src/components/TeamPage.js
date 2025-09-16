"use client";

import React from 'react';
import styles from './TeamPage.module.css';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb';

export default function TeamPage() {
  // Team data organized by department
  const teams = [
    {
      name: "GIS Team",
      description: "Our Geographic Information Systems (GIS) team maintains accurate mapping data essential for emergency response.",
      members: [
        { name: "Jacob Salinas", title: "GIS II" },
        { name: "Selenne Vallejo", title: "Program Specialist I" },
        { name: "Monica Estrada", title: "Program Specialist I" },
        { name: "Rosemary Contreras", title: "Planner III" }
      ]
    },
    {
      name: "Public Education Team",
      description: "Our Public Education team promotes community awareness and education about emergency services.",
      members: [
        { name: "Maribel Alonzo", title: "Public Education Coordinator" },
        { name: "Jaquelin Duenez", title: "Program Specialist" },
        { name: "Lizbeth Salazar", title: "Media Designer" }
      ]
    },
    {
      name: "IT Team",
      description: "Our Information Technology team ensures all systems run smoothly for efficient emergency communications.",
      members: [
        { name: "Juan Chapa", title: "IT Supervisor" },
        { name: "Javier Garza", title: "Systems Administrator" },
        { name: "Ralph", title: "Systems Administrator" },
        { name: "Juan Vazquez", title: "System Support Specialist III" },
        { name: "Jesse", title: "System Support Specialist III" }
      ]
    }
  ];

  return (
    <section className={styles.teamPage}>
      <div className={styles.container}>
        <Breadcrumb />
        <div className={styles.header}>
          <h1 className={styles.title}>Meet Our Team</h1>
          <p className={styles.subtitle}>
            The dedicated professionals behind RGV 9-1-1 working to ensure the safety of our community
          </p>
        </div>

        {teams.map((team, index) => (
          <div key={index} className={styles.teamSection}>
            <div className={styles.teamHeader}>
              <h2 className={styles.teamName}>{team.name}</h2>
              <p className={styles.teamDescription}>{team.description}</p>
            </div>
            
            <div className={styles.teamGrid}>
              {team.members.map((member, memberIndex) => (
                <div key={memberIndex} className={styles.teamMember}>
                  <div className={styles.memberImageContainer}>
                    <div className={styles.memberImage}>
                      <Image 
                        src="/images/team/Joe.jpg" 
                        alt={member.name}
                        width={120}
                        height={120}
                        className={styles.memberPhoto}
                      />
                    </div>
                  </div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberTitle}>{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
