import styles from './PageFooter.module.css';

/** PageFooter — rendered at bottom of standalone pages (not the fixed footer chrome).
 *  Links to social profiles. */
export function PageFooter() {
  return (
    <div className={`rgrid ${styles.footer}`}>
      <div className="s12">
        <div className={styles.inner}>
          <span className={styles.copy}>© {new Date().getFullYear()} Romario Coffie. Built with intention.</span>
          <div className={styles.links}>
            <a href="https://linkedin.com/in/romariocoffie" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
            <a href="https://dribbble.com/romariocoffie" target="_blank" rel="noopener noreferrer" className={styles.link}>Dribbble</a>
            <a href="https://github.com/romariocoffie" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}
