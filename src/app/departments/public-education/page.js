"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import EventCarousel from './EventCarousel';
import { FaQuoteLeft, FaQuoteRight, FaGraduationCap, FaUsers, FaHandsHelping, FaCalendarAlt, FaChevronRight, FaExternalLinkAlt, FaClipboardList } from 'react-icons/fa';

export default function PublicEducationDepartment() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://it.rgv911.org/api/events');
        
        if (!response.ok) {
          throw new Error(`Error fetching events: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.events && data.events.events) {
          // Sort events by date (newest first)
          const sortedEvents = data.events.events.sort((a, b) => 
            new Date(b.date) - new Date(a.date)
          );
          
          setEvents(sortedEvents);
        } else {
          throw new Error('Invalid data format received');
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Format date to display in a readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Function to strip HTML tags from description
  const stripHtml = (html) => {
    if (typeof window === 'undefined') {
      // Server-side rendering - use regex to strip HTML tags
      return html.replace(/<[^>]*>/g, '');
    } else {
      // Client-side rendering - use DOMParser
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || '';
    }
  };

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Public Education Department</h1>
          
          <section className={styles.directorSection}>
            <div className={styles.directorProfile}>
              <div className={styles.directorImageContainer}>
                <img 
                  src="/images/directors/maribel.jpg"
                  alt="Maribel Alonzo - Public Education Coordinator"
                  width={400}
                  height={500}
                  className={styles.directorImage}
                />
              </div>
              
              <div className={styles.directorInfo}>
                <h2 className={styles.directorName}>Maribel Alonzo</h2>
                <h3 className={styles.directorTitle}>Public Education Coordinator</h3>
              </div>
            </div>
            
            <div className={styles.messageContent}>
              <div className={styles.quoteContainer}>
                <div className={styles.quoteIconLeft}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                </div>
                <blockquote className={styles.quote}>
                  The greatest thing about public education is that it involves a wonderfully diverse public
                </blockquote>
                <div className={styles.quoteIconRight}>
                  <FaQuoteRight className={styles.quoteIcon} />
                </div>
              </div>
              
              <div className={styles.departmentInfo}>
                <p>
                  The greatest thing about public education is that it involves a wonderfully diverse public! We believe in the significance of community engagement, speaking to the communities, public safety awareness, and the goal of ensuring important information reaches our communities that could potentially save lives…
                </p>
                
                <div className={styles.departmentContent}>
                  <div className={styles.contentSection}>
                    <h3 className={styles.subSectionTitle}>
                      <FaGraduationCap className={styles.subSectionIcon} /> 
                      50 Years of 9-1-1 Education
                    </h3>
                    <p>
                      For fifty years, 9-1-1 has become the critical link between the American public and emergency services. Public education and initiatives to create awareness throughout the years have contributed to the incredible and ongoing success of the emergency communications system as a whole.
                    </p>
                  </div>
                  
                  <div className={styles.contentSection}>
                    <h3 className={styles.subSectionTitle}>
                      <FaUsers className={styles.subSectionIcon} /> 
                      Community Engagement
                    </h3>
                    <p>
                      It is imperative that 9-1-1 professionals, teachers, government officials, media representatives, and industry leaders are equipped with the information and tools necessary to continue these efforts in the face of an ever-changing telecommunications landscape, and that citizens of all ages are well versed in the role they play ensuring effective and efficient emergency response for themselves and their fellow citizens.
                    </p>
                  </div>
                  
                  <div className={styles.contentSection}>
                    <h3 className={styles.subSectionTitle}>
                      <FaHandsHelping className={styles.subSectionIcon} /> 
                      Our Mission
                    </h3>
                    <p>
                      Our mission is to educate the public about the proper use of 9-1-1 services, promote safety awareness, and ensure that vital information reaches all members of our community. Through outreach programs, educational materials, and community partnerships, we strive to make emergency services more accessible and effective for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.eventsSection}>
            <h2 className={styles.sectionTitleBox}>
              <FaCalendarAlt className={styles.sectionIcon} />
              Recent Events
            </h2>

            {loading ? (
              <div className={styles.loadingContainer}>
                <div className={styles.loadingSpinner}></div>
                <p>Loading events...</p>
              </div>
            ) : error ? (
              <div className={styles.errorContainer}>
                <p>Error loading events: {error}</p>
              </div>
            ) : events.length === 0 ? (
              <p className={styles.noEvents}>No recent events found.</p>
            ) : (
              <div className={styles.eventsGrid}>
                {events.slice(0, 4).map((event) => (
                  <div key={event._id} className={styles.eventCard}>
                    <div className={styles.eventImageContainer}>
                      {event.images && event.images.length > 0 && (
                        <EventCarousel images={event.images} />
                      )}
                    </div>
                    <div className={styles.eventContent}>
                      <div className={styles.eventDate}>
                        <FaCalendarAlt className={styles.eventIcon} />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <h3 className={styles.eventTitle}>{event.title}</h3>
                      <p className={styles.eventDescription}>
                        {event.description && typeof window !== 'undefined' 
                          ? stripHtml(event.description).substring(0, 150) + '...'
                          : 'Loading description...'}
                      </p>
                      <a href="#" className={styles.eventLink}>
                        Read More <FaChevronRight className={styles.linkIcon} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className={styles.requestSection}>
            <h2 className={styles.sectionTitleBox}>
              <FaClipboardList className={styles.sectionIcon} />
              Request an Event
            </h2>
            <div className={styles.requestContainer}>
              <div className={styles.requestContent}>
                <h3 className={styles.requestHeading}>Request Our Team at Your Event</h3>
                <p>Would you like the RGV9-1-1 Public Education team to participate in your community event?</p>
                <p>We're available to provide valuable information about emergency services, 9-1-1 education, and safety awareness to your organization, school, or community gathering.</p>
                <p>Complete our online form to request the RGV9-1-1 team at your next event!</p>
                <div className={styles.requestButtonContainer}>
                  <a 
                    href="https://survey123.arcgis.com/share/d3bd9eabf54e42f9a3b169e41e4d01a2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.requestButton}
                  >
                    Request Form <FaExternalLinkAlt className={styles.buttonIcon} />
                  </a>
                </div>
              </div>
              <div className={styles.requestImageContainer}>
                <img 
                  src="/images/other/pubEdTeam.jpg" 
                  alt="RGV9-1-1 Public Education Team" 
                  className={styles.requestImage}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
