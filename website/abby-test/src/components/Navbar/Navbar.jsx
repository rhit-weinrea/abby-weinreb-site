import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css"; // Create this CSS module for custom styles



export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
      <header className={styles.header}>
            <h1>
              Abby Weinreb
            </h1>
            <p>Welcome to my personal site!</p>
           <nav className={styles.nav} aria-label="Main navigation">
      {/* <Link to="/contact" className={styles.navLink}>Contact</Link> */}
      <Link to="/about" className={currentPath === '/about' ? styles.linkActive : styles.navLink}>About</Link>
      <Link to="/projects" className={currentPath === '/projects' ? styles.linkActive : styles.navLink}>Projects</Link>
      <Link to="/changelog" className={currentPath === '/changelog' ? styles.linkActive : styles.navLink}>Site Updates</Link>
    </nav>
          </header>
    
  );
}