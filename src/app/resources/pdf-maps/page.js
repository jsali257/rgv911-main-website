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
      tags: ["elsa", "city map", "streets", "hidalgo county"]
    },
    {
      id: 2,
      title: "City of Edcouch Map",
      description: "Detailed map of the City of Edcouch showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/Edcouch.PNG",
      url: "/pdf/maps/EdcouchMap.pdf",
      category: "city",
      tags: ["edcouch", "city map", "streets", "hidalgo county"]
    },
    {
      id: 3,
      title: "La Villa Map",
      description: "Detailed map of La Villa showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/LaVilla.PNG",
      url: "/pdf/maps/laVillaMap.pdf",
      category: "city",
      tags: ["la villa", "city map", "streets", "hidalgo county"]
    },
    {
      id: 4,
      title: "City Of Mercedes Map",
      description: "Detailed map of the City of Mercedes showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfMercedes.PNG",
      url: "/pdf/maps/CityOfMercedesMap.pdf",
      category: "city",
      tags: ["city of mercedes", "city map", "streets", "hidalgo county"]
    },
    {
      id: 6,
      title: "City Of Weslaco Map",
      description: "Detailed map of the City of Weslaco showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfWeslaco.PNG",
      url: "/pdf/maps/CityOfWeslacoMap.pdf",
      category: "city",
      tags: ["city of weslaco", "city map", "streets", "hidalgo county"]
    },
    {
      id: 7,
      title: "City Of Donna Map",
      description: "Detailed map of the City of Donna showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfDonna.PNG",
      url: "/pdf/maps/CityOfDonnaMap.pdf",
      category: "city",
      tags: ["city of donna", "city map", "streets", "hidalgo county"]
    },
    {
      id: 8,
      title: "City Of Alamo Map",
      description: "Detailed map of the City of Alamo showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfAlamo.PNG",
      url: "/pdf/maps/CityOfAlamoMap.pdf",
      category: "city",
      tags: ["city of alamo", "city map", "streets", "hidalgo county"]
    },
    {
      id: 9,
      title: "City Of San Juan Map",
      description: "Detailed map of the City of San Juan showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfSanJuan.PNG",
      url: "/pdf/maps/CityOfSanJuanMap.pdf",
      category: "city",
      tags: ["city of san juan", "city map", "streets", "hidalgo county"]
    },
    {
      id: 10,
      title: "City Of Pharr Map",
      description: "Detailed map of the City of Pharr showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfPharr.PNG",
      url: "/pdf/maps/CityOfPharrMap.pdf",  
      category: "city",
      tags: ["city of pharr", "city map", "streets", "hidalgo county"]
    },
    {
      id: 11,
      title: "City Of Mission Map",
      description: "Detailed map of the City of Mission showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfMission.PNG",
      url: "/pdf/maps/CityOfMissionMap.pdf",
      category: "city",
      tags: ["city of mission", "city map", "streets", "hidalgo county"]
    },
    {
      id: 12,
      title: "City Of Alton Map",
      description: "Detailed map of the City of Alton showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfAlton.PNG",
      url: "/pdf/maps/CityOfAltonMap.pdf",
      category: "city",
      tags: ["city of alton", "city map", "streets", "hidalgo county"]
    },
    {
      id: 13,
      title: "City Of McAllen Map",
      description: "Detailed map of the City of McAllen showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfMcAllen.PNG",
      url: "/pdf/maps/CityOfMcAllenMap.pdf",
      category: "city",
      tags: ["city of mcallen", "city map", "streets", "hidalgo county"]
    },
    {
      id: 14,
      title: "City Of Palmview Map",
      description: "Detailed map of the City of Palmview showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfPalmview.PNG",
      url: "/pdf/maps/CityOfPalmviewMap.pdf",
      category: "city",
      tags: ["city of palmview", "city map", "streets", "hidalgo county"]
    },
    {
      id: 15,
      title: "City Of Hidalgo Map",
      description: "Detailed map of the City of Hidalgo showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfHidalgo.PNG",
      url: "/pdf/maps/CityOfHidalgoMap.pdf",
      category: "city",
      tags: ["city of hidalgo", "city map", "streets", "hidalgo county"]
    },
    {
      id: 16,
      title: "City Of Granjeno Map",
      description: "Detailed map of the City of Granjeno showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfGranjeno.PNG",
      url: "/pdf/maps/CityOfGranjenoMap.pdf",
      category: "city",
      tags: ["city of granjeno", "city map", "streets", "hidalgo county"]
    },
    {
      id: 17,
      title: "City Of Palmhurst Map",
      description: "Detailed map of the City of Palmhurst showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfPalmhurst.PNG",
      url: "/pdf/maps/CityOfPalmhurstMap.pdf",
      category: "city",
      tags: ["city of palmhurst", "city map", "streets", "hidalgo county"]
    },
    {
      id: 18,
      title: "City Of Edinburg Map",
      description: "Detailed map of the City of Edinburg showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfEdinburg.PNG",
      url: "/pdf/maps/CityOfEdinburgMap.pdf",
      category: "city",
      tags: ["city of edinburg", "city map", "streets", "hidalgo county"]
    },
    {
      id: 19,
      title: "City Of Penitas Map",
      description: "Detailed map of the City of Penitas showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfPenitas.PNG",
      url: "/pdf/maps/CityOfPenitasMap.pdf",
      category: "city",
      tags: ["city of penitas", "city map", "streets", "hidalgo county"]
    },
    {
      id: 20,
      title: "City Of La Joya Map",
      description: "Detailed map of the City of La Joya showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfLaJoya.PNG",
      url: "/pdf/maps/CityOfLaJoyaMap.pdf",
      category: "city",
      tags: ["city of la joya", "city map", "streets", "hidalgo county"]
    },
    {
      id: 21,
      title: "Sullivan City Map",
      description: "Detailed map of the Sullivan City showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/SullivanCity.PNG",
      url: "/pdf/maps/SullivanCityMap.pdf",
      category: "city",
      tags: ["sullivan city", "city map", "streets", "hidalgo county"]
    },
    {
      id: 22,
      title: "City Of Lyford Map",
      description: "Detailed map of the City of Lyford showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfLyford.PNG",
      url: "/pdf/maps/CityOfLyfordMap.pdf",
      category: "city",
      tags: ["city of lyford", "city map", "streets", "willacy county"]
    },
    {
      id: 23,
      title: "City Of Raymondville Map",
      description: "Detailed map of the City of Raymondville showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfRaymondville.PNG",
      url: "/pdf/maps/CityOfRaymondvilleMap.pdf",
      category: "city",
      tags: ["city of raymondville", "city map", "streets", "willacy county"]
    },
    {
      id: 24,
      title: "City Of Progreso Map",
      description: "Detailed map of the City of Progreso showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfProgreso.PNG",
      url: "/pdf/maps/CityOfProgresoMap.pdf",
      category: "city",
      tags: ["city of progreso", "city map", "streets", "hidalgo county"]
    },
    {
      id: 25,
      title: "Progreso Lakes Map",
      description: "Detailed map of Progreso Lakes showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/ProgresoLakes.PNG",
      url: "/pdf/maps/ProgresoLakesMap.pdf",
      category: "city",
      tags: ["progreso lakes", "city map", "streets", "hidalgo county"]
    },
    {
      id: 26,
      title: "City Of San Perlita Map",
      description: "Detailed map of the City of San Perlita showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/CityOfSanPerlita.PNG",
      url: "/pdf/maps/CityOfSanPerlitaMap.pdf",
      category: "city",
      tags: ["city of san perlita", "city map", "streets", "willacy county"]
    },
    {
      id: 27,
      title: "ETJ Boundary Map",
      description: "Detailed map of the ETJ Boundary showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/ETJBoundary.PNG",
      url: "/pdf/maps/ETJBoundaryMap.pdf",
      category: "boundary",
      tags: ["etj boundary", "boundary map", "streets"]
    },
    {
      id: 28,
      title: "EMS Boundary Map",
      description: "Detailed map of the EMS Boundary showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/EMSBoundary.PNG",
      url: "/pdf/maps/EMSBoundaryMap.pdf",
      category: "boundary",
      tags: ["ems boundary", "boundary map", "streets"]
    },
    {
      id: 29,
      title: "Fire Boundary Map",
      description: "Detailed map of the Fire Boundary showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/FireBoundary.PNG",
      url: "/pdf/maps/FireBoundaryMap.pdf",
      category: "boundary",
      tags: ["fire boundary", "boundary map", "streets"]
    },
    {
      id: 30,
      title: "ESN Boundary Map",
      description: "Detailed map of the ESN Boundary showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/ESNBoundary.PNG",
      url: "/pdf/maps/ESNBoundaryMap.pdf",
      category: "boundary",
      tags: ["esn boundary", "boundary map", "streets"]
    },
    {
      id: 31,
      title: "PSAP Boundary Map",
      description: "Detailed map of the PSAP Boundary showing streets, boundaries, and key landmarks.",
      thumbnail: "/images/other/PSAPBoundary.PNG",
      url: "/pdf/maps/PSAPBoundaryMap.pdf",
      category: "boundary",
      tags: ["psap boundary", "boundary map", "streets"]
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
            <button 
              className={`${styles.filterButton} ${activeFilter === 'boundary' ? styles.active : ''}`}
              onClick={() => setActiveFilter('boundary')}
            >
              Boundary Maps
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
