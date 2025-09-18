"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

import Footer from '../../../components/Footer';
import SectionTitle from '../../../components/SectionTitle';
import Navbar from '../../../components/Navbar';

import { 
  FaRoad, 
  FaMapMarkedAlt, 
  FaRulerHorizontal, 
  FaExclamationTriangle, 
  FaCheckCircle, 
  FaTimesCircle,
  FaArrowRight,
  FaDownload,
  FaFileAlt,
  FaInfoCircle
} from 'react-icons/fa';

export default function AddressingStandardsPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1>Addressing Standards Guide</h1>
          <p>Best practices for addressing according to Texas NENA standards</p>
        </div>
      </div>
      
      <main className={styles.main}>
        <div className={styles.container}>
          
          <section className={styles.introSection}>
            <div className={styles.introContent}>
              <h1 className={styles.pageTitle}>Texas NENA Addressing Standards</h1>
              <p className={styles.introParagraph}>
                Proper addressing is critical for emergency response. This guide outlines the standards and best practices for addressing in accordance with Texas NENA (National Emergency Number Association) guidelines. Following these standards ensures that addresses are logical, consistent, and easily locatable by emergency services.
              </p>
              <div className={styles.downloadContainer}>
                <a href="#" className={styles.downloadButton} onClick={(e) => e.preventDefault()}>
                  <FaDownload className={styles.downloadIcon} />
                  Download Complete Texas NENA Standards
                </a>
              </div>
            </div>
          </section>
          
          <section className={styles.standardsSection}>
            <SectionTitle 
              title="Road Naming Standards" 
              icon={<FaRoad />}
            />
            
            <div className={styles.standardContent}>
              <h3 className={styles.subheading}>Road Name Guidelines</h3>
              <p>Road names should be:</p>
              <ul className={styles.standardsList}>
                <li>Unique within the jurisdiction and not duplicate or sound similar to existing names</li>
                <li>Simple, easy to pronounce, and spelled conventionally</li>
                <li>Free of special characters, hyphens, apostrophes, or non-standard abbreviations</li>
                <li>Not named after living persons</li>
                <li>Not offensive or derogatory</li>
              </ul>
              
              <div className={styles.exampleBox}>
                <div className={styles.exampleHeader}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <h4>Acceptable Road Names</h4>
                </div>
                <ul className={styles.exampleList}>
                  <li>Maple Street</li>
                  <li>Sunset Boulevard</li>
                  <li>Mountain View Drive</li>
                </ul>
                
                <div className={styles.exampleHeader}>
                  <FaTimesCircle className={styles.timesIcon} />
                  <h4>Problematic Road Names</h4>
                </div>
                <ul className={styles.exampleList}>
                  <li>"Oak St" and "Oak Street" in same jurisdiction (duplicates)</li>
                  <li>"Main Street" and "Maine Street" (sound alike)</li>
                  <li>"Smith's Way" (contains apostrophe)</li>
                </ul>
              </div>
              
              <h3 className={styles.subheading}>Road Type Designators</h3>
              <p>Use standard road type designators consistently:</p>
              <div className={styles.tableContainer}>
                <table className={styles.standardsTable}>
                  <thead>
                    <tr>
                      <th>Designator</th>
                      <th>Abbreviation</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Street</td>
                      <td>ST</td>
                      <td>Urban grid roads, typically running east-west</td>
                    </tr>
                    <tr>
                      <td>Avenue</td>
                      <td>AVE</td>
                      <td>Urban grid roads, typically running north-south</td>
                    </tr>
                    <tr>
                      <td>Boulevard</td>
                      <td>BLVD</td>
                      <td>Wide roads, often with median or landscaping</td>
                    </tr>
                    <tr>
                      <td>Drive</td>
                      <td>DR</td>
                      <td>Winding roads, often following terrain</td>
                    </tr>
                    <tr>
                      <td>Lane</td>
                      <td>LN</td>
                      <td>Short, narrow roads</td>
                    </tr>
                    <tr>
                      <td>Circle</td>
                      <td>CIR</td>
                      <td>Roads that return to themselves, forming a loop</td>
                    </tr>
                    <tr>
                      <td>Court</td>
                      <td>CT</td>
                      <td>Dead-end roads, often with cul-de-sac</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          <section className={styles.standardsSection}>
            <SectionTitle 
              title="Numbering Systems" 
              icon={<FaRulerHorizontal />}
            />
            
            <div className={styles.standardContent}>
              <h3 className={styles.subheading}>Address Number Assignment</h3>
              <p>Address numbers should follow these principles:</p>
              <ul className={styles.standardsList}>
                <li>Use a consistent numbering system throughout the jurisdiction</li>
                <li>Maintain a logical progression of numbers</li>
                <li>Allow for future growth and infill development</li>
                <li>Avoid fractional addresses, alphanumeric addresses, or hyphenated numbers</li>
              </ul>
              
              <div className={styles.infoBox}>
                <FaInfoCircle className={styles.infoIcon} />
                <div>
                  <h4>Distance-Based Numbering</h4>
                  <p>In distance-based numbering systems, address numbers are assigned based on the distance from a baseline or origin point. For example, 1425 Main Street would be approximately 14.25 miles from the origin point.</p>
                </div>
              </div>
              
              <h3 className={styles.subheading}>Parity (Odd/Even)</h3>
              <p>Address numbers should follow standard parity conventions:</p>
              <div className={styles.parityContainer}>
                <div className={styles.parityBox}>
                  <h4>Even Numbers</h4>
                  <p>Assigned to:</p>
                  <ul>
                    <li>North side of east-west roads</li>
                    <li>East side of north-south roads</li>
                  </ul>
                  <div className={styles.exampleNumbers}>
                    <span>100</span>
                    <span>102</span>
                    <span>104</span>
                    <span>...</span>
                  </div>
                </div>
                <div className={styles.parityBox}>
                  <h4>Odd Numbers</h4>
                  <p>Assigned to:</p>
                  <ul>
                    <li>South side of east-west roads</li>
                    <li>West side of north-south roads</li>
                  </ul>
                  <div className={styles.exampleNumbers}>
                    <span>101</span>
                    <span>103</span>
                    <span>105</span>
                    <span>...</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.illustrationContainer}>
                <div className={styles.illustration}>
                  <Image 
                    src="/images/resources/addressing/addressDistribution.PNG" 
                    alt="Illustration showing odd/even address distribution" 
                    width={800} 
                    height={600}
                    quality={100}
                    priority
                    className={styles.illustrationImage}
                    unoptimized
                  />
                  <p className={styles.caption}>Illustration of standard address parity on a street grid</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className={styles.standardsSection}>
            <SectionTitle 
              title="Address Ranges & Intervals" 
              icon={<FaMapMarkedAlt />}
            />
            
            <div className={styles.standardContent}>
              <h3 className={styles.subheading}>Address Intervals</h3>
              <p>The interval between addresses depends on lot size and density:</p>
              <div className={styles.tableContainer}>
                <table className={styles.standardsTable}>
                  <thead>
                    <tr>
                      <th>Area Type</th>
                      <th>Typical Lot Size</th>
                      <th>Recommended Interval</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Urban/High Density</td>
                      <td>25-50 ft frontage</td>
                      <td>2-4 numbers per lot</td>
                    </tr>
                    <tr>
                      <td>Suburban</td>
                      <td>50-100 ft frontage</td>
                      <td>4-8 numbers per lot</td>
                    </tr>
                    <tr>
                      <td>Rural</td>
                      <td>100+ ft frontage</td>
                      <td>10-20 numbers per lot</td>
                    </tr>
                    <tr>
                      <td>Agricultural/Very Rural</td>
                      <td>Large acreage</td>
                      <td>100 numbers per mile</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className={styles.infoBox}>
                <FaInfoCircle className={styles.infoIcon} />
                <div>
                  <h4>Calculating Address Intervals</h4>
                  <p>For a 1-mile road with potential for 20 lots on each side:</p>
                  <ul>
                    <li>5280 feet ÷ 20 lots = 264 feet per lot</li>
                    <li>Using a 10-number interval: 10 × 20 lots = 200 numbers per side</li>
                    <li>Even side: 100, 110, 120... 290</li>
                    <li>Odd side: 101, 111, 121... 291</li>
                  </ul>
                </div>
              </div>
              
              <h3 className={styles.subheading}>Block Ranges</h3>
              <p>Block ranges should be consistent and follow these guidelines:</p>
              <ul className={styles.standardsList}>
                <li>Begin each block with a new hundred series (100, 200, 300, etc.)</li>
                <li>Maintain consistent block lengths where possible</li>
                <li>Align block numbers across parallel streets</li>
                <li>Skip numbers at major intersections or natural boundaries</li>
              </ul>
              
              <div className={styles.illustrationContainer}>
                <div className={styles.illustration}>
                  <Image 
                    src="/images/resources/addressing/cityBlock.PNG" 
                    alt="Illustration showing block ranges in a grid system" 
                    width={800} 
                    height={600}
                    quality={100}
                    priority
                    className={styles.illustrationImage}
                    unoptimized
                  />
                  <p className={styles.caption}>Block ranges in a standard grid system</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className={styles.standardsSection}>
            <SectionTitle 
              title="Avoiding Common Problems" 
              icon={<FaExclamationTriangle />}
            />
            
            <div className={styles.standardContent}>
              <h3 className={styles.subheading}>Addressing Overlaps</h3>
              <p>Address overlaps occur when the same address exists in multiple locations within a jurisdiction. To avoid overlaps:</p>
              <ul className={styles.standardsList}>
                <li>Maintain a master address database</li>
                <li>Verify new addresses against existing records</li>
                <li>Use unique street names throughout the jurisdiction</li>
                <li>Implement address range checks in your GIS system</li>
              </ul>
              
              <div className={styles.exampleBox}>
                <div className={styles.exampleHeader}>
                  <FaTimesCircle className={styles.timesIcon} />
                  <h4>Overlap Problem Example</h4>
                </div>
                <p>Two different subdivisions both have a "123 Oak Street" because the street name "Oak" was allowed in multiple areas.</p>
                
                <div className={styles.exampleHeader}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <h4>Solution</h4>
                </div>
                <p>Rename one street to create unique addresses (e.g., "123 Red Oak Street" and "123 White Oak Street").</p>
              </div>
              
              <h3 className={styles.subheading}>Addressing Gaps</h3>
              <p>Address gaps occur when numbers are skipped in a sequence, potentially causing confusion. To manage gaps:</p>
              <ul className={styles.standardsList}>
                <li>Plan for future development by intentionally leaving appropriate intervals</li>
                <li>Document any intentional gaps in the addressing system</li>
                <li>Consider readdressing if gaps become problematic for emergency response</li>
              </ul>
              
              <h3 className={styles.subheading}>Centerline Management</h3>
              <p>Proper centerline management is essential for accurate addressing:</p>
              <ul className={styles.standardsList}>
                <li>Maintain accurate road centerlines in GIS</li>
                <li>Break centerlines at intersections and jurisdiction boundaries</li>
                <li>Assign address ranges to each centerline segment</li>
                <li>Regularly validate centerline data against actual addresses</li>
              </ul>
              
              <div className={styles.illustrationContainer}>
                <div className={styles.illustration}>
                  <Image 
                    src="/images/resources/addressing/roadCenterline.PNG" 
                    alt="Illustration showing proper centerline management" 
                    width={800} 
                    height={600}
                    quality={100}
                    priority
                    className={styles.illustrationImage}
                    unoptimized
                  />
                  <p className={styles.caption}>Proper centerline segmentation at intersections</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className={styles.standardsSection}>
            <SectionTitle 
              title="Implementation Guidelines" 
              icon={<FaFileAlt />}
            />
            
            <div className={styles.standardContent}>
              <h3 className={styles.subheading}>Creating an Addressing Ordinance</h3>
              <p>Municipalities should establish an addressing ordinance that:</p>
              <ul className={styles.standardsList}>
                <li>Designates an addressing authority</li>
                <li>Establishes standards for address assignment</li>
                <li>Outlines procedures for address changes</li>
                <li>Provides enforcement mechanisms</li>
                <li>Requires address posting standards</li>
              </ul>
              
              <div className={styles.downloadContainer}>
                <a href="#" className={styles.downloadButton} onClick={(e) => e.preventDefault()}>
                  <FaDownload className={styles.downloadIcon} />
                  Download Sample Addressing Ordinance
                </a>
              </div>
              
              <h3 className={styles.subheading}>Addressing New Developments</h3>
              <p>For new developments, follow this process:</p>
              <ol className={styles.processList}>
                <li>
                  <span className={styles.processNumber}>1</span>
                  <div className={styles.processContent}>
                    <h4>Review Preliminary Plats</h4>
                    <p>Ensure street layouts follow addressing standards and avoid problematic configurations.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.processNumber}>2</span>
                  <div className={styles.processContent}>
                    <h4>Assign Street Names</h4>
                    <p>Verify uniqueness and compliance with naming standards.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.processNumber}>3</span>
                  <div className={styles.processContent}>
                    <h4>Establish Address Ranges</h4>
                    <p>Determine appropriate intervals based on lot sizes.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.processNumber}>4</span>
                  <div className={styles.processContent}>
                    <h4>Assign Individual Addresses</h4>
                    <p>Create specific addresses for each lot or structure.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.processNumber}>5</span>
                  <div className={styles.processContent}>
                    <h4>Update Master Address Database</h4>
                    <p>Record all new addresses in the central system.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
          
          <section className={styles.resourcesSection}>
            <SectionTitle 
              title="Additional Resources" 
              icon={<FaFileAlt />}
            />
            
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  <FaDownload />
                </div>
                <h3>Texas NENA Addressing Manual</h3>
                <p>Complete guide to addressing standards in Texas</p>
                <a href="#" className={styles.resourceLink} onClick={(e) => e.preventDefault()}>
                  Download PDF <FaArrowRight className={styles.arrowIcon} />
                </a>
              </div>
              
              <div className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  <FaDownload />
                </div>
                <h3>GIS Data Standards</h3>
                <p>Technical specifications for GIS addressing data</p>
                <a href="#" className={styles.resourceLink} onClick={(e) => e.preventDefault()}>
                  Download PDF <FaArrowRight className={styles.arrowIcon} />
                </a>
              </div>
              
              <div className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  <FaDownload />
                </div>
                <h3>Sample Addressing Ordinance</h3>
                <p>Template for municipal addressing ordinances</p>
                <a href="#" className={styles.resourceLink} onClick={(e) => e.preventDefault()}>
                  Download PDF <FaArrowRight className={styles.arrowIcon} />
                </a>
              </div>
              
              <div className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  <FaDownload />
                </div>
                <h3>Address Point Creation Guide</h3>
                <p>Step-by-step guide for creating address points in GIS</p>
                <a href="#" className={styles.resourceLink} onClick={(e) => e.preventDefault()}>
                  Download PDF <FaArrowRight className={styles.arrowIcon} />
                </a>
              </div>
            </div>
            
            <div className={styles.trainingInfo}>
              <h3>Need Additional Training?</h3>
              <p>The RGV911 GIS Department offers training sessions on addressing standards for municipal staff. Contact us to schedule a training session for your team.</p>
              <Link href="/contact" className={styles.trainingButton}>
                Request Training <FaArrowRight className={styles.arrowIcon} />
              </Link>
            </div>
          </section>
        </div>
      </main>
      
      <div className={styles.contactInfo}>
        <div className={styles.container}>
          <h2>Contact the GIS Department</h2>
          <p>Phone: (956) 682-3481</p>
          <p>Email: gis@rgv911.org</p>
          <p>Address: 510 S Pleasantview Dr, Weslaco, TX 78596</p>
          <p>Hours: Monday - Friday: 8:00 AM - 5:00 PM</p>
          <div className={styles.ctaContainer}>
            <p>Have questions about addressing standards?</p>
            <Link href="/contact" className={styles.ctaButton}>Get in Touch</Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
