import Link from 'next/link';
import type { BlogPost } from '@/types';
import { stg } from '@/lib/stg';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  featured?: boolean;
}

export function BlogCard({ post, index, featured }: BlogCardProps) {
  const hasExternal = !!post.externalUrl;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`cd ${styles.card} ${featured ? styles.featured : ''}`}
      style={stg(index)}
    >
      <div className={styles.preview} style={{ background: post.color || 'var(--surface)' }} />
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.date}>{post.date}</span>
          {post.readTime && <span className={styles.readTime}>{post.readTime} min read</span>}
          {hasExternal && <span className={styles.extBadge}>Case Study</span>}
        </div>
        <h3 className={styles.title}>
          {post.title}
          {hasExternal && (
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={styles.extIcon}>
              <path d="M5 3h8v8" /><path d="M13 3L3 13" />
            </svg>
          )}
        </h3>
        <p className={styles.excerpt}>{post.excerpt || post.preview}</p>
        {!post.isReady && !hasExternal && <span className="uc-badge">Coming Soon</span>}
      </div>
    </Link>
  );
}
