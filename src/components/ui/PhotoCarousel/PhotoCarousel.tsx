'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import type { PhotoAlbum } from '@/types';
import styles from './PhotoCarousel.module.css';

interface Props {
  albums: PhotoAlbum[];
  onAlbumClick: (index: number) => void;
}

/** Draggable portrait carousel for mobile.
 *  Shows one card + 20% peek of next. Touch-draggable with momentum.
 *  Progress bar tracks position. */
export function PhotoCarousel({ albums, onAlbumClick }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Touch/drag state
  const dragState = useRef({
    startX: 0,
    startScroll: 0,
    startTime: 0,
    moved: false,
  });

  /** Read actual card width + gap from DOM — adapts to CSS breakpoint changes. */
  const getCardStep = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 300;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return el.offsetWidth * 0.82;
    const gap = parseFloat(getComputedStyle(el).gap) || 10;
    return first.offsetWidth + gap;
  }, []);

  const scrollToIdx = useCallback((idx: number, smooth = true) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = getCardStep();
    el.scrollTo({ left: idx * cardWidth, behavior: smooth ? 'smooth' : 'auto' });
  }, [getCardStep]);

  // Track scroll position → active index
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = getCardStep();
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIdx(Math.max(0, Math.min(idx, albums.length - 1)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [albums.length, getCardStep]);

  // Pointer events for drag
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    dragState.current = {
      startX: e.clientX,
      startScroll: el.scrollLeft,
      startTime: Date.now(),
      moved: false,
    };
    el.setPointerCapture(e.pointerId);
    el.style.scrollSnapType = 'none';
    el.style.cursor = 'grabbing';
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const el = trackRef.current;
    if (!el) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 4) dragState.current.moved = true;
    el.scrollLeft = dragState.current.startScroll - dx;
  }, [isDragging]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const el = trackRef.current;
    if (!el) return;
    el.releasePointerCapture(e.pointerId);
    el.style.scrollSnapType = '';
    el.style.cursor = '';

    // Momentum: calculate velocity
    const dt = Date.now() - dragState.current.startTime;
    const dx = e.clientX - dragState.current.startX;
    const velocity = dx / Math.max(dt, 1);
    const cardWidth = getCardStep();
    const currentPos = el.scrollLeft / cardWidth;

    let targetIdx: number;
    if (Math.abs(velocity) > 0.3) {
      // Flick — go in velocity direction
      targetIdx = velocity < 0 ? Math.ceil(currentPos) : Math.floor(currentPos);
    } else {
      // Slow drag — snap to nearest
      targetIdx = Math.round(currentPos);
    }
    targetIdx = Math.max(0, Math.min(targetIdx, albums.length - 1));
    scrollToIdx(targetIdx);
  }, [isDragging, albums.length, scrollToIdx, getCardStep]);

  const handleCardClick = useCallback((idx: number) => {
    if (dragState.current.moved) return;
    onAlbumClick(idx);
  }, [onAlbumClick]);

  const progress = albums.length > 1 ? activeIdx / (albums.length - 1) : 0;

  return (
    <div className={styles.wrap}>
      <div
        ref={trackRef}
        className={styles.track}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {albums.map((album, i) => {
          const hasVideo = album.items.some((x) => x.type === 'video');
          return (
            <div
              key={i}
              className={styles.card}
              style={{ background: album.gradient }}
              onClick={() => handleCardClick(i)}
            >
              <div className={styles.cardOverlay}>
                <span className={styles.cat}>{album.category}</span>
                <span className={styles.label}>{album.label}</span>
                <span className={styles.meta}>
                  {album.items.length} items{hasVideo ? ' · Video' : ''}
                </span>
              </div>
              <div className={styles.count}>{album.items.length}</div>
            </div>
          );
        })}
        {/* End spacer so last card can center */}
        <div className={styles.endSpacer} />
      </div>

      {/* Progress bar */}
      <div className={styles.progressWrap}>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{ width: `${Math.max(20, progress * 100)}%` }}
          />
        </div>
        <span className={styles.progressLabel}>
          {activeIdx + 1} / {albums.length}
        </span>
      </div>
    </div>
  );
}
