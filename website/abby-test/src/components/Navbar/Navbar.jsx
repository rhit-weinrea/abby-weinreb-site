import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css"; // Create this CSS module for custom styles



export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
      <header className={styles.header}>
           <nav className={styles.nav} aria-label="Main navigation">
      <Link to="/" className={currentPath === '/' ? styles.linkActive : styles.navLink} aria-current={currentPath === '/' ? 'page' : undefined}>Home</Link>
      <Link to="/about" className={currentPath === '/about' ? styles.linkActive : styles.navLink} aria-current={currentPath === '/about' ? 'page' : undefined}>About</Link>
      <Link to="/experience" className={currentPath === '/experience' ? styles.linkActive : styles.navLink} aria-current={currentPath === '/experience' ? 'page' : undefined}>Experience</Link>
      <Link to="/projects" className={currentPath === '/projects' ? styles.linkActive : styles.navLink} aria-current={currentPath === '/projects' ? 'page' : undefined}>Projects</Link>
      <Link to="/contact" className={currentPath === '/contact' ? styles.linkActive : styles.navLink} aria-current={currentPath === '/contact' ? 'page' : undefined}>Contact</Link>
      <Link to="/changelog" className={currentPath === '/changelog' ? styles.linkActive : styles.navLink} aria-current={currentPath === '/changelog' ? 'page' : undefined}>Site Updates</Link>
    </nav>
    <div className={`${styles.waves} ${styles.back}`}>
      <svg viewBox="0 24 300 28" preserveAspectRatio="none">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 58-18 88-18s 58 18 88 18 58-18 88-18s 58 18 88 18 v44h-704z"/>
        </defs>
        <use xlinkHref="#gentle-wave" x="0" y="5"/>
        <use xlinkHref="#gentle-wave" x="0" y="7"/>
        <use xlinkHref="#gentle-wave" x="0" y="9"/>
      </svg>
    </div>
    <div className={`${styles.waves} ${styles.front}`}>
      <svg viewBox="0 24 300 28" preserveAspectRatio="none">
        <defs>
          <path id="gentle-wave-front" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 58-18 88-18s 58 18 88 18 58-18 88-18s 58 18 88 18 v44h-704z"/>
        </defs>
        <use xlinkHref="#gentle-wave-front" x="0" y="0"/>
        <use xlinkHref="#gentle-wave-front" x="0" y="3"/>
        <use xlinkHref="#gentle-wave-front" x="0" y="6"/>
      </svg>
    </div>
          </header>
    
  );
}