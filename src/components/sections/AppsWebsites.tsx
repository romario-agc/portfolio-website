'use client';

import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import { stg } from '@/lib/stg';
import { tIn, tOut } from '@/lib/tilt';
import styles from './AppsWebsites.module.css';

const FEATURED_IDS = ['platext', 'dialog', 'mannequin'] as const;

export function AppsWebsites() {
  return (
    <section id="apps-websites" className="s12">
      <div style={stg(0)} className={styles.header}>
        <span className="lb" style={{ display: 'block', marginBottom: 10 }}>Portfolio</span>
        <h2 className="st" style={{ fontSize: 42 }}>
          Apps &amp; Websites{' '}
          <span className="uc-badge">🚧 Under Construction</span>
        </h2>
      </div>
      <p className="bs" style={{ ...stg(1), fontSize: 18, maxWidth: 600, marginBottom: 28 }}>
        Product design and development work spanning enterprise platforms, mobile applications, and open-source tools.
      </p>

      <div className={styles.grid}>
        {FEATURED_IDS.map((id, i) => {
          const p = PROJECTS[id];
          return (
            <Link key={id} href={`/work/${id}`} className={`cd ${styles.card}`} style={stg(i + 2)} onMouseMove={tIn} onMouseLeave={tOut}>
              <div className={styles.preview} style={{ background: `linear-gradient(145deg, ${p.color}10, var(--bg-alt))` }}>
                <div className={styles.screenPair}>
                  <div className={styles.screen} style={{ background: `linear-gradient(180deg, ${p.color}15, var(--bg-alt))` }}>
                    <span className={styles.screenLabel}>Screen 1</span>
                  </div>
                  <div className={styles.screen} style={{ background: `linear-gradient(180deg, ${p.color}0c, var(--bg-alt))` }}>
                    <span className={styles.screenLabel}>Screen 2</span>
                  </div>
                </div>
              </div>
              <div className={styles.body}>
                <span className="lb" style={{ display: 'block', marginBottom: 6, fontSize: 8 }}>{p.tag}</span>
                <div className={styles.cardTitle}>{p.name}</div>
                <p className={styles.cardDesc}>{p.desc.substring(0, 100)}…</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div style={stg(6)} className={styles.cta}>
        <Link href="/work" className="oval-link">View All Projects →</Link>
      </div>
    </section>
  );
}
