import React from 'react';
import { Link } from 'react-router-dom';
import styles from './experience.module.css';

export default function Experience() { 
    return (
        <div className={styles.page}>
            {/* Body Sharks */}
            <img src="/sharks/17.svg" alt="" className={styles.bodyShark1} />
            <img src="/sharks/18.svg" alt="" className={styles.bodyShark2} />
            <img src="/sharks/16.svg" alt="" className={styles.bodyShark3} />
            <img src="/sharks/17.svg" alt="" className={styles.bodyShark4} />
            <img src="/sharks/12.svg" alt="" className={styles.bodyShark5} />
            <img src="/sharks/13.svg" alt="" className={styles.bodyShark6} />
            <img src="/sharks/14.svg" alt="" className={styles.bodyShark7} />
            <img src="/sharks/18.svg" alt="" className={styles.bodyShark8} />
            <img src="/sharks/16.svg" alt="" className={styles.bodyShark9} />
            
            <main id="main-content">
            <section className={styles.heroSection}>
                <h1 id="experience-heading" className={styles.bubbleHeader}>Professional Experience</h1>
            </section>

            <section className={styles.bioSection} aria-labelledby="experience-heading">
                <p className={styles.bioText}>
                    I'm a Software Engineer with experience in full-stack development and a focus on user-centered design. I'm currently pursuing my Master's in Engineering Management at Rose-Hulman Institute of Technology, and I'm open to full-time opportunities — I'm willing to discuss transitioning from my program early for the right role.
                </p>
            </section>

            <section className={styles.skillsSection} aria-labelledby="skills-heading">
                <h2 id="skills-heading" className={styles.bubbleHeader}>Skills & Technologies</h2>
                <div className={styles.skillsGrid}>
                    <div className={styles.skillCategory}>
                        <h3>Programming Languages</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>C#</li>
                            <li>Kotlin</li>
                        </ul>
                    </div>
                    <div className={styles.skillCategory}>
                        <h3>Web Technologies</h3>
                        <ul>
                            <li>HTML & CSS</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>.NET</li>
                            <li>REST APIs</li>
                            <li>Frontend Development</li>
                        </ul>
                    </div>
                    <div className={styles.skillCategory}>
                        <h3>Databases & Tools</h3>
                        <ul>
                            <li>SQL & Postgres</li>
                            <li>Firebase</li>
                            <li>Git & Version Control</li>
                            <li>AWS</li>
                            <li>Figma</li>
                            <li>Jira</li>
                        </ul>
                    </div>
                    <div className={styles.skillCategory}>
                        <h3>Methodologies</h3>
                        <ul>
                            <li>Agile & Scrum</li>
                            <li>Human-Centered Computing</li>
                            <li>Project Management</li>
                            <li>Client Communication</li>
                            <li>Full-Stack Development</li>
                            <li>Generative AI</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.experienceSection} aria-labelledby="work-experience-heading">
                <h2 id="work-experience-heading" className={styles.bubbleHeader}>Work Experience</h2>
                <div className={styles.experienceGrid}>
                    <div className={styles.experienceItem}>
                        <h3>Legislative Services Agency</h3>
                        <p className={styles.role}>Full-Stack Development Intern</p>
                        <p className={styles.duration}>Jun 2025 - Aug 2025 | Indianapolis, IN</p>
                        <ul className={styles.achievements}>
                            <li>Enhanced the Indiana General Assembly (IGA) website and public legislative tools by integrating user-centered design principles and modern web technologies</li>
                            <li>Redeveloped the Legislator Database frontend from scratch to boost usability while ensuring data integrity</li>
                            <li>Gained hands-on experience with React, SQL, version control systems, and agile development practices in a government application setting</li>
                        </ul>
                    </div>
                    <div className={styles.experienceItem}>
                        <h3>Rose-Hulman Ventures</h3>
                        <p className={styles.role}>Software Intern</p>
                        <p className={styles.duration}>Mar 2024 - Aug 2024 | Terre Haute, IN</p>
                        <ul className={styles.achievements}>
                            <li>Led the development of a remote drug testing platform by collaborating with cross-functional teams and upholding agile methodologies</li>
                            <li>Engineered scalable features using SQL, C#, HTML, and .NET, focusing on clean, efficient, and well-documented code</li>
                            <li>Streamlined team workflow and maintained effective client communication, ensuring successful project delivery and client satisfaction</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.educationSection}>
                <h2 className={styles.bubbleHeader}>Education</h2>
                <div className={styles.educationGrid}>
                    <div className={styles.educationItem}>
                        <h3>Rose-Hulman Institute of Technology</h3>
                        <p className={styles.degree}>MS, Engineering Management</p>
                        <p className={styles.duration}>Mar 2025 - May 2026</p>
                        <p className={styles.coursework}>Coursework: Inclusivity in Engineering Management, Strategic Thinking, Human Factors, Risk Analysis and Management, Health Technology Design, Human Centered Computing</p>
                    </div>
                    <div className={styles.educationItem}>
                        <h3>Rose-Hulman Institute of Technology</h3>
                        <p className={styles.degree}>BS, Software Engineering</p>
                        <p className={styles.duration}>Sep 2021 - May 2025</p>
                        <p className={styles.coursework}>Coursework: Object-Oriented Programming, Data Structures and Algorithms, Software Project Management, Software Requirements Engineering, Software Architecture, Software Quality Assurance, Software Design</p>
                    </div>
                </div>
            </section>

            <section className={styles.leadershipSection}>
                <h2 className={styles.bubbleHeader}>Leadership & Teaching</h2>
                <div className={styles.leadershipGrid}>
                    <div className={styles.leadershipItem}>
                        <h3>Teaching Assistant</h3>
                        <p className={styles.role}>Rose-Hulman Institute of Technology</p>
                        <ul className={styles.achievements}>
                            <li>Object-Oriented Programming</li>
                            <li>Software Requirements Engineering</li>
                        </ul>
                    </div>
                    <div className={styles.leadershipItem}>
                        <h3>Alpha Phi Omega</h3>
                        <p className={styles.role}>President</p>
                        <p className={styles.duration}>Feb 2023 - Dec 2024</p>
                        <ul className={styles.achievements}>
                            <li>Represented local chapter of Service Fraternity on all organizational levels</li>
                            <li>Oversaw a record amount of service events, logged service hours, and membership growth</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <p>Open to opportunities — willing to discuss flexible start dates and early transition from my Master's program for the right role. Let's connect!</p>
                <div className={styles.ctaButtons}>
                    <Link to="/projects" className="uniform-btn">
                        View My Projects
                    </Link>
                    <Link to="/contact" className="uniform-btn">
                        Get In Touch
                    </Link>
                </div>
            </section>
            </main>
        </div>
    );
}