"use client";

import { useState, useRef, useEffect } from 'react';
import styles from './NavbarSearch.module.css';

export default function NavbarSearch() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  
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

  // Focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

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

  // Toggle search expansion
  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setSearchQuery('');
      setSuggestions([]);
    }
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would implement search functionality here
    console.log("Search submitted:", searchQuery);
    setIsExpanded(false);
  };

  return (
    <div className={`${styles.navbarSearch} ${isExpanded ? styles.expanded : ''}`} ref={searchRef}>
      {!isExpanded ? (
        <button 
          className={styles.searchButton} 
          onClick={toggleSearch}
          aria-label="Search"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
      ) : (
        <div className={styles.searchExpanded}>
          <form onSubmit={handleSubmit} className={styles.searchForm}>
            <div className={styles.searchInputWrapper}>
              <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className={styles.searchInput}
              />
              <button 
                type="button" 
                className={styles.closeButton}
                onClick={() => setIsExpanded(false)}
                aria-label="Close search"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {suggestions.length > 0 && (
              <div className={styles.suggestions}>
                <ul className={styles.suggestionsList}>
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>
                      <a href={suggestion.url} className={styles.suggestionItem}>
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        {suggestion.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
