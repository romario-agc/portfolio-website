'use client';

import { useState } from 'react';
import { PHOTOS, PHOTO_CATEGORIES } from '@/data/photos';
import { SectionHead } from '@/components/ui/SectionHead/SectionHead';
import { PageFooter } from '@/components/ui/PageFooter/PageFooter';
import { AlbumLightbox } from '@/components/overlays/AlbumLightbox/AlbumLightbox';
import styles from './page.module.css';

const HEIGHTS = [320, 420, 280, 380, 340, 300, 360, 260];

export default function PhotoshootsPage() {
  const [tag, setTag] = useState('all');
  const [openAlbum, setOpenAlbum] = useState<number | null>(null);

  const filtered = PHOTOS.filter(
    (p) => tag === 'all' || p.category.toLowerCase().includes(tag.toLowerCase()),
  );

  return (
    <article>
      <div id="photo-overview" />
      <div className="rgrid" style={{ marginBottom: 0 }}>
        <div className="s12" style={{ marginBottom: 12 }}>
          <span className="uc-badge">🚧 Under Construction</span>
        </div>
      </div>
      <SectionHead tag="Creative" title="Photoshoots">
        <p className="bs" style={{ lineHeight: 1.8 }}>
          A collection of photography work spanning editorial, lifestyle, and product shoots. Each series explores composition, lighting, and narrative through a design-driven lens.
        </p>
      </SectionHead>

      {/* Tag filter */}
      <div className="rgrid" style={{ marginBottom: 24 }}>
        <div className="s12" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span className={styles.filterLabel}>Filter:</span>
          {PHOTO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setTag(cat)}
              className={`${styles.tagBtn} ${tag === cat ? styles.tagActive : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Album cards — click opens viewer */}
      <div id="photo-gallery" className="rgrid" style={{ marginBottom: 40 }}>
        {filtered.map((photo, i) => {
          const origIdx = PHOTOS.indexOf(photo);
          const videoCount = photo.items.filter((x) => x.type === 'video').length;
          const hasGif = photo.items.some((x) => x.type === 'gif');
          const mediaLabel = `${videoCount > 0 ? 'Photos, Videos' : 'Photos'}${hasGif ? ' & GIFs' : ''}`;

          return (
            <div key={i} className="s6" style={{ marginBottom: 24 }}>
              <div
                className={styles.albumCard}
                style={{ height: HEIGHTS[origIdx] || 320, background: photo.gradient }}
                onClick={() => setOpenAlbum(origIdx)}
              >
                <div className={styles.albumContent}>
                  <span className={styles.albumCat}>{photo.category}</span>
                  <div className={styles.albumTitle}>{photo.label}</div>
                  <span className={styles.albumMeta}>{photo.items.length} items · {mediaLabel}</span>
                </div>
                <div className={styles.albumBadge}>{photo.items.length}</div>
              </div>
            </div>
          );
        })}
      </div>

      <PageFooter />

      {/* Album viewer overlay */}
      <AlbumLightbox albumIndex={openAlbum} onClose={() => setOpenAlbum(null)} />
    </article>
  );
}
