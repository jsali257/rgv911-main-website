"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { FaMapMarkedAlt, FaExternalLinkAlt, FaSearch, FaLayerGroup } from 'react-icons/fa';

export default function MapsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Sample map data - this would typically come from an API or CMS
  const maps = [
    {
      id: 1,
      title: "RGV911 Public Map Viewer",
      description: "Interactive map showing emergency service zones, addresses, and public safety information for Hidalgo and Willacy counties.",
      thumbnail: "/images/other/gisMapBG.png",
      url: "https://experience.arcgis.com/experience/2f24bc7286e240f79085a892759f70b5",
      category: "public",
      tags: ["interactive", "emergency services", "addresses"]
    },
    {
      id: 2,
      title: "Emergency Responsers Map",
      description: "Search for street names and locations throughout the RGV911 service area.",
      thumbnail: "/images/other/EmergencyResponders.png",
      url: "https://experience.arcgis.com/experience/b9f4000ee3c54c9d970c6456e8955733",
      category: "public",
      tags: ["boundaries", "ems", "emergency services"]
    },
    {
      id: 3,
      title: "Hidalgo County Precinct and ESD Map",
      description: "Map showing the boundaries of emergency service zones in Hidalgo and Willacy counties.",
      thumbnail: "/images/other/ESD.png",
      url: "https://experience.arcgis.com/experience/c4b5492de50a49cc85699d3569ae0035",
      category: "emergency",
      tags: ["zones", "boundaries", "esd"]
    },
    {
      id: 4,
      title: "EMS Map",
      description: "Tool for locating and verifying address points in the RGV911 system.",
      thumbnail: "/images/other/EMS.png",
      url: "https://rgv911.maps.arcgis.com/apps/webappviewer/index.html?id=ba0e0e4ee3ae48eaa24f74990bac8832",
      category: "public",
      tags: ["ems", "search", "emergency services"]
    },
    {
      id: 5,
      title: "PSAP Coverage Map",
      description: "Map showing the coverage areas for Public Safety Answering Points in the region.",
      thumbnail: "/images/other/PSAP.png",
      url: "https://experience.arcgis.com/experience/d4a16a3b04ce475b89078a34f9a5f1eb",
      category: "emergency",
      tags: ["psap", "coverage", "emergency services"]
    },
    {
      id: 6,
      title: "Mexico Calls 2023",
      description: "Find and view subdivision boundaries and information.",
      thumbnail: "/images/other/MexicoCalls.png",
      url: "https://experience.arcgis.com/experience/0837c3159a754a6d8abdf5e1e616d632",
      category: "public",
      tags: ["calls", "lookup", "emergency services"]
    },
    {
      id: 7,
      title: "Hidalgo County Echo Sectors",
      description: "Find and view subdivision boundaries and information.",
      thumbnail: "/images/other/EchoSectors.png",
      url: "https://rgv911.maps.arcgis.com/apps/webappviewer/index.html?id=d01c01470bb243e2b16ead8f899fbbc2",
      category: "public",
      tags: ["echo sectors", "boundaries", "emergency services"]
    }
  ];
  
  // Filter maps based on active filter
  const filteredMaps = activeFilter === 'all' 
    ? maps 
    : maps.filter(map => map.category === activeFilter);
  
  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <Breadcrumb />
          <div className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.pageTitle}>
                <FaMapMarkedAlt className={styles.titleIcon} />
                Interactive Maps
              </h1>
              <p className={styles.heroText}>
                Explore our collection of interactive maps and GIS resources for Hidalgo and Willacy counties. 
                These tools provide valuable information for emergency services, address verification, and public safety.
              </p>
            </div>
          </div>
          
          <div className={styles.filtersContainer}>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              <FaLayerGroup /> All Maps
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'public' ? styles.active : ''}`}
              onClick={() => setActiveFilter('public')}
            >
              Public Maps
            </button>
            <button 
              className={`${styles.filterButton} ${activeFilter === 'emergency' ? styles.active : ''}`}
              onClick={() => setActiveFilter('emergency')}
            >
              Emergency Services
            </button>
          </div>
          
          <div className={styles.mapsGrid}>
            {filteredMaps.map(map => (
              <div key={map.id} className={styles.mapCard}>
                <div className={styles.mapThumbnail}>
                  <Image 
                    src={map.thumbnail} 
                    alt={map.title}
                    width={400}
                    height={250}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.mapOverlay}>
                    <a 
                      href={map.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.viewMapButton}
                    >
                      <FaSearch /> View Map
                    </a>
                  </div>
                </div>
                <div className={styles.mapInfo}>
                  <h3 className={styles.mapTitle}>
                    {map.title}
                  </h3>
                  <p className={styles.mapDescription}>
                    {map.description}
                  </p>
                  <div className={styles.mapTags}>
                    {map.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={map.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.mapLink}
                  >
                    Open Map <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>About Our Maps</h2>
            <p className={styles.infoText}>
              The RGV911 GIS Department maintains a comprehensive set of geographic information systems and maps 
              to support emergency services in Hidalgo and Willacy counties. These maps are regularly updated 
              to ensure accuracy and reliability for emergency response.
            </p>
            <p className={styles.infoText}>
              For questions about our maps or to request specific GIS data, please contact our 
              GIS Department at <a href="mailto:gis@rgv911.org" className={styles.emailLink}>gis@rgv911.org</a>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
