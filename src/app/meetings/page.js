"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaFilePdf, FaFileAlt, FaFileSignature, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Meetings() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedYear, setExpandedYear] = useState(null);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://it.rgv911.org/api/public/board-meetings');
        
        if (!response.ok) {
          throw new Error(`Error fetching meetings: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success && data.boardMeetings) {
          // Sort meetings by date (newest first)
          const sortedMeetings = data.boardMeetings.sort((a, b) => 
            new Date(b.meetingDate) - new Date(a.meetingDate)
          );
          
          setMeetings(sortedMeetings);
          
          // Extract unique years and sort them in descending order
          const uniqueYears = [...new Set(sortedMeetings.map(meeting => meeting.year))].sort((a, b) => b - a);
          setYears(uniqueYears);
          
          // Set the most recent year as expanded by default
          if (uniqueYears.length > 0) {
            setExpandedYear(uniqueYears[0]);
          }
        } else {
          throw new Error('Invalid data format received');
        }
      } catch (err) {
        console.error('Error fetching meetings:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  const toggleYear = (year) => {
    if (expandedYear === year) {
      setExpandedYear(null);
    } else {
      setExpandedYear(year);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Board Meetings</h1>
          
          {loading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}></div>
              <p>Loading meetings data...</p>
            </div>
          ) : error ? (
            <div className={styles.errorContainer}>
              <p>Error loading meetings: {error}</p>
              <p>Please try again later or contact support.</p>
            </div>
          ) : (
            <div className={styles.meetingsContainer}>
              {years.map(year => (
                <div key={year} className={styles.yearSection}>
                  <button 
                    className={styles.yearToggle}
                    onClick={() => toggleYear(year)}
                    aria-expanded={expandedYear === year}
                  >
                    <span className={styles.yearLabel}>{year}</span>
                    {expandedYear === year ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  
                  {expandedYear === year && (
                    <div className={styles.meetingsList}>
                      {meetings
                        .filter(meeting => meeting.year === year)
                        .map(meeting => (
                          <div key={meeting._id} className={styles.meetingCard}>
                            <div className={styles.meetingHeader}>
                              <div className={styles.meetingDate}>
                                <FaCalendarAlt className={styles.calendarIcon} />
                                <span>{formatDate(meeting.meetingDate)}</span>
                              </div>
                              <h3 className={styles.meetingTitle}>{meeting.title}</h3>
                            </div>
                            
                            <div className={styles.documentsSection}>
                              <h4 className={styles.documentsTitle}>Meeting Documents</h4>
                              <div className={styles.documentLinks}>
                                {meeting.agenda && (
                                  <a 
                                    href={meeting.agenda.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.documentLink}
                                  >
                                    <FaFilePdf className={styles.documentIcon} />
                                    <span>Agenda</span>
                                  </a>
                                )}
                                
                                {meeting.packet && (
                                  <a 
                                    href={meeting.packet.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.documentLink}
                                  >
                                    <FaFileAlt className={styles.documentIcon} />
                                    <span>Packet</span>
                                  </a>
                                )}
                                
                                {meeting.minutes && (
                                  <a 
                                    href={meeting.minutes.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.documentLink}
                                  >
                                    <FaFileSignature className={styles.documentIcon} />
                                    <span>Minutes</span>
                                  </a>
                                )}
                              </div>
                            </div>
                            
                            {meeting.additionalDocuments && meeting.additionalDocuments.length > 0 && (
                              <div className={styles.additionalDocumentsSection}>
                                <h4 className={styles.documentsTitle}>Additional Documents</h4>
                                <div className={styles.additionalDocumentsList}>
                                  {meeting.additionalDocuments.map(doc => (
                                    <a 
                                      key={doc._id}
                                      href={doc.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className={styles.additionalDocumentLink}
                                    >
                                      <FaFilePdf className={styles.documentIcon} />
                                      <span>{doc.title}</span>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
