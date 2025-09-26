
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './contact.module.css';

export default function Contact() { 
    return (
        <div className={styles.page}>
            {/* Body Sharks */}
            <img src="/sharks/16.svg" alt="" className={styles.bodyShark1} />
            <img src="/sharks/17.svg" alt="" className={styles.bodyShark2} />
            <img src="/sharks/18.svg" alt="" className={styles.bodyShark3} />
            <img src="/sharks/14.svg" alt="" className={styles.bodyShark4} />
            <img src="/sharks/16.svg" alt="" className={styles.bodyShark5} />
            <img src="/sharks/12.svg" alt="" className={styles.bodyShark6} />
            <img src="/sharks/17.svg" alt="" className={styles.bodyShark7} />
            <img src="/sharks/18.svg" alt="" className={styles.bodyShark8} />
            <img src="/sharks/13.svg" alt="" className={styles.bodyShark9} />
            
            <section className={styles.headerSection}>
                <h1 className={styles.bubbleHeader}>Contact Me</h1>
                <p className={styles.description}>
                    I'd love to hear from you! Whether you're interested in collaboration, 
                    have questions about my work, or just want to connect, feel free to reach out.
                </p>
            </section>

            <section className={styles.contactOptions} aria-label="Contact methods">
                <a className={styles.contactMethod} href="https://www.linkedin.com/in/abby-weinreb-2342a2201/" target="_blank" rel="noopener noreferrer" aria-label="Connect with Abby Weinreb on LinkedIn">
                    <h2>LinkedIn</h2>
                    <p>Connect with me professionally and see my career journey</p>
                </a>
                <a className={styles.contactMethod} href="https://github.com/rhit-weinrea" target="_blank" rel="noopener noreferrer" aria-label="View Abby Weinreb's projects on GitHub">
                    <h2>GitHub</h2>
                    <p>Check out my project code</p>
                </a>
            </section>

            <section className={styles.formSection}>
                <h3 className={styles.bubbleHeader}>Send Me a Message</h3>
                <form 
                    action="https://api.web3forms.com/submit" 
                    method="POST" 
                    aria-label="Contact form"
                    className={styles.contactForm}
                >
                    <input type="hidden" name="access_key" value="054547c9-72d4-4350-ab1d-ecc675bdc20b" />
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name *</label>
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            required 
                            aria-required="true"
                            aria-describedby="name-desc"
                            placeholder="Your full name"
                        />
                        <span id="name-desc" className="sr-only">Required field. Enter your full name.</span>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email *</label>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            required 
                            aria-required="true"
                            aria-describedby="email-desc"
                            placeholder="your.email@example.com"
                        />
                        <span id="email-desc" className="sr-only">Required field. Enter a valid email address.</span>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="subject">Subject</label>
                        <input 
                            id="subject" 
                            name="subject" 
                            type="text"
                            aria-describedby="subject-desc"
                            placeholder="What's this about?"
                        />
                        <span id="subject-desc" className="sr-only">Optional field. Brief subject line for your message.</span>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message *</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="6" 
                            required 
                            aria-required="true"
                            aria-describedby="message-desc"
                            placeholder="Tell me about your project, question, or just say hello!"
                        ></textarea>
                        <span id="message-desc" className="sr-only">Required field. Tell me about your project, question, or just say hello!</span>
                    </div>

                    <input type="checkbox" name="botcheck" className={styles.hiddenCheck} />
                    
                    <button type="submit" className="uniform-btn">
                        Send Message
                    </button>
                </form>
            </section>

            <section className={styles.alternativeSection}>
                <p>Prefer a different approach?</p>
                <div className={styles.alternativeButtons}>
                    <Link to="/about" className="uniform-btn">
                        Learn More About Me
                    </Link>
                    <Link to="/projects" className="uniform-btn">
                        View My Work
                    </Link>
                </div>
            </section>
        </div>
    );
}