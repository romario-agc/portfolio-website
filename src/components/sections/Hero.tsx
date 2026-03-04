'use client';

import Link from 'next/link';
import { stg } from '@/lib/stg';
import { tIn, tOut } from '@/lib/tilt';
import styles from './Hero.module.css';

/** Hero section — mockup lines 2986–3023.
 *  Featured blog card has tilt-on-hover (mockup line 3012). */
export function Hero() {
  return (
    <div className={`s12 ${styles.hero}`}>
      {/* 3D Background Elements — §8.5 */}
      <div className={styles.bgElements} aria-hidden="true">
        <svg viewBox="0 0 120 120" className={`${styles.svgEl} ${styles.hexRing}`}>
          <polygon points="60,10 105,35 105,85 60,110 15,85 15,35" fill="none" stroke="rgba(0,212,255,0.12)" strokeWidth="1.5"/>
          <polygon points="60,25 90,42 90,78 60,95 30,78 30,42" fill="none" stroke="rgba(0,212,255,0.06)" strokeWidth="1"/>
        </svg>
        <svg viewBox="0 0 100 100" className={`${styles.svgEl} ${styles.cubeWire}`}>
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="rgba(168,85,247,0.1)" strokeWidth="1.2" rx="2"/>
          <rect x="30" y="10" width="60" height="60" fill="none" stroke="rgba(168,85,247,0.06)" strokeWidth="1" rx="2"/>
          <line x1="20" y1="20" x2="30" y2="10" stroke="rgba(168,85,247,0.08)" strokeWidth="0.8"/>
          <line x1="80" y1="20" x2="90" y2="10" stroke="rgba(168,85,247,0.08)" strokeWidth="0.8"/>
          <line x1="80" y1="80" x2="90" y2="70" stroke="rgba(168,85,247,0.08)" strokeWidth="0.8"/>
          <line x1="20" y1="80" x2="30" y2="70" stroke="rgba(168,85,247,0.08)" strokeWidth="0.8"/>
        </svg>
        <svg viewBox="0 0 160 160" className={`${styles.svgEl} ${styles.diamond}`}>
          <path d="M80,10 L150,80 L80,150 L10,80 Z" fill="none" stroke="rgba(0,212,255,0.08)" strokeWidth="1.2"/>
          <path d="M80,35 L125,80 L80,125 L35,80 Z" fill="none" stroke="rgba(0,212,255,0.05)" strokeWidth="1"/>
          <circle cx="80" cy="80" r="3" fill="rgba(0,212,255,0.15)"/>
        </svg>
        <div className={`${styles.dot} ${styles.dot1}`} />
        <div className={`${styles.dot} ${styles.dot2}`} />
        <div className={`${styles.dot} ${styles.dot3}`} />
        <svg viewBox="0 0 200 200" className={`${styles.svgEl} ${styles.orbit}`}>
          <ellipse cx="100" cy="100" rx="90" ry="40" fill="none" stroke="rgba(0,212,255,0.06)" strokeWidth="0.8" strokeDasharray="6,8" className={styles.orbitPath}/>
        </svg>
        <svg viewBox="0 0 80 80" className={`${styles.svgEl} ${styles.triangle}`}>
          <polygon points="40,8 72,68 8,68" fill="none" stroke="rgba(168,85,247,0.1)" strokeWidth="1.2"/>
        </svg>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.main}>
          <div style={stg(0)} className={styles.tagline}>
            <span className="lb" style={{ fontWeight: 600 }}>Product</span>
            <span className={styles.divider} />
            <span className={styles.tagSub}>Design w/</span>
          </div>
          <h1 className="hn" style={stg(1)}>Romário<br/>Coffie</h1>
          <div style={stg(2)} className={styles.bio}>
            <p className={styles.bioText}>
              <strong>SAFe® Certified Product Manager/Developer</strong> with over seven years of experience crafting innovative software and media solutions to address complex business and customer challenges.
            </p>
          </div>
          <div style={stg(3)} className={styles.ctas}>
            <Link href="/#connect" className={`oval-link ${styles.ctaGhost}`}>Get in Touch</Link>
            <Link href="/resume" className={styles.ctaResume}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
              </svg>
              Go to Resume
            </Link>
          </div>
        </div>
        {/* Featured blog card — Mannequin 1.0 (external) */}
        <div style={stg(4)} className={styles.aside}>
          <a
            href="/blog/designing-mannequin"
            className="cd"
            style={{ borderRadius: 16, padding: 18, display: 'block', textDecoration: 'none' }}
            onMouseMove={tIn}
            onMouseLeave={tOut}
          >
            <span className="lb" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, fontSize: 9 }}>
              ✦ Featured Case Study
            </span>
            <div className={styles.featuredPreview}>
              <span className={styles.featuredLetter}>M</span>
            </div>
            <div className={styles.featuredTitle}>
              Designing Mannequin 1.0
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={styles.externalIcon}>
                <path d="M5 3h8v8" /><path d="M13 3L3 13" />
              </svg>
            </div>
            <p className={styles.featuredDesc}>Bridging design and development — an external case study.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
