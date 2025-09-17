"use client";

import styles from './ServiceGrid.module.css';
import ServiceCard from './ServiceCard';

export default function ServiceGrid({ services, columns = 3 }) {
  return (
    <div className={styles.serviceGrid} style={{ '--columns': columns }}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          link={service.link}
          linkText={service.linkText}
          color={service.color}
        />
      ))}
    </div>
  );
}
