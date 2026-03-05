import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/data/projects';
import { CASE_STUDIES } from '@/data/case-studies';
import { PROJECT_SVGS } from '@/components/ui/ProjectSVG/ProjectSVG';
import { SectionHead } from '@/components/ui/SectionHead/SectionHead';
import { PageFooter } from '@/components/ui/PageFooter/PageFooter';
import { FadeUp } from '@/components/motion/FadeUp';
import { CaseStudyGallery } from './CaseStudyGallery';
import { stg } from '@/lib/stg';
import styles from './page.module.css';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS[slug];
  if (!project) return { title: 'Not Found' };
  return { title: project.name, description: project.desc };
}

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS[slug];
  if (!project) notFound();

  const cs = CASE_STUDIES[slug];

  return (
    <article>
      <div id="cs-hero" className="rgrid" style={{ ...stg(0), marginBottom: 0 }}>
        <div className="s12" style={{ marginBottom: 12, textAlign: 'left' }}>
          <span className="uc-badge">🚧 Under Construction</span>
        </div>
      </div>

      <div style={stg(1)}>
        <SectionHead tag={project.tag} title={project.name}>
          <span className={styles.toolsItalic}>{project.tools.join(', ')}</span>
          <p className="bs" style={{ lineHeight: 1.8 }}>{project.desc}</p>
          {project.url && (
            <div style={{ marginTop: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                Open Website ↗
              </Link>
            </div>
          )}
        </SectionHead>
      </div>

      {/* Screenshot Gallery — client component with lightbox */}
      <div id="cs-gallery" className="rgrid" style={{ ...stg(2), marginBottom: 40 }}>
        <div className="s12">
          <CaseStudyGallery slug={slug} color={project.color} />
        </div>
      </div>

      {/* Overview + Role */}
      {cs && (
        <>
          <FadeUp>
          <div id="cs-overview" className={`rgrid ${styles.overviewGrid}`} style={{ marginBottom: 40 }}>
            <div className="s8">
              <span className={styles.sectionLabel}>Overview</span>
              <p className="bs" style={{ fontSize: 17, lineHeight: 1.85, marginBottom: 24 }}>{cs.overview}</p>
              <span className={styles.sectionLabel}>The Challenge</span>
              <p className="bs" style={{ fontSize: 17, lineHeight: 1.85 }}>{cs.challenge}</p>
            </div>
            <div className="s4" style={{ alignSelf: 'start' }}>
              <span className={styles.sectionLabel}>My Role</span>
              <p className="bs" style={{ fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>{cs.role}</p>
              <span className={styles.sectionLabel}>Tools</span>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {project.tools.map((tool, i) => (
                  <span key={i} className="pl" style={{ fontSize: 10, padding: '5px 12px' }}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
          </FadeUp>

          {/* Approach + Outcomes */}
          <FadeUp delay={0.1}>
          <div id="cs-approach" className={`rgrid ${styles.approachGrid}`} style={{ marginBottom: 40, paddingTop: 28, borderTop: '1px solid var(--divider)' }}>
            <div className="s6">
              <span className={styles.sectionLabel} style={{ color: 'var(--cyan)' }}>Approach</span>
              {cs.approach.map((a, i) => (
                <div key={i} className={styles.listItem} style={{ borderLeftColor: 'rgba(0, 212, 255, 0.2)' }}>
                  <p style={{ fontFamily: 'var(--font-reading)', fontSize: 15, lineHeight: 1.75, color: 'var(--desc)' }}>{a}</p>
                </div>
              ))}
            </div>
            <div className="s6">
              <span className={styles.sectionLabel} style={{ color: 'var(--purple)' }}>Outcomes</span>
              {cs.outcomes.map((o, i) => (
                <div key={i} className={styles.listItem} style={{ borderLeftColor: 'rgba(168, 85, 247, 0.2)' }}>
                  <p style={{ fontFamily: 'var(--font-reading)', fontSize: 15, lineHeight: 1.75, color: 'var(--desc)' }}>{o}</p>
                </div>
              ))}
            </div>
          </div>
          </FadeUp>
        </>
      )}

      <PageFooter />
    </article>
  );
}
