'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { NAV_ITEMS } from '@/data/navigation';
import type { NavItem } from '@/types';
import styles from './MobileDrawer.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const [phase, setPhase] = useState<'closed' | 'entering' | 'open' | 'exiting'>('closed');
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    setPortalTarget(document.getElementById('portal-root'));
  }, []);

  // Phase: open → entering → open
  useEffect(() => {
    if (isOpen && phase === 'closed') {
      setPhase('entering');
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setPhase('open'), 400);
    }
  }, [isOpen, phase]);

  // Phase: close → exiting → closed
  useEffect(() => {
    if (!isOpen && (phase === 'entering' || phase === 'open')) {
      setPhase('exiting');
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setPhase('closed'), 300);
    }
  }, [isOpen]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on route change — but NOT on initial mount
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      onClose();
      setExpandedIdx(null);
    }
    prevPathRef.current = pathname;
  }, [pathname, onClose]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const toggleAccordion = useCallback((idx: number) => {
    setExpandedIdx((prev) => (prev === idx ? null : idx));
  }, []);

  const handleConnect = useCallback(() => {
    onClose();
    if (pathname === '/') {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('sidebar-nav', { detail: { id: 'connect' } }));
      }, 350);
    } else {
      router.push('/');
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('sidebar-nav', { detail: { id: 'connect' } }));
      }, 800);
    }
  }, [onClose, pathname, router]);

  if (!portalTarget || phase === 'closed') return null;

  const phaseClass =
    phase === 'entering' ? styles.entering :
    phase === 'exiting' ? styles.exiting : styles.open;

  return createPortal(
    <div className={`${styles.overlay} ${phaseClass}`}>
      {/* Backdrop — starts below UC bar */}
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />

      {/* Drawer panel — no close button, hamburger handles toggle */}
      <nav
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Nav items */}
        <div className={styles.items}>
          {NAV_ITEMS.map((item: NavItem, idx: number) => (
            <div
              key={item.href}
              className={styles.itemGroup}
              style={{ animationDelay: phase === 'entering' ? `${idx * 0.04 + 0.08}s` : undefined }}
            >
              {item.dropdown ? (
                <div className={styles.accordionHeader}>
                  <Link
                    href={item.href}
                    className={`${styles.itemLink} ${pathname.startsWith(item.href) ? styles.itemActive : ''} ${item.isGreen ? styles.itemGreen : ''}`}
                  >
                    {item.label}
                  </Link>
                  <button
                    className={`${styles.chevron} ${expandedIdx === idx ? styles.chevronOpen : ''}`}
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={expandedIdx === idx}
                    aria-label={`${expandedIdx === idx ? 'Collapse' : 'Expand'} ${item.label} submenu`}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <polyline points="6,8 10,12 14,8" />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`${styles.itemLink} ${pathname === item.href ? styles.itemActive : ''} ${item.isGreen ? styles.itemGreen : ''}`}
                >
                  {item.label}
                </Link>
              )}

              {/* Accordion children */}
              {item.dropdown && (
                <div className={`${styles.accordionBody} ${expandedIdx === idx ? styles.accordionOpen : ''}`}>
                  <div className={styles.accordionInner}>
                    {item.dropdown
                      .filter((dd) => !dd.isOverview)
                      .map((dd) => (
                        <Link
                          key={dd.href + (dd.section || '')}
                          href={dd.section ? `${dd.href}#${dd.section}` : dd.href}
                          className={styles.subLink}
                        >
                          {dd.label}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Connect CTA */}
        <div className={styles.footer}>
          <button className={styles.connectBtn} onClick={handleConnect}>
            Get in Touch
          </button>
        </div>
      </nav>
    </div>,
    portalTarget,
  );
}
