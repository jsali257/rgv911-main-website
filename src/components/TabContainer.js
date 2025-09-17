"use client";

import { useState } from 'react';
import styles from './TabContainer.module.css';

export default function TabContainer({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  
  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;
  
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
            onClick={() => handleTabClick(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      
      <div className={styles.tabContent}>
        <div className={styles.tabPanel} role="tabpanel">
          {activeTabContent}
        </div>
      </div>
    </div>
  );
}
