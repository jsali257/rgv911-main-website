"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './SmartSearch.module.css';
import Link from 'next/link';

export default function SmartSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  
  // Quick action buttons configuration
  const quickActions = [
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ), 
      label: "Request Address", 
      url: "https://survey123.arcgis.com/share/d383d62a6b5a4ee49738933e5e371bc8?portalUrl=https://gis.rgv911.org/portal" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ), 
      label: "Contact Us", 
      url: "/contact" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ), 
      label: "Meeting Agenda", 
      url: "/meetings" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ), 
      label: "FAQs", 
      url: "/faq" 
    }
  ];

  // Sample search suggestions - in a real app, this would come from an API
  const searchSuggestions = [
    { text: "How to request a 911 address", url: "/how-do-i/request-address" },
    { text: "Board of managers meeting schedule", url: "/meetings" },
    { text: "Contact information for GIS department", url: "/departments/gis" },
    { text: "Text to 911 capabilities", url: "/text-911" },
    { text: "Public education resources", url: "/departments/public-education" },
    { text: "Emergency preparedness", url: "/resources" }
  ];

  // Handle click outside to close expanded search
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter suggestions based on search query
  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = searchSuggestions.filter(item => 
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, searchSuggestions]);

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (!isExpanded && e.target.value) {
      setIsExpanded(true);
    }
  };

  // Handle search form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would implement search functionality here
    console.log("Search submitted:", searchQuery);
    // For now, we'll just close the expanded view
    setIsExpanded(false);
  };

  // Handle voice search (placeholder functionality)
  const handleVoiceSearch = () => {
    alert("Voice search would be activated here!");
    // In a real implementation, you would use the Web Speech API
  };

  return (
    <div className={styles.smartSearchContainer} ref={searchRef}>
      <div className={`${styles.searchWrapper} ${isExpanded ? styles.expanded : ''}`}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <div className={styles.searchInputWrapper}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              placeholder="Search for resources, FAQs, services..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.searchInput}
              onFocus={() => setIsExpanded(true)}
            />
            <button 
              type="button" 
              className={styles.voiceSearchButton}
              onClick={handleVoiceSearch}
              aria-label="Search by voice"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
        
        {isExpanded && (
          <div className={styles.expandedSearch}>
            {suggestions.length > 0 ? (
              <div className={styles.suggestions}>
                <h3 className={styles.suggestionsTitle}>Suggestions</h3>
                <ul className={styles.suggestionsList}>
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>
                      <Link href={suggestion.url} className={styles.suggestionItem}>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        {suggestion.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : searchQuery.length > 1 ? (
              <div className={styles.noResults}>
                <p>No results found for &quot;{searchQuery}&quot;</p>
              </div>
            ) : null}
            
            <div className={styles.quickActions}>
              <h3 className={styles.quickActionsTitle}>Quick Actions</h3>
              <div className={styles.quickActionsGrid}>
                {quickActions.map((action, index) => (
                  <a 
                    key={index} 
                    href={action.url} 
                    className={styles.quickActionButton}
                    target={action.url.startsWith('http') ? '_blank' : '_self'}
                    rel={action.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <span className={styles.quickActionIcon}>{action.icon}</span>
                    <span className={styles.quickActionLabel}>{action.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* No visible quick action buttons */}
    </div>
  );
}
