'use client';

import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { useUI } from '@/components/providers/UIProvider';
import styles from './HomeViewer.module.css';

/**
 * PAGES array — matches mockup exactly (line 18).
 * Sidebar, dots, and background themes all key off this index.
 */
import Link from 'next/link';

// ── Section config ──
const PAGES = [
  'hero',
  'apps-websites',
  'planning',
  'design-system',
  'studio-marketing',
  'about',
  'blog',
  'connect',
];

/** Mobile floating CTA: maps section → standalone page */
const PAGE_LINKS: Record<string, { label: string; href: string }> = {
  'apps-websites': { label: 'View All Projects', href: '/work' },
  'planning': { label: 'View Methodology', href: '/methodology' },
  'design-system': { label: 'View Design System', href: '/design-system' },
  'studio-marketing': { label: 'View Studio', href: '/studio' },
  'blog': { label: 'View All Posts', href: '/blog' },
};

/** Maps page id → theme for BackgroundLayers */
const THEME_MAP: Record<string, 'default' | 'planning' | 'design-system'> = {
  planning: 'planning',
  'design-system': 'design-system',
};

interface Props {
  sections: ReactNode[];
}

/**
 * HomeViewer — the core scroll physics engine from the mockup.
 *
 * Shows ONE section at a time in a fixed viewport area.
 * Wheel, touch, and keyboard navigate between sections.
 * Exit: current section fades out + translates (0.3s).
 * Enter: new section fades up with stg() waterfall via CSS `fadeUp` keyframe.
 *
 * Exposes `idx` to sidebar/dots via data attributes on body.
 * Sets UIProvider theme for BackgroundLayers.
 */
export function HomeViewer({ sections }: Props) {
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState(false); // true = exit phase
  const [dir, setDir] = useState(1); // 1 = down, -1 = up
  const [mounted, setMounted] = useState(false); // gate initial render
  const locked = useRef(false);
  const touchY = useRef(0);
  const { setTheme } = useUI();

  // Delay render by one frame so fixed positioning is established before animations fire
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const go = useCallback(
    (target: number) => {
      if (locked.current || target === idx || target < 0 || target >= PAGES.length) return;
      locked.current = true;
      setDir(target > idx ? 1 : -1);
      setAnim(true);
      // Exit phase: 350ms, then swap section, enter phase: 500ms lock
      setTimeout(() => {
        setIdx(target);
        setAnim(false);
        setTimeout(() => {
          locked.current = false;
        }, 500);
      }, 350);
    },
    [idx],
  );

  // Wheel navigation — mockup line 461
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (locked.current) return;
      if (Math.abs(e.deltaY) < 15) return;
      go(e.deltaY > 0 ? idx + 1 : idx - 1);
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [idx, go]);

  // Touch navigation — mockup line 466
  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      touchY.current = e.touches[0].clientY;
    };
    const onEnd = (e: TouchEvent) => {
      const dy = touchY.current - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 40) go(dy > 0 ? idx + 1 : idx - 1);
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [idx, go]);

  // Keyboard navigation — mockup line 474
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        go(idx + 1);
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        go(idx - 1);
      }
      if (e.key === 'Home') {
        e.preventDefault();
        go(0);
      }
      if (e.key === 'End') {
        e.preventDefault();
        go(PAGES.length - 1);
      }
      // J/K vim-style
      if (e.key === 'j' || e.key === 'J') go(idx + 1);
      if (e.key === 'k' || e.key === 'K') go(idx - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [idx, go]);

  // Expose idx to body for sidebar and set theme for BackgroundLayers
  useEffect(() => {
    const pageId = PAGES[idx];
    document.body.setAttribute('data-home-idx', String(idx));
    document.body.setAttribute('data-home-page', pageId);
    setTheme(THEME_MAP[pageId] || 'default');
    // Broadcast to SubNav
    window.dispatchEvent(new CustomEvent('home-section', { detail: { id: pageId } }));
    return () => {
      document.body.removeAttribute('data-home-idx');
      document.body.removeAttribute('data-home-page');
      setTheme('default');
    };
  }, [idx, setTheme]);

  // Sidebar navigation — listens for custom event from Sidebar component
  useEffect(() => {
    const onSidebarNav = (e: Event) => {
      const id = (e as CustomEvent).detail?.id;
      if (!id) return;
      const target = PAGES.indexOf(id);
      if (target >= 0) go(target);
    };
    window.addEventListener('sidebar-nav', onSidebarNav);
    return () => window.removeEventListener('sidebar-nav', onSidebarNav);
  }, [go]);

  const pageId = PAGES[idx];

  // Exit style — mockup line 547
  const exitStyle: React.CSSProperties = anim
    ? {
        opacity: 0,
        transform: dir > 0 ? 'translateY(-50px) scale(0.96)' : 'translateY(50px) scale(0.96)',
        transition: 'opacity 0.3s ease-in, transform 0.3s ease-in',
      }
    : mounted
      ? {}
      : { opacity: 0 }; // Hidden until mounted to prevent layout jank

  return (
    <>
      {/* Page viewport — mockup .page class (line 688) */}
      <div
        className={`${styles.page} home-page-viewer`}
        style={exitStyle}
      >
        <div className={styles.inner} key={idx}>
          {sections[idx]}
        </div>
      </div>

      {/* Dots — right side (mockup .dots, line 712) */}
      <div className={styles.dots} aria-label="Section navigation">
        {PAGES.map((id, i) => (
          <button
            key={id}
            className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
            onClick={() => go(i)}
            aria-label={`Go to ${id.replace(/-/g, ' ')}`}
            aria-current={i === idx ? 'true' : undefined}
          />
        ))}
      </div>

      {/* Scroll indicator — only on hero (mockup line 626) */}
      {idx === 0 && !anim && (
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollLabel}>Scroll</span>
          <div className={styles.scrollTrack}>
            <div className={styles.scrollLine} />
          </div>
        </div>
      )}

      {/* Mobile floating CTA — links to standalone page for current section */}
      {PAGE_LINKS[pageId] && !anim && (
        <Link
          href={PAGE_LINKS[pageId].href}
          className={`${styles.mobileCta} ${
            pageId === 'planning' ? styles.ctaPlanning :
            pageId === 'design-system' ? styles.ctaPurple : ''
          }`}
        >
          {PAGE_LINKS[pageId].label}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="3" y1="7" x2="11" y2="7" /><polyline points="7.5,3.5 11,7 7.5,10.5" />
          </svg>
        </Link>
      )}
    </>
  );
}
