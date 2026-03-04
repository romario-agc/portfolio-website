'use client';

import { useState } from 'react';
import { SectionHead } from '@/components/ui/SectionHead/SectionHead';
import { PageFooter } from '@/components/ui/PageFooter/PageFooter';
import { stg } from '@/lib/stg';
import {
  EXP_TABS, EXP_DATA, JOURNEY_STAGES, JOURNEY_COLORS,
  JOURNEY_ACTIONS, JOURNEY_TOUCHPOINTS, JOURNEY_EMOTIONS,
  JOURNEY_PAIN_POINTS, DESIGN_OPPORTUNITIES, PERSONAS,
} from '@/data/experiences';
import type { ExpTab } from '@/data/experiences';
import styles from './page.module.css';

export default function ExperiencesPage() {
  const [tab, setTab] = useState<ExpTab>('explore');
  const data = EXP_DATA[tab];

  return (
    <article>
      <div id="exp-overview" />
      <div style={stg(0)}>
        <SectionHead tag="UX Framework" title="Experiences, User Journeys &amp; Personas">
          <p className="bs" style={{ lineHeight: 1.8 }}>Broad-range categorizations of user interactions — structured to help designers solve problems with intention across the full product lifecycle.</p>
        </SectionHead>
      </div>

      {/* §1 — Experiences (Tabbed) */}
      <section id="exp-tabs" className={`rgrid ${styles.section}`} style={stg(1)}>
        <div className="s12" style={stg(1)}>
          <h2 className={styles.h2}>Experiences</h2>
          <div className={styles.tabs}>
            {EXP_TABS.map((t) => (
              <span key={t} onClick={() => setTab(t)} className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}>{t}</span>
            ))}
          </div>
          <p className="bs" style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>{data.desc}</p>
        </div>
      </section>

      {/* Experience Cards + Interconnectivity */}
      <div className={`rgrid ${styles.expSection}`} style={{ marginBottom: 48 }}>
        <div className="s7">
          <div className={styles.expGrid}>
            {data.experiences.map((exp, i) => (
              <div key={i}>
                <div className={styles.expDot} style={{ borderColor: exp.color }} />
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
          <span id="exp-interconnect" className={styles.svgLabel}>Pattern Interconnectivity</span>
          <svg viewBox="0 4 320 184" fill="none" className={styles.interconnectSvg}>
            <text x="45" y="16" fill="var(--muted)" fontSize="8" fontFamily="'Helvetica Neue',sans-serif" textAnchor="middle" fontWeight="600">Page A</text>
            <text x="125" y="16" fill="var(--muted)" fontSize="8" fontFamily="'Helvetica Neue',sans-serif" textAnchor="middle" fontWeight="600">Page B</text>
            <text x="205" y="16" fill="var(--muted)" fontSize="8" fontFamily="'Helvetica Neue',sans-serif" textAnchor="middle" fontWeight="600">Page C</text>
            <text x="285" y="16" fill="var(--muted)" fontSize="8" fontFamily="'Helvetica Neue',sans-serif" textAnchor="middle" fontWeight="600">Page D</text>
            <rect x="10" y="26" width="70" height="50" rx="6" fill={data.experiences[0]?.color} opacity="0.25" stroke={data.experiences[0]?.color} strokeWidth="0.5" strokeOpacity="0.3" />
            <rect x="10" y="82" width="70" height="36" rx="6" fill={data.experiences[2]?.color} opacity="0.2" stroke={data.experiences[2]?.color} strokeWidth="0.5" strokeOpacity="0.3" />
            <rect x="90" y="26" width="70" height="62" rx="6" fill={data.experiences[1]?.color} opacity="0.25" stroke={data.experiences[1]?.color} strokeWidth="0.5" strokeOpacity="0.3" />
            <rect x="90" y="94" width="70" height="40" rx="6" fill={data.experiences[0]?.color} opacity="0.18" stroke={data.experiences[0]?.color} strokeWidth="0.5" strokeOpacity="0.2" />
            <rect x="170" y="26" width="70" height="44" rx="6" fill={data.experiences[2]?.color} opacity="0.25" stroke={data.experiences[2]?.color} strokeWidth="0.5" strokeOpacity="0.3" />
            <rect x="170" y="76" width="70" height="58" rx="6" fill={data.experiences[1]?.color} opacity="0.22" stroke={data.experiences[1]?.color} strokeWidth="0.5" strokeOpacity="0.3" />
            <rect x="250" y="26" width="60" height="32" rx="6" fill={data.experiences[0]?.color} opacity="0.15" stroke={data.experiences[0]?.color} strokeWidth="0.5" strokeOpacity="0.2" />
            <rect x="250" y="64" width="60" height="28" rx="6" fill={data.experiences[2]?.color} opacity="0.18" stroke={data.experiences[2]?.color} strokeWidth="0.5" strokeOpacity="0.2" />
            <rect x="250" y="98" width="60" height="36" rx="6" fill={data.experiences[1]?.color} opacity="0.15" stroke={data.experiences[1]?.color} strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1="80" y1="46" x2="90" y2="108" stroke={data.experiences[0]?.color} strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
            <line x1="160" y1="54" x2="170" y2="100" stroke={data.experiences[1]?.color} strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
            <line x1="80" y1="96" x2="170" y2="44" stroke={data.experiences[2]?.color} strokeWidth="1" strokeDasharray="3,3" opacity="0.25" />
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
      <section id="exp-journeys" className={`rgrid ${styles.section}`} style={{ paddingTop: 36, borderTop: '1px solid var(--divider)' }}>
        <div className="s12" style={stg(1)}>
          <h2 className={styles.h2}>User Journeys</h2>
          <p className="bs" style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>Mapping the complete user experience from first touchpoint to advocacy — capturing actions, emotions, touchpoints, and pain points at each stage.</p>
        </div>
        <div className="s12" style={stg(2)}>
          <div className={styles.journeyScroll}>
            <div className={styles.journeyGrid}>
              {/* Header */}
              <div className={styles.journeyCorner} />
              {JOURNEY_STAGES.map((stage, i) => (
                <div key={i} className={styles.journeyHeader} style={{ borderBottomColor: JOURNEY_COLORS[i] }}>
                  <span style={{ color: JOURNEY_COLORS[i] }}>{stage}</span>
                </div>
              ))}
              {/* Actions */}
              <div className={styles.journeyRowLabel} style={{ background: 'rgba(0,212,255,0.04)' }}>Actions</div>
              {JOURNEY_ACTIONS.map((a, i) => (
                <div key={i} className={styles.journeyCell} style={{ background: 'rgba(0,212,255,0.02)' }}>{a}</div>
              ))}
              {/* Touchpoints */}
              <div className={styles.journeyRowLabel} style={{ background: 'rgba(168,85,247,0.04)' }}>Touchpoints</div>
              {JOURNEY_TOUCHPOINTS.map((tp, i) => (
                <div key={i} className={styles.journeyCell} style={{ background: 'rgba(168,85,247,0.02)' }}>{tp}</div>
              ))}
              {/* Emotions */}
              <div className={styles.journeyRowLabel} style={{ background: 'rgba(34,197,94,0.04)' }}>Emotions</div>
              {JOURNEY_EMOTIONS.map((em, i) => (
                <div key={i} className={styles.journeyCell} style={{ background: 'rgba(34,197,94,0.02)' }}>
                  <span style={{ fontSize: 16, marginRight: 6 }}>{em.emoji}</span>{em.text}
                </div>
              ))}
              {/* Pain Points */}
              <div className={styles.journeyRowLabel} style={{ background: 'rgba(239,68,68,0.04)' }}>Pain Points</div>
              {JOURNEY_PAIN_POINTS.map((pp, i) => (
                <div key={i} className={styles.journeyCell} style={{ color: '#ef4444' }}>{pp}</div>
              ))}
            </div>
          </div>
        </div>
        {/* Opportunities */}
        <div className="s12" style={{ marginTop: 20 }}>
          <div className={styles.oppBox}>
            <span className={styles.oppTitle}>Design Opportunities Identified</span>
            <div className={styles.oppGrid}>
              {DESIGN_OPPORTUNITIES.map((o, i) => (
                <div key={i}>
                  <span className={styles.oppStage}>{o.stage}</span>
                  <span className={styles.oppDesc}>{o.opp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §3 — Personas */}
      <section id="exp-personas" className={`rgrid ${styles.personasSection}`} style={{ marginBottom: 40, paddingTop: 36, borderTop: '1px solid var(--divider)' }}>
        <div className="s12" style={stg(1)}>
          <h2 className={styles.h2}>Personas</h2>
          <p className="bs" style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>Archetypal users derived from research data. Each persona encapsulates goals, frustrations, behaviors, and technical proficiency to ground design decisions in human reality.</p>
        </div>
        {PERSONAS.map((p, i) => (
          <div key={i} className="s4" style={stg(2)}>
            <div className={styles.personaCard}>
              <div className={styles.personaHeader}>
                <div className={styles.personaAvatar} style={{ background: `linear-gradient(135deg, ${p.color}, var(--surface))` }}>{p.name[0]}</div>
                <div>
                  <div className={styles.personaName}>{p.name}</div>
                  <div className={styles.personaRole} style={{ color: p.color }}>{p.role} · {p.age}</div>
                </div>
              </div>
              <div className={styles.personaField}>
                <span className={styles.personaLabel}>Goal</span>
                <p>{p.goal}</p>
              </div>
              <div className={styles.personaField}>
                <span className={styles.personaLabel}>Pain Point</span>
                <p>{p.pain}</p>
              </div>
              <div className={styles.personaTech}>Tech: {p.tech}</div>
            </div>
          </div>
        ))}
      </section>

      <PageFooter />
    </article>
  );
}
