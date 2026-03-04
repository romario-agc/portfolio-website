'use client';

import { useUI } from '@/components/providers/UIProvider';
import styles from './BackgroundLayers.module.css';

/** Three fixed gradient layers — DS V35 §3.2.
 *  Base always on, blue/red fade in via data-theme on <html>. */
export function BackgroundLayers() {
  const { theme } = useUI();

  return (
    <div aria-hidden="true">
      <div className={`${styles.layer} ${styles.base}`} />
      <div className={`${styles.layer} ${styles.blue} ${theme === 'design-system' ? styles.active : ''}`} />
      <div className={`${styles.layer} ${styles.red} ${theme === 'planning' ? styles.active : ''}`} />
    </div>
  );
}
