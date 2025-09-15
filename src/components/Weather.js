"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Weather.module.css';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Weslaco, TX coordinates
        const lat = 26.1595;
        const lon = -97.9908;
        
        // Replace 'YOUR_API_KEY' with your actual OpenWeather API key
        // You should store this in an environment variable in production
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
        );
        
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching weather:', err);
        setError('Unable to load weather data');
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Refresh weather data every 30 minutes
    const intervalId = setInterval(fetchWeather, 30 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <div className={styles.weatherWidget}>Loading weather...</div>;
  if (error) return <div className={styles.weatherWidget}>{error}</div>;
  if (!weather) return null;

  const temp = Math.round(weather.main.temp);
  const description = weather.weather[0].description;
  const icon = weather.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <div className={styles.weatherWidget}>
      <div className={styles.weatherContent}>
        <Image 
          src={iconUrl} 
          alt={description} 
          className={styles.weatherIcon}
          width={50}
          height={50}
          quality={90}
          unoptimized
        />
        <div className={styles.weatherInfo}>
          <div className={styles.weatherTemp}>{temp}°</div>
          <div className={styles.weatherDesc}>Weslaco</div>
        </div>
      </div>
    </div>
  );
}
