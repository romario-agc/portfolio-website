'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PHOTOS } from '@/data/photos';
import { stg } from '@/lib/stg';
import { PHOTO_SERVICES, VIDEO_SERVICES, MARKETING_CATEGORIES } from '@/data/studio';
import { SectionHead } from '@/components/ui/SectionHead/SectionHead';
import { PageFooter } from '@/components/ui/PageFooter/PageFooter';
import { AlbumLightbox } from '@/components/overlays/AlbumLightbox/AlbumLightbox';
import styles from './page.module.css';

export default function StudioPage() {
  const [openAlbum, setOpenAlbum] = useState<number | null>(null);

  return (
    <article>
      <div id="studio-overview" />
      <div className="rgrid" style={stg(0)}>
        <div className="s12" style={{ marginBottom: 12 }}>
          <span className="uc-badge">🚧 Under Construction</span>
        </div>
      </div>
      <div style={stg(1)}>
        <SectionHead tag="Production &amp; Media" title="Studio &amp; Marketing">
          <p className="bs">End-to-end creative production — photography, videography, and marketing strategy for products, people, and services.</p>
        </SectionHead>
      </div>

      {/* §1 — Photoshoots (Bento Grid) */}
      <section id="sm-photos" className={`rgrid ${styles.section}`} style={stg(2)}>
        <div className="s12" style={stg(1)}>
          <h2 className={styles.sectionTitle}>Photoshoots</h2>
        </div>
        <div className="s12" style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <p className={styles.sectionDesc}>Professional photo production for digital platforms, live events, music videos, interviews, and marketing campaigns.</p>
          <Link href="/photoshoots" className="oval-link">View All Photoshoots →</Link>
        </div>
        <div className="s12" style={stg(2)}>
          <div className={styles.bentoGrid}>
            {PHOTOS.slice(0, 6).map((photo, i) => (
              <div
                key={i}
                className={`${styles.bentoCell} ${i === 0 ? styles.bentoTall1 : ''} ${i === 3 ? styles.bentoTall2 : ''}`}
                style={{ background: photo.gradient, cursor: 'pointer' }}
                onClick={() => setOpenAlbum(i)}
              >
                <div className={styles.bentoOverlay}>
                  <span className={styles.bentoCat}>{photo.category}</span>
                  <span className={styles.bentoLabel}>{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §2 — Photoshoot Services */}
      <section id="sm-photo-svc" className={`rgrid ${styles.section}`}>
        <div className="s12" style={stg(1)}><h2 className={styles.sectionTitle}>Photoshoot Services</h2></div>
        <div className="s12" style={{ marginBottom: 28 }}>
          <p className={styles.sectionDesc}>Professional photography packages tailored for products, personal brands, and service businesses.</p>
        </div>
        {PHOTO_SERVICES.map((svc, i) => (
          <div key={i} className="s4" style={{ marginBottom: 20 }}>
            <div style={{ paddingRight: 20, height: '100%' }}>
              <span className={styles.serviceTarget}>{svc.target}</span>
              <div className={styles.serviceTitle}>{svc.title}</div>
              <p className={styles.serviceDesc}>{svc.desc}</p>
              <div className={styles.servicePills}>
                {svc.items.map((item, j) => (
                  <span key={j} className="pl" style={{ fontSize: 9, padding: '4px 10px' }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* §3 — Videography */}
      <section id="sm-video" className={`rgrid ${styles.section}`}>
        <div className="s12" style={stg(1)}><h2 className={styles.sectionTitle}>Videography Services</h2></div>
        <div className="s12" style={{ marginBottom: 16 }}>
          <p className={styles.sectionDesc}>Video production from concept through post — demo reels, explainers, testimonials, and social content.</p>
        </div>
        {VIDEO_SERVICES.map((v, i) => (
          <div key={i} className="s6" style={{ marginBottom: 16 }}>
            <div className={styles.videoCard}>
              <div className={styles.videoTitle} style={{ color: v.color }}>{v.title}</div>
              <p className={styles.videoDesc}>{v.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* §4 — Marketing */}
      <section id="sm-marketing" className={`rgrid ${styles.section}`} style={{ borderBottom: 'none' }}>
        <div className="s12" style={stg(1)}><h2 className={styles.sectionTitle}>Marketing Services</h2></div>
        <div className="s12" style={{ marginBottom: 28 }}>
          <p className={styles.sectionDesc}>Branding, strategy, and content creation for products, personal brands, and service businesses.</p>
        </div>
        {MARKETING_CATEGORIES.map((m, i) => (
          <div key={i} className="s4" style={{ marginBottom: 16 }}>
            <div style={{ paddingRight: 16, height: '100%' }}>
              <div className={styles.mktCat} style={{ color: m.color }}>{m.cat}</div>
              {m.items.map((item, j) => (
                <div key={j} className={styles.mktItem} style={{ borderBottom: j < m.items.length - 1 ? '1px solid var(--divider)' : 'none' }}>
                  <span className={styles.mktCheck} style={{ color: m.color }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="s12" style={{ marginTop: 12 }}>
          <span className={styles.mktNote}>Services available for Product, Personal Brand, and Service Business clients.</span>
        </div>
      </section>

      <PageFooter />

      {/* Album viewer overlay */}
      <AlbumLightbox albumIndex={openAlbum} onClose={() => setOpenAlbum(null)} />
    </article>
  );
}
