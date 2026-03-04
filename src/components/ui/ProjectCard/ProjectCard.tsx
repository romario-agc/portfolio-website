import Link from 'next/link';
import type { Project } from '@/types';
import { stg } from '@/lib/stg';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

/** ProjectCard — §7.4: card with gradient preview, tag, title, description.
 *  Uses .cd base class + stg() waterfall animation. */
export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className={`cd ${styles.card}`} style={stg(index)}>
      <div className={styles.preview} style={{ background: project.color || 'var(--surface)' }}>
        {/* TODO: Real project screenshots */}
      </div>
      <div className={styles.body}>
        <span className={styles.tag}>{project.tag}</span>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.tools}>
          {project.tools.map((tool) => (
            <span key={tool} className="pl">{tool}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
