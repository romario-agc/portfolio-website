'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PHOTOS } from '@/data/photos';
import { AlbumLightbox } from '@/components/overlays/AlbumLightbox/AlbumLightbox';
import { PhotoCarousel } from '@/components/ui/PhotoCarousel/PhotoCarousel';
import { stg } from '@/lib/stg';
import styles from './StudioMarketing.module.css';

export function StudioMarketing() {
  const [openAlbum, setOpenAlbum] = useState<number | null>(null);

  return (
    <div className={`s12 ${styles.wrap}`}>
      <div style={stg(0)} className={styles.header}>
        <span className="lb" style={{ display: 'block', marginBottom: 8 }}>Production &amp; Media</span>
        <div className={styles.headerRow}>
          <h2 className="st" style={{ fontSize: 36 }}>
            Studio &amp; Marketing <span className="uc-badge">🚧 Under Construction</span>
          </h2>
          <Link href="/studio" className="oval-link" style={{ marginTop: 0 }}>View Studio →</Link>
        </div>
      </div>

      {/* Desktop/tablet: Bento grid */}
      <div className={styles.bento}>
        {/* Large left — spans 2 rows */}
        <div style={stg(1)} className={`${styles.cell} ${styles.cellTall}`} onClick={() => setOpenAlbum(0)}>
          <div className={styles.cellGrad} style={{ background: PHOTOS[0]?.gradient }} />
          <div className={styles.cellInfo}>
            <span className={styles.cellCat}>{PHOTOS[0]?.category}</span>
            <span className={styles.cellLabel}>{PHOTOS[0]?.label}</span>
          </div>
          <div className={styles.viewHint}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16 }}>
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </div>
        {/* Top row */}
        <div style={stg(2)} className={styles.cell} onClick={() => setOpenAlbum(1)}>
          <div className={styles.cellGrad} style={{ background: PHOTOS[1]?.gradient }} />
          <div className={styles.cellInfoSm}>
            <span className={styles.cellCatSm}>{PHOTOS[1]?.category}</span>
            <span className={styles.cellLabelSm}>{PHOTOS[1]?.label}</span>
          </div>
        </div>
        <div style={stg(2)} className={styles.cell} onClick={() => setOpenAlbum(2)}>
          <div className={styles.cellGrad} style={{ background: PHOTOS[2]?.gradient }} />
          <div className={styles.cellInfoSm}>
            <span className={styles.cellCatSm}>{PHOTOS[2]?.category}</span>
            <span className={styles.cellLabelSm}>{PHOTOS[2]?.label}</span>
          </div>
        </div>
        {/* Large right — spans 2 rows */}
        <div style={stg(1)} className={`${styles.cell} ${styles.cellTall}`} onClick={() => setOpenAlbum(3)}>
          <div className={styles.cellGrad} style={{ background: PHOTOS[3]?.gradient }} />
          <div className={styles.cellInfo}>
            <span className={styles.cellCat}>{PHOTOS[3]?.category}</span>
            <span className={styles.cellLabel}>{PHOTOS[3]?.label}</span>
          </div>
          <div className={styles.viewHint}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16 }}>
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </div>
        {/* Bottom row */}
        <div style={stg(3)} className={styles.cell} onClick={() => setOpenAlbum(4)}>
          <div className={styles.cellGrad} style={{ background: PHOTOS[4]?.gradient }} />
          <div className={styles.cellInfoSm}>
            <span className={styles.cellCatSm}>{PHOTOS[4]?.category}</span>
            <span className={styles.cellLabelSm}>{PHOTOS[4]?.label}</span>
          </div>
        </div>
        <div style={stg(4)} className={styles.cell} onClick={() => setOpenAlbum(5)}>
          <div className={styles.cellGrad} style={{ background: PHOTOS[5]?.gradient }} />
          <div className={styles.cellInfoSm}>
            <span className={styles.cellCatSm}>{PHOTOS[5]?.category}</span>
            <span className={styles.cellLabelSm}>{PHOTOS[5]?.label}</span>
          </div>
        </div>
      </div>

      {/* Mobile: draggable portrait carousel */}
      <div className={styles.mobileCarousel}>
        <PhotoCarousel albums={PHOTOS.slice(0, 6)} onAlbumClick={setOpenAlbum} />
      </div>

      <AlbumLightbox albumIndex={openAlbum} onClose={() => setOpenAlbum(null)} />
    </div>
  );
}
