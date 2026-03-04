import type { Metadata } from 'next';
import { SKILLS_STRATEGY, SKILLS_TECHNICAL, EXPERIENCE, EDUCATION } from '@/data/resume';
import { ShareButton } from '@/components/ui/ShareButton/ShareButton';
import { PageFooter } from '@/components/ui/PageFooter/PageFooter';
import { stg } from '@/lib/stg';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Resume' };

/** Resume — mockup 3-column layout (lines 1128–1273).
 *  Mobile: single column, skills as 2-col grid, contact/edu as 2-col grid. */
export default function ResumePage() {
  return (
    <article>
      <div id="resume-overview" />
      {/* ── Header ── */}
      <div className="rgrid" style={{ marginBottom: 36, paddingBottom: 28, borderBottom: '1px solid var(--divider)' }}>
        <div className="s12">
          <div style={stg(0)} className={styles.headerTop}>
            <div>
              <h1 className={styles.headerName}>Romário Coffie</h1>
              <span className={styles.headerTitle}>
                SAFe® Certified Product Manager/Owner &amp; Product Developer
              </span>
            </div>
            <div className={styles.headerActions}>
              <a href="/resume.pdf" download className={styles.downloadBtn}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 12 }}>
                  <path d="M8 2v8m0 0l-3-3m3 3l3-3M3 12h10" />
                </svg>
                Download PDF
              </a>
              <ShareButton title="Romário Coffie — Resume" text="SAFe® Certified Product Developer resume" url="/resume" />
            </div>
          </div>
          <p className="bs" style={{ ...stg(1), lineHeight: 1.8, marginBottom: 10 }}>
            Certified Product Developer with over seven years of experience crafting innovative software and media solutions to address complex business and customer challenges. Armed with expertise in design, prototyping, and technical implementation, I bridge the gap between strategic vision and tangible outcomes.
          </p>
          <p className="bs" style={{ ...stg(2), lineHeight: 1.8 }}>
            My work empowers leadership, aligns cross-functional teams, and transforms ideas into impactful products alongside development and customer-focused teams.
          </p>
        </div>
      </div>

      {/* ── 3-Column Layout ── */}
      <div className={styles.grid}>
        {/* LEFT: Skills */}
        <div id="resume-skills" style={stg(3)} className={styles.stickyCol}>
          <div className={styles.skillsGrid}>
            <div style={{ marginBottom: 32 }}>
              <span className={styles.sectionLabel} style={{ color: 'var(--cyan)' }}>★ Strong</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {SKILLS_STRATEGY.map((s, i) => (
                  <span key={s} style={{ ...stg(i + 4), fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text)', padding: '7px 0', borderBottom: '1px solid var(--divider)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className={styles.sectionLabel} style={{ color: 'var(--purple)' }}>{'</>'} Working Knowledge</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {SKILLS_TECHNICAL.map((s) => (
                  <span key={s} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--desc)', padding: '7px 0', borderBottom: '1px solid rgba(168, 85, 247, 0.06)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CENTER: Experience */}
        <div id="resume-experience">
          <span style={{ ...stg(3), fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dim)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
            💼 Experience
          </span>
          {EXPERIENCE.map((company, ci) => (
            <div key={company.company} style={{ ...stg(ci + 4), marginBottom: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div>
                  <span className={styles.companyName}>{company.company}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--dim)' }}>📍 {company.location}</span>
                  </div>
                </div>
              </div>
              {company.roles.map((role, ri) => (
                <div key={role.title} style={{
                  marginBottom: ri < company.roles.length - 1 ? 20 : 0,
                  paddingLeft: 20,
                  borderLeft: `2px solid ${ci < 3 ? 'rgba(0, 212, 255, 0.25)' : 'rgba(168, 85, 247, 0.25)'}`,
                }}>
                  <div className={styles.roleHeader}>
                    <span className={styles.roleTitle}>{role.title}</span>
                    <span className={styles.rolePeriod}>📅 {role.period}</span>
                  </div>
                  {role.bullets.length > 0 && (
                    <div style={{ marginTop: 8 }}>
                      {role.bullets.map((b, bi) => (
                        <div key={bi} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                          <span style={{ color: 'var(--dim)', fontSize: 11, marginTop: 7, flexShrink: 0 }}>•</span>
                          <p style={{ fontFamily: 'var(--font-reading)', fontSize: 16, lineHeight: 1.75, color: 'var(--desc)' }}>{b}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* RIGHT: Contact + Education + Certifications */}
        <div id="resume-contact" style={stg(3)} className={styles.stickyCol}>
          <div className={styles.rightGrid}>
            {/* Contact */}
            <div style={{ ...stg(4), marginBottom: 36 }}>
              <span className={styles.sectionLabel} style={{ color: 'var(--dim)' }}>✉ Contact</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="mailto:Romario.agc@gmail.com" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                  ✉ Romario.agc@gmail.com
                </a>
                <a href="tel:+17725298029" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                  📞 +1 (772) 529-8029
                </a>
              </div>
            </div>

            {/* Portfolios */}
            <div style={{ ...stg(5), marginBottom: 36 }}>
              <span className={styles.sectionLabel} style={{ color: 'var(--dim)' }}>🌐 Portfolios</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="https://linkedin.com/in/romariocoffie" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>LinkedIn</a>
                <a href="https://dribbble.com/romariocoffie" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Dribbble</a>
                <a href="https://bit.ly/romariocoffiedesign" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Design Portfolio ↗</a>
              </div>
            </div>

            {/* Education */}
            <div id="resume-education" style={{ ...stg(6), marginBottom: 36 }}>
              <span className={styles.sectionLabel} style={{ color: 'var(--dim)' }}>🎓 Education</span>
              {EDUCATION.map((edu, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--cyan)', display: 'block', marginBottom: 4 }}>{edu.years}</span>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 3, lineHeight: 1.4 }}>{edu.degree}</div>
                  <div style={{ fontFamily: 'var(--font-reading)', fontSize: 14, color: 'var(--dim)', fontStyle: 'italic', lineHeight: 1.5 }}>{edu.school}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div style={stg(7)}>
              <span className={styles.sectionLabel} style={{ color: 'var(--dim)' }}>🏆 Certifications</span>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 3 }}>SAFe® POPM</div>
                <div style={{ fontFamily: 'var(--font-reading)', fontSize: 14, color: 'var(--dim)', fontStyle: 'italic', lineHeight: 1.5 }}>Scaled Agile Framework — Product Owner/Product Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </article>
  );
}
