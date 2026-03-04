import type { Metadata } from 'next';
import { SectionHead } from '@/components/ui/SectionHead/SectionHead';
import { PageFooter } from '@/components/ui/PageFooter/PageFooter';
import { stg } from '@/lib/stg';
import {
  METHODOLOGY_TAGS, SAFE_LAYERS, ENGINEERING_PHASES, CAPACITY_ALLOCATION,
  FLOW_METRICS, CADENCE_COLUMNS, AI_AGENTS, PRIORITIZATION_FRAMEWORKS,
  SPRINT_CADENCE, ARTIFACTS_LEFT, ARTIFACTS_RIGHT,
} from '@/data/methodology';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Planning & Engineering' };

export default function MethodologyPage() {
  return (
    <article>
      <div id="methodology-overview" />
      <SectionHead tag="SAFe® · Lean-Agile" title="Planning &amp; Engineering">
        <p className="bs" style={{ lineHeight: 1.8 }}>
          Scaling delivery from individual contributors to executive portfolios using SAFe® 6.0 principles. Lean-Agile governance, Planning Interval cadences, and AI-augmented engineering ensure predictable value flow across every organizational layer.
        </p>
        <div className={styles.tags}>
          {METHODOLOGY_TAGS.map((tag, i) => (
            <span key={i} className="pl" style={{ fontSize: 10, padding: '5px 12px' }}>{tag}</span>
          ))}
        </div>
      </SectionHead>

      {/* §1 — SAFe 6.0 Organizational Layers */}
      <section id="safe-layers" className={`rgrid ${styles.section}`}>
        <div className="s12" style={stg(0)}>
          <h2 className={styles.sectionTitle}>SAFe® 6.0 — Organizational Layers</h2>
        </div>
        <div className="s12" style={stg(1)}>
          <p className={styles.sectionDesc}>Full SAFe maps work across four layers — from strategic portfolio themes down to individual team execution. Each layer has distinct cadences, roles, and planning ceremonies. Value flows downward as strategy, upward as working increments.</p>
        </div>
        <div className="s12" style={stg(2)}>
          {SAFE_LAYERS.map((layer, i) => (
            <div key={i} className={styles.layerRow} style={{ borderLeftColor: layer.color, borderRadius: i === 0 ? '12px 12px 0 0' : i === 3 ? '0 0 12px 12px' : '0', borderBottom: i < 3 ? '1px solid var(--divider)' : 'none' }}>
              <div className={styles.layerMeta}>
                <span className={styles.layerIcon} style={{ color: layer.color }}>{layer.icon}</span>
                <span className={styles.layerName} style={{ color: layer.color }}>{layer.layer}</span>
                <div className={styles.layerRoles}>{layer.roles}</div>
              </div>
              <div className={styles.layerContent}>
                <div className={styles.layerEvents} style={{ color: layer.color }}>{layer.events}</div>
                <p className={styles.layerDesc}>{layer.desc}</p>
                <div className={styles.aiCallout}>
                  <strong>AI Agents:</strong> {layer.ai}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* §2 — Engineering Planning & Implementation */}
      <section id="pi-cadence" className={`rgrid ${styles.section}`}>
        <div className="s12" style={stg(0)}>
          <h2 className={styles.sectionTitle}>Engineering Planning &amp; Implementation</h2>
        </div>
        <div className="s12" style={stg(1)}>
          <p className={styles.sectionDesc}>Engineering planning follows a phased gate model aligned to SAFe PI cadences. Each phase has clear entry/exit criteria, Definition of Done, and measurable outcomes.</p>
        </div>
        {ENGINEERING_PHASES.map((phase, i) => (
          <div key={i} className="s12" style={stg(i + 2)}>
            <div className={styles.phaseRow}>
              <div className={styles.phaseNum}>
                <span style={{ color: phase.color, opacity: 0.3 }}>{phase.num}</span>
              </div>
              <div className={styles.phaseContent}>
                <span className={styles.phaseName} style={{ color: phase.color }}>{phase.phase}</span>
                <p className={styles.phaseDesc}>{phase.desc}</p>
                <div className={styles.phaseGrid}>
                  <div className={styles.deliverables}>
                    <span className={styles.cardLabel}>Deliverables</span>
                    {phase.deliverables.map((d, j) => (
                      <div key={j} className={styles.delivItem}>
                        <span className={styles.bullet} style={{ color: phase.color }}>●</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.aiCard}>
                    <span className={styles.aiLabel}>AI Agent Layer</span>
                    <p>{phase.ai}</p>
                  </div>
                </div>
              </div>
            </div>
            {i < ENGINEERING_PHASES.length - 1 && <hr className={styles.divider} />}
          </div>
        ))}
      </section>

      {/* §3 — Resource Management & Flow Metrics */}
      <section id="flow-metrics" className={`rgrid ${styles.section} ${styles.twoCol}`}>
        <div className="s12" style={stg(0)}>
          <h2 className={styles.sectionTitle}>Resource Management &amp; Flow Metrics</h2>
        </div>
        <div className="s6" style={stg(1)}>
          <div className={styles.metricCard}>
            <span className={styles.metricCardTitle} style={{ color: 'var(--cyan)' }}>Capacity Allocation Model</span>
            <p className={styles.metricCardDesc}>SAFe recommends allocating capacity across work types to prevent feature factories and ensure long-term velocity sustainability.</p>
            {CAPACITY_ALLOCATION.map((a, i) => (
              <div key={i} className={styles.barItem}>
                <div className={styles.barHeader}>
                  <span>{a.type}</span>
                  <span className={styles.barPct}>{a.pct}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: `${a.pct}%`, background: a.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="s6" style={stg(2)}>
          <div className={styles.metricCard}>
            <span className={styles.metricCardTitle} style={{ color: 'var(--purple)' }}>SAFe Flow Metrics</span>
            <p className={styles.metricCardDesc}>Eight flow accelerators measure value delivery health across Team, ART, Solution Train, and Portfolio levels.</p>
            {FLOW_METRICS.map((m, i) => (
              <div key={i} className={styles.flowItem} style={{ borderBottom: i < 5 ? '1px solid var(--divider)' : 'none' }}>
                <span className={styles.flowIcon}>{m.icon}</span>
                <div>
                  <span className={styles.flowName}>{m.metric}</span>
                  <span className={styles.flowDesc}>{m.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §4 — Planning Cadence & Ceremonies */}
      <section id="cadence-timeline" className={`rgrid ${styles.section}`}>
        <div className="s12" style={stg(0)}>
          <h2 className={styles.sectionTitle}>Planning Cadence &amp; Ceremonies</h2>
        </div>
        <div className="s12" style={stg(1)}>
          <div className={styles.cadenceGrid}>
            {CADENCE_COLUMNS.map((c, i) => (
              <div key={i} className={styles.cadenceCol}>
                <span className={styles.cadenceDay} style={{ color: c.color }}>{c.day}</span>
                <span className={styles.cadenceFreq}>{c.freq}</span>
                {c.items.map((item, j) => (
                  <div key={j} className={styles.cadenceItem} style={{ borderBottom: j < c.items.length - 1 ? '1px solid var(--divider)' : 'none' }}>{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §5 — AI Agent Integration Model */}
      <section id="ai-model" className={`rgrid ${styles.section}`}>
        <div className="s12" style={stg(0)}>
          <h2 className={styles.sectionTitle}>AI Agent Integration Model</h2>
        </div>
        <div className="s12" style={stg(1)}>
          <p className={styles.sectionDesc}>AI agents operate as first-class team members across every SAFe layer. They augment human decision-making, automate repetitive tasks, and surface insights. The key principle: AI assists and accelerates — humans own the decisions.</p>
        </div>
        {AI_AGENTS.map((agent, i) => (
          <div key={i} className="s12" style={stg(i + 2)}>
            <div className={styles.agentRow} style={{ borderBottom: i < AI_AGENTS.length - 1 ? '1px solid var(--divider)' : 'none' }}>
              <div className={styles.agentLayer}>
                <span className={styles.agentBadge} style={{ color: agent.color }}>{agent.layer}</span>
              </div>
              <div className={styles.agentContent}>
                <span className={styles.agentName} style={{ color: agent.color }}>{agent.role}</span>
                <p className={styles.agentDesc}>{agent.desc}</p>
                <div className={styles.toolPills}>
                  {agent.tools.map((tool, j) => (
                    <span key={j} className={styles.toolPill}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* §6 — Prioritization Frameworks */}
      <div className={`rgrid ${styles.section} ${styles.twoCol}`}>
        <div className="s12"><h2 className={styles.sectionTitle}>Prioritization Frameworks</h2></div>
        {PRIORITIZATION_FRAMEWORKS.map((f, i) => (
          <div key={i} className="s6" style={{ marginBottom: 20 }}>
            <div className={styles.metricCard}>
              <div className={styles.fwName} style={{ color: f.color }}>{f.name}</div>
              <p className={styles.fwDesc}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* §7 — Sprint Cadence & Rituals */}
      <div className={`rgrid ${styles.section}`}>
        <div className="s12"><h2 className={styles.sectionTitle}>Sprint Cadence &amp; Rituals</h2></div>
        <div className="s12">
          <div className={styles.cadenceGrid}>
            {SPRINT_CADENCE.map((col, i) => (
              <div key={i} className={styles.cadenceCol}>
                <div className={styles.cadenceDay} style={{ color: 'var(--cyan)' }}>{col.day}</div>
                {col.items.map((item, j) => (
                  <div key={j} className={styles.sprintItem} style={{ borderBottom: j < col.items.length - 1 ? '1px solid var(--divider)' : 'none' }}>{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* §8 — Artifacts Produced */}
      <div className={`rgrid ${styles.section} ${styles.twoCol}`} style={{ borderBottom: 'none' }}>
        <div className="s12"><h2 className={styles.sectionTitle}>Artifacts Produced</h2></div>
        <div className="s6">
          {ARTIFACTS_LEFT.map((a, i) => (
            <div key={i} className={styles.artifactItem}>
              <span className={styles.checkCyan}>✓</span>
              {a}
            </div>
          ))}
        </div>
        <div className="s6">
          {ARTIFACTS_RIGHT.map((a, i) => (
            <div key={i} className={styles.artifactItem}>
              <span className={styles.checkPurple}>✓</span>
              {a}
            </div>
          ))}
        </div>
      </div>

      <PageFooter />
    </article>
  );
}
