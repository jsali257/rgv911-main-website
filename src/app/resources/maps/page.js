"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
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
      url: "https://gis.rgv911.org/portal/apps/webappviewer/index.html?id=5c91b8fa8c8b4b5e8f5f7b7a9e7b3f1a",
      category: "public",
      tags: ["interactive", "emergency services", "addresses"]
    },
    {
      id: 2,
      title: "Street Name Lookup",
      description: "Search for street names and locations throughout the RGV911 service area.",
      thumbnail: "/images/other/gisMapBG.png",
      url: "https://gis.rgv911.org/portal/apps/webappviewer/index.html?id=2c91b8fa8c8b4b5e8f5f7b7a9e7b3f1b",
      category: "public",
      tags: ["search", "streets", "lookup"]
    },
    {
      id: 3,
      title: "Emergency Service Zones",
      description: "Map showing the boundaries of emergency service zones in Hidalgo and Willacy counties.",
      thumbnail: "/images/other/gisMapBG.png",
      url: "https://gis.rgv911.org/portal/apps/webappviewer/index.html?id=3c91b8fa8c8b4b5e8f5f7b7a9e7b3f1c",
      category: "emergency",
      tags: ["zones", "boundaries", "emergency services"]
    },
    {
      id: 4,
      title: "Address Point Finder",
      description: "Tool for locating and verifying address points in the RGV911 system.",
      thumbnail: "/images/other/gisMapBG.png",
      url: "https://gis.rgv911.org/portal/apps/webappviewer/index.html?id=4c91b8fa8c8b4b5e8f5f7b7a9e7b3f1d",
      category: "public",
      tags: ["addresses", "search", "verification"]
    },
    {
      id: 5,
      title: "PSAP Coverage Map",
      description: "Map showing the coverage areas for Public Safety Answering Points in the region.",
      thumbnail: "/images/other/gisMapBG.png",
      url: "https://gis.rgv911.org/portal/apps/webappviewer/index.html?id=5c91b8fa8c8b4b5e8f5f7b7a9e7b3f1e",
      category: "emergency",
      tags: ["PSAP", "coverage", "emergency services"]
    },
    {
      id: 6,
      title: "Subdivision Lookup",
      description: "Find and view subdivision boundaries and information.",
      thumbnail: "/images/other/gisMapBG.png",
      url: "https://gis.rgv911.org/portal/apps/webappviewer/index.html?id=6c91b8fa8c8b4b5e8f5f7b7a9e7b3f1f",
      category: "public",
      tags: ["subdivisions", "boundaries", "lookup"]
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
