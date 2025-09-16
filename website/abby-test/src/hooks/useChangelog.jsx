import { useState, useEffect, useCallback } from 'react';

const sortByVersionDesc = (a, b) =>
  isVersionNewer(a.version, b.version) ? -1 : 1;

export const useChangelog = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/changelog.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const sorted = [...data].sort(sortByVersionDesc);
      setUpdates(sorted);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  return { updates, loading, error, refresh: load };
};

const isVersionNewer = (v1, v2) => {
  if (!v1 || !v2) return false;
  const a = v1.split('.').map(Number);
  const b = v2.split('.').map(Number);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const ai = a[i] ?? 0;
    const bi = b[i] ?? 0;
    if (ai > bi) return true;
    if (ai < bi) return false;
  }
  return false;
};
