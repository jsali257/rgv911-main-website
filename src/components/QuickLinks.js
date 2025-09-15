"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './QuickLinks.module.css';

export default function QuickLinks() {
  // Define quick links data
  const quickLinks = [
    {
      title: "Board of Managers",
      icon: "/images/icons/board-icon.svg",
      href: "/board-of-managers",
      color: "#374d8a" // updated blue
    },
    {
      title: "Agenda & Minutes",
      icon: "/images/icons/agenda-icon.svg",
      href: "/agenda-minutes",
      color: "#daa520" // gold
    },
    {
      title: "Contact Us",
      icon: "/images/icons/contact-icon.svg",
      href: "/contact",
      color: "#20c997" // teal
    },
    {
      title: "Maps & Data",
      icon: "/images/icons/map-icon.svg",
      href: "/maps",
      color: "#2c7be5" // light blue
    },
    {
      title: "Resources",
      icon: "/images/icons/resources-icon.svg",
      href: "/resources",
      color: "#e63757" // red
    }
  ];

  return (
    <div className={styles.quickLinksWrapper}>
      <div className={styles.quickLinks}>
        {quickLinks.map((link, index) => (
          <Link href={link.href} key={index} className={styles.quickLinkItem}>
            <div 
              className={styles.iconContainer} 
              style={{ backgroundColor: link.color }}
            >
              {/* Fallback to a simple SVG if the icon doesn't exist */}
              <div className={styles.iconFallback}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  {index === 0 && ( // Board of Managers icon
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm6.08-12h-3.29c.49.79.8 1.71.8 2.7 0 1-.31 1.92-.8 2.7h3.29c.45 0 .81-.36.81-.81V3.81c0-.45-.36-.81-.81-.81zM3.81 2H7.1c-.49.79-.8 1.71-.8 2.7 0 1 .31 1.92.8 2.7H3.81c-.45 0-.81-.36-.81-.81V2.81c0-.45.36-.81.81-.81z" />
                  )}
                  {index === 1 && ( // Agenda & Minutes icon
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  )}
                  {index === 2 && ( // Contact icon
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  )}
                  {index === 3 && ( // Maps & Data icon
                    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                  )}
                  {index === 4 && ( // Resources icon
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                  )}
                </svg>
              </div>
            </div>
            <span className={styles.quickLinkTitle}>{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
