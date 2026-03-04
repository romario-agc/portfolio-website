'use client';

import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

/** Fixed footer chrome — mockup line 725.
 *  Desktop: 36px bar on homepage only (standalone pages use inline PageFooter).
 *  Mobile: compact fixed bar on ALL pages. */
export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <footer className={`${styles.footer} ${isHome ? '' : styles.mobileOnly}`}>
      <div className={styles.inner}>
        <span className={styles.copy}>© {new Date().getFullYear()} Romario Coffie</span>
        <div className={styles.links}>
          <a href="https://linkedin.com/in/romariocoffie" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://dribbble.com/romariocoffie" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="Dribbble">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
          </a>
          <a href="https://github.com/romariocoffie" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
          </a>
          <a href="mailto:Romario.agc@gmail.com" className={styles.link} aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
