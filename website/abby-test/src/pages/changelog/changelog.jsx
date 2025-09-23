// src/pages/ChangelogPage.jsx
import React from 'react';
import { useChangelog } from '../../hooks/useChangelog';
import styles from './changelog.module.css';

export default function ChangelogPage() {
  const { updates, loading, error, refresh } = useChangelog();

  if (loading) return <p className={styles.status}>Loading changelog…</p>;
  if (error) return (
    <div className={styles.errorWrap}>
      <p>Couldn’t load changelog: {String(error.message || error)}</p>
      <button type="button" onClick={refresh}>Try again</button>
    </div>
  );

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Site Updates</h1>
        <button type="button" onClick={refresh} className={styles.refreshBtn}>
          Refresh
        </button>
      </header>

      <ul className={styles.list}>
        {updates.map((u) => (
          <li key={u.version} className={styles.item}>
            <div className={styles.itemHeader}>
              <span className={styles.version}>v{u.version}</span>
              {u.date && <time className={styles.date}>{u.date}</time>}
              {u.type && <span className={`${styles.badge} ${styles[u.type]}`}>{u.type}</span>}
            </div>

            {u.highlight && <p className={styles.highlight}>{u.highlight}</p>}

            {Array.isArray(u.changes) && u.changes.length > 0 && (
              <ul className={styles.changeList}>
                {u.changes.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
