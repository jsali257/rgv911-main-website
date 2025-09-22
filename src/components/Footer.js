"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>
            <Image
              src="/images/other/logo.png"
              alt="RGV911 Logo"
              width={120}
              height={120}
              priority
              quality={100}
              unoptimized
            />
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>RGV 9-1-1</span>
            </div>
          </div>
          <p><strong>Mission:</strong> To ensure optimal public safety throughout the region and work collaboratively to prevent, protect, respond to and recover from threats.</p>
          <p><strong>Vision:</strong> Providing a reliable, resilient, and sustainable regional emergency communication and 9-1-1 network to include advancements in technology, meet contingency strategies, and NextGen 9-1-1 infrastructure.</p>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>1912 Joe Stephens Ave A.</p>
          <p>Weslaco, TX 78599</p>
          <p>Phone: (956) 682-3481</p>
          <p>Email: info@rgv911.org</p>
          
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/rgv911" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/rgv911" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/rgv911" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
          <div className={styles.locationMap}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5026063780785!2d-97.99548792393042!3d26.16640308970902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866578c1c8a6c7e9%3A0x8a5a695a71b1fe1f!2s1912%20Joe%20Stephens%20Ave%20A%2C%20Weslaco%2C%20TX%2078599!5e0!3m2!1sen!2sus!4v1695337631456!5m2!1sen!2sus" 
              width="100%" 
              height="200" 
              style={{ border: 0, marginTop: '15px', borderRadius: '8px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Rio Grande Valley 9-1-1 Emergency Communications District. All rights reserved.</p>
      </div>
    </footer>
  );
}
