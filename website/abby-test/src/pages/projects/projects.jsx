import React from "react";
import Project from "../../components/project/project";
import styles from "./projects.module.css";
import r1 from "./resources/rethink1.jpeg" 
import r2 from "./resources/rethink2.jpeg"
import r3 from "./resources/rethink3.jpeg"
import g1 from "./resources/garp1.png"
import g2 from "./resources/garp2.png"   

const reTHinkImages = [

  r3,
  r2,
  r1

];

const garpImages = [

  g1,
  g2
]

export default function Projects() {
  return (
    <main className={styles.projectContainer}>
      <h2 className={styles.projectTitle}>Highlighted Projects</h2>
    <div className={styles.projects}> 
      <Project
  title="Personal Website"
  description={
    <>
      <span>Fall 2025 - Present</span>
      <ul>
        <li>
          Designed and developed my personal portfolio website to showcase my work and values.
        </li>
        <li>
          Focused on accessibility, usability, and a welcoming ocean-inspired aesthetic.
        </li>
        <li>Is currently in progress, come back soon for updates!</li>
      </ul>
    </>
  }

  alt="Screenshot of Abby Weinreb's personal website"
  details={
    <>
      <ul>
        <li>
          <strong>Semantic HTML:</strong> Uses proper headings, lists, and sectioning for screen readers and keyboard navigation.
        </li>
        <li>
          <strong>Keyboard Navigation:</strong> All interactive elements are accessible by keyboard, with clear focus styles.
        </li>
        <li>
          <strong>ARIA Labels:</strong> Navigation and forms use <code>aria-label</code> attributes for extra context.
        </li>
        <li>
          <strong>Color Contrast:</strong> Color palette maintains good contrast for readability.
        </li>
        <li>
          <strong>Alt Text:</strong> Images include descriptive <code>alt</code> attributes for screen readers.
        </li>
        <li>
          <strong>Accessible Forms:</strong> Form fields have associated labels and use <code>aria-required</code>.
        </li>
        <li>
          <strong>Responsive Design:</strong> Layout adapts for all devices and screen sizes.
        </li>
        <li>
          <strong>Consistent Font and Structure:</strong> Ensures readability and a seamless experience.
        </li>
        <li><strong>Tech stack:</strong> Firebase (hosting), React (frontend), CSS Modules (styling).
</li>

      </ul>
    </>
  }
/>
      <Project
        title="reTHink App + Admin Panel"
        description={
          <>
            <span>Jul 2024 - May 2025</span>
            <ul>
              <li>
                Collaborated with a local client to build a community sustainability Flutter app
              </li>
              <li>
                Improved user interface and feature set using Kotlin, JavaScript, HTML, and CSS
              </li>
              <li>
                Created an Admin Panel website to aid the client with updating app features
              </li>
            </ul>
          </>
        }
        images={reTHinkImages}
        alt="Screenshots of reTHink app and admin panel"
        details={
          <>
            <ul>
              <li>
                Developed reTHink’s first mobile app (iOS & Android) to incentivize eco-friendly actions through a point-based rewards system.
              </li>
              <li>
                Implemented secure authentication with email, Google, and Apple sign-in and account deletion options.
              </li>
              <li>
                Designed and built a scalable reward system where users earn points for verified “green deeds” and redeem them for gift cards.
              </li>
              <li>
                Integrated social media proof submission to validate sustainable actions.
              </li>
              <li>
                Mapped and displayed recycling locations within the app.
              </li>
              <li>
                Created a web-based admin portal for content management and submission verification, designed for non-technical staff.
              </li>
              <li>
                Ensured scalability to support 3,000+ concurrent users, expandable to 10,000.
              </li>
                <li>
                <strong>Tech stack:</strong> Flutter (mobile), Firebase/Firestore (backend & database), Vanilla JS (frontend for admin panel), secure authentication, push notifications.
              </li>
              <li>
                Overcame challenges in cross-platform performance, building an intuitive admin interface, and ensuring a seamless, secure user experience.
              </li>
            </ul>
          </>
        }
      />
      <Project
        title="Genetic Algorithm Research Project"
        description={
           <>
    <span>Fall 2022 & Spring 2025</span>
    <ul>
      <li>Simulates a population of individuals that evolve over generations to optimize a given fitness function</li>
      <li>Created a visual representation of individuals in the population</li>
    </ul>
  </>
        }
        images={garpImages}
        details={
          <>
            <span>Fall 2022</span>
            <ul>
              <li>
                Started out as a project for my Object-Oriented Programming class
              </li>
              <li>
                Implemented selection, crossover, and mutation operators to evolve the population.
              </li>
              <li>
                Conducted experiments to evaluate the algorithm's performance on various benchmarks.
              </li>
            </ul>
            <span>Spring 2025</span>
            <ul>
              <li>
                Revisted the project to refactor and refine the codebase.
              </li>
              <li>
                Eliminated "bad code smells" and improved overall code quality.
              </li>
              <li>
                Improved the algorithm's efficiency and performance.
              </li>
              <li>
                Added new features and added testing to ensure functionality.
              </li>
              <li><strong>Tech Stack:</strong> Java (core language), Java Swing (frontend UI), JUnit (testing), Gradle (build automation & dependency management)</li>
            </ul>
          </>
        }
      />
      </div> 
    </main>
  );
}