'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { PHOTOS } from '@/data/photos';
import styles from './AlbumLightbox.module.css';

interface Props {
  albumIndex: number | null;
  onClose: () => void;
}

/** Album viewer — overlay with 60% dim, load/close/slide animations,
 *  top bar, flanking arrows, thumbnail strip, keyboard nav. */
export function AlbumLightbox({ albumIndex, onClose }: Props) {
  const [itemIdx, setItemIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [phase, setPhase] = useState<'closed' | 'entering' | 'open' | 'exiting'>('closed');
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  const animTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => { setPortal(document.getElementById('portal-root')); }, []);

  const album = albumIndex !== null ? PHOTOS[albumIndex] : null;

  // Open animation
  useEffect(() => {
    if (album && phase === 'closed') {
      setPhase('entering');
      clearTimeout(animTimeout.current);
      animTimeout.current = setTimeout(() => setPhase('open'), 450);
    }
  }, [album, phase]);

  // Close handler
  const dismiss = useCallback(() => {
    setPhase('exiting');
    clearTimeout(animTimeout.current);
    animTimeout.current = setTimeout(() => {
      onClose();
      setPhase('closed');
      setItemIdx(0);
      setPrevIdx(null);
    }, 400);
  }, [onClose]);

  // Image navigation with direction tracking
  const goTo = useCallback((newIdx: number, dir: 'next' | 'prev') => {
    if (!album) return;
    setPrevIdx(itemIdx);
    setDirection(dir);
    setItemIdx(newIdx);
  }, [album, itemIdx]);

  const next = useCallback(() => {
    if (!album) return;
    goTo((itemIdx + 1) % album.items.length, 'next');
  }, [album, itemIdx, goTo]);

  const prev = useCallback(() => {
    if (!album) return;
    goTo((itemIdx - 1 + album.items.length) % album.items.length, 'prev');
  }, [album, itemIdx, goTo]);

  // Keyboard
  useEffect(() => {
    if (!album || phase === 'closed') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [album, phase, dismiss, next, prev]);

  // Reset on album change
  useEffect(() => { setItemIdx(0); setPrevIdx(null); }, [albumIndex]);

  // Cleanup
  useEffect(() => () => clearTimeout(animTimeout.current), []);

  if (!portal || !album || phase === 'closed') return null;
  const item = album.items[itemIdx];
  const prevItem = prevIdx !== null ? album.items[prevIdx] : null;

  const phaseClass =
    phase === 'entering' ? styles.entering :
    phase === 'exiting' ? styles.exiting : styles.open;

  return createPortal(
    <div
      className={`${styles.overlay} ${phaseClass}`}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      {/* 85% dim backdrop */}
      <div className={styles.backdrop} onClick={dismiss} />

      {/* Top gradient for title/close contrast */}
      <div className={styles.topGrad} aria-hidden="true" />

      {/* ── Top bar ── */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span className={styles.albumTitle}>{album.label}</span>
          <span className={styles.albumCat}>{album.category}</span>
        </div>
        <div className={styles.topRight}>
          <span className={styles.counter}>{itemIdx + 1} / {album.items.length}</span>
          <button className={styles.closeBtn} onClick={dismiss} aria-label="Close album">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Media area ── */}
      <div className={styles.mediaArea}>
        <button className={`${styles.arrow} ${styles.arrowL}`} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 22 }}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Outgoing image (crossfade) */}
        {prevItem && (
          <div
            key={`out-${prevIdx}`}
            className={`${styles.mediaFrame} ${styles.mediaOut}`}
            style={{ background: prevItem.gradient }}
          />
        )}

        {/* Current image (slide in) */}
        <div
          key={`in-${itemIdx}`}
          className={`${styles.mediaFrame} ${direction === 'next' ? styles.mediaSlideNext : styles.mediaSlidePrev}`}
          style={{ background: item.gradient }}
        >
          {/* Type badge */}
          <div className={styles.typeBadge}>
            {item.type === 'photo' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14 }}>
                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
              </svg>
            )}
            {item.type === 'video' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14 }}>
                <polygon points="5 3 19 12 5 21" />
              </svg>
            )}
            {item.type === 'gif' && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 14 }}>
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <text x="12" y="15" textAnchor="middle" fill="currentColor" stroke="none" fontSize="8" fontWeight="700" fontFamily="sans-serif">GIF</text>
              </svg>
            )}
            <span style={{ textTransform: 'capitalize' }}>{item.type}</span>
            {item.duration && <span className={styles.dur}>{item.duration}</span>}
          </div>

          {/* Video play */}
          {item.type === 'video' && (
            <div className={styles.playOverlay}>
              <div className={styles.playCircle}>
                <svg viewBox="0 0 24 24" fill="white" style={{ width: 28, marginLeft: 3 }}>
                  <polygon points="5 3 19 12 5 21" />
                </svg>
              </div>
            </div>
          )}

          {/* GIF badge */}
          {item.type === 'gif' && <div className={styles.loopBadge}>LOOP ∞</div>}
        </div>

        <button className={`${styles.arrow} ${styles.arrowR}`} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 22 }}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ── Bottom: caption + thumbnails ── */}
      <div className={styles.bottomBar}>
        <p className={styles.caption} key={itemIdx}>{item.caption}</p>
        <div className={styles.thumbStrip}>
          {album.items.map((thumb, ti) => (
            <button
              key={ti}
              className={`${styles.thumb} ${ti === itemIdx ? styles.thumbActive : ''}`}
              style={{ background: thumb.gradient }}
              onClick={(e) => {
                e.stopPropagation();
                goTo(ti, ti > itemIdx ? 'next' : 'prev');
              }}
              aria-label={`View item ${ti + 1}`}
            >
              {thumb.type === 'video' && (
                <svg viewBox="0 0 24 24" fill="white" className={styles.thumbIcon}>
                  <polygon points="5 3 19 12 5 21" />
                </svg>
              )}
              {thumb.type === 'gif' && <span className={styles.thumbGif}>GIF</span>}
            </button>
          ))}
        </div>
      </div>
    </div>,
    portal,
  );
}
