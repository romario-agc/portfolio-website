import styles from './UCBar.module.css';

/** Under Construction bar — mockup line 668+809.
 *  Red bar (#991b1b), cream text (#fecaca), 32px height. */
export function UCBar() {
  return (
    <div className={styles.bar} role="status">
      <span className={styles.emoji}>🚧</span>
      <span className={styles.label}>Under Construction</span>
      <span className={styles.text}> — Browse freely, explore the work, and connect.</span>
    </div>
  );
}
