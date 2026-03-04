import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog-posts';
import { BLOG_CONTENT } from '@/data/blog-post-content';
import { PageFooter } from '@/components/ui/PageFooter/PageFooter';
import { stg } from '@/lib/stg';
import styles from './page.module.css';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  return { title: post.title, description: post.preview };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const postIdx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const post = BLOG_POSTS[postIdx];
  if (!post) notFound();

  const content = BLOG_CONTENT[slug];
  const prev = postIdx > 0 ? BLOG_POSTS[postIdx - 1] : null;
  const next = postIdx < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIdx + 1] : null;

  return (
    <article>
      <div className={`rgrid ${styles.postLayout}`} style={{ marginBottom: 48 }}>
        <div className="s8">
          {/* Category tag */}
          <span className="lb" style={{ ...stg(0), display: 'block', marginBottom: 12 }}>{post.category}</span>

          {/* Title */}
          <h1 className="st" style={{ ...stg(1), fontSize: 48, marginBottom: 16, lineHeight: 1.15 }}>{post.title}</h1>

          {/* Meta row */}
          <div className={styles.meta} style={stg(2)}>
            <span>{post.date}</span>
            <span className={styles.dot} />
            <span>{post.readTime ? `${post.readTime} min read` : '5 min read'}</span>
          </div>

          {/* Source link banner */}
          {content?.sourceUrl && (
            <a
              href={content.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sourceBanner}
              style={stg(2)}
            >
              <div className={styles.sourceLeft}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, flexShrink: 0 }}>
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>{content.sourceLabel || 'Read the original post'}</span>
              </div>
              <span className={styles.sourceArrow}>↗</span>
            </a>
          )}

          {/* Featured image placeholder */}
          <div className={styles.heroImage} style={stg(3)}>
            <span className={styles.heroImageLabel}>Featured Image</span>
          </div>

          {/* Article body */}
          {content ? (
            <div className={styles.articleBody} style={stg(4)}>
              <p className={styles.lede}>{content.lede}</p>

              {content.sections.map((sec, i) => (
                <div key={i}>
                  <h2 id={sec.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className={styles.articleH2}>{sec.heading}</h2>
                  {sec.body.map((para, pi) => (
                    <p key={pi} className={styles.articleP}>{para}</p>
                  ))}

                  {/* Insert image slot after section 1 */}
                  {i === 1 && (
                    <div className={styles.inlineImage}>
                      <span className={styles.heroImageLabel}>Inline Image — CMS Slot</span>
                    </div>
                  )}

                  {/* Insert quote after section 2 */}
                  {i === 2 && content.quote && (
                    <blockquote className={styles.blockquote}>{content.quote}</blockquote>
                  )}

                  {/* Insert code block after section 3 */}
                  {i === 3 && content.codeBlock && (
                    <div className={styles.codeBlock}>
                      <div className={styles.codeComment}>{content.codeBlock.comment}</div>
                      {content.codeBlock.lines.map((line, li) => (
                        <div key={li} style={{ paddingLeft: (line.length - line.trimStart().length) * 8 }}>{line.trim()}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Author card */}
              <div className={styles.authorCard}>
                <div className={styles.authorAvatar}>
                  <span>RC</span>
                </div>
                <div>
                  <div className={styles.authorName}>Romário Coffie</div>
                  <div className={styles.authorRole}>Designer & Developer · SAFe® Certified Product Developer</div>
                </div>
              </div>

              {/* Prev/Next navigation */}
              <div className={styles.prevNext}>
                {prev ? (
                  <Link href={`/blog/${prev.slug}`} className={styles.prevNextCard}>
                    <span className={styles.prevNextLabel}>← Previous</span>
                    <span className={styles.prevNextTitle}>{prev.title}</span>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link href={`/blog/${next.slug}`} className={`${styles.prevNextCard} ${styles.prevNextRight}`}>
                    <span className={styles.prevNextLabel}>Next →</span>
                    <span className={styles.prevNextTitle}>{next.title}</span>
                  </Link>
                ) : <div />}
              </div>

              {/* Tags */}
              <div className={styles.tagRow}>
                {content.tags.map((tag, i) => (
                  <span key={i} className="pl" style={{ fontSize: 10, padding: '5px 14px' }}>{tag}</span>
                ))}
              </div>
            </div>
          ) : (
            /* No content — placeholder */
            <div className="cd" style={{ ...stg(4), padding: 40, textAlign: 'center' }}>
              <span className="uc-badge" style={{ marginBottom: 16 }}>🚧 Coming Soon</span>
              <p className="bs" style={{ marginTop: 16 }}>{post.preview}</p>
              {post.externalUrl && (
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.placeholderLink}
                >
                  Read on original site ↗
                </a>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="s4">
          <div style={{ ...stg(2), position: 'sticky', top: 148 }}>
            {/* Table of Contents */}
            {content && (
              <div className={styles.tocCard}>
                <span className={styles.tocLabel}>Table of Contents</span>
                {content.sections.map((sec, i) => (
                  <a
                    key={i}
                    href={`#${sec.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className={`${styles.tocItem} ${i === 0 ? styles.tocItemActive : ''}`}
                  >
                    {sec.heading}
                  </a>
                ))}
              </div>
            )}
            {/* Related posts */}
            <div className={styles.relatedCard}>
              <span className={styles.tocLabel}>Related Posts</span>
              {BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2).map((p, i) => (
                <Link key={i} href={`/blog/${p.slug}`} className={styles.relatedItem}>{p.title}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </article>
  );
}
