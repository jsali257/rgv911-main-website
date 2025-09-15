"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <Hero 
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have questions or need assistance? Reach out to our team for support."
        primaryButtonText="Call Us"
        primaryButtonLink="tel:9566823481"
        secondaryButtonText="Email Us"
        secondaryButtonLink="mailto:info@rgv911.org"
      />
      
      <main className={styles.main}>
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <h2>Contact Information</h2>
                <div className={styles.infoItem}>
                  <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3>Address</h3>
                    <p>301 W. Railroad St.</p>
                    <p>Weslaco, TX 78596</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <h3>Phone</h3>
                    <p>(956) 682-3481</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <h3>Email</h3>
                    <p>info@rgv911.org</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3>Office Hours</h3>
                    <p>Monday - Friday</p>
                    <p>8:00 am - 12:00 pm</p>
                    <p>1:00 pm - 5:00 pm</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.contactForm}>
                <h2>Send Us a Message</h2>
                {submitSuccess ? (
                  <div className={styles.successMessage}>
                    <svg className={styles.successIcon} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p>Your message has been sent successfully! We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className={styles.submitButton}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
