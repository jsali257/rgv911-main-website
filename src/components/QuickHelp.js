"use client";

import { useState } from 'react';
import styles from './QuickHelp.module.css';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Accordion Item Component
function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={styles.accordionItem}>
      <button 
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      
      {isOpen && (
        <div className={styles.accordionContent}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function QuickHelp() {
  // Section title for context
  const sectionTitle = "Emergency Resources & Information";
  return (
    <div className={styles.quickHelpContainer}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <h3 className={styles.quickHelpTitle}>
        <FaQuestionCircle className={styles.quickHelpIcon} />
        Quick Help
      </h3>
      
      <div className={styles.accordion}>
        <AccordionItem title="When to Call 911">
          <p>Call 911 for <strong>emergencies only</strong> when immediate assistance is needed from police, fire, or medical services.</p>
          <ul className={styles.helpList}>
            <li>Medical emergencies (difficulty breathing, chest pain, severe bleeding)</li>
            <li>Fires or explosions</li>
            <li>Crimes in progress</li>
            <li>Car accidents with injuries</li>
            <li>Suspicious activity that poses immediate danger</li>
          </ul>
          <p className={styles.helpNote}>For non-emergencies, please call your local police department&apos;s non-emergency number.</p>
        </AccordionItem>
        
        <AccordionItem title="What Information to Have Ready">
          <p>When calling 911, try to provide the following information:</p>
          <ul className={styles.helpList}>
            <li>Your exact location (address, cross streets, landmarks)</li>
            <li>The nature of the emergency</li>
            <li>If medical, the condition of the person needing help</li>
            <li>Your name and callback number</li>
            <li>Stay on the line until instructed to hang up</li>
          </ul>
        </AccordionItem>
        
        <AccordionItem title="How to Help Dispatchers Help You">
          <p>Follow these tips to help 911 dispatchers assist you more effectively:</p>
          <ul className={styles.helpList}>
            <li>Remain calm and speak clearly</li>
            <li>Answer all questions asked by the dispatcher</li>
            <li>Do not hang up until told to do so</li>
            <li>If it&apos;s safe, stay on the line for further instructions</li>
            <li>Turn on location services on your mobile phone</li>
          </ul>
        </AccordionItem>
        
        <AccordionItem title="Teaching Children About 911">
          <p>Help children understand when and how to use 911:</p>
          <ul className={styles.helpList}>
            <li>Teach them to recognize true emergencies</li>
            <li>Practice saying their full name and address</li>
            <li>Show them how to dial 911 from different phones</li>
            <li>Explain that 911 is not for jokes or practice</li>
            <li>Role-play emergency scenarios</li>
          </ul>
          <p className={styles.helpNote}>Download our <a href="#" className={styles.helpLink}>Kids&apos; Guide to 911</a> for more resources.</p>
        </AccordionItem>
      </div>
    </div>
  );
}
