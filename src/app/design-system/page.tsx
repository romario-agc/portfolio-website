import type { Metadata } from 'next';
import {
  DS_COLORS, DS_TYPE_SCALE, DS_SPACING, DS_GRADIENTS,
  DS_BUTTONS, DS_BADGES, DS_INPUTS, DS_NOTIFICATIONS, DS_TABS,
  DS_NAV_ITEMS, DS_SIDEBAR_ITEMS, DS_STAT_CARDS, DS_PROGRESS_BARS,
  DS_GRID_SPANS, DS_BREAKPOINTS, DS_SPACING_SCALE, DS_DEVICES, DS_FLUID_TYPE,
  DS_CONTRAST, DS_KEYBOARD, DS_A11Y_FEATURES, DS_PLATFORMS, DS_DENSITY,
  DS_ANIMATIONS, DS_MOTION_TOOLS,
} from '@/data/design-system';
import { DS_BUTTON_SNIPPETS, DS_CARD_SNIPPETS, DS_A11Y_STANDARDS } from '@/data/design-system-snippets';
import { SectionHead } from '@/components/ui/SectionHead/SectionHead';
import { LiveAnimDemos } from '@/components/ui/LiveAnimDemos/LiveAnimDemos';
import { CodeSnippets } from '@/components/ui/CodeSnippets/CodeSnippets';
import s from './page.module.css';
import { stg } from '@/lib/stg';

export const metadata: Metadata = {
  title: 'Design System',
  description: 'APEX — A living pattern library built on Atomic Design principles. Tokens, atoms, molecules, organisms, patterns, grid, responsive, accessibility, adaptive components, and animation.',
};

