'use client';

import Link from 'next/link';
import { stg } from '@/lib/stg';
import { tIn, tOut } from '@/lib/tilt';
import styles from './BlogSection.module.css';

const POSTS = [
  { t: 'Designing Mannequin 1.0', c: 'Design + Dev', sub: 'How we built an open-source Drupal theming tool and the lessons learned about component-driven design.', slug: 'designing-mannequin', isCaseStudy: true },
  { t: 'I Believe in Curiosity', c: 'Personal Statement', sub: 'Why asking better questions matters more than having ready answers — curiosity as the engine of meaningful work.', slug: 'i-believe-in-curiosity' },
  { t: 'Discovering My Brand', c: 'Personal Statement', sub: 'The journey from "designer who codes" to a coherent professional identity at the intersection of design and craft.', slug: 'discovering-my-brand' },
];

export function BlogSection() {
  return (
    <div className={`s12 ${styles.section}`}>
      <div className={styles.header} style={stg(0)}>
        <span className="lb" style={{ display: 'block', marginBottom: 10 }}>What we&apos;re thinking</span>
        <h2 className="st" style={{ fontSize: 42 }}>Blog</h2>
      </div>

      <div className={styles.grid}>
        {POSTS.map((p, i) => {
          const cardStyle = { padding: 0, overflow: 'hidden' as const, borderRadius: 12, display: 'block' as const, textDecoration: 'none' as const };
          const bgStyle = { background: `linear-gradient(${135 + i * 25}deg, ${i % 2 === 0 ? 'var(--cyan)' : 'var(--purple)'}08, var(--bg-alt))` };

          return (
            <div key={i} style={stg(i + 1)} className={styles.col}>
              <Link href={`/blog/${p.slug}`} className="cd" style={cardStyle} onMouseMove={tIn} onMouseLeave={tOut}>
                <div className={styles.preview} style={bgStyle}>
                  <span className={styles.previewCat} style={{ color: i % 2 === 0 ? 'var(--cyan)' : 'var(--purple)' }}>{p.c}</span>
                </div>
                <div className={styles.body}>
                  <div className={styles.title}>
                    {p.t}
                    {p.isCaseStudy && <span className={styles.caseStudy}>Case Study</span>}
                  </div>
                  <p className={styles.excerpt}>{p.sub.length > 100 ? p.sub.slice(0, 100) + '…' : p.sub}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className={styles.cta} style={stg(4)}>
        <Link href="/blog" className="oval-link">View All Posts →</Link>
      </div>
    </div>
  );
}
