'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NAV_ITEMS, ROUTE_TO_NAV } from '@/data/navigation';
import { MobileDrawer } from '@/components/layout/MobileDrawer/MobileDrawer';
import styles from './Nav.module.css';

/** Derive parent path for back button */
function getParent(pathname: string): { label: string; href: string } | null {
  if (pathname === '/') return null;
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length <= 1) return { label: 'Home', href: '/' };
  // Go up one level
  const parentPath = '/' + segments.slice(0, -1).join('/');
  const labels: Record<string, string> = {
    '/': 'Home', '/work': 'Work', '/blog': 'Blog', '/studio': 'Studio',
    '/methodology': 'Methodology', '/design-system': 'Design System',
  };
  return { label: labels[parentPath] || 'Back', href: parentPath };
}

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const activeHref = ROUTE_TO_NAV[pathname] || pathname;
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const parent = getParent(pathname);

  /** Navigate to homepage connect section */
  const goConnect = () => {
    if (pathname === '/') {
      window.dispatchEvent(new CustomEvent('sidebar-nav', { detail: { id: 'connect' } }));
    } else {
      router.push('/');
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('sidebar-nav', { detail: { id: 'connect' } }));
      }, 600);
    }
  };

  return (
    <>
      <nav className={`${styles.nav} ${drawerOpen ? styles.navAboveDrawer : ''}`} role="navigation" aria-label="Main navigation">
        {/* Mobile back button — shown on subpages */}
        {parent && (
          <Link href={parent.href} className={styles.backBtn} aria-label={`Back to ${parent.label}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="12" y1="8" x2="4" y2="8" /><polyline points="7.5,4.5 4,8 7.5,11.5" />
            </svg>
          </Link>
        )}

        {/* Logo */}
        <Link
          href="/"
          className={styles.logo}
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('sidebar-nav', { detail: { id: 'hero' } }));
            }
          }}
        >
          Romario Coffie <span className={styles.logoSub}>Portfolio</span>
        </Link>

        {/* Desktop nav links */}
        <div className={styles.links}>
          {NAV_ITEMS.map((item, i) => (
            <div
              key={item.href}
              className={styles.linkWrap}
              onMouseEnter={() => item.dropdown && setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <Link
                href={item.href}
                className={`${styles.link} ${activeHref === item.href ? styles.linkActive : ''} ${item.isGreen ? styles.linkGreen : ''}`}
              >
                {item.label}
                {item.dropdown && (
                  <svg className={styles.chevron} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 5l3 3 3-3" />
                  </svg>
                )}
              </Link>

              {item.dropdown && hoveredIdx === i && (
                <div className={styles.dropdown} role="menu">
                  {item.dropdown.map((dd) => (
                    <Link
                      key={dd.href + (dd.section || '')}
                      href={dd.section ? `${dd.href}#${dd.section}` : dd.href}
                      className={`${styles.ddItem} ${dd.isOverview ? styles.ddOverview : ''}`}
                      role="menuitem"
                    >
                      {dd.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Connect CTA — navigates to homepage connect section */}
        <button className={styles.connectCta} onClick={goConnect}>
          Let&apos;s Work Together
        </button>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${drawerOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setDrawerOpen((prev) => !prev)}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      <MobileDrawer isOpen={drawerOpen} onClose={closeDrawer} />
    </>
  );
}
