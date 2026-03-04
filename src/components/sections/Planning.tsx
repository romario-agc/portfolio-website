import Link from 'next/link';
import { stg } from '@/lib/stg';
import styles from './Planning.module.css';

const MANIFEST_STEPS = ['Diverge', 'Ideate', 'Converge', 'KPIs', 'Ship'];
const PILLS = ['Problem Definition', 'Hypothesis', 'Design Manifest', 'Feedback Mgmt', 'Technical Scope', 'Acceptance Testing', 'Use Cases', 'User Stories'];
const CARDS = [
  { h: 'Problem Definition', p: 'Framing the core challenge before solutioning' },
  { h: 'Technical Scope', p: 'Existing components, peripheral systems, constraints' },
];
const SPRINTS = [
  { y: 2, l: 'Sprint 1', d: 'Foundation', w: 160, c: '#ff9a9a' },
  { y: 22, l: 'Sprint 2', d: 'Components', w: 220, c: '#ff9a9a' },
  { y: 42, l: 'Sprint 3', d: 'Animation', w: 140, c: '#c084fc' },
  { y: 62, l: 'Sprint 4', d: 'Content & QA', w: 280, c: '#c084fc' },
];

export function Planning() {
  return (
    <div className={`s12 ${styles.section}`}>
      {/* Left column */}
      <div className={styles.left}>
        <div style={stg(0)}><span className="lb" style={{ color: '#ff9a9a' }}>Process</span></div>
        <h2 className="st" style={{ ...stg(1), fontSize: 42, marginBottom: 16, color: '#fff' }}>Design Planning<br/>& Engineering</h2>
        <p className="bs" style={{ ...stg(2), fontSize: 18, marginBottom: 14, color: '#e0c4c4' }}>
          Tracking and collection of user stories, data, designs, and product management assets.
        </p>
        <div style={stg(3)}>
          <span className={styles.manifestLabel}>Design Manifest</span>
          <svg viewBox="0 0 260 30" fill="none" className={styles.manifestSvg}>
            {MANIFEST_STEPS.map((s, i) => (
              <g key={i}>
                <rect x={i * 52} y="2" width="44" height="18" rx="9" stroke="#ff6666" strokeWidth="0.7" opacity={0.25 + i * 0.12}/>
                <text x={i * 52 + 22} y="14" fill="#e0c4c4" fontSize="6" textAnchor="middle" fontFamily="sans-serif">{s}</text>
                {i < 4 && <line x1={i * 52 + 46} y1="11" x2={i * 52 + 52} y2="11" stroke="#ff6666" strokeWidth="0.4" opacity="0.3"/>}
              </g>
            ))}
          </svg>
        </div>
        <div style={stg(4)}>
          <Link href="/methodology" className="oval-link" style={{ borderColor: '#ff6666', color: '#ff6666' }}>Full Methodology →</Link>
        </div>
      </div>

      {/* Right column */}
      <div className={styles.right}>
        <div style={{ ...stg(2), display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          {PILLS.map((m) => <span key={m} className="pl" style={{ borderColor: 'rgba(255,68,68,0.25)', color: '#e0c4c4' }}>{m}</span>)}
        </div>
        <div className={styles.cardGrid}>
          {CARDS.map((x, i) => (
            <div key={i} style={stg(i + 4)} className={styles.card}>
              <div className={styles.cardTitle}>{x.h}</div>
              <div className={styles.cardDesc}>{x.p}</div>
            </div>
          ))}
        </div>
        <div style={stg(6)} className={styles.sprintWrap}>
          <svg viewBox="0 0 400 80" fill="none" style={{ width: '100%' }}>
            <line x1="16" y1="2" x2="16" y2="78" stroke="rgba(255,68,68,0.2)" strokeWidth="0.5"/>
            {SPRINTS.map((s, i) => (
              <g key={i}>
                <circle cx="16" cy={s.y + 5} r="3" fill={s.c} opacity="0.6"/>
                <text x="28" y={s.y + 5} fill="#ffe0e0" fontSize="8" fontFamily="sans-serif" fontWeight="700">{s.l}</text>
                <text x="28" y={s.y + 14} fill="#e0a0a0" fontSize="6" fontFamily="serif">{s.d}</text>
                <rect x="100" y={s.y + 3} width={s.w} height="4" rx="2" fill={s.c} opacity="0.12"/>
                <rect x="100" y={s.y + 3} width={s.w * 0.6} height="4" rx="2" fill={s.c} opacity="0.35"/>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
