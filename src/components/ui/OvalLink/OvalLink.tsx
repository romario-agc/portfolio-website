'use client';

import Link from 'next/link';
import styles from './OvalLink.module.css';

interface OvalLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
  external?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/** OvalLink — §7.3: pill-shaped CTA button.
 *  No internal marginTop — parent handles spacing (V35 changelog). */
export function OvalLink({
  href, onClick, children, variant = 'primary', size = 'md', external, className = '', style,
}: OvalLinkProps) {
  const cls = `${styles.oval} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        style={style}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    );
  }

  return <button className={cls} style={style} onClick={onClick}>{children}</button>;
}
