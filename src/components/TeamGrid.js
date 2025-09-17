"use client";

import styles from './TeamGrid.module.css';
import TeamMember from './TeamMember';

export default function TeamGrid({ members, columns = 3 }) {
  return (
    <div className={styles.teamGrid} style={{ '--columns': columns }}>
      {members.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          title={member.title}
          imageSrc={member.imageSrc}
          email={member.email}
          phone={member.phone}
          description={member.description}
        />
      ))}
    </div>
  );
}
