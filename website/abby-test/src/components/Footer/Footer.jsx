import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
               <div className={styles.icons}>
                 <a href="https://www.linkedin.com/in/abby-weinreb-2342a2201/"  target="_blank" rel="noopener noreferrer">
                 <img src="linkedin.svg" className={styles.linkedin} alt="LinkedIn" />
                 </a>
       
                 <a href="https://github.com/rhit-weinrea" target="_blank" rel="noopener noreferrer">
                   <img src="github.svg" className={styles.github} alt="GitHub" />
                 </a>
               </div>
               <p>
                 &copy; 2025 Abby Weinreb.{" "}
                 <span className={styles.srOnly}>All rights reserved.</span> <span role="img" aria-label="wave">🌊</span>
               </p>
             </footer>
        );
    }