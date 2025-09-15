"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Weather from "./Weather";
import DateTime from "./DateTime";
import Accessibility from "./Accessibility";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [requestsOpen, setRequestsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [howDoIOpen, setHowDoIOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  // Handle scroll event to make navbar sticky only when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      // Get the top navbar height to determine when to make the main navbar sticky
      const topNavbarHeight = document.querySelector(`.${styles.topNavbar}`)?.offsetHeight || 0;
      
      // Make navbar sticky when scrolled past the top navbar
      if (window.scrollY > topNavbarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <div className={styles.topNavbar}>
        <div className={styles.topNavContainer}>
          <div className={styles.topNavLeft}>
            <div className={styles.navLogo}>
              <div className={styles.logoWrapper}>
                <Image
                  src="https://gis.rgv911.org/911-2-img.png"
                  alt="RGV911 Logo"
                  width={40}
                  height={40}
                  priority
                  quality={100}
                  className={styles.logoImage}
                  unoptimized
                />
                <div className={styles.logoText}>
                  <div className={styles.logoTitleWrapper}>
                    <span className={styles.logoTitle}>RGV 9-1-1</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Phone number removed from left side */}
          </div>
          
          <div className={styles.topNavCenter}>
            <div className={styles.searchContainer}>
              <input 
                type="text" 
                placeholder="Search..." 
                className={styles.searchInput} 
              />
              <button className={styles.searchButton}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className={styles.topNavRight}>
            <div className={styles.topNavLinks}>
              <Link href="/about" className={styles.topNavLink}>About Us</Link>
              <Link href="/contact" className={styles.topNavLink}>Contact Us</Link>
              <div className={styles.topNavDropdown}>
                <span className={styles.topNavLink}>How Do I?</span>
                <div className={styles.topNavDropdownMenu}>
                  <Link href="/how-do-i/report-emergency" className={styles.topNavDropdownItem}>Report an Emergency</Link>
                  <Link href="/how-do-i/request-address" className={styles.topNavDropdownItem}>Request a 911 Address</Link>
                  <Link href="/how-do-i/file-complaint" className={styles.topNavDropdownItem}>File a Complaint</Link>
                  <Link href="/how-do-i/volunteer" className={styles.topNavDropdownItem}>Volunteer</Link>
                  <Link href="/how-do-i/training" className={styles.topNavDropdownItem}>Get Training</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.phoneNumber}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <a href="tel:9566823481" className={styles.phoneLink}>(956) 682-3481</a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation Bar */}
      <nav className={`${styles.navbar} ${isSticky ? styles.navbarSticky : ''}`}>
        <div className={styles.navContainer}>
          {/* Mobile Logo - Only visible on mobile */}
          <div className={styles.mobileNavLogo}>
            <div className={styles.logoWrapper}>
              <Image
                src="https://gis.rgv911.org/911-2-img.png"
                alt="RGV911 Logo"
                width={40}
                height={40}
                priority
                quality={100}
                className={styles.logoImage}
                unoptimized
              />
              <div className={styles.logoText}>
                <div className={styles.logoTitleWrapper}>
                  <span className={styles.logoTitle}>RGV 9-1-1</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.spacer}></div>
          
          <button
            className={`${styles.mobileMenuBtn} ${isSidebarOpen ? styles.active : ''}`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle menu"
          >
            <div className={styles.hamburgerIcon}>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </div>
          </button>

        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink} style={{ "--animation-order": 1 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link href="/executive-director" className={styles.navLink} style={{ "--animation-order": 2 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Executive Director
            </Link>
          </li>
          <li>
            <Link href="/board-of-managers" className={styles.navLink} style={{ "--animation-order": 3 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Board of Managers
            </Link>
          </li>
          <li>
            <Link href="/meetings" className={styles.navLink} style={{ "--animation-order": 4 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Meetings
            </Link>
          </li>
          <li className={styles.dropdown}>
            <div className={styles.navLink} style={{ "--animation-order": 5 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              Departments
              <svg className={styles.dropdownIcon} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.dropdownMenu}>
              <Link href="/departments/gis" className={styles.dropdownItem}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                </svg>
                GIS
              </Link>
              <Link href="/departments/it" className={styles.dropdownItem}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
                IT
              </Link>
              <Link href="/departments/public-education" className={styles.dropdownItem}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Public Education
              </Link>
            </div>
          </li>
          <li className={styles.dropdown}>
            <div className={styles.navLink} style={{ "--animation-order": 6 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
              </svg>
              Requests
              <svg className={styles.dropdownIcon} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.dropdownMenu}>
              {/* GIS Requests Section */}
              <div className={styles.dropdownSection}>
                <div className={styles.dropdownSectionTitle}>GIS Requests</div>
                <Link href="#" className={styles.dropdownItem}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Request a 911 Address
                </Link>
                <Link href="#" className={styles.dropdownItem}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  Subdivision Request
                </Link>
                <Link href="#" className={styles.dropdownItem}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Utility Request
                </Link>
                <Link href="#" className={styles.dropdownItem}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                  Street Name Request
                </Link>
                <Link href="#" className={styles.dropdownItem}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Cities/Precinct Request
                </Link>
              </div>
              
              {/* Pub Ed Requests Section */}
              <div className={styles.dropdownSection}>
                <div className={styles.dropdownSectionTitle}>Pub Ed Requests</div>
                <Link href="https://survey123.arcgis.com/share/d3bd9eabf54e42f9a3b169e41e4d01a2" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  Event Request
                </Link>
              </div>
              
              {/* IT Requests Section */}
              <div className={styles.dropdownSection}>
                <div className={styles.dropdownSectionTitle}>IT Requests</div>
                <Link href="#" className={styles.dropdownItem}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  User List Form
                </Link>
                <Link href="#" className={styles.dropdownItem}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                  PSAP Training Form
                </Link>
              </div>
            </div>
          </li>
          <li className={styles.dropdown}>
            <div className={styles.navLink} style={{ "--animation-order": 7 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Resources
              <svg className={styles.dropdownIcon} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.dropdownMenu}>
              <Link href="/resources/maps" className={styles.dropdownItem}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                </svg>
                Maps
              </Link>
              <a href="https://www.rgv911.org/search" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Data Downloads
              </a>
            </div>
          </li>
          <li>
            <Link href="/faq" className={styles.navLink} style={{ "--animation-order": 8 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              FAQs
            </Link>
          </li>
        </ul>
        
        {/* Social icons removed for simpler layout */}
        </div>
      </nav>
    
    {/* Mobile Sidebar */}
    <div className={`${styles.overlay} ${isSidebarOpen ? styles.overlayVisible : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarLogo}>
          <Image
            src="https://gis.rgv911.org/911-2-img.png"
            alt="RGV911 Logo"
            width={60}
            height={60}
            priority
          />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>RGV</span>
            <span className={styles.logoNumber}>9-1-1</span>
          </div>
        </div>
        
        {/* Weather and Accessibility Section */}
        <div className={styles.sidebarTools}>
          <div className={styles.sidebarWeather}>
            <Weather />
          </div>
          <div className={styles.sidebarAccessibility}>
            <Accessibility />
          </div>
          <div className={styles.sidebarSearch}>
            <input 
              type="text" 
              placeholder="Search..." 
              className={styles.sidebarSearchInput} 
            />
            <button className={styles.sidebarSearchButton}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        
        <div className={styles.sidebarNav}>
        <Link href="/" className={styles.sidebarLink} onClick={() => setIsSidebarOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Home
        </Link>
        
        <Link href="/executive-director" className={styles.sidebarLink} onClick={() => setIsSidebarOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          Executive Director
        </Link>
        
        <Link href="/board-of-managers" className={styles.sidebarLink} onClick={() => setIsSidebarOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          Board of Managers
        </Link>
        
        <Link href="/meetings" className={styles.sidebarLink} onClick={() => setIsSidebarOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          Meetings
        </Link>
        
        <div className={styles.sidebarDropdown}>
          <div className={styles.sidebarLink} onClick={() => setDepartmentsOpen(!departmentsOpen)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            Departments
            <svg className={`${styles.dropdownIcon} ${departmentsOpen ? styles.rotate : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {departmentsOpen && (
            <div className={styles.sidebarSubmenu}>
              <Link href="/departments/gis" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                GIS
              </Link>
              <Link href="/departments/it" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                IT
              </Link>
              <Link href="/departments/public-education" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                Public Education
              </Link>
            </div>
          )}
        </div>
        
        <div className={styles.sidebarDropdown}>
          <div className={styles.sidebarLink} onClick={() => setRequestsOpen(!requestsOpen)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
            </svg>
            Requests
            <svg className={`${styles.dropdownIcon} ${requestsOpen ? styles.rotate : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {requestsOpen && (
            <div className={styles.sidebarSubmenu}>
              {/* GIS Requests */}
              <div className={styles.sidebarSubmenuSection}>
                <div className={styles.sidebarSubmenuTitle}>GIS Requests</div>
                <Link href="#" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                  Request a 911 Address
                </Link>
                <Link href="#" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                  Subdivision Request
                </Link>
                <Link href="#" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                  Utility Request
                </Link>
                <Link href="#" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                  Street Name Request
                </Link>
                <Link href="#" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                  Cities/Precinct Request
                </Link>
              </div>
              
              {/* Pub Ed Requests */}
              <div className={styles.sidebarSubmenuSection}>
                <div className={styles.sidebarSubmenuTitle}>Pub Ed Requests</div>
                <a href="https://survey123.arcgis.com/share/d3bd9eabf54e42f9a3b169e41e4d01a2" target="_blank" rel="noopener noreferrer" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                  Event Request
                </a>
              </div>
              
              {/* IT Requests */}
              <div className={styles.sidebarSubmenuSection}>
                <div className={styles.sidebarSubmenuTitle}>IT Requests</div>
                <Link href="#" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                  User List Form
                </Link>
                <Link href="#" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                  PSAP Training Form
                </Link>
              </div>
            </div>
          )}
        </div>
        
        <div className={styles.sidebarDropdown}>
          <div className={styles.sidebarLink} onClick={() => setResourcesOpen(!resourcesOpen)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Resources
            <svg className={`${styles.dropdownIcon} ${resourcesOpen ? styles.rotate : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {resourcesOpen && (
            <div className={styles.sidebarSubmenu}>
              <Link href="/resources/maps" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                Maps
              </Link>
              <a href="https://www.rgv911.org/search" target="_blank" rel="noopener noreferrer" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                Data Downloads
              </a>
            </div>
          )}
        </div>
        
        <Link href="/about" className={styles.sidebarLink} onClick={() => setIsSidebarOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          About Us
        </Link>
        
        <Link href="/contact" className={styles.sidebarLink} onClick={() => setIsSidebarOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Contact Us
        </Link>
        
        <div className={styles.sidebarDropdown}>
          <div className={styles.sidebarLink} onClick={() => setHowDoIOpen(!howDoIOpen)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            How Do I?
            <svg className={`${styles.dropdownIcon} ${howDoIOpen ? styles.rotate : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {howDoIOpen && (
            <div className={styles.sidebarSubmenu}>
              <Link href="/how-do-i/report-emergency" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                Report an Emergency
              </Link>
              <Link href="/how-do-i/request-address" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                Request a 911 Address
              </Link>
              <Link href="/how-do-i/file-complaint" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                File a Complaint
              </Link>
              <Link href="/how-do-i/volunteer" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                Volunteer
              </Link>
              <Link href="/how-do-i/training" className={styles.sidebarSublink} onClick={() => setIsSidebarOpen(false)}>
                Get Training
              </Link>
            </div>
          )}
        </div>
        
        <Link href="/faq" className={styles.sidebarLink} onClick={() => setIsSidebarOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          FAQs
        </Link>
        
        <Link href="tel:9566823481" className={styles.sidebarLink}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          (956) 682-3481
        </Link>
        
        <div className={styles.sidebarSocial}>
          <a href="https://www.facebook.com/rgv911" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="https://twitter.com/rgv911" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/rgv911" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
