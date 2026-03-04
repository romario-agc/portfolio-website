'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumbs.module.css';

/** Route label overrides — cleaner than parsing path segments. */
const LABELS: Record<string, string> = {
  '/': 'Home',
  '/work': 'Work',
  '/methodology': 'Methodology',
  '/design-system': 'Design System',
  '/experiences': 'Experiences',
  '/studio': 'Studio',
  '/photoshoots': 'Photoshoots',
  '/blog': 'Blog',
  '/resume': 'Resumé',
  '/about': 'About',
};

function buildCrumbs(pathname: string) {
  if (pathname === '/') return [];
  const segments = pathname.split('/').filter(Boolean);
  const crumbs: { label: string; href: string }[] = [{ label: 'Home', href: '/' }];

  let path = '';
  for (const seg of segments) {
    path += `/${seg}`;
    const label = LABELS[path] || seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ label, href: path });
  }
  return crumbs;
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const crumbs = buildCrumbs(pathname);

  if (crumbs.length < 2) return null;

  return (
    <nav className={styles.bar} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.href} className={styles.item}>
              {i > 0 && <span className={styles.sep}>/</span>}
              {isLast ? (
                <span className={styles.current}>{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className={styles.link}>{crumb.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
