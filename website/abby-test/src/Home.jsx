import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { getSharkFactOfDay } from './hooks/getSharkFactOfDay';

export default function Home() {
  const { fact, loading, error } = getSharkFactOfDay();
  const [imgLoaded, setImgLoaded] = useState(false);

  // Enable non-critical animations after first paint / image load to avoid delaying LCP
  useEffect(() => {
    // Make animations start on the next rAF after mount (non-blocking)
    requestAnimationFrame(() => {
      // If the hero image already loaded, enable animations immediately
      if (imgLoaded) {
        document.documentElement.setAttribute('data-animations-ready', 'true');
      } else {
        // otherwise enable after a short timeout to avoid blocking initial paint
        const t = setTimeout(() => document.documentElement.setAttribute('data-animations-ready', 'true'), 300);
        return () => clearTimeout(t);
      }
    });
  }, [imgLoaded]);

  return (
    <div className={styles.body}>
      {/* Body Sharks */}
      <img src="/sharks/16.svg" alt="" className={styles.bodyShark1} />
      <img src="/sharks/17.svg" alt="" className={styles.bodyShark2} />
      <img src="/sharks/18.svg" alt="" className={styles.bodyShark3} />
      <img src="/sharks/16.svg" alt="" className={styles.bodyShark4} />
      <img src="/sharks/12.svg" alt="" className={styles.bodyShark5} />
      <img src="/sharks/13.svg" alt="" className={styles.bodyShark6} />
      <img src="/sharks/14.svg" alt="" className={styles.bodyShark7} />
      <img src="/sharks/17.svg" alt="" className={styles.bodyShark8} />
      <img src="/sharks/18.svg" alt="" className={styles.bodyShark9} />
      <img src="/sharks/16.svg" alt="" className={styles.bodyShark10} />
      
      <main className={styles.main}>
        <div className={styles.topstuff} >
        <section className={styles.headerSection}>

          <img
            src="/abby.svg"
            alt="Portrait of Abby Weinreb, Software Engineer"
            className={imgLoaded ? `${styles.largeProfileImg} ${styles.profileAnimated}` : styles.largeProfileImg}
            width={640}
            height={640}
            decoding="async"
            loading="eager"
            fetchpriority="high"
            onLoad={() => setImgLoaded(true)}
          />
          <div className={styles.headerContent}>
            <h1 className={styles.bubbleName}>Abby Weinreb</h1>
            <p className={styles.bubbleTitle}>Software Engineer</p>
          </div>
                    <div className={styles.sharkFact}>
            <h3 className={styles.factTitle}>Shark Fact of the Day</h3>
            {loading && <span aria-live="polite">Loading shark fact...</span>}
            {error && <span aria-live="assertive" role="alert">Error: {error.message}</span>}
            {fact && !loading && !error && (
              <p aria-live="polite">
                {typeof fact === 'string' ? fact : fact.fact || fact.text || JSON.stringify(fact)}
              </p>
            )}
          </div>
        </section>
        </div>
        {/* About Section */}
        <section className={`${styles.pageSection} ${styles.sectionLeft} ${styles.aboutSection}`}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionText}>
              <h2 className={styles.bubbleHeader}>About Me</h2>
                <div className={styles.highlightCards}>
                <div className={styles.highlightCard}>
                  <span className={styles.cardValue}>BS, Software Engineering</span>
                  <span className={styles.cardLabel}>Enrolled in Masters program</span>
                </div>
                <div className={styles.highlightCard}>
                  <span className={styles.cardValue}>2</span>
                  <span className={styles.cardLabel}>Internships</span>
                </div>
                <div className={styles.highlightCard}>
                  <span className={styles.cardValue}>Open</span>
                  <span className={styles.cardLabel}>Availability</span>
                </div>
              </div>
              <p className={styles.sectionDescription}>
                <strong>Rose-Hulman Engineering Management graduate student</strong> with hands-on experience 
                at the <strong>Indiana General Assembly</strong> and <strong>Rose-Hulman Ventures</strong>. 
                I specialize in <em>user-centered design</em> and building inclusive technology that empowers everyone.
              </p>
            </div>
            <div className={styles.sectionButtonContainer}>
              <Link to="/about" className="uniform-btn">
                Discover My Journey
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`${styles.pageSection} ${styles.sectionRight} ${styles.projectsSection}`}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionText}>
              <h2 className={styles.bubbleHeader}>Featured Projects</h2>
              <div className={styles.highlightCards}>
                <div className={styles.highlightCard}>
                  <span className={styles.cardValue}>reTHink App</span>
                  <span className={styles.cardLabel}>Flutter sustainability app with admin panel</span>
                </div>
                <div className={styles.highlightCard}>
                  <span className={styles.cardValue}>Genetic Algorithm</span>
                  <span className={styles.cardLabel}>Refactored with modern SDLC principles</span>
                </div>
              </div>
              <p className={styles.sectionDescription}>
                Explore my portfolio showcasing React, Flutter, .NET, and innovative problem-solving.
              </p>
            </div>
            <div className={styles.sectionButtonContainer}>
              <Link to="/projects" className="uniform-btn">
                Explore All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`${styles.pageSection} ${styles.sectionLeft} ${styles.contactSection}`}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionText}>
              <h2 className={styles.bubbleHeader}>Let's Connect!</h2>
                <div className={styles.highlightCards}>
                <div className={styles.highlightCard}>
                  <span className={styles.cardValue}>Open</span>
                  <span className={styles.cardLabel}>Open to opportunities (flexible start)</span>
                </div>
                <div className={styles.highlightCard}>
                  <span className={styles.cardValue}>Responsive</span>
                  <span className={styles.cardLabel}>Usually responds within 24 hours</span>
                </div>
                <div className={styles.highlightCard}>
                  <span className={styles.cardValue}>Flexible</span>
                  <span className={styles.cardLabel}>Remote & hybrid opportunities welcome</span>
                </div>
              </div>
                <p className={styles.sectionDescription}>
                Ready to discuss <strong>exciting opportunities?</strong> Whether it's job opportunities, 
                collaboration projects, or just a tech chat, I'd love to hear from you! 
                <strong> I'm open to full-time roles and am willing to discuss transitioning from my Master's program early for the right position.</strong>
              </p>
            </div>
            <div className={styles.sectionButtonContainer}>
              <Link to="/contact" className="uniform-btn">
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>

        {/* Changelog Section */}
        <section className={`${styles.pageSection} ${styles.sectionRight} ${styles.changelogSection}`}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionText}>
              <h2 className={styles.bubbleHeader}>Behind the Scenes</h2>
              <div className={styles.highlightCards}>
                <div className={styles.highlightCard}>
                  <span className={styles.cardValue}>New</span>
                  <span className={styles.cardLabel}>Ocean theme with animated navbar</span>
                </div>
                <div className={styles.highlightCard}>
                  <span className={styles.cardValue}>Update</span>
                  <span className={styles.cardLabel}>Enhanced project card layouts</span>
                </div>
                <div className={styles.highlightCard}>
                  <span className={styles.cardValue}>Improvement</span>
                  <span className={styles.cardLabel}>Mobile responsiveness upgrades</span>
                </div>
              </div>
              <p className={styles.sectionDescription}>
                Curious about my development process? Track the evolution of this portfolio, 
                from <strong>design iterations</strong> to <strong>feature additions</strong>. 
                See the thought process behind every update!
              </p>
            </div>
            <div className={styles.sectionButtonContainer}>
              <Link to="/changelog" className="uniform-btn">
                See My Progress
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}