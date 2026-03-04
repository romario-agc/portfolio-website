'use client';

import { usePathname } from 'next/navigation';
import { useState, useCallback, useEffect, useRef } from 'react';
import { SUBNAV_MAP } from '@/data/navigation';
import { useScrollSpy } from '@/lib/hooks/useScrollSpy';
import styles from './SubNav.module.css';

interface TocHeading { id: string; label: string; }

/** Unified SubNav bar.
 *  Desktop: horizontal pill bar with active highlighting.
 *  Mobile: horizontal scrollable chip strip (always visible, no dropdown).
 *  Blog posts: shows article headings as TOC items. */
export function SubNav() {
  const pathname = usePathname();
  const items = SUBNAV_MAP[pathname];
  const isHome = pathname === '/';
  const isBlog = pathname === '/blog';
  const isBlogPost = pathname.startsWith('/blog/') && pathname !== '/blog';
  const chipStripRef = useRef<HTMLDivElement>(null);

  // Blog post TOC — scan DOM for h2[id] headings
  const [tocItems, setTocItems] = useState<TocHeading[]>([]);
  useEffect(() => {
    if (!isBlogPost) { setTocItems([]); return; }
    const timer = setTimeout(() => {
      const headings = document.querySelectorAll('h2[id]');
      const found: TocHeading[] = [];
      headings.forEach((h) => {
        if (h.id && h.textContent) {
          found.push({ id: h.id, label: h.textContent });
        }
      });
      setTocItems(found);
    }, 300);
    return () => clearTimeout(timer);
  }, [isBlogPost, pathname]);

  // Scroll spy
  const tocIds = tocItems.map((t) => t.id);
  const scrollActiveId = useScrollSpy(
    !isHome && !isBlogPost ? (items?.map((s) => s.id) ?? []) : [],
  );
  const tocActiveId = useScrollSpy(isBlogPost ? tocIds : []);

  const effectiveItems = isBlogPost
    ? tocItems.map((t) => ({ id: t.id, label: t.label }))
    : items || [];

  // Homepage active section tracking
  const [homeActiveId, setHomeActiveId] = useState<string | null>('hero');
  useEffect(() => {
    if (!isHome) return;
    const handler = (e: Event) => {
      const id = (e as CustomEvent).detail?.id;
      if (id) setHomeActiveId(id);
    };
    window.addEventListener('home-section', handler);
    return () => window.removeEventListener('home-section', handler);
  }, [isHome]);

  const activeId = isHome ? homeActiveId : isBlogPost ? tocActiveId : scrollActiveId;

  // Color theme
  const getTheme = () => {
    if (isHome) {
      if (homeActiveId === 'planning') return 'red';
      if (homeActiveId === 'design-system') return 'purple';
      return 'cyan';
    }
    if (pathname.startsWith('/methodology')) return 'red';
    if (pathname.startsWith('/design-system')) return 'purple';
    return 'cyan';
  };
  const theme = getTheme();

  // Auto-scroll active chip into view on mobile
  useEffect(() => {
    if (!chipStripRef.current || !activeId) return;
    const strip = chipStripRef.current;
    const activeChip = strip.querySelector(`[data-id="${activeId}"]`) as HTMLElement;
    if (activeChip) {
      const left = activeChip.offsetLeft - strip.offsetWidth / 2 + activeChip.offsetWidth / 2;
      strip.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    }
  }, [activeId]);

  // Blog search + sort
  const [blogSearch, setBlogSearch] = useState('');
  const [blogSort, setBlogSort] = useState<'latest' | 'popular'>('latest');

  const dispatchBlogFilter = useCallback((q: string, sort: string) => {
    window.dispatchEvent(new CustomEvent('blog-filter', { detail: { q, sort } }));
  }, []);

  useEffect(() => {
    if (isBlog) dispatchBlogFilter(blogSearch, blogSort);
  }, [blogSearch, blogSort, isBlog, dispatchBlogFilter]);

  if (!effectiveItems.length) {
    if (!items) return null;
  }

  const handleClick = (id: string) => {
    if (isHome) {
      window.dispatchEvent(new CustomEvent('sidebar-nav', { detail: { id } }));
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!effectiveItems.length) return null;

  return (
    <nav
      id="portfolio-subnav"
      className={`${styles.bar} ${isHome ? styles.homeOnly : ''} ${isBlogPost ? styles.tocMode : ''}`}
      data-home={isHome ? 'true' : undefined}
      data-theme={theme}
      role="navigation"
      aria-label={isBlogPost ? 'Article contents' : 'Page sections'}
    >
      {/* Desktop: horizontal links */}
      <div className={styles.navLinks}>
        {isBlogPost && <span className={styles.tocTag}>Contents</span>}
        {effectiveItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.item} ${activeId === item.id ? styles.itemActive : ''}`}
            onClick={() => handleClick(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile: scrollable chip strip */}
      <div className={styles.mobileStrip} ref={chipStripRef}>
        <div className={styles.chipRow}>
          {isBlogPost && <span className={styles.tocTagMobile}>TOC</span>}
          {effectiveItems.map((item) => (
            <button
              key={item.id}
              data-id={item.id}
              className={`${styles.chip} ${activeId === item.id ? styles.chipActive : ''}`}
              onClick={() => handleClick(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Blog list: search + sort */}
      {isBlog && (
        <div className={styles.blogControls}>
          <div className={styles.blogSearch}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 12, flexShrink: 0, opacity: 0.4 }}>
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={blogSearch}
              onChange={(e) => setBlogSearch(e.target.value)}
              placeholder="Search posts…"
              className={styles.blogSearchInput}
            />
          </div>
          <div className={styles.blogSortBtns}>
            {(['latest', 'popular'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setBlogSort(s)}
                className={`${styles.blogSortBtn} ${blogSort === s ? styles.blogSortActive : ''}`}
                type="button"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
