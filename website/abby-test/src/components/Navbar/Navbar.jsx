import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Create this CSS module for custom styles

export default function Navbar() {
  return (
      <header className={styles.header}>
            <h1>
              Abby Weinreb
            </h1>
            <p>Welcome to my personal site!</p>
           <nav className={styles.nav} aria-label="Main navigation">
      {/* <Link to="/contact" className={styles.navLink}>Contact</Link> */}
      <Link to="/projects" className={styles.navLink}>Projects</Link>
      <Link to="/about" className={styles.navLink}>About</Link>
      <Link to="/changelog" className={styles.navLink} >Site Updates</Link>
      <a href="https://www.linkedin.com/in/abby-weinreb-2342a2201/" className={styles.navLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </nav>
          </header>
    
  );
}