import Link from 'next/link';
import { stg } from '@/lib/stg';
import styles from './DesignSystemSection.module.css';

const HIERARCHY = [
  { l: 'Global', s: 'Typeface, Color', icon: '◎' },
  { l: 'Atoms', s: 'Icons, Buttons', icon: '●' },
  { l: 'Molecules', s: 'Input, Notification', icon: '◈' },
  { l: 'Organisms', s: 'App, Nav, Search', icon: '◆' },
];

const SWATCHES = [
  { c: '#00d4ff', n: 'Cyan' }, { c: '#a855f7', n: 'Purple' },
  { c: '#e8e6e3', n: 'Text' }, { c: '#a09c96', n: 'Desc' },
  { c: '#605c56', n: 'Dim' }, { c: '#8a8680', n: 'Muted' },
  { c: '#1a1920', n: 'Surface' }, { c: '#2a2930', n: 'Border' },
];

export function DesignSystemSection() {
  return (
    <div className={`s12 ${styles.section}`}>
      <div className={styles.full}>
        <div style={stg(0)}><span className="lb" style={{ display: 'block', marginBottom: 10 }}>Standards</span></div>
        <h2 className="st" style={{ ...stg(1), fontSize: 42, marginBottom: 24 }}>Design System</h2>
      </div>

      <div className={styles.left}>
        <p className="bs" style={{ ...stg(2), fontSize: 18, marginBottom: 10 }}>Living pattern library. Atomic Design from global tokens through organisms, built with Figma and Sketch.</p>
        <p style={{ ...stg(3), fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--desc)', marginBottom: 16 }}>Component states, typeface, color tokens, icon library, inputs, notifications — all documented and versioned.</p>
        <div style={stg(4)}><Link href="/design-system" className="oval-link">View Design System →</Link></div>
      </div>

      <div className={styles.right}>
        {/* Atomic Design Hierarchy */}
        <div style={stg(2)} className={styles.hierGrid}>
          {HIERARCHY.map((v, i) => (
            <div key={i} style={stg(i + 3)} className={styles.hierCard}>
              <span className={styles.hierIcon}>{v.icon}</span>
              <div>
                <span className={styles.hierLabel}>{v.l}</span>
                <span className={styles.hierSub}>{v.s}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Color Swatches */}
        <div style={stg(5)} className={styles.swatchSection}>
          <span className={styles.sectionLabel}>Color Tokens</span>
          <div className={styles.swatches}>
            {SWATCHES.map((sw) => (
              <div key={sw.n} className={styles.swatch}>
                <div className={styles.swatchColor} style={{ background: sw.c }} />
                <span className={styles.swatchName}>{sw.n}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Type Scale */}
        <div style={stg(6)} className={styles.typeSection}>
          <span className={styles.sectionLabel}>Type Scale</span>
          <div className={styles.typeScale}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--text)' }}>Aa</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>Aa</span>
            <span style={{ fontFamily: 'var(--font-reading)', fontSize: 16, color: 'var(--desc)' }}>Aa</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--muted)', letterSpacing: '0.06em' }}>Aa</span>
            <span className="lb">LABEL</span>
          </div>
        </div>

        {/* Button Components */}
        <div style={stg(7)} className={styles.components}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '8px 20px', borderRadius: 'var(--radius-pill)', background: 'var(--grad)', color: '#06060e', fontWeight: 600 }}>Primary</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '8px 20px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border)', color: 'var(--muted)' }}>Secondary</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '8px 20px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--cyan)', color: 'var(--cyan)', opacity: 0.6 }}>Ghost</span>
          <div className={styles.searchInput}><span className={styles.searchText}>Search…</span></div>
        </div>
      </div>
    </div>
  );
}
