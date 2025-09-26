import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles['ocean-floor']}>
              <div className={`${styles['sand-layer']} ${styles['sand-layer-1']}`}></div>
              <div className={`${styles['sand-layer']} ${styles['sand-layer-2']}`}></div>
              <div className={`${styles['sand-layer']} ${styles['sand-layer-3']}`}></div>
              <div className={styles['sand-particles']}></div>
              
              {/* Coral decorations */}
              <img src="/sea_creatures/coral1.svg" alt="" className={styles.coral1} />
              <img src="/sea_creatures/coral2.svg" alt="" className={styles.coral2} />
               <img src="/sea_creatures/sea_shell.svg" alt="" className={styles.shell} />
              
              {/* Footer swimming sharks */}
              <img src="/sharks/12.svg" alt="" className={styles.footerShark1} />
              <img src="/sharks/13.svg" alt="" className={styles.footerShark2} />
              <img src="/sharks/14.svg" alt="" className={styles.footerShark3} />
              <img src="/sharks/12.svg" alt="" className={styles.footerShark4} />
              <img src="/sharks/13.svg" alt="" className={styles.footerShark5} />
              <img src="/sharks/14.svg" alt="" className={styles.footerShark6} />
              <img src="/sharks/12.svg" alt="" className={styles.footerShark7} />
              <img src="/sharks/13.svg" alt="" className={styles.footerShark8} />
              
               <div className={styles.icons}>
                 <a href="https://www.linkedin.com/in/abby-weinreb-2342a2201/" target="_blank" rel="noopener noreferrer" aria-label="Visit Abby Weinreb's LinkedIn profile">
                 <img src="linkedin.svg" className={styles.linkedin} alt="" />
                 </a>
       
                 <a href="https://github.com/rhit-weinrea" target="_blank" rel="noopener noreferrer" aria-label="Visit Abby Weinreb's GitHub profile">
                   <img src="github.svg" className={styles.github} alt="" />
                 </a>
               </div>
              </div>
            </footer>
        );
    }