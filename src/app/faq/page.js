"use client";

import { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaExternalLinkAlt } from 'react-icons/fa';

export default function FAQ() {
  // State to track which FAQ item is open
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // FAQ data
  const faqItems = [
    {
      question: "What is it that you all do at 9-1-1?",
      answer: "We assign 9-1-1 physical addresses to residents who live outside city limits, in the unincorporated areas of Hidalgo and Willacy counties. These addresses ensure emergency responders can locate you quickly when you call 9-1-1."
    },
    {
      question: "What is the importance of 9-1-1 Physical Address?",
      answer: "Knowing your 9-1-1 Physical Address is crucial in an emergency. It allows Police, EMS, and Fire Departments to locate you quickly and accurately when seconds matter."
    },
    {
      question: "How long does it take to get an address?",
      answer: "The average time to get a 9-1-1 Physical Address is 3-5 business days. However, delays may happen depending on how many applications are ahead of your request, the information provided, whether it requires data collection by our staff, or if the road would need to be named by Commissioners Court."
    },
    {
      question: "What is required to get a 9-1-1 physical address?",
      answer: (
        <>
          <p>To request a 9-1-1 physical address, you will need the following information:</p>
          <ul>
            <li>Legal Description of the property</li>
            <li>Property ID Number (PID)</li>
            <li>Tax Account Number</li>
          </ul>
          <p>This information can be found through your local appraisal district or in your property tax documentation:</p>
          <ul>
            <li>Hidalgo County Appraisal District — Phone: <a href="tel:9563818466" className={styles.linkText}>(956) 381-8466</a></li>
            <li>Willacy County Appraisal District — Phone: <a href="tel:9566895979" className={styles.linkText}>(956) 689-5979</a></li>
          </ul>
          <p className={styles.ctaLink}>
            <Link href="/request-911-address" className={styles.inlineLink}>
              Request a 9-1-1 Address <FaExternalLinkAlt className={styles.linkIcon} />
            </Link>
          </p>
        </>
      )
    },
    {
      question: "Do you provide keys or mailboxes for mail delivery?",
      answer: "No, we do not provide keys or mailboxes for mail delivery. All matters related to mailboxes, keys, and mail delivery services are handled directly by the United States Postal Service (USPS). Please contact your local post office for assistance with mail delivery equipment."
    },
    {
      question: "What is the difference between 9-1-1 address and mailing address?",
      answer: "The difference is one is for mail delivery only and the 9-1-1 Address is so that Emergency Responders can locate you in case of an emergency."
    },
    {
      question: "What is a Legal Description?",
      answer: (
        <>
          <p>A Legal Description is the official way to precisely describe a property's location for legal and tax purposes. It usually includes:</p>
          <ul>
            <li>The name of the subdivision</li>
            <li>The lot number within the subdivision</li>
            <li>Or, for undeveloped land, a description of the land or acreage purchased</li>
          </ul>
          <p>This description helps identify the exact boundaries and location of your property in official records.</p>
          <p>For more details or to find your property's legal description, visit your local appraisal district:</p>
          <ul>
            <li><a href="https://hidalgoad.org" target="_blank" rel="noopener noreferrer" className={styles.linkText}>Hidalgo County Appraisal District <FaExternalLinkAlt className={styles.smallIcon} /></a></li>
            <li><a href="https://willacycad.org" target="_blank" rel="noopener noreferrer" className={styles.linkText}>Willacy County Appraisal District <FaExternalLinkAlt className={styles.smallIcon} /></a></li>
          </ul>
        </>
      )
    },
    {
      question: "What is a Property ID?",
      answer: (
        <>
          <p>A Property ID Number (PID) is a unique 6- to 7-digit number assigned to each property by the Hidalgo or Willacy County Tax Office. This number is used to identify your property in tax records, appraisal documents, and legal transactions.</p>
          <p>You can find your Property ID on your property tax statement or by contacting your local appraisal district:</p>
          <ul>
            <li><a href="https://hidalgoad.org" target="_blank" rel="noopener noreferrer" className={styles.linkText}>Hidalgo County Appraisal District <FaExternalLinkAlt className={styles.smallIcon} /></a></li>
            <li><a href="https://willacycad.org" target="_blank" rel="noopener noreferrer" className={styles.linkText}>Willacy County Appraisal District <FaExternalLinkAlt className={styles.smallIcon} /></a></li>
          </ul>
        </>
      )
    },
    {
      question: "What is a Property Tax No.?",
      answer: (
        <>
          <p>The Property Tax Number is a unique 17-digit identifier assigned to your property by the Hidalgo or Willacy County Tax Appraisal Office. It usually starts with a letter and includes dashes or hyphens separating groups of numbers and zeros. This number is used for property tax assessments and official records.</p>
          <p>You can find this number on your property tax statements or by contacting your local appraisal district:</p>
          <ul>
            <li><a href="https://hidalgoad.org" target="_blank" rel="noopener noreferrer" className={styles.linkText}>Hidalgo County Appraisal District <FaExternalLinkAlt className={styles.smallIcon} /></a></li>
            <li><a href="https://willacycad.org" target="_blank" rel="noopener noreferrer" className={styles.linkText}>Willacy County Appraisal District <FaExternalLinkAlt className={styles.smallIcon} /></a></li>
          </ul>
        </>
      )
    },
    {
      question: "How do I get my Property ID or Tax Account No?",
      answer: (
        <>
          <p>You can obtain your Property ID or Tax Account Number by contacting your local tax appraisal office. They can provide this information based on your property details.</p>
          <ul>
            <li>Hidalgo County Tax Office — Phone: <a href="tel:9563818466" className={styles.linkText}>(956) 381-8466</a> | Website: <a href="https://hidalgoad.org" target="_blank" rel="noopener noreferrer" className={styles.linkText}>hidalgoad.org <FaExternalLinkAlt className={styles.smallIcon} /></a></li>
            <li>Willacy County Tax Office — Phone: <a href="tel:9566895979" className={styles.linkText}>(956) 689-5979</a> | Website: <a href="https://willacycad.org" target="_blank" rel="noopener noreferrer" className={styles.linkText}>willacycad.org <FaExternalLinkAlt className={styles.smallIcon} /></a></li>
          </ul>
          <p>Be ready to provide your property's legal description or address to assist them in locating your records quickly.</p>
        </>
      )
    },
    {
      question: "Is my address on the 9-1-1 system?",
      answer: (
        <>
          <p>If you live outside city limits, we can help verify whether your address is included in the 9-1-1 system. For addresses inside city limits, the 9-1-1 system data may not be available with us directly, but we can assist by checking our records or directing you to the appropriate city office for confirmation.</p>
          <p>You can also search for and verify your address directly on our interactive 9-1-1 Address Map here: <a href="https://gis.rgv911.org/portal/apps/webappviewer/index.html" target="_blank" rel="noopener noreferrer" className={styles.linkText}>Search the 9-1-1 Address Map <FaExternalLinkAlt className={styles.smallIcon} /></a></p>
          <p>If you need further assistance, please <Link href="/contact" className={styles.linkText}>contact our office</Link>.</p>
        </>
      )
    },
    {
      question: "Why is my city 9-1-1 address different from my mailing address?",
      answer: "Your 9-1-1 address is assigned based on your property's geographic location to help emergency responders find you quickly and accurately. In contrast, your mailing address is determined by the United States Postal Service (USPS) based on mail delivery routes and post office locations. Because these systems serve different purposes, the city names or addresses may not always match."
    },
    {
      question: "How Do I Name the Road I Live On In Hidalgo County?",
      answer: (
        <>
          <p>If you need to name the road where you live for 9-1-1 addressing purposes in Hidalgo County and outside of city limits, here's how to get started:</p>
          <ol>
            <li><strong>Contact Your Local Precinct</strong><br />They will provide you with a form that you need to complete in order to name your Service Road.</li>
            <li><strong>Choose Road Names</strong><br />Come up with three potential names for the county to review.</li>
            <li><strong>Gather Support</strong><br />Collect signatures from nearby property owners who agree with the proposed names.</li>
            <li><strong>Submit Your Petition</strong><br />Once the form is complete, submit it to your local precinct office. After your petition is received, the precinct will notify the RGV9-1-1 department to begin the review process.</li>
            <li><strong>Next Steps</strong><br />After initial review the precinct will approve the street name via commissioner's court. Once they approve, the precinct will submit the approval documentation to RGV9-1-1 and we will add the Service Road to the 9-1-1 map.</li>
          </ol>
          <p>You can find your precinct on the official map here: <a href="https://www.hidalgocounty.us/DocumentCenter/View/31860/Hidalgo-County-Precinct-Map" target="_blank" rel="noopener noreferrer" className={styles.linkText}>Hidalgo County Precinct Map (PDF) <FaExternalLinkAlt className={styles.smallIcon} /></a></p>
          <p>For more information or to contact your precinct office, visit the <a href="https://www.hidalgocounty.us/156/Commissioners-Court" target="_blank" rel="noopener noreferrer" className={styles.linkText}>Hidalgo County Commissioners Court page <FaExternalLinkAlt className={styles.smallIcon} /></a>.</p>
          <p className={styles.ctaLink}>
            <Link href="/street-name-request" className={styles.inlineLink}>
              Submit Street Name Request <FaExternalLinkAlt className={styles.linkIcon} />
            </Link>
          </p>
          <p className={styles.ctaLink}>
            <Link href="/road-naming-guidelines" className={styles.inlineLink}>
              View Road Naming Guidelines <FaExternalLinkAlt className={styles.linkIcon} />
            </Link>
          </p>
        </>
      )
    },
    {
      question: "How much does it cost to get an address?",
      answer: "There is no cost or fee to obtain a 9-1-1 Physical Address. The service is provided free of charge to residents."
    }
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      
      <div className={styles.container}>
        <Breadcrumb />
        
        <div className={styles.header}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>Find answers to common questions about our services and 9-1-1 addressing</p>
          
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search questions..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        <div className={styles.faqContainer}>
          {faqItems
            .filter(faq => {
              if (searchQuery === '') return true;
              
              const lowerCaseQuery = searchQuery.toLowerCase();
              const questionMatch = faq.question.toLowerCase().includes(lowerCaseQuery);
              
              // For string answers
              let answerMatch = false;
              if (typeof faq.answer === 'string') {
                answerMatch = faq.answer.toLowerCase().includes(lowerCaseQuery);
              } 
              // For JSX answers, we can't directly search them
              
              return questionMatch || answerMatch;
            })
            .map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openFAQ === index ? styles.active : ''}`}
            >
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.questionContent}>
                  <FaQuestionCircle className={styles.questionIcon} />
                  <h3>{faq.question}</h3>
                </div>
                <div className={styles.toggleIcon}>
                  {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              
              <div className={`${styles.faqAnswer} ${openFAQ === index ? styles.open : ''}`}>
                <div className={styles.answerContent}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}