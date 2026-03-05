'use client';

import { useState } from 'react';
import { stg } from '@/lib/stg';
import {
  EXP_TABS, EXP_DATA, JOURNEY_STAGES, JOURNEY_COLORS,
  JOURNEY_ACTIONS, JOURNEY_TOUCHPOINTS, JOURNEY_EMOTIONS, JOURNEY_PAIN_POINTS,
  DESIGN_OPPORTUNITIES, PERSONAS,
  type ExpTab,
} from '@/data/experiences';
import styles from './page.module.css';

export function ExperiencesContent() {
  const [tab, setTab] = useState<ExpTab>('explore');
  const data = EXP_DATA[tab];

  return (
    <>
      {/* §1 — Experiences with Tabs */}
      <div id="exp-tabs" className={`rgrid ${styles.section}`} style={stg(1)}>
        <div className="s12">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--text)', marginBottom: 20 }}>Experiences</h2>
          <div className={styles.tabs}>
            {EXP_TABS.map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}>{t}</button>
            ))}
          </div>
          <p className="bs" style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>{data.desc}</p>
        </div>
      </div>

      {/* Experience Cards + Pattern Grid */}
      <div className="rgrid" style={{ marginBottom: 48 }}>
        <div className="s7">
          <div className={styles.expGrid}>
            {data.experiences.map((exp, i) => (
              <div key={i}>
                <div className={styles.expPill} style={{ borderColor: exp.color }} />
                <div className={styles.expName}>{exp.name}</div>
                <span className={styles.expLabel} style={{ color: exp.color }}>Patterns</span>
                {exp.patterns.map((p, j) => (
                  <div key={j} className={styles.patternItem}>{p}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="s5">
          <span id="exp-interconnect" className={styles.interLabel} style={{ scrollMarginTop: 136 }}>Pattern Interconnectivity</span>
          <svg viewBox="0 4 320 184" fill="none" className={styles.interconnect}>
            <text x="45" y="16" fill="var(--muted)" fontSize="8" fontFamily="'Helvetica Neue',sans-serif" textAnchor="middle" fontWeight="600">Page A</text>
            <text x="125" y="16" fill="var(--muted)" fontSize="8" fontFamily="'Helvetica Neue',sans-serif" textAnchor="middle" fontWeight="600">Page B</text>
            <text x="205" y="16" fill="var(--muted)" fontSize="8" fontFamily="'Helvetica Neue',sans-serif" textAnchor="middle" fontWeight="600">Page C</text>
            <text x="285" y="16" fill="var(--muted)" fontSize="8" fontFamily="'Helvetica Neue',sans-serif" textAnchor="middle" fontWeight="600">Page D</text>
            <rect x="10" y="26" width="70" height="50" rx="6" fill={data.experiences[0].color} opacity="0.25" stroke={data.experiences[0].color} strokeWidth="0.5" strokeOpacity="0.3" />
            <text x="45" y="56" fill="var(--text)" fontSize="10" fontFamily="sans-serif" textAnchor="middle" opacity="0.7">A</text>
            <rect x="10" y="82" width="70" height="36" rx="6" fill={data.experiences[2].color} opacity="0.2" stroke={data.experiences[2].color} strokeWidth="0.5" strokeOpacity="0.3" />
            <rect x="90" y="26" width="70" height="62" rx="6" fill={data.experiences[1].color} opacity="0.25" stroke={data.experiences[1].color} strokeWidth="0.5" strokeOpacity="0.3" />
            <rect x="90" y="94" width="70" height="40" rx="6" fill={data.experiences[0].color} opacity="0.18" stroke={data.experiences[0].color} strokeWidth="0.5" strokeOpacity="0.2" />
            <text x="125" y="120" fill="var(--text)" fontSize="10" fontFamily="sans-serif" textAnchor="middle" opacity="0.7">B</text>
            <rect x="170" y="26" width="70" height="44" rx="6" fill={data.experiences[2].color} opacity="0.25" stroke={data.experiences[2].color} strokeWidth="0.5" strokeOpacity="0.3" />
            <rect x="170" y="76" width="70" height="58" rx="6" fill={data.experiences[1].color} opacity="0.22" stroke={data.experiences[1].color} strokeWidth="0.5" strokeOpacity="0.3" />
            <text x="205" y="112" fill="var(--text)" fontSize="10" fontFamily="sans-serif" textAnchor="middle" opacity="0.7">D</text>
            <rect x="250" y="26" width="60" height="32" rx="6" fill={data.experiences[0].color} opacity="0.15" stroke={data.experiences[0].color} strokeWidth="0.5" strokeOpacity="0.2" />
            <rect x="250" y="64" width="60" height="28" rx="6" fill={data.experiences[2].color} opacity="0.18" stroke={data.experiences[2].color} strokeWidth="0.5" strokeOpacity="0.2" />
            <rect x="250" y="98" width="60" height="36" rx="6" fill={data.experiences[1].color} opacity="0.15" stroke={data.experiences[1].color} strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1="80" y1="46" x2="90" y2="108" stroke={data.experiences[0].color} strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
            <line x1="160" y1="54" x2="170" y2="100" stroke={data.experiences[1].color} strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
            <line x1="80" y1="96" x2="170" y2="44" stroke={data.experiences[2].color} strokeWidth="1" strokeDasharray="3,3" opacity="0.25" />
            <text x="160" y="158" fill="var(--dim)" fontSize="7.5" fontFamily="'Helvetica Neue',sans-serif" fontStyle="italic" textAnchor="middle">Shared patterns connect pages within a single experience</text>
            {data.experiences.map((exp, i) => (
              <g key={i}>
                <rect x={50 + i * 90} y="172" width="10" height="10" rx="3" fill={exp.color} opacity="0.5" />
                <text x={65 + i * 90} y="180" fill="var(--dim)" fontSize="7.5" fontFamily="'Helvetica Neue',sans-serif">{exp.name}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* §2 — User Journeys */}
      <div id="exp-journeys" className={`rgrid ${styles.section}`} style={{ paddingTop: 36, borderTop: '1px solid var(--divider)' }}>
        <div className="s12">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--text)', marginBottom: 12 }}>User Journeys</h2>
          <p className="bs" style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>Mapping the complete user experience from first touchpoint to advocacy — capturing actions, emotions, touchpoints, and pain points at each stage.</p>
        </div>
        <div className="s12">
          <div className={styles.journeyWrapper}>
            <div className={styles.journeyGrid}>
              {/* Header */}
              <div style={{ padding: 12 }} />
              {JOURNEY_STAGES.map((stage, i) => (
                <div key={i} className={styles.journeyHeader} style={{ borderBottomColor: JOURNEY_COLORS[i], borderRadius: i === 0 ? '8px 0 0 0' : i === 4 ? '0 8px 0 0' : '0' }}>
                  <span className={styles.journeyHeaderLabel} style={{ color: JOURNEY_COLORS[i] }}>{stage}</span>
                </div>
              ))}
              {/* Actions */}
              <div className={styles.journeyRowLabel} style={{ background: 'rgba(0,212,255,0.04)' }}>Actions</div>
              {JOURNEY_ACTIONS.map((a, i) => (
                <div key={i} className={styles.journeyCell} style={{ background: 'rgba(0,212,255,0.02)' }}>
                  <span className={styles.journeyCellText}>{a}</span>
                </div>
              ))}
              {/* Touchpoints */}
              <div className={styles.journeyRowLabel} style={{ background: 'rgba(168,85,247,0.04)' }}>Touchpoints</div>
              {JOURNEY_TOUCHPOINTS.map((tp, i) => (
                <div key={i} className={styles.journeyCell} style={{ background: 'rgba(168,85,247,0.02)' }}>
                  <span className={styles.journeyCellText}>{tp}</span>
                </div>
              ))}
              {/* Emotions */}
              <div className={styles.journeyRowLabel} style={{ background: 'rgba(34,197,94,0.04)' }}>Emotions</div>
              {JOURNEY_EMOTIONS.map((em, i) => (
                <div key={i} className={styles.journeyCell} style={{ background: 'rgba(34,197,94,0.02)' }}>
                  <span style={{ fontSize: 16, marginRight: 6 }}>{em.emoji}</span>
                  <span className={styles.journeyCellText}>{em.text}</span>
                </div>
              ))}
              {/* Pain Points */}
              <div className={styles.journeyRowLabel} style={{ background: 'rgba(239,68,68,0.04)' }}>Pain Points</div>
              {JOURNEY_PAIN_POINTS.map((pp, i) => (
                <div key={i} className={styles.journeyCell} style={{ background: 'rgba(239,68,68,0.02)', borderRadius: i === 4 ? '0 0 8px 0' : '0' }}>
                  <span className={styles.journeyPainText}>{pp}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Opportunity Callout */}
          <div className={styles.oppBox}>
            <span className={styles.oppTitle}>Design Opportunities Identified</span>
            <div className={styles.oppGrid}>
              {DESIGN_OPPORTUNITIES.map((o, i) => (
                <div key={i}>
                  <span className={styles.oppStage}>{o.stage}</span>
                  <span className={styles.oppText}>{o.opp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* §3 — Personas */}
      <div id="exp-personas" className={`rgrid ${styles.section}`} style={{ paddingTop: 36, borderTop: '1px solid var(--divider)' }}>
        <div className="s12">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--text)', marginBottom: 20 }}>Personas</h2>
          <p className="bs" style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>Archetypal users derived from research data. Each persona encapsulates goals, frustrations, behaviors, and technical proficiency to ground design decisions in human reality.</p>
        </div>
        {PERSONAS.map((p, i) => (
          <div key={i} className="s4">
            <div className={styles.personaCard}>
              <div className={styles.personaHeader}>
                <div className={styles.personaAvatar} style={{ background: `linear-gradient(135deg, ${p.color}, var(--surface))` }}>{p.name[0]}</div>
                <div>
                  <div className={styles.personaName}>{p.name}</div>
                  <div className={styles.personaRole} style={{ color: p.color }}>{p.role} · {p.age}</div>
                </div>
              </div>
              <div className={styles.personaSection}>
                <span className={styles.personaSectionLabel}>Goal</span>
                <p className={styles.personaSectionText}>{p.goal}</p>
              </div>
              <div className={styles.personaSection}>
                <span className={styles.personaSectionLabel}>Pain Point</span>
                <p className={styles.personaSectionText}>{p.pain}</p>
              </div>
              <span className={styles.personaTech}>Tech: {p.tech}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
