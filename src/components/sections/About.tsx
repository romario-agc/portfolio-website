import Link from 'next/link';
import { stg } from '@/lib/stg';
import styles from './About.module.css';

const STATS = [
  { n: '7+', l: 'Years' },
  { n: '4', l: 'Studies' },
  { n: '3', l: 'Frameworks' },
];

const SKILLS = ['Product Strategy', 'UX Research', 'Interaction Design', 'Design Systems', 'Prototyping', 'Content Creation', 'Brand Marketing'];

export function About() {
  return (
    <div className={`s12 ${styles.section}`}>
      {/* Left — Photo + stats */}
      <div className={styles.left}>
        <div style={stg(2)} className={styles.photoWrap}>
          {/* Placeholder — real photo in public/images/ */}
          <div className={styles.photoPlaceholder}>
            <span className={styles.photoInitial}>RC</span>
          </div>
        </div>
        <div style={stg(3)} className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.l} className={styles.stat}>
              <div className={styles.statNum}>{s.n}</div>
              <div className={styles.statLabel}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={stg(4)} className={styles.social}>
          <a href="https://linkedin.com/in/romariocoffie" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://dribbble.com/romariocoffie" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Dribbble">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.174 10.174 0 004.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.15 10.15 0 006.29 2.166c1.42 0 2.77-.29 4.006-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248A65.473 65.473 0 007.337 3.1 10.18 10.18 0 001.966 9.92zm7.44-7.91c.58.837 1.63 2.467 2.9 4.96 3.12-1.17 4.44-2.95 4.62-3.2A10.15 10.15 0 0012 1.84c-.907 0-1.79.12-2.634.346zm8.57 2.79c-.2.27-1.63 2.14-4.88 3.47.264.54.516 1.088.756 1.64.084.194.165.39.243.585 3.41-.428 6.8.26 7.14.33-.02-2.33-.87-4.47-2.33-6.12z"/></svg>
          </a>
          <a href="https://github.com/romariocoffie" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>

      {/* Right — Bio */}
      <div className={styles.right}>
        <p className="bs" style={{ ...stg(2), fontSize: 18, marginBottom: 18 }}>
          Certified Product Developer with over seven years of experience crafting innovative software and media solutions to address complex business and customer challenges. Armed with expertise in design, prototyping, and technical implementation, I bridge the gap between strategic vision and tangible outcomes.
        </p>
        <p className="bs" style={{ ...stg(3), fontSize: 18, marginBottom: 18 }}>
          My work empowers leadership, aligns cross-functional teams, and transforms ideas into impactful products alongside development and customer-focused teams.
        </p>
        <p className="bs" style={{ ...stg(3), fontSize: 18, marginBottom: 18 }}>
          Beyond engineering, I bring a creative lens to marketing and content creation — from product photography and brand storytelling to campaign strategy and social media content that connects with audiences.
        </p>
        <div style={{ ...stg(4), display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
          {SKILLS.map((x) => <span key={x} className="pl" style={{ fontSize: 9, padding: '4px 12px' }}>{x}</span>)}
        </div>
        <div style={{ ...stg(5), display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link href="/resume" className="oval-link" style={{ borderColor: '#34d399', color: '#34d399' }}>View Resume →</Link>
        </div>
      </div>
    </div>
  );
}
