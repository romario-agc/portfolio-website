'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog-posts';
import { BlogCard } from '@/components/ui/BlogCard/BlogCard';
import { PageFooter } from '@/components/ui/PageFooter/PageFooter';
import { stg } from '@/lib/stg';
import styles from './page.module.css';

export function BlogContent() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'latest' | 'popular'>('latest');

  // Listen for blog-filter events from SubNav
  useEffect(() => {
    const handler = (e: Event) => {
      const { q, sort: s } = (e as CustomEvent).detail;
      setSearch(q || '');
      setSort(s || 'latest');
      // Scroll to top of content when filter changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('blog-filter', handler);
    return () => window.removeEventListener('blog-filter', handler);
  }, []);

  const filtered = BLOG_POSTS.filter(
    (p) =>
      search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()),
  );

  const sorted = sort === 'popular'
    ? [...filtered].sort((a, b) => b.popularity - a.popularity)
    : filtered;

  const featured = sorted.filter((p) => p.featured).slice(0, 3);
  const rest = sorted.filter((p) => !featured.includes(p));

  return (
    <article>
      {/* Hero */}
      <div className="rgrid" style={{ ...stg(0), marginBottom: 48 }}>
        <div className="s12" style={{ paddingBottom: 36, borderBottom: '1px solid var(--divider)' }}>
          <span className="lb" style={{ display: 'block', marginBottom: 12 }}>Thoughts</span>
          <h1 className="st" style={{ fontSize: 52, marginBottom: 14 }}>
            Blog{' '}
            <span className="uc-badge" style={{ marginLeft: 8 }}>🚧 Under Construction</span>
          </h1>
          <p className="bs" style={{ lineHeight: 1.8 }}>
            Writing on design, development, product strategy, and the spaces in between.
          </p>
        </div>
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <>
        <div id="blog-overview" />
        <div id="blog-featured" className={`rgrid ${styles.featuredGrid}`} style={{ marginBottom: 40 }}>
          <div className="s12">
            <span className={styles.listLabel}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 12, flexShrink: 0 }}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Featured
            </span>
          </div>
          {featured.map((post, i) => (
            <div key={post.slug} className="s4" style={stg(i + 1)}>
              <BlogCard post={post} index={i} />
            </div>
          ))}
        </div>
        </>
      )}

      {/* All Posts */}
      {rest.length > 0 && (
        <div id="blog-all" className="rgrid" style={{ marginBottom: 40 }}>
          <div className="s12">
            <span className={styles.listLabel}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 12, flexShrink: 0 }}>
                <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              All Posts
            </span>
          </div>
          {rest.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={`s12 ${styles.postRow}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>
                <span className={styles.postCat} style={{ color: i % 2 === 0 ? 'var(--cyan)' : 'var(--purple)' }}>{post.category}</span>
                <div className={styles.postTitle}>{post.title}</div>
                <p className="bs" style={{ fontSize: 14, lineHeight: 1.7 }}>{post.preview}</p>
              </div>
              <div className={styles.postMeta}>
                <span className={styles.postDate}>{post.date}</span>
                <span className={styles.postReads}>{post.popularity} reads</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="rgrid" style={{ marginBottom: 40 }}>
          <div className="s12" style={{ textAlign: 'center', padding: '60px 0' }}>
            <p className="bs" style={{ fontSize: 16 }}>No posts matching &ldquo;{search}&rdquo;</p>
          </div>
        </div>
      )}

      <PageFooter />
    </article>
  );
}
