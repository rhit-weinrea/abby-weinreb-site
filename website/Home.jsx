import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Navbar from "./components/Navbar/Navbar.jsx";

export default function Home() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <section id="about" tabIndex={-1} className={styles.aboutSection}>
          <h2>About Me</h2>
          <img
            src="resources/proff_photo.JPG"
            alt="Portrait of Abby Weinreb"
            className={styles.profileImg}
          />
          <p>
            Hello! I'm Abby Weinreb. I am a current graduate student at Rose-Hulman Institute of Technology and I have a BS in Software Engineering. I focus on creating inclusive, accessible, and fun front-end experiences. I believe technology should empower everyone, and I strive to make accessible technology for every user.
          </p>
        </section>
        <section id="projects" tabIndex={-1}>
          <h2>Featured Projects</h2>
          <ul>
            <li>
              <strong>Personal Website (where you are right now!)</strong> – A showcase of my work, built with accessibility in mind.
            </li>
            <li>
              <strong>reTHink Mobile App + Admin Panel</strong> – My senior capstone project: a Flutter app to promote sustainable actions, with a web admin panel for content management.
            </li>
            <li>
              <strong>Genetic Algorithm Research Project</strong> – One of my first real projects! Revisted two years later to refactor and refine.
            </li>

          </ul>
          <div style={{ marginTop: "1rem" }}>
            <Link to="/projects" className={styles.navLink}>
              View All Projects
            </Link>
          </div>
        </section>
        <br></br>
        <section id="contact" tabIndex={-1}>
          <h2>Contact</h2>
          <form action="https://api.web3forms.com/submit" method="POST" aria-label="Contact form">
            <input type="hidden" name="access_key" value="054547c9-72d4-4350-ab1d-ecc675bdc20b" />
            <label htmlFor="name">Name</label><br />
            <input id="name" name="name" type="text" required aria-required="true" /><br /><br />
            <label htmlFor="email">Email</label><br />
            <input id="email" name="email" type="email" required aria-required="true" /><br /><br />
            <label htmlFor="message">Message</label><br />
            <textarea id="message" name="message" rows="4" required aria-required="true"></textarea><br /><br />
            <input type="checkbox" name="botcheck" className={styles.check}></input>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>
          &copy; 2025 Abby Weinreb.{" "}
          <span className={styles.srOnly}>All rights reserved.</span> <span role="img" aria-label="wave">🌊</span>
        </p>
      </footer>
    </div>
  );
}