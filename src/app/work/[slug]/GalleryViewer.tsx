'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './GalleryViewer.module.css';

interface GalleryItem {
  label: string;
  gradient: string;
  svg?: React.ReactNode;
}

interface Props {
  items: GalleryItem[];
}

/** Interactive gallery for case study screenshots.
 *  Grid view + fullscreen lightbox on tap. */
export function GalleryViewer({ items }: Props) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [portal, setPortal] = useState<HTMLElement | null>(null);

  useEffect(() => { setPortal(document.getElementById('portal-root')); }, []);

  const dismiss = useCallback(() => setActiveIdx(null), []);

  const next = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx + 1) % items.length);
  }, [activeIdx, items.length]);

  const prev = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx - 1 + items.length) % items.length);
  }, [activeIdx, items.length]);

  // Keyboard
  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [activeIdx, dismiss, next, prev]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = activeIdx !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeIdx]);

  const activeItem = activeIdx !== null ? items[activeIdx] : null;

  return (
    <>
      {/* Grid */}
      <div className={styles.gallery}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`${styles.cell} ${i === 0 ? styles.cellMain : ''}`}
            style={{ background: item.gradient }}
            onClick={() => setActiveIdx(i)}
          >
            {item.svg || <span className={styles.cellLabel}>{item.label}</span>}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {portal && activeItem && createPortal(
        <div className={styles.overlay} onClick={dismiss}>
          <div className={styles.backdrop} />

          {/* Top bar */}
          <div className={styles.topBar} onClick={(e) => e.stopPropagation()}>
            <span className={styles.counter}>{(activeIdx ?? 0) + 1} / {items.length}</span>
            <button className={styles.closeBtn} onClick={dismiss} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18 }}>
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Media */}
          <div className={styles.mediaArea} onClick={(e) => e.stopPropagation()}>
            <button className={`${styles.arrow} ${styles.arrowL}`} onClick={prev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 20 }}>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className={styles.mediaFrame} style={{ background: activeItem.gradient }}>
              {activeItem.svg || <span className={styles.mediaLabel}>{activeItem.label}</span>}
            </div>

            <button className={`${styles.arrow} ${styles.arrowR}`} onClick={next} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 20 }}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Thumbnails */}
          <div className={styles.thumbStrip} onClick={(e) => e.stopPropagation()}>
            {items.map((item, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${i === activeIdx ? styles.thumbActive : ''}`}
                style={{ background: item.gradient }}
                onClick={() => setActiveIdx(i)}
                aria-label={`View screenshot ${i + 1}`}
              />
            ))}
          </div>
        </div>,
        portal,
      )}
    </>
  );
}
