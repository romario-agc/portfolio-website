'use client';

import { useRef, useState, useEffect } from 'react';
import type { PhotoAlbum } from '@/types';
import styles from './MobileAlbumStrip.module.css';

interface Props {
  albums: PhotoAlbum[];
  onAlbumClick: (index: number) => void;
}

/** Horizontal scrolling album strip — mobile replacement for bento/masonry grids.
 *  Shows album covers as cards in a horizontal scroll with snap points.
 *  Includes pagination dots for discoverability. */
export function MobileAlbumStrip({ albums, onAlbumClick }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / (el.offsetWidth * 0.78));
      setActiveIdx(Math.min(idx, albums.length - 1));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [albums.length]);

  const scrollTo = (idx: number) => {
    scrollRef.current?.scrollTo({
      left: idx * (scrollRef.current.offsetWidth * 0.78),
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.strip} ref={scrollRef}>
        {albums.map((album, i) => {
          const hasVideo = album.items.some((x) => x.type === 'video');
          return (
            <div
              key={i}
              className={styles.card}
              style={{ background: album.gradient }}
              onClick={() => onAlbumClick(i)}
            >
              <div className={styles.info}>
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
      </div>
      {/* Pagination dots */}
      {albums.length > 2 && (
        <div className={styles.dots}>
          {albums.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Album ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
