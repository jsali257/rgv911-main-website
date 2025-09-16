"use client";

import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import { FaInfoCircle, FaBook, FaRoad, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function RoadNamingGuidelines() {
  return (
    <div className={styles.page}>
      <Navbar />
      
      <div className={styles.container}>
        <Breadcrumb />
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <Image 
              src="/images/other/logo.png" 
              alt="RGV911 Logo" 
              width={180} 
              height={180} 
              className={styles.logo}
              quality={100}
              priority
              unoptimized
            />
          </div>
          <h1 className={styles.title}>Road Naming Guidelines</h1>
          <p className={styles.subtitle}>Revised 09-11-24</p>
          
          <div className={styles.actionButton}>
            <Link href="/street-name-request" className={styles.requestButton}>
              <FaFileAlt className={styles.buttonIcon} /> Submit Street Name Request
            </Link>
          </div>
        </div>
        
        <div className={styles.guidelinesContainer}>
          <div className={styles.sectionNav}>
            <h3>Quick Navigation</h3>
            <ul>
              <li><a href="#highway-name">Highway Name Characteristics</a></li>
              <li><a href="#road-name">Road Name Characteristics</a></li>
              <li><a href="#reserved-names">Reserved Road Names</a></li>
              <li><a href="#conventions">Road Naming Conventions</a></li>
              <li><a href="#requiring-names">Roads Requiring Names</a></li>
              <li><a href="#authority">Road Naming Authority</a></li>
              <li><a href="#naming">Naming of Roads</a></li>
              <li><a href="#renaming">Renaming of Roads</a></li>
              <li><a href="#procedures">Road Renaming Procedures</a></li>
            </ul>
          </div>
          
          <section id="highway-name" className={styles.guidelineSection}>
            <h2>Highway Name Characteristics</h2>
            <p>
              Highways under Federal jurisdiction shall maintain the characteristics and designations assigned
              by Federal public transportation authorities. Highways under State jurisdiction shall maintain
              the characteristics and designations assigned by State public transportation authorities. The
              elements of such a highway name, in proper order, are:
            </p>
            <ol>
              <li>
                The pre-directional limited to a two-character maximum and shall be one of the eight
                NENA approved abbreviated prefix directional indicators (i.e., N, E, W, S, NW, SW, NE,
                and SE). Is used to describe the location of the segment based on the address grid.
              </li>
              <li>
                The primary street name for a highway is a combination of the jurisdiction and the
                identifier. The jurisdiction indicates the public transportation authority maintaining and
                controlling the highway, abbreviated per RGV 9-1-1 GEOMSAG Standards, is used to
                distinguish between Federal and State highways bearing the same classification. The
                jurisdiction element is omitted for interstate highways and State highways of the Farm-to-
                Market class. The identifier is usually a number.
              </li>
              <li>
                The street type describes the type of roadway (i.e., LOOP, BY, RAMP, etc.). The street type
                should be Abbreviated per USPS Publication 28 Appendix C: Street Suffix(type)
                Abbreviations.
              </li>
              <li>
                The post-directional limited to a two-character maximum and shall be one of the four
                NENA approved abbreviated post-directional indicators (i.e., N, E, W, and S). Is used to
                describe the location of the segment based on the address grid.
              </li>
              <li>
                The combination of the pre-directional, primary street name, street type, and post-
                directional is equivalent to a full street name (e.g., E H107 W)
              </li>
            </ol>
          </section>
          
          <section id="road-name" className={styles.guidelineSection}>
            <h2>Road Name Characteristics</h2>
            <p>
              The characteristics of all roads in RGV 9-1-1, including highways, shall not exceed RGV 9-1-1
              Mapped ALI GIS DATA Requirements. Local jurisdictional database restrictions should be
              consulted as well. It is recommended the primary street name remain under 30 characters given
              that long street names increase street sign costs, complicate map annotation and can be difficult
              to verbalize in an emergency situation. The elements of a road name, in proper logical order are:
            </p>
            <ol>
              <li>
                The pre-directional limited to a two-character maximum and shall be one of the eight
                NENA approved abbreviated prefix directional indicators (i.e., N, E, W, S, NW, SW, NE,
                and SE). Describes the location of the segment based on the address grid.
              </li>
              <li>
                The primary street name, an essential element, is the parent name of the road.
              </li>
              <li>
                The street type, an essential element, which indicates the road type (e.g., ST, DR, AVE,
                LN, etc.). The street type should be abbreviated as per USPS Publication 28 Appendix C:
                Street Suffix Abbreviations.
              </li>
              <li>
                The post directional is limited to one-character maximum and describes the location of
                the street on a specific area. (i.e., N, S, E, and W).
              </li>
            </ol>
          </section>
          
          <section id="reserved-names" className={styles.guidelineSection}>
            <h2>Reserved Road Names</h2>
            <p>
              It is recommended that road names which are approved on a preliminary plat may be held in
              reserve for one year from the date of approval. If final platting does not occur within one year
              from the date of approval of the preliminary plat, approval and reservation of those names is null
              and void, unless an extension of time is granted to that particular platting. (proof of extension
              approved by County Planning Department will be required). Consulting neighboring
              jurisdictions when reserving road names which are located in emergency services areas is
              recommended. In addition, it is recommended each jurisdiction provide developers or engineers
              an outline of road naming guidelines and/or a listing of current reserved road names.
            </p>
            <p>
              The following should be considered when reviewing street names for reservation:
            </p>
            <ul>
              <li>Current and reserved street names</li>
              <li>Proximity to a similarly sounding street name.</li>
              <li>Street name spelling and/or phonetic duplication</li>
              <li>Existing streets in adjoining plats (street name continuity)</li>
              <li>Streets in adjoining plats not yet recorded (street name continuity)</li>
            </ul>
          </section>
          
          <section id="conventions" className={styles.guidelineSection}>
            <h2>Road Naming Conventions</h2>
            <ol className={styles.alphaList}>
              <li>Each highway and road shall have only one official name.</li>
              <li>For highways under Federal jurisdiction, the official highway name shall be assigned by
                Federal public transportation authorities.</li>
              <li>For State highways under local jurisdiction, the official highway name shall be assigned
                by local public transportation authority; or, if no local name has been assigned, the
                official highway name shall be that assigned State public transportation authorities.</li>
              <li>The official names of roads shall be those finally approved by local county authorities as
                provided by State law.</li>
              <li>A road name should be appropriate with a short primary street name (so that is easy to
                read and remember in an emergency), and may promote tradition, history, geography, and
                character.</li>
              <li>Complicated words of unconventional spellings should not be used for primary street
                names.</li>
              <li>Road Names that are obviously offensive, libelous, or derogatory in spelling or
                pronunciation are discouraged.</li>
              <li>A highway or road should be essentially continuous, without gaps.</li>
              <li>Where applicable, each continual road shall have the same primary street name and street
                suffix throughout its entire length, regardless of the boundaries of local political
                subdivisions.</li>
              <li>A proposed or new road that is obviously an extension of an existing named road shall
                bear that assigned name of the existing road.</li>
              <li>Alias road names are not recommended.</li>
              <li>Special characters are not permitted in road names (i.e., hyphens, periods, apostrophes,
                etc.).</li>
              <li>A primary street name should not be a street suffix, type or directional (e.g., AVE OF
                CEDARS or BLVD BLUE) shall not occur.</li>
              <li>The alteration or inversion of the proper, logical order of road name elements (e.g., AVE
                OF CEDARS or BLVD BLUE) shall not occur.</li>
              <li>Roman numerals shall not be used in a road name.</li>
              <li>Numeric street names should be spelled out but abbreviated. (i.e., 8th ST instead EIGHT
                ST)</li>
              <li>USPS route numbers shall not be used as road names.</li>
              <li>Numbers (spelled out or otherwise) shall not be used in street names that are not a part of
                an existing sequential order of street names. Examples are:
                <ul>
                  <li>Thousand Oaks Dr</li>
                  <li>Two Pennies Dr</li>
                </ul>
              </li>
              <li>There shall be no duplication of road names withing a service area except in extenuating
                circumstances, i.e., one short cul-de-sac and/or one short loop that intersects no other
                street than the parent street, ma bear the primary street name of the said street, but with a
                different street suffix. Examples of duplicate road names are:
                <ul>
                  <li>CATHY LANE compared to KATHY LANE.</li>
                  <li>LAKE VIEW ROAD compared to LAKEVIEW ROAD.</li>
                  <li>JONDO STREET compared to JONDO CROSSING or HONDO STREET.</li>
                  <li>PINE TREE LANE compared to PINE TREES LANE or PINES TREE LANE.</li>
                  <li>MAIN PARKWAY compared to MAIN STREET.</li>
                </ul>
              </li>
              <li>Street suffixes and directionals shall not be combined with primary street names for the
                sole purpose of avoiding road name duplication.</li>
              <li>Every road name shall have a corresponding standard street type that complies with RGV
                9-1-1 GEOMSAG Standards. Some addressing jurisdictions have restrictions on used for
                particular street types. Some examples are Cul-de-sacs shall use Court, Cove or Place;
                Street that loop or circle around shall use Loop, Circle or Bend. Local addressing
                guidelines should be consulted.</li>
              <li>Street names shall not exceed a total of 30 letters and/or spaces, including street type and
                direction.</li>
            </ol>
          </section>
          
          <section id="requiring-names" className={styles.guidelineSection}>
            <h2>Roads Requiring Names</h2>
            <ol className={styles.alphaList}>
              <li>All publicly maintained roads shall be named and signed.</li>
              <li>Any road, regardless of length, that provides easement to more than two properties or more
                than two structures in the same property should be named and signed under the following
                circumstances:
                <ol>
                  <li>The location or arrangement of the buildings confuses or hinders consistent
                    address assignment from a named road.</li>
                  <li>A named road intersects the road, but due to topography or distance, buildings
                    along the unnamed road are not easily viewed or located from the named
                    intersecting road.</li>
                  <li>Naming of the road is necessary to adequately direct emergency responders to a
                    building(s) or uniquely owned properties.</li>
                </ol>
              </li>
              <li>Any road that leads to one or more roads that provide easement to uniquely
                owned properties or buildings should be named and signed.</li>
              <li>A private restricted road may not require naming, and will be treated as a driveway when
                road is:
                <ol>
                  <li>The easement to a single structure in one property; and,</li>
                  <li>Entered from a named road, allowing address assignment at that intersection.</li>
                </ol>
              </li>
              <li>A driveway need not to be named even if the driveway serves multiple buildings in the
                same property if the buildings are visible and facing a named road intersecting the
                driveway.</li>
              <li>Road names shall comply with the intent of the standards and conventions of these
                guidelines.</li>
              <li>The naming or final name approval of a privately maintained road by the County or a
                City shall not constitute nor imply acceptance of the road for public maintenance.</li>
              <li>Preliminary Subdivisions: New subdivisions will require road name assignment by
                developer or engineer with the approval from RGV 9-1-1 Department prior to final plat
                certification.</li>
            </ol>
          </section>
          
          <section id="authority" className={styles.guidelineSection}>
            <h2>Road Naming Authority</h2>
            <p>
              Except as otherwise set forth in these guidelines, final authority for road names rests with the
              County Commissioner's Court for roads in the unincorporated areas of the county, and with the
              Councils of the Cities for roads within their respective jurisdictions.
            </p>
          </section>
          
          <section id="naming" className={styles.guidelineSection}>
            <h2>Naming of Roads</h2>
            <ol className={styles.alphaList}>
              <li>The naming of public access roads and private restricted roads usually occurs through the
                process of approved subdivision platting, or as otherwise provided by State law and local
                government rules, regulations and guidelines.</li>
              <li>Persons desiring to name a new or previously unnamed public access road or private
                restricted road shall submit an application to respective Precinct if road is in rural area or
                Cities if road is within City jurisdiction.</li>
              <li>Proceedings to name an unnamed existing road may be initiated by the affected address
                coordinator or by petition of landowners along the road, by application to the proper local
                authority.</li>
            </ol>
          </section>
          
          <section id="renaming" className={styles.guidelineSection}>
            <h2>Renaming of Roads</h2>
            <ol className={styles.alphaList}>
              <li>Reasons to rename an existing road are:
                <ol>
                  <li>To eliminate duplication and confusion</li>
                  <li>When a permanent gap occurs in a previous continuous road.</li>
                  <li>To change the classification, type or status of the road.</li>
                  <li>To correct misspelling</li>
                  <li>To improve or maintain continuity and parity of street numbering</li>
                  <li>To provide a required street type or directional</li>
                  <li>To recognize a person or organization</li>
                </ol>
              </li>
              <li>If an existing road requires renaming because of duplication within a service area,
                because of non-compliance with these guidelines, or for one or more of the other reasons
                listed in Section 508, Paragraph "A", the procedures of Section 509 shall be followed.</li>
            </ol>
          </section>
          
          <section id="procedures" className={styles.guidelineSection}>
            <h2>Road Renaming Procedures</h2>
            <p>
              Proceedings to rename an existing road may be initiated by the addressing authority or by
              petition of landowners along the road, or by application to the proper local authority.
            </p>
          </section>
          
          <div className={styles.actionButton}>
            <Link href="/street-name-request" className={styles.requestButton}>
              <FaFileAlt className={styles.buttonIcon} /> Submit Street Name Request
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}