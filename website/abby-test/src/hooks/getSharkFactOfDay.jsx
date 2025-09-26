import { useState, useEffect, useCallback } from 'react';

export const getSharkFactOfDay = () => {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get a consistent day index based on current date
  const getDayIndex = () => {
    const today = new Date();
    // Get days since epoch (Jan 1, 1970) to ensure same fact for same day
    const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
    return daysSinceEpoch;
  };

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/shark_facts.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('No shark facts available');
      }
      
      // Use day index to select a consistent fact for today
      const dayIndex = getDayIndex();
      const factIndex = dayIndex % data.length; // Cycle through facts
      setFact(data[factIndex]);

    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { 
    load(); 
    
    // Optional: Set up interval to check for day change
    const checkForNewDay = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const msUntilTomorrow = tomorrow.getTime() - now.getTime();
      
      const timeout = setTimeout(() => {
        load(); // Refresh fact at midnight
      }, msUntilTomorrow);
      
      return timeout;
    };
    
    const timeout = checkForNewDay();
    return () => clearTimeout(timeout);
  }, [load]);

  return { fact, loading, error, refresh: load };
};



