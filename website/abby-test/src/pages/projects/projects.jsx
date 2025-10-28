import React from "react";
import Project from "../../components/project/project";
import styles from "./projects.module.css";
import r1 from "../../resources/rethink1.jpeg" 
import r2 from "../../resources/rethink2.jpeg"
import r3 from "../../resources/rethink3.jpeg"
import g1 from "../../resources/garp1.png"
import g2 from "../../resources/garp2.png"   
import chillweb1 from "../../resources/chillpillhome.png"
import chillweb2 from "../../resources/soundboard.png"
import chillweb3 from "../../resources/journal.png"
import chillapp1 from "../../resources/homeapp.jpeg"
import chillapp2 from "../../resources/soundapp.jpeg"
import chillapp3 from "../../resources/breathapp.jpeg"


const reTHinkImages = [

  r3,
  r2,
  r1

];

const garpImages = [

  g1,
  g2
];

const chillwebImages  = [
  chillweb1,
  chillweb2,
  chillweb3 
];

const chillappImages =  [
  chillapp1,
  chillapp2,
  chillapp3
];

export default function Projects() {
  return (
    <div className={styles.page}>
      {/* Body Sharks */}
      <img src="/sharks/14.svg" alt="" className={styles.bodyShark1} />
      <img src="/sharks/16.svg" alt="" className={styles.bodyShark2} />
      <img src="/sharks/17.svg" alt="" className={styles.bodyShark3} />
      <img src="/sharks/18.svg" alt="" className={styles.bodyShark4} />
      <img src="/sharks/16.svg" alt="" className={styles.bodyShark5} />
      <img src="/sharks/12.svg" alt="" className={styles.bodyShark6} />
      <img src="/sharks/13.svg" alt="" className={styles.bodyShark7} />
      <img src="/sharks/17.svg" alt="" className={styles.bodyShark8} />
      <img src="/sharks/18.svg" alt="" className={styles.bodyShark9} />
      <img src="/sharks/14.svg" alt="" className={styles.bodyShark10} />
      
    <main className={styles.projectContainer} id="main-content">
      <h1 className={styles.bubbleHeader}>Highlighted Projects</h1>
      <p className={styles.description}>Click on any images to get a better look!</p>
    <div className={styles.projects}> 
      <Project
        title="Lo-Fi Balloon Orchestra"
        description={
          <>
            <span>September 2025</span>
            <ul>
              <li>
                Balloon Orchestra turns Windborne's global sounding balloons into a living, generative ensemble.
              </li>
              <li>
                Choose one musical key for the whole piece, then stack multiple layers of that same harmony.
              </li>
              <li>
                Each layer can listen to a different data hour from the constellation and has its own sound preset, tempo factor, and volume.
              </li>
            </ul>
          </>
        }
        alt="Lo-Fi Balloon Orchestra web application interface"
        details={
          <>
            <ul>
              <li>
                <strong>Generative Music:</strong> Creates ambient soundscapes based on real balloon data from around the world.
              </li>
              <li>
                <strong>Interactive Layers:</strong> Users can customize different musical layers with unique sound presets and tempos.
              </li>
              <li>
                <strong>Real-time Data:</strong> Integrates with Windborne's global balloon constellation for live atmospheric data.
              </li>
              <li>
                <strong>Browser-based:</strong> Everything runs locally in your browser with no server required.
              </li>
              <li>
                <strong>Accessible:</strong> Headphones recommended for the full immersive experience.
              </li>
              <li>
                <strong>Try it out:</strong> <a href="https://app.abby-weinreb.workers.dev/" className={styles.link} target="_blank" rel="noopener noreferrer">https://app.abby-weinreb.workers.dev/</a>
              </li>
              <li>
                <strong>Tech stack:</strong> React (frontend), Vite (build tool), Tone.js (audio synthesis), Windborne API (balloon data), CloudFlare Workers (hosting).
              </li>
            </ul>
          </>
        }
      />
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
          Focused on accessibility, usability, and a welcoming aesthetic.
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
        <li><strong>Tech stack:</strong> CloudFlare (hosting), React (frontend), CSS Modules (styling).
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
      <h2 className={styles.bubbleHeader}>Older Projects</h2>

      <Project
        title="Chill Pill Mental Health Web App v2"
        description={
          <>
            <span>Spring 2022</span>
            <ul>
              <li>
                First fullstack application I have ever built!
              </li>
              <li>
                Created a mental health resource website to provide coping mechanisms and support for college students.
              </li>
              <li>
                New features included a soundboard, and a groups section where you can connect with other users
              </li> 
            </ul>
          </>
        }
        details = {
          <>
            <ul>
              <li>
                Iteration of my Chill Pill App from highschool
              </li>
              <li>
                Added authentication through Firebase
              </li>
              <li>
                Conducted user testing to gather feedback and improve the user experience.
              </li>
              <li>
                You can still visit at <a href="https://chillpill-1775f.web.app/" className={styles.link} target="_blank" rel="noopener noreferrer">https://chillpillweb.web.app/</a>
              </li>
              <li><strong>I don't have access to the Firebase, so I have not been able to make any improvements</strong></li>
            </ul>
          </>
        }
        images={chillwebImages}
      />
      <Project
        title="Chill Pill Mental Health Web App v1"
        description={
          <>
            <span>Spring 2020</span>
            <ul>
              <li>
                First ever project I had created in Computer Science
              </li>
              <li>
                Developed a mobile app to provide mental health resources and support for users.
              </li>
              <li>
                Implemented a user-friendly interface with easy navigation and access to resources.
              </li>
            </ul>
          </>
        }
        details = {
          <>
            <ul>
              <li>
                Created as my AP Computer Science Principles Final
              </li>
              <li>
                You can still access it here <a href="https://studio.code.org/projects/applab/TCTc2thVBb_m-orm65762WcbBarBrlnLSyf6j0rTY8k?qr=true" className={styles.link} target="_blank" rel="noopener noreferrer">https://studio.code.org/projects/applab/TCTc2thVBb_m-orm65762WcbBarBrlnLSyf6j0rTY8k?qr=true</a>
              </li>
            <li><strong>I don't have access to the source code anymore, so I have not been able to make any improvements</strong></li>
              </ul>
          </>
        }
        images = {chillappImages}
      />
    </div>
  </main>
  </div>
);
}