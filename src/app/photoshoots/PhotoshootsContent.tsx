'use client';

import { useState } from 'react';
import { PHOTOS, PHOTO_CATEGORIES } from '@/data/photos';
import { useUI } from '@/components/providers/UIProvider';
import { MobileAlbumStrip } from '@/components/ui/MobileAlbumStrip/MobileAlbumStrip';
import styles from './page.module.css';

const HEIGHTS = [320, 420, 280, 380, 340, 300, 360, 260];

export function PhotoshootsContent() {
  const [tag, setTag] = useState('all');
  const { openOverlay } = useUI();

  const filtered = PHOTOS.filter(
    (p) => tag === 'all' || p.category.toLowerCase().includes(tag.toLowerCase()),
  );

  const handleClick = (_albumIndex: number) => {
    openOverlay('album');
  };

  return (
    <>
      {/* Tag filter */}
      <div className="rgrid" style={{ marginBottom: 24 }}>
        <div className="s12" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span className={styles.filterLabel}>Filter:</span>
          {PHOTO_CATEGORIES.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t.toLowerCase())}
              className={`${styles.tagBtn} ${tag === t.toLowerCase() ? styles.tagActive : ''}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop/tablet: masonry grid */}
      <div className={`rgrid ${styles.desktopGrid}`} style={{ marginBottom: 40 }}>
        {filtered.map((photo, i) => {
          const realIdx = PHOTOS.indexOf(photo);
          const h = HEIGHTS[realIdx] || 320;
          const hasVideo = photo.items.some((x) => x.type === 'video');
          const hasGif = photo.items.some((x) => x.type === 'gif');
          const typeLabel = hasVideo ? 'Photos, Videos' : 'Photos';

          return (
            <div key={i} className="s6" style={{ marginBottom: 24 }}>
              <div
                onClick={() => handleClick(realIdx)}
                className={styles.albumCard}
                style={{ height: h, background: photo.gradient }}
              >
                <div className={styles.albumOverlay} style={{ background: `radial-gradient(ellipse at ${30 + i * 8}% ${40 + i * 5}%, ${i % 2 === 0 ? 'rgba(0,212,255,0.04)' : 'rgba(168,85,247,0.04)'}, transparent 70%)` }} />
                <div className={styles.albumInfo}>
                  <span className={styles.albumCat}>{photo.category}</span>
                  <div className={styles.albumLabel}>{photo.label}</div>
                  <span className={styles.albumMeta}>
                    {photo.items.length} items · {typeLabel}{hasGif ? ' & GIFs' : ''}
                  </span>
                </div>
                <div className={styles.albumBadge}>{photo.items.length}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: album strip */}
      <div className={styles.mobileStrip} style={{ marginBottom: 40 }}>
        <MobileAlbumStrip albums={filtered} onAlbumClick={(i) => handleClick(PHOTOS.indexOf(filtered[i]))} />
      </div>
    </>
  );
}
