"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import { FaFilePdf, FaExternalLinkAlt, FaSearch, FaLayerGroup, FaDownload } from 'react-icons/fa';

export default function PDFMapsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // PDF map data
  const maps = [
    {
      id: 1,
      title: "City of Elsa Map",
      description: "Detailed map of the City of Elsa showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfElsa.PNG",
      url: "/pdf/maps/CityOfElsaMap.pdf",
      category: "city",
      tags: ["elsa", "city map", "streets"]
    },
    {
      id: 2,
      title: "City of Edcouch Map",
      description: "Detailed map of the City of Edcouch showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/Edcouch.PNG",
      url: "/pdf/maps/EdcouchMap.pdf",
      category: "city",
      tags: ["edcouch", "city map", "streets"]
    },
    {
      id: 3,
      title: "La Villa Map",
      description: "Detailed map of La Villa showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/LaVilla.PNG",
      url: "/pdf/maps/laVillaMap.pdf",
      category: "city",
      tags: ["la villa", "city map", "streets"]
    },
    {
      id: 4,
      title: "City Of Mercedes Map",
      description: "Detailed map of the City of Mercedes showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfMercedes.PNG",
      url: "/pdf/maps/CityOfMercedesMap.pdf",
      category: "city",
      tags: ["city of mercedes", "city map", "streets"]
    },
    {
      id: 6,
      title: "City Of Weslaco Map",
      description: "Detailed map of the City of Weslaco showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfWeslaco.PNG",
      url: "/pdf/maps/CityOfWeslacoMap.pdf",
      category: "city",
      tags: ["city of weslaco", "city map", "streets"]
    },
    {
      id: 7,
      title: "City Of Donna Map",
      description: "Detailed map of the City of Donna showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfDonna.PNG",
      url: "/pdf/maps/CityOfDonnaMap.pdf",
      category: "city",
      tags: ["city of donna", "city map", "streets"]
    },
    {
      id: 8,
      title: "City Of Alamo Map",
      description: "Detailed map of the City of Alamo showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfAlamo.PNG",
      url: "/pdf/maps/CityOfAlamoMap.pdf",
      category: "city",
      tags: ["city of alamo", "city map", "streets"]
    },
    {
      id: 9,
      title: "City Of San Juan Map",
      description: "Detailed map of the City of San Juan showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfSanJuan.PNG",
      url: "/pdf/maps/CityOfSanJuanMap.pdf",
      category: "city",
      tags: ["city of san juan", "city map", "streets"]
    },
    {
      id: 10,
      title: "City Of Pharr Map",
      description: "Detailed map of the City of Pharr showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfPharr.PNG",
      url: "/pdf/maps/CityOfPharrMap.pdf",
      category: "city",
      tags: ["city of pharr", "city map", "streets"]
    },

    // Additional maps can be added here as they become available
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
                <FaFilePdf className={styles.titleIcon} />
                PDF Maps
              </h1>
              <p className={styles.heroText}>
                Access our collection of downloadable PDF maps for Hidalgo and Willacy counties. 
                These maps provide detailed information about city boundaries, streets, and key landmarks.
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
              className={`${styles.filterButton} ${activeFilter === 'city' ? styles.active : ''}`}
              onClick={() => setActiveFilter('city')}
            >
              City Maps
            </button>
            {/* Additional filter buttons can be added as needed */}
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
                  <div className={styles.mapActions}>
                    <a 
                      href={map.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.mapLink}
                    >
                      Open PDF <FaExternalLinkAlt />
                    </a>
                    <a 
                      href={map.url} 
                      download
                      className={styles.downloadLink}
                    >
                      Download <FaDownload />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>About Our PDF Maps</h2>
            <p className={styles.infoText}>
              The RGV911 GIS Department maintains a comprehensive set of geographic information systems and maps 
              to support emergency services in Hidalgo and Willacy counties. These PDF maps are regularly updated 
              to ensure accuracy and reliability for emergency response and planning purposes.
            </p>
            <p className={styles.infoText}>
              For questions about our maps or to request specific map PDFs, please contact our 
              GIS Department at <a href="mailto:gis@rgv911.org" className={styles.emailLink}>gis@rgv911.org</a>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
