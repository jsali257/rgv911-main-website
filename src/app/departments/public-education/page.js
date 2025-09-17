"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import DepartmentHero from '../../../components/DepartmentHero';
import DirectorProfile from '../../../components/DirectorProfile';
import SectionTitle from '../../../components/SectionTitle';
import StatisticsRow from '../../../components/StatisticsRow';
import ServiceGrid from '../../../components/ServiceGrid';
import TeamGrid from '../../../components/TeamGrid';
import ContactSection from '../../../components/ContactSection';
import EventCarousel from './EventCarousel';
import { 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaGraduationCap, 
  FaUsers, 
  FaHandsHelping, 
  FaCalendarAlt, 
  FaChevronRight, 
  FaExternalLinkAlt, 
  FaClipboardList,
  FaChild,
  FaSchool,
  FaBullhorn,
  FaChartLine
} from 'react-icons/fa';

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

  // Statistics
  const stats = [
    {
      value: '50+',
      label: 'Schools Visited',
      description: 'Annual outreach'
    },
    {
      value: '10,000+',
      label: 'Students Educated',
      description: 'About proper 9-1-1 use',
      color: '#4cc9f0'
    },
    {
      value: '100+',
      label: 'Community Events',
      description: 'Annual participation',
      color: '#f72585'
    }
  ];
  
  // Services
  const services = [
    {
      title: "School Programs",
      description: "We visit schools to teach children about the proper use of 9-1-1 and emergency preparedness through age-appropriate presentations.",
      icon: <FaSchool />,
      color: '#4361ee'
    },
    {
      title: "Community Outreach",
      description: "We participate in community events to raise awareness about emergency services and provide educational materials to residents.",
      icon: <FaUsers />,
      color: '#4cc9f0'
    },
    {
      title: "Safety Campaigns",
      description: "We develop and implement safety awareness campaigns to address specific emergency communication needs in our community.",
      icon: <FaBullhorn />,
      color: '#f72585'
    }
  ];
  
  // Team members from TeamPage.js
  const teamMembers = [
    {
      name: "Maribel Alonzo",
      title: "Public Education Coordinator",
      imageSrc: "/images/directors/maribel.jpg",
      email: "events@rgv911.org"
    },
    {
      name: "Jaquelin Duenez",
      title: "Program Specialist",
      imageSrc: "/images/team/Joe.jpg", // Using existing image as placeholder
      email: "events@rgv911.org"
    },
    {
      name: "Lizbeth Salazar",
      title: "Media Designer",
      imageSrc: "/images/team/Joe.jpg", // Using existing image as placeholder
      email: "events@rgv911.org"
    }
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      
      <DepartmentHero 
        title="Public Education Department" 
        backgroundImage="/images/backgrounds/public-education-banner.jpg"
        subtitle="Educating our community about emergency services and safety"
      />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <Breadcrumb />
          
          {/* Intro content moved to director profile */}
          
          <section className={styles.directorSection}>
            <SectionTitle 
              title="Department Leadership" 
              icon={<FaUsers />}
            />
            
            <DirectorProfile
              name="Maribel Alonzo"
              title="Public Education Coordinator"
              imageSrc="/images/directors/maribel.jpg"
              email="events@rgv911.org"
              bio="Leading the Public Education Department with a passion for community engagement and emergency services education throughout the Rio Grande Valley. The greatest thing about public education is that it involves a wonderfully diverse public! We believe in the significance of community engagement, speaking to the communities, public safety awareness, and the goal of ensuring important information reaches our communities that could potentially save lives."
              quote="The greatest thing about public education is that it involves a wonderfully diverse public"
            />
          </section>
          
          <section className={styles.missionSection}>
            <SectionTitle 
              title="Our Mission" 
              icon={<FaHandsHelping />}
            />
            
            <div className={styles.missionContent}>
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
                  <FaChild className={styles.subSectionIcon} /> 
                  Education for All Ages
                </h3>
                <p>
                  Our mission is to educate the public about the proper use of 9-1-1 services, promote safety awareness, and ensure that vital information reaches all members of our community. Through outreach programs, educational materials, and community partnerships, we strive to make emergency services more accessible and effective for everyone.
                </p>
              </div>
            </div>
          </section>
          
          <section className={styles.statsSection}>
            <SectionTitle 
              title="Our Impact" 
              subtitle="Reaching our community through education and outreach"
              icon={<FaChartLine />}
              align="center"
            />
            
            <StatisticsRow stats={stats} />
          </section>
          
          <section className={styles.servicesSection}>
            <SectionTitle 
              title="Our Programs" 
              subtitle="The Public Education Department offers various educational programs"
              icon={<FaGraduationCap />}
              align="center"
              underlineColor="#4cc9f0"
            />
            
            <ServiceGrid services={services} />
          </section>
          
          <section className={styles.eventsSection}>
            <SectionTitle 
              title="Recent Events" 
              icon={<FaCalendarAlt />}
            />

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
            <SectionTitle 
              title="Request an Event" 
              icon={<FaClipboardList />}
            />
            
            <div className={styles.requestContainer}>
              <div className={styles.requestContent}>
                <h3 className={styles.requestHeading}>Request Our Team at Your Event</h3>
                <p>Would you like the RGV9-1-1 Public Education team to participate in your community event?</p>
                <p>We&apos;re available to provide valuable information about emergency services, 9-1-1 education, and safety awareness to your organization, school, or community gathering.</p>
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
                <Image 
                  src="/images/other/pubEdTeam.jpg" 
                  alt="RGV9-1-1 Public Education Team" 
                  className={styles.requestImage}
                  width={600}
                  height={400}
                  quality={100}
                />
              </div>
            </div>
          </section>
          
          <section className={styles.teamSection}>
            <SectionTitle 
              title="Meet Our Team" 
              subtitle="The professionals behind our public education initiatives"
              icon={<FaUsers />}
              align="center"
            />
            
            <TeamGrid members={teamMembers} />
          </section>
        </div>
      </main>
      
      <ContactSection 
        title="Contact the Public Education Department"
        phone="(956) 682-3481"
        email="events@rgv911.org"
        address="510 S Pleasantview Dr, Weslaco, TX 78596"
        hours="Monday - Friday: 8:00 AM - 5:00 PM"
        ctaText="Want to learn more about our educational programs?"
        ctaButtonText="Get in Touch"
      />
      
      <Footer />
    </div>
  );
}
