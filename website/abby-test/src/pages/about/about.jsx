

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './about.module.css';
import profPhoto from '../../resources/proff_photo.jpg';

export default function About() { 
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
                <img
                    src={profPhoto}
                    alt="Portrait of Abby Weinreb"
                    className={styles.profileImg}
                />
                <h1 id="about-heading" className={styles.bubbleHeader}>About Me</h1>
            </section>

            <section className={styles.bioSection} aria-labelledby="about-heading">
                <p className={styles.bioText}>
                    Hello! I'm Abby Weinreb, a creative problem-solver who's passionate about technology, ocean life, and making a positive impact. When I'm not coding, you'll find me exploring new places, learning fun facts about sharks (my favorite animal!), or working on community service projects. I believe in the power of combining technical skills with genuine human connection to create meaningful change.
                </p>
            </section>
            <section className={styles.interestsSection} aria-labelledby="interests-heading">
                <h2 id="interests-heading" className={styles.bubbleHeader}>Interests & Hobbies</h2>
                <div className={styles.interestsGrid}>
                    <div className={styles.interestCategory}>
                        <h3>Ocean & Marine Life</h3>
                        <ul>
                            <li>Shark conservation advocacy</li>
                            <li>Marine biology fascination</li>
                            <li>Ocean documentaries</li>
                            <li>Beach exploration</li>
                            <li>Collecting shark facts</li>
                            <li>Supporting marine charities</li>
                        </ul>
                    </div>
                    <div className={styles.interestCategory}>
                        <h3>Fun & Pastimes</h3>
                        <ul>
                            <li>Traveling</li>
                            <li>Trying local cuisines</li>
                            <li>Hanging out with my cat</li>
                            <li>Hiking & nature walks</li>
                            <li>Visiting Museums</li>
                            <li>Meeting new people</li>
                        </ul>
                    </div>
                    <div className={styles.interestCategory}>
                        <h3>Creative Pursuits</h3>
                        <ul>
                            <li>UI/UX design</li>
                            <li>Baking</li>
                            <li>Piano</li>
                            <li>Guitar</li>
                            <li>Choir</li>
                            <li>Fiber arts</li>
                        </ul>
                    </div>
                    <div className={styles.interestCategory}>
                        <h3>Personal Growth</h3>
                        <ul>
                            <li>Community service</li>
                            <li>Leadership development</li>
                            <li>Learning new skills</li>
                            <li>Reading & podcasts</li>
                            <li>Mindfulness practices</li>
                            <li>Environmental sustainability</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.storiesSection} aria-labelledby="stories-heading">
                <h2 id="stories-heading" className={styles.bubbleHeader}>My Journey</h2>
                <div className={styles.storiesGrid}>
                    <div className={styles.storyItem}>
                        <h3>Why Sharks?</h3>
                        <p className={styles.storyText}>
                            My fascination with sharks began in childhood and has only grown stronger. These incredible creatures are so misunderstood! They're vital to ocean ecosystems and far more complex than most people realize. I love sharing shark facts and working to change negative perceptions about these amazing animals.
                        </p>
                    </div>
                    <div className={styles.storyItem}>
                        <h3>Leadership Through Service</h3>
                        <p className={styles.storyText}>
                            Leading Alpha Phi Omega has been one of my most rewarding experiences. There's something magical about bringing people together around a shared mission of service. We've organized everything from food drives to community cleanups, and seeing the positive impact we can make together never gets old.
                        </p>
                    </div>
                    <div className={styles.storyItem}>
                        <h3>The Power of Connection</h3>
                        <p className={styles.storyText}>
                            Whether I'm mentoring students, collaborating on projects, or just chatting with new people, I've learned that the best solutions come from genuine human connections. Technology is amazing, but it's the relationships we build that make everything worthwhile.
                        </p>
                    </div>
                    <div className={styles.storyItem}>
                        <h3>Always Learning</h3>
                        <p className={styles.storyText}>
                            I'm constantly curious about new things - from marine biology to design trends to emerging technologies. This curiosity drives me to keep growing, whether that's through formal education, personal projects, or just asking "what if?" whenever I encounter something new.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.valuesSection}>
                <h2 className={styles.bubbleHeader}>What Drives Me</h2>
                <div className={styles.valuesGrid}>
                    <div className={styles.valueItem}>
                        <h3>Human-Centered Approach</h3>
                        <p className={styles.valueText}>
                            I believe technology should serve people, not the other way around. Every project I work on starts with understanding real human needs and creating solutions that genuinely improve lives.
                        </p>
                    </div>
                    <div className={styles.valueItem}>
                        <h3>Continuous Growth</h3>
                        <p className={styles.valueText}>
                            Learning never stops! I'm always seeking new challenges, whether that's mastering a new programming language, understanding ocean conservation, or developing leadership skills.
                        </p>
                    </div>
                    <div className={styles.valueItem}>
                        <h3>Making a Difference</h3>
                        <p className={styles.valueText}>
                            From community service to creating accessible technology, I'm passionate about using my skills and platform to contribute positively to the world around me.
                        </p>
                    </div>
                    <div className={styles.valueItem}>
                        <h3>Creative Problem-Solving</h3>
                        <p className={styles.valueText}>
                            The best solutions often come from thinking outside the box. I love combining technical expertise with creative thinking to find innovative approaches to complex challenges.
                        </p>
                    </div>
                </div>
            </section>

            

            {/* <section className={styles.funFactsSection}>
                <h2 className={styles.bubbleHeader}>Fun Facts About Me</h2>
                <div className={styles.funFactsGrid}>
                    <div className={styles.funFactItem}>
                        <h3>🦈 Daily Shark Facts</h3>
                        <p className={styles.funFactText}>
                            I know way too many shark facts and love sharing them! Did you know that sharks have been around for over 400 million years? They're older than trees!
                        </p>
                    </div>
                    <div className={styles.funFactItem}>
                        <h3>🎨 Design Enthusiast</h3>
                        <p className={styles.funFactText}>
                            I'm obsessed with good design - from websites to room layouts. I can spend hours on Pinterest looking at color palettes and typography combinations.
                        </p>
                    </div>
                    <div className={styles.funFactItem}>
                        <h3>🌊 Ocean Dreamer</h3>
                        <p className={styles.funFactText}>
                            One of my biggest dreams is to go cage diving with great white sharks. The ocean has always felt like home to me, even though I grew up in Indiana!
                        </p>
                    </div>
                    <div className={styles.funFactItem}>
                        <h3>📚 Lifelong Learner</h3>
                        <p className={styles.funFactText}>
                            I'm currently working on my Master's degree while diving deep into topics like human-centered computing and inclusive design. Learning never stops being exciting!
                        </p>
                    </div>
                </div>
            </section> */}

            <section className={styles.ctaSection}>
                <p>Thanks for getting to know me a little better! I'd love to connect and hear your story too.</p>
                <div className={styles.ctaButtons}>
                    <Link to="/experience" className="uniform-btn">
                        View My Experience
                    </Link>
                    <Link to="/contact" className="uniform-btn">
                        Let's Chat
                    </Link>
                </div>
            </section>
            </main>
        </div>
    );
}