export default function DesignSystemPage() {
  return (
    <article>
      <div id="ds-overview" />
      {/* ── Header ── */}
      <div style={stg(0)}>
        <SectionHead tag="Standards" title="Design System">
          <p className="bs" style={{ fontSize: 16, lineHeight: 1.85 }}>
            A living pattern library built on Atomic Design principles. Framework-agnostic tokens and patterns that ship as a Figma kit, a component codebase, or both — a source document teams use while collaborating in design sprints and development cycles.
          </p>
          <div className={s.headerPills}>
            <span className={s.headerPill}>Figma</span>
            <span className={s.headerPill}>React</span>
            <span className={s.headerPill}>Vue</span>
            <span className={s.headerPill}>Svelte</span>
            <span className={s.headerPill}>Web Components</span>
          </div>
        </SectionHead>
      </div>

      {/* ═══ 1. GLOBAL TOKENS ═══ */}
      <div id="ds-tokens" className={`rgrid ${s.section}`}>
        <div className="s12" style={stg(0)}><h2 className={s.sectionTitle}>Global Tokens</h2></div>

        {/* Colors */}
        <div className="s6" style={stg(1)}>
          <span className={s.label}>Color Palette</span>
          <div className={s.colorGrid}>
            {DS_COLORS.map((c, i) => (
              <div key={c.name} style={stg(i + 2)}>
                <div className={`${s.swatch} ${c.hasBorder ? s.swatchBorder : ''}`} style={{ background: c.hex }} />
                <div className={s.swatchName}>{c.name}</div>
                <div className={s.swatchHex}>{c.hex}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="s6" style={stg(2)}>
          <span className={s.label}>Typography Scale</span>
          <div className={s.typeStack}>
            {DS_TYPE_SCALE.map((tf, i) => (
              <div key={tf.text} className={s.typeSample} style={stg(i + 3)}>
                <span style={{
                  fontFamily: `var(--font-${tf.font})`,
                  fontSize: tf.size,
                  fontWeight: tf.weight,
                  color: tf.accent ? 'var(--cyan)' : tf.dim ? 'var(--desc)' : 'var(--text)',
                }}>
                  {tf.text}
                </span>
                <span className={s.typeLabel}>{tf.label}</span>
              </div>
            ))}
          </div>
          <div className={s.spacingBox} style={stg(8)}>
            <div className={s.spacingTitle}>SPACING UNIT: 4px</div>
            <div className={s.spacingRow}>
              {DS_SPACING.map((size) => (
                <div key={size} className={s.spacingUnit} style={{ width: size, height: size }} title={`${size}px`} />
              ))}
            </div>
          </div>
        </div>

        {/* Gradients & Elevation */}
        <div className="s12" style={stg(9)}>
          <span className={s.label} style={{ marginTop: 16 }}>Gradients &amp; Elevation</span>
          <div className={s.gradientRow}>
            <div className={s.gradientSwatch} style={{ background: 'var(--grad)' }} />
            <div className={s.gradientSwatch} style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(168,85,247,0.08))', border: '1px solid var(--border)' }} />
            <div className={s.gradientSwatch} style={{ background: 'var(--surface)', boxShadow: '0 2px 8px rgba(0,0,0,0.3)', border: '1px solid var(--border)' }} />
            <div className={s.gradientSwatch} style={{ background: 'var(--surface)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', border: '1px solid var(--border)' }} />
          </div>
          <div className={s.gradientRow} style={{ marginTop: 6 }}>
            {DS_GRADIENTS.map((label) => (
              <div key={label} className={s.gradientLabel}>{label}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ 1b. COMPONENT-BASED DEVELOPMENT ═══ */}
      <div id="ds-components" className={`rgrid ${s.section}`}>
        <div className="s12" style={stg(0)}><h2 className={s.sectionTitle}>Component-Based Development</h2></div>
        <div className="s12" style={stg(1)}>
          <p className={s.desc}>
            Every design token and pattern in this system maps directly to framework components. The same visual language renders identically across React, Vue, Svelte, and native Web Components — design once, implement anywhere.
          </p>
        </div>

        {/* Button component — 4 frameworks */}
        <div className="s6" style={stg(2)}>
          <CodeSnippets
            title="Button"
            desc="Primary interactive element with variant, size, loading, and icon props. All variants inherit from shared design tokens."
            snippets={DS_BUTTON_SNIPPETS}
          />
        </div>

        {/* Card component — 4 frameworks */}
        <div className="s6" style={stg(3)}>
          <CodeSnippets
            title="Card"
            desc="Content container with stagger animation, elevation levels, and optional interactive role with keyboard support."
            snippets={DS_CARD_SNIPPETS}
          />
        </div>

        {/* Implementation principles */}
        <div className="s12" style={stg(4)}>
          <div className={s.compPrinciples}>
            <div className={s.compPrincipleItem}>
              <span className={s.compPrincipleIcon}>⚛</span>
              <div>
                <span className={s.compPrincipleTitle}>Token-Driven</span>
                <span className={s.compPrincipleDesc}>All styles derive from CSS custom properties. Swap the token layer to re-theme the entire library.</span>
              </div>
            </div>
            <div className={s.compPrincipleItem}>
              <span className={s.compPrincipleIcon}>♿</span>
              <div>
                <span className={s.compPrincipleTitle}>Accessible by Default</span>
                <span className={s.compPrincipleDesc}>ARIA attributes, focus management, and keyboard handlers are built into every component, not bolted on.</span>
              </div>
            </div>
            <div className={s.compPrincipleItem}>
              <span className={s.compPrincipleIcon}>📐</span>
              <div>
                <span className={s.compPrincipleTitle}>Composition over Configuration</span>
                <span className={s.compPrincipleDesc}>Slot-based APIs and render props for maximum flexibility. Components compose, not configure.</span>
              </div>
            </div>
            <div className={s.compPrincipleItem}>
              <span className={s.compPrincipleIcon}>🧪</span>
              <div>
                <span className={s.compPrincipleTitle}>Test Coverage</span>
                <span className={s.compPrincipleDesc}>Each component ships with unit tests, visual regression snapshots, and accessibility audits via axe-core.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ 2. ATOMS ═══ */}
      <div id="ds-atoms" className={`rgrid ${s.section}`}>
        <div className="s12" style={stg(0)}><h2 className={s.sectionTitle}>Atoms</h2></div>

        {/* Buttons & Badges */}
        <div className="s6" style={stg(1)}>
          <span className={s.label}>Buttons</span>
          <div className={s.buttonRow}>
            {DS_BUTTONS.map((b, i) => (
              <button
                key={b.label}
                className={`${s.btn} ${s[`btn${b.variant.charAt(0).toUpperCase() + b.variant.slice(1)}`]}`}
                disabled={b.variant === 'disabled'}
                style={stg(i + 2)}
              >
                {b.label}
              </button>
            ))}
          </div>
          <span className={s.label}>Badges &amp; Labels</span>
          <div className={s.badgeRow}>
            {DS_BADGES.map((b, i) => (
              <span key={b.label} className={`${s.badge} ${s[`badge${b.variant.charAt(0).toUpperCase() + b.variant.slice(1)}`]}`} style={stg(i + 7)}>
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Icons, Avatars, Toggles */}
        <div className="s6" style={stg(2)}>
          <span className={s.label}>Icons · 16/20/24px</span>
          <div className={s.iconGrid}>
            {['✉', '☎', 'in', 'Dr'].map((icon, i) => (
              <div key={icon} className={s.iconBox} style={stg(i + 3)}>
                <span style={{ fontSize: 14 }}>{icon}</span>
              </div>
            ))}
            <div className={s.iconBox} style={stg(7)}>
              <span style={{ fontSize: 14 }}>🔍</span>
            </div>
            <div className={s.iconBox} style={stg(8)}>
              <span style={{ fontSize: 14 }}>↗</span>
            </div>
          </div>
          <span className={s.label}>Avatars</span>
          <div className={s.avatarRow}>
            {[24, 32, 40, 48].map((size, i) => (
              <div key={size} className={s.avatar} style={{ ...stg(i + 9), width: size, height: size, fontSize: size * 0.4 }}>
                {size >= 32 ? 'R' : ''}
              </div>
            ))}
          </div>
          <span className={s.label}>Toggles &amp; Checkboxes</span>
          <div className={s.controlRow} style={stg(13)}>
            <div className={s.toggleOn}><div className={`${s.toggleKnob} ${s.toggleKnobOn}`} /></div>
            <div className={s.toggleOff}><div className={`${s.toggleKnob} ${s.toggleKnobOff}`} /></div>
            <div className={s.checkboxOn}>
              <svg viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="2.5" style={{ width: 10 }}><polyline points="3 8 6.5 11.5 13 5" /></svg>
            </div>
            <div className={s.checkboxOff} />
            <div className={s.radioOn}><div className={s.radioDot} /></div>
            <div className={s.radioOff} />
          </div>
        </div>
      </div>

      {/* ═══ 3. MOLECULES ═══ */}
      <div id="ds-molecules" className={`rgrid ${s.section}`}>
        <div className="s12" style={stg(0)}><h2 className={s.sectionTitle}>Molecules</h2></div>

        {/* Input Fields */}
        <div className="s6" style={stg(1)}>
          <span className={s.label}>Input Fields</span>
          <div className={s.inputStack}>
            {DS_INPUTS.map((inp, i) => (
              <div key={inp.label} style={stg(i + 2)}>
                <label className={`${s.inputLabel} ${inp.state === 'error' ? s.inputLabelError : ''}`}>
                  {inp.label}
                </label>
                <div className={`${s.input} ${inp.state === 'active' ? s.inputActive : ''} ${inp.state === 'error' ? s.inputError : ''} ${inp.state === 'disabled' ? s.inputDisabled : ''}`}>
                  {inp.value}
                </div>
                {inp.hint && <span className={s.inputHint}>{inp.hint}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Notification Cards */}
        <div className="s6" style={stg(2)}>
          <span className={s.label}>Notification Cards</span>
          <div className={s.notifContainer}>
            <div className={s.notifHeader}>
              <span className={s.notifTitle}>Notifications</span>
            </div>
            {DS_NOTIFICATIONS.map((n, i) => (
              <div key={i} className={`${s.notifItem} ${n.selected ? s.notifSelected : ''}`} style={stg(i + 3)}>
                <span style={{ color: n.isError ? 'var(--error)' : 'var(--cyan)', fontWeight: 700, fontSize: 14, marginTop: 1 }}>{n.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: n.unread ? 600 : 400, color: n.unread ? 'var(--text)' : 'var(--dim)' }}>{n.title}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--dim)', marginTop: 2 }}>{n.desc}</div>
                </div>
                <div className={s.notifDot} style={{ background: n.unread ? 'var(--cyan)' : 'transparent' }} />
              </div>
            ))}
            <div className={s.notifMore}>More</div>
          </div>
        </div>

        {/* Tabs & Breadcrumbs */}
        <div className="s6" style={{ ...stg(7), marginTop: 20 }}>
          <span className={s.label}>Tabs</span>
          <div className={s.tabRow}>
            {DS_TABS.map((tab, i) => (
              <span key={tab} className={`${s.tab} ${i === 0 ? s.tabActive : ''}`}>{tab}</span>
            ))}
          </div>
          <span className={s.label}>Breadcrumbs</span>
          <div className={s.breadcrumbs}>
            <span className={s.breadcrumbLink}>Home</span>
            <span className={s.breadcrumbSep}>/</span>
            <span className={s.breadcrumbLink}>Design System</span>
            <span className={s.breadcrumbSep}>/</span>
            <span className={s.breadcrumbCurrent}>Atoms</span>
          </div>
        </div>

        {/* Tooltips & Popovers */}
        <div className="s6" style={{ ...stg(8), marginTop: 20 }}>
          <span className={s.label}>Tooltips &amp; Popovers</span>
          <div className={s.tooltipRow}>
            <div style={{ position: 'relative' }}>
              <div className={s.tooltip}>Tooltip text<div className={s.tooltipArrow} /></div>
            </div>
            <div className={s.popover}>
              <div className={s.popoverTitle}>Popover Title</div>
              <div className={s.popoverDesc}>Contextual content</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ 4. ORGANISMS ═══ */}
      <div id="ds-organisms" className={`rgrid ${s.section}`}>
        <div className="s12" style={stg(0)}><h2 className={s.sectionTitle}>Organisms</h2></div>

        {/* Nav Bar */}
        <div className="s12" style={stg(1)}>
          <span className={s.label}>App Header · Navigation Bar</span>
          <div className={s.orgNav}>
            <span className={s.orgNavLogo}>Romario Coffie <span style={{ color: 'var(--dim)', fontWeight: 400 }}>Portfolio</span></span>
            <div className={s.orgNavLinks}>
              {DS_NAV_ITEMS.map((n, i) => (
                <span key={n} className={`${s.orgNavLink} ${i === 0 ? s.orgNavLinkActive : ''}`}>{n}</span>
              ))}
            </div>
            <span className={s.orgNavCta}>Connect</span>
          </div>
        </div>

        {/* Sidebar + Footer */}
        <div className="s12" style={{ ...stg(2), marginTop: 20 }}>
          <span className={s.label}>Sidebar Navigation</span>
          <div className={s.orgRow}>
            <div className={s.orgSidebar}>
              {DS_SIDEBAR_ITEMS.map((n, i) => (
                <div key={n} className={`${s.orgSidebarItem} ${i === 5 ? s.orgSidebarItemActive : ''}`}>{n}</div>
              ))}
            </div>
            <div className={s.orgFooter}>
              <span className={s.label}>Footer Bar</span>
              <div className={s.orgFooterBar}>
                <span className={s.orgFooterCopy}>© Romario Coffie 2025</span>
                <div style={{ display: 'flex', gap: 16, color: 'var(--muted)' }}>
                  <span>✉</span><span>in</span><span>Dr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Card + Stat Cards */}
        <div className="s6" style={{ ...stg(3), marginTop: 24 }}>
          <span className={s.label}>Project Card</span>
          <div className={s.orgCard}>
            <div className={s.orgCardImage} />
            <div className={s.orgCardBody}>
              <span className={s.orgCardTag}>ui design + front end</span>
              <div className={s.orgCardTitle}>Project Name</div>
              <p className={s.orgCardDesc}>Brief project description text that summarizes the key deliverable.</p>
            </div>
          </div>
        </div>
        <div className="s6" style={{ ...stg(4), marginTop: 24 }}>
          <span className={s.label}>Stat Cards</span>
          <div className={s.statGrid}>
            {DS_STAT_CARDS.map((stat, i) => (
              <div key={stat.label} className={s.statCard} style={stg(i + 5)}>
                <div className={s.statLabel}>{stat.label}</div>
                <div className={s.statVal}>{stat.val}</div>
                <div className={stat.up ? s.statTrendUp : s.statTrendDown}>{stat.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ 5. PATTERNS ═══ */}
      <div id="ds-patterns" className={`rgrid ${s.sectionLast}`}>
        <div className="s12" style={stg(0)}><h2 className={s.sectionTitle}>Patterns &amp; States</h2></div>

        <div className="s4" style={stg(1)}>
          <span className={s.label}>Loading States</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[60, 40, 80].map((w, i) => (
              <div key={i} className={s.shimmerBar}>
                <div className={s.shimmerFill} style={{ width: `${w}%`, animationDelay: `${i * 0.2}s` }} />
              </div>
            ))}
          </div>
        </div>

        <div className="s4" style={stg(2)}>
          <span className={s.label}>Empty State</span>
          <div className={s.emptyState}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--dim)' }}>No data available</div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--cyan)', marginTop: 6, display: 'inline-block' }}>+ Add item</span>
          </div>
        </div>

        <div className="s4" style={stg(3)}>
          <span className={s.label}>Progress Bar</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {DS_PROGRESS_BARS.map((bar) => (
              <div key={bar.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--dim)' }}>{bar.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--dim)' }}>{bar.percent}%</span>
                </div>
                <div className={s.progressTrack}>
                  <div className={`${s.progressFill} ${s[`progress${bar.variant.charAt(0).toUpperCase() + bar.variant.slice(1)}`]}`} style={{ width: `${bar.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ 6. GRID SYSTEM ═══ */}
      <div id="ds-grid" className={`rgrid ${s.section}`}>
        <div className="s12" style={stg(0)}><h2 className={s.sectionTitle}>Grid System</h2></div>
        <div className="s12" style={stg(1)}>
          <p className={s.desc}>
            A 12-column fluid grid (<code style={{ fontSize: 12, color: 'var(--cyan)', background: 'var(--surface)', padding: '2px 6px', borderRadius: 4 }}>rgrid</code>) built on CSS Grid with responsive span classes. Gutters scale with viewport via <code style={{ fontSize: 12, color: 'var(--cyan)', background: 'var(--surface)', padding: '2px 6px', borderRadius: 4 }}>clamp()</code>.
          </p>
        </div>
        <div className="s12" style={stg(2)}>
          <div className={s.gridDemo12}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={s.gridCell} style={{ background: `rgba(0,212,255,${0.08 + i * 0.02})` }}>{i + 1}</div>
            ))}
          </div>
          <div className={s.gridSpanDemo}>
            {DS_GRID_SPANS.map((col, i) => (
              <div key={i} className={s.gridSpanCell} style={{ gridColumn: `span ${col.span}` }}>{col.label}</div>
            ))}
          </div>
        </div>
        <div className="s6" style={{ ...stg(3), marginTop: 20 }}>
          <div className={s.panel}>
            <span className={`${s.panelTitle} ${s.panelTitleCyan}`}>Breakpoints</span>
            {DS_BREAKPOINTS.map((b, i) => (
              <div key={b.bp} className={`${s.panelRow} ${i === DS_BREAKPOINTS.length - 1 ? s.panelRowLast : ''}`}>
                <span style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{b.bp}</span>
                <span style={{ color: 'var(--dim)' }}>{b.px}</span>
                <span style={{ color: 'var(--muted)' }}>{b.cols}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="s6" style={{ ...stg(4), marginTop: 20 }}>
          <div className={s.panel}>
            <span className={`${s.panelTitle} ${s.panelTitlePurple}`}>Spacing Scale</span>
            {DS_SPACING_SCALE.map((sp, i) => (
              <div key={sp.token} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 0', borderBottom: i < DS_SPACING_SCALE.length - 1 ? '1px solid var(--divider)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--purple)', minWidth: 90 }}>{sp.token}</span>
                <div style={{ height: 8, width: parseInt(sp.val), borderRadius: 4, background: 'var(--purple)', opacity: 0.5 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--dim)', marginLeft: 'auto' }}>{sp.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ 7. RESPONSIVENESS ═══ */}
      <div id="ds-responsive" className={`rgrid ${s.section}`}>
        <div className="s12" style={stg(0)}><h2 className={s.sectionTitle}>Responsiveness</h2></div>
        <div className="s12" style={stg(1)}>
          <p className={s.desc}>
            Fluid typography, container queries, and viewport-aware layouts ensure every component adapts gracefully across devices.
          </p>
        </div>
        {DS_DEVICES.map((d, i) => (
          <div key={d.device} className="s4" style={stg(i + 2)}>
            <div className={s.deviceCard}>
              <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <span className={s.deviceTitle}>{d.device}</span>
              </div>
              <div className={s.deviceFrame} style={{ width: d.width, height: d.device === 'Desktop' ? 160 : d.device === 'Tablet' ? 140 : 120, display: 'grid', gridTemplateColumns: `repeat(${d.cols}, 1fr)`, gap: 6 }}>
                {Array.from({ length: d.cols * 2 }).map((_, j) => (
                  <div key={j} style={{ borderRadius: 4, background: `rgba(0,212,255,${0.08 + j * 0.03})` }} />
                ))}
              </div>
              <div className={s.deviceInfo}>{d.cols}-col layout · {d.width} width</div>
            </div>
          </div>
        ))}
        <div className="s12" style={{ ...stg(5), marginTop: 20 }}>
          <div className={s.panel}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400, color: 'var(--text)', display: 'block', marginBottom: 12 }}>Fluid Typography Scale</span>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {DS_FLUID_TYPE.map((ty) => (
                <div key={ty.label} className={s.fluidTypeCard}>
                  <span className={s.fluidTypeLabel} style={{ fontSize: ty.demo }}>{ty.label}</span>
                  <span className={s.fluidTypeValue}>{ty.size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ 8. ACCESSIBILITY ═══ */}
      <div id="ds-a11y" className={`rgrid ${s.section}`}>
        <div className="s12" style={stg(0)}><h2 className={s.sectionTitle}>Accessibility (a11y)</h2></div>
        <div className="s12" style={stg(1)}>
          <p className={s.desc}>
            WCAG 2.1 AA compliance across all interactive components. Semantic HTML, ARIA roles, keyboard navigation, focus management, and contrast ratios verified.
          </p>
        </div>

        {/* Contrast Ratios */}
        <div className="s6" style={stg(2)}>
          <div className={s.panel}>
            <span className={`${s.panelTitle} ${s.panelTitleCyan}`}>Contrast Ratios</span>
            {DS_CONTRAST.map((c, i) => (
              <div key={c.pair} className={`${s.contrastRow} ${i === DS_CONTRAST.length - 1 ? s.contrastRowLast : ''}`}>
                <div className={s.contrastSwatch} style={{ background: c.bg }}>
                  <div className={s.contrastInner} style={{ background: c.fg }} />
                </div>
                <span className={s.contrastLabel}>{c.pair}</span>
                <span className={s.contrastRatio}>{c.ratio}</span>
                <span className={`${s.contrastPass} ${c.pass === 'AAA' ? s.passAAA : s.passAA}`}>{c.pass}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="s6" style={stg(3)}>
          <div className={s.panel}>
            <span className={`${s.panelTitle} ${s.panelTitlePurple}`}>Keyboard &amp; Focus</span>
            {DS_KEYBOARD.map((k, i) => (
              <div key={k.key} className={`${s.kbdRow} ${i === DS_KEYBOARD.length - 1 ? s.kbdRowLast : ''}`}>
                <span className={s.kbd}>{k.key}</span>
                <span className={s.kbdDesc}>{k.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* A11y Features */}
        <div className="s12" style={stg(4)}>
          <div className={s.a11yGrid}>
            {DS_A11Y_FEATURES.map((a, i) => (
              <div key={a.label} className={s.a11yCard}>
                <div className={s.a11yCardTitle}>{a.label}</div>
                <div className={s.a11yCardDesc}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Standards */}
        <div className="s12" style={stg(5)}>
          <div className={s.panel}>
            <span className={`${s.panelTitle} ${s.panelTitleCyan}`}>Compliance Standards</span>
            {DS_A11Y_STANDARDS.map((std, i) => (
              <div key={i} className={`${s.a11yStdRow} ${i === DS_A11Y_STANDARDS.length - 1 ? s.a11yStdRowLast : ''}`}>
                <div className={s.a11yStdBadge}>{std.standard}</div>
                <div className={s.a11yStdBody}>
                  <span className={s.a11yStdRule}>{std.rule}</span>
                  <span className={s.a11yStdDetail}>{std.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ 9. ADAPTIVE COMPONENTS ═══ */}
      <div id="ds-adaptive" className={`rgrid ${s.sectionLast}`}>
        <div className="s12" style={stg(0)}><h2 className={s.sectionTitle}>Adaptive Components</h2></div>
        <div className="s12" style={stg(1)}>
          <p className={s.desc}>
            Components that adapt their structure, density, and behavior based on platform context. iOS follows Human Interface Guidelines, Android follows Material 3, and web uses the design system&apos;s native tokens.
          </p>
        </div>

        {DS_PLATFORMS.map((p, i) => (
          <div key={p.platform} className="s4" style={stg(i + 2)}>
            <div className={s.platformCard}>
              <span className={s.platformTitle} style={{ color: `var(--${p.variant})` }}>{p.platform}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                {p.items.map((item) => (
                  <div key={item} className={s.platformItem}>
                    <div className={s.platformDot} style={{ background: `var(--${p.variant})` }} />
                    <span className={s.platformItemText}>{item}</span>
                  </div>
                ))}
              </div>
              <div className={s.platformRadius} style={{ borderRadius: p.radius }}>
                <span className={s.platformRadiusText}>radius: {p.radius}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Density Modes */}
        <div className="s12" style={{ ...stg(5), marginTop: 20 }}>
          <div className={s.panel}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400, color: 'var(--text)', display: 'block', marginBottom: 12 }}>Density Modes</span>
            <div className={s.densityGrid}>
              {DS_DENSITY.map((d) => (
                <div key={d.mode} className={s.densityCard}>
                  <span className={s.densityTitle}>{d.mode}</span>
                  <div className={s.densityPreview} style={{ height: d.height }}>
                    <span className={s.densityLabel} style={{ fontSize: d.fontSize }}>Button</span>
                  </div>
                  <span className={s.densityDesc}>{d.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ 10. ANIMATIONS ═══ */}
      <div id="ds-animations" className={`rgrid ${s.section}`}>
        <div className="s12"><h2 className={s.sectionTitle}>Animations &amp; Motion Design</h2></div>
        <div className="s12" style={{ marginBottom: 16 }}>
          <p className={s.descLg}>
            Interactive prototypes and motion studies exploring gesture-driven interfaces, micro-interactions, page transition choreography, and scroll-based animation sequences.
          </p>
        </div>
        <div className="s12">
          <div className={s.animGrid}>
            {DS_ANIMATIONS.map((a, i) => (
              <div key={a.label} className={s.animCard}>
                <div className={s.animThumb} style={{ background: `linear-gradient(${130 + i * 40}deg, ${i % 2 === 0 ? 'rgba(0,212,255,0.05)' : 'rgba(168,85,247,0.05)'}, var(--bg-alt))` }}>
                  <svg viewBox="0 0 60 40" fill="none" style={{ width: 36, opacity: 0.3 }}>
                    <polygon points="20,6 44,20 20,34" fill={i % 2 === 0 ? 'var(--cyan)' : 'var(--purple)'} opacity="0.5" />
                  </svg>
                </div>
                <div className={s.animBody}>
                  <div className={s.animTitle}>{a.label}</div>
                  <div className={s.animDesc}>{a.desc}</div>
                  <span className={s.animTool}>{a.tool}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={s.toolPills}>
            {DS_MOTION_TOOLS.map((tool) => (
              <span key={tool} className={s.pill}>{tool}</span>
            ))}
          </div>
          <LiveAnimDemos />
        </div>
      </div>
    </article>
  );
}
