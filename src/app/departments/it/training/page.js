"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Breadcrumb from '../../../../components/Breadcrumb';
import SectionTitle from '../../../../components/SectionTitle';
import ContactSection from '../../../../components/ContactSection';
import { FaGraduationCap, FaUsers, FaCalendarAlt, FaChalkboardTeacher, FaLaptop, FaHeadset } from 'react-icons/fa';

export default function TrainingPage() {
  const [activeImage, setActiveImage] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const totalImages = 17;

  const nextImage = useCallback(() => {
    setActiveImage(prev => (prev === totalImages ? 1 : prev + 1));
  }, [totalImages]);

  const prevImage = useCallback(() => {
    setActiveImage(prev => (prev === 1 ? totalImages : prev - 1));
  }, [totalImages]);

  const selectImage = (index) => {
    setActiveImage(index);
  };
  
  // Set images as loaded when component mounts
  useEffect(() => {
    setImagesLoaded(true);
    
    // Add keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextImage, prevImage]);

  // Training courses data
  const trainingCourses = [
    {
      id: 1,
      title: "Power 911 Basics",
      description: "Introduction to the Power 911 system for new telecommunicators. Learn the fundamentals of call handling and system navigation.",
      duration: "4 hours",
      icon: <FaHeadset />,
      color: "#4361ee"
    },
    {
      id: 2,
      title: "MapFlex",
      description: "Comprehensive training on using MapFlex for location identification and emergency response coordination.",
      duration: "6 hours",
      icon: <FaLaptop />,
      color: "#4cc9f0"
    },
    {
      id: 3,
      title: "Call Handling Advanced Techniques",
      description: "Advanced training for experienced telecommunicators on complex call scenarios and multi-agency coordination.",
      duration: "8 hours",
      icon: <FaChalkboardTeacher />,
      color: "#f72585"
    },
    {
      id: 4,
      title: "Emergency System Troubleshooting",
      description: "Learn to identify and resolve common technical issues that may arise during emergency communications.",
      duration: "4 hours",
      icon: <FaLaptop />,
      color: "#7209b7"
    }
  ];

  // Upcoming training sessions
  const upcomingTrainings = [
    {
      id: 1,
      title: "Power 911",
      date: "October 15, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "RGV911 Training Center",
      availableSeats: 12
    },
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <Breadcrumb />
          
          <div className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.pageTitle}>
                <FaGraduationCap className={styles.titleIcon} />
                IT Training Programs
              </h1>
              <p className={styles.heroText}>
                The IT Department at RGV911 offers specialized training for telecommunicators on Power 911 systems, 
                MapFlex navigation, call handling procedures, and other essential emergency communication tools.
              </p>
            </div>
          </div>
          
          <section className={styles.trainingOverviewSection}>
            <SectionTitle 
              title="Training Overview" 
              subtitle="Empowering telecommunicators with essential technical skills"
              icon={<FaChalkboardTeacher />}
              align="center"
            />
            
            <div className={styles.overviewContent}>
              <p>
                Our IT Department provides comprehensive training programs designed specifically for telecommunicators 
                to ensure they can effectively utilize all features of our emergency communication systems. These 
                training sessions focus on practical skills and real-world scenarios that telecommunicators encounter 
                daily.
              </p>
              <p>
                Each training program is conducted by experienced IT professionals who understand both the technical 
                aspects of the systems and the critical nature of emergency communications. Our goal is to ensure that 
                every telecommunicator feels confident in using the technology that powers our emergency response 
                infrastructure.
              </p>
            </div>
          </section>
          
          <section className={styles.trainingGallerySection}>
            <SectionTitle 
              title="Training Gallery" 
              subtitle="Images from our recent training sessions"
              icon={<FaUsers />}
              align="center"
            />
            
            <div className={styles.galleryContainer}>
              <div className={styles.mainImageContainer}>
                <button 
                  className={`${styles.navButton} ${styles.prevButton}`}
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  &lt;
                </button>
                <div className={styles.mainImage}>
                  {!imagesLoaded && <div className={styles.imageLoader}>Loading high-quality image...</div>}
                  <Image 
                    src={`/images/departments/it/training/Training-${activeImage}.jpg`}
                    alt={`Training session ${activeImage}`}
                    width={1200}
                    height={800}
                    quality={100}
                    priority={true}
                    className={styles.activeImage}
                    loading="eager"
                    onLoad={() => setImagesLoaded(true)}
                  />
                </div>
                <button 
                  className={`${styles.navButton} ${styles.nextButton}`}
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  &gt;
                </button>
              </div>
              
              <div className={styles.thumbnailContainer}>
                {Array.from({ length: totalImages }, (_, i) => i + 1).map(index => (
                  <div 
                    key={index} 
                    className={`${styles.thumbnail} ${activeImage === index ? styles.activeThumbnail : ''}`}
                    onClick={() => selectImage(index)}
                  >
                    <Image 
                      src={`/images/departments/it/training/Training-${index}.jpg`}
                      alt={`Training thumbnail ${index}`}
                      width={150}
                      height={100}
                      quality={80}
                      loading="lazy"
                      className={styles.thumbnailImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className={styles.coursesSection}>
            <SectionTitle 
              title="Available Training Courses" 
              subtitle="Specialized training programs for telecommunicators"
              icon={<FaGraduationCap />}
              align="center"
            />
            
            <div className={styles.coursesGrid}>
              {trainingCourses.map(course => (
                <div key={course.id} className={styles.courseCard}>
                  <div className={styles.courseIcon} style={{ backgroundColor: course.color }}>
                    {course.icon}
                  </div>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <p className={styles.courseDuration}>
                    <FaCalendarAlt className={styles.durationIcon} /> {course.duration}
                  </p>
                  <p className={styles.courseDescription}>{course.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section className={styles.scheduleSection}>
            <SectionTitle 
              title="Upcoming Training Schedule" 
              subtitle="Register for our upcoming training sessions"
              icon={<FaCalendarAlt />}
              align="center"
            />
            
            <div className={styles.scheduleTable}>
              <div className={styles.tableHeader}>
                <div className={styles.headerCell}>Training</div>
                <div className={styles.headerCell}>Date & Time</div>
                <div className={styles.headerCell}>Location</div>
                <div className={styles.headerCell}>Available Seats</div>
              </div>
              
              {upcomingTrainings.map(training => (
                <div key={training.id} className={styles.tableRow}>
                  <div className={styles.cell}>{training.title}</div>
                  <div className={styles.cell}>
                    <div>{training.date}</div>
                    <div className={styles.timeText}>{training.time}</div>
                  </div>
                  <div className={styles.cell}>{training.location}</div>
                  <div className={styles.cell}>
                    <span className={styles.seatsCount}>{training.availableSeats}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.registrationInfo}>
              <h3>How to Register</h3>
              <p>
                To register for any of the training sessions listed above, please contact the IT Department 
                at <a href="mailto:it@rgv911.org" className={styles.emailLink}>it@rgv911.org</a> or call 
                (956) 682-3481. Please include the name of the training session, date, and the names of 
                attendees in your registration request.
              </p>
            </div>
          </section>
          
          <ContactSection 
            title="Contact IT Training"
            phone="(956) 682-3481"
            email="it@rgv911.org"
            departmentName="IT Training"
            ctaText="Need Custom Training?"
            ctaDescription="If your team requires specialized training on specific aspects of our emergency communication systems, we can develop custom training programs tailored to your needs."
            ctaButtonText="Request Custom Training"
            ctaLink="/contact"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
