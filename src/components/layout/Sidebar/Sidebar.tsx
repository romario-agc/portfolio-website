'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { SIDEBAR_ITEMS } from '@/data/navigation';
import styles from './Sidebar.module.css';

/** Sidebar — homepage only, 1920px+.
 *  Mockup lines 678–681, 2910–2925.
 *  Navigates to homepage sections via custom event (goId pattern).
 *  Active item = white text, 20px, 700 weight. */
export function Sidebar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [homePageId, setHomePageId] = useState('hero');

  useEffect(() => {
    if (!isHome) return;
    const observer = new MutationObserver(() => {
      const val = document.body.getAttribute('data-home-page');
      if (val) setHomePageId(val);
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-home-page'] });
    const initial = document.body.getAttribute('data-home-page');
    if (initial) setHomePageId(initial);
    return () => observer.disconnect();
  }, [isHome]);

  const goTo = useCallback((id: string) => {
    // Dispatch custom event for HomeViewer to handle
    window.dispatchEvent(new CustomEvent('sidebar-nav', { detail: { id } }));
  }, []);

  if (!isHome) return null;

  return (
    <aside className={styles.sidebar} aria-label="Page navigation">
      <nav className={styles.nav}>
        {SIDEBAR_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`${styles.item} ${item.id === homePageId ? styles.itemActive : ''}`}
            onClick={() => goTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
