import styles from './SectionHead.module.css';

interface SectionHeadProps {
  tag: string;
  title: string;
  children?: React.ReactNode;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
}

/** SectionHead — §7.1: tag label + h1 title + optional children.
 *  Used on every standalone page. Title is .st (64px Gilda Display). */
export function SectionHead({ tag, title, children, badge, actions }: SectionHeadProps) {
  return (
    <div className={`rgrid ${styles.head}`}>
      <div className="s12">
        {badge && <div className={styles.badge}>{badge}</div>}
        <span className={styles.tag}>{tag}</span>
        <h1 className={styles.title}>{title}</h1>
        {children}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </div>
  );
}
