'use client';

import { PHOTOS } from '@/data/photos';
import { useUI } from '@/components/providers/UIProvider';
import { MobileAlbumStrip } from '@/components/ui/MobileAlbumStrip/MobileAlbumStrip';
import styles from './page.module.css';

export function BentoPhotoGrid() {
  const { openOverlay } = useUI();

  const handleClick = (_albumIndex: number) => {
    // TODO: pass album index to lightbox when album state is extended
    openOverlay('album');
  };

  return (
    <>
      {/* Desktop/tablet: bento grid */}
      <div className={styles.bentoGrid}>
        {PHOTOS.slice(0, 6).map((album, i) => {
          const isTall = i === 0 || i === 3;
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`${styles.bentoCell} ${isTall ? styles.bentoTall : ''}`}
              style={{ background: album.gradient }}
            >
              <div className={isTall ? styles.bentoCellOverlayTall : styles.bentoCellOverlay}>
                <span className={isTall ? styles.bentoCatLg : styles.bentoCat}>{album.category}</span>
                <span className={isTall ? styles.bentoLabelLg : styles.bentoLabel}>{album.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: horizontal album strip */}
      <div className={styles.mobileStrip}>
        <MobileAlbumStrip albums={PHOTOS.slice(0, 6)} onAlbumClick={handleClick} />
      </div>
    </>
  );
}
