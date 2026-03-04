import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECT_IDS, PROJECTS } from '@/data/projects';
import { PROJECT_SVGS } from '@/components/ui/ProjectSVG/ProjectSVG';
import { SectionHead } from '@/components/ui/SectionHead/SectionHead';
import { OvalLink } from '@/components/ui/OvalLink/OvalLink';
import { PageFooter } from '@/components/ui/PageFooter/PageFooter';
import { ScrollReveal } from '@/components/ui/ScrollReveal/ScrollReveal';
import { stg } from '@/lib/stg';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Apps & Websites' };

export default function WorkPage() {
  return (
    <article>
      <div id="work-overview" />
      <div style={{ textAlign: 'left', padding: '12px 0', marginBottom: 20 }} {...stg(0)}>
        <span className="uc-badge">🚧 Under Construction</span>
      </div>
      <div style={stg(1)}>
        <SectionHead tag="Portfolio" title="Apps & Websites">
          <p className="bs" style={{ lineHeight: 1.8 }}>
            A selection of product design and development work spanning enterprise platforms, mobile applications, and open-source tools.
          </p>
        </SectionHead>
      </div>

      {PROJECT_IDS.map((id, i) => {
        const p = PROJECTS[id];
        const SVGComponent = PROJECT_SVGS[id];

        return (
          <ScrollReveal key={id} delay={i * 0.06}>
          <div
            id={`project-${id}`}
            className={`rgrid ${styles.projectSection}`}
          >
            <div className={`s6 ${styles.projectInfo}`}>
              <span className="lb" style={{ display: 'block', marginBottom: 12, fontSize: 9 }}>{p.tag}</span>
              <h2 className={styles.projectTitle}>{p.name}</h2>
              <span className={styles.projectTools}>{p.tools.join(', ')}</span>
              <p className="bs" style={{ fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>{p.desc}</p>
              <div className={styles.toolPills}>
                {p.tools.map((tool, j) => (
                  <span key={j} className="pl" style={{ fontSize: 9, padding: '5px 12px' }}>{tool}</span>
                ))}
              </div>
              <div className={styles.projectCtas}>
                <OvalLink href={`/work/${id}`}>View Case Study →</OvalLink>
                {p.url && (
                  <Link href={p.url} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                    Open Website ↗
                  </Link>
                )}
              </div>
            </div>
            <div className={`s6 ${styles.projectVisual}`}>
              {SVGComponent && <SVGComponent color={p.color} />}
            </div>
          </div>
          </ScrollReveal>
        );
      })}

      <PageFooter />
    </article>
  );
}
