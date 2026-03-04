'use client';

import { type ReactNode } from 'react';

/** Stagger wrapper — applies fadeUp waterfall animation.
 *  Matches mockup stg() function: 0.55s duration, i*0.09s delay.
 *  Used on standalone pages where server components can't use stg() inline. */
export function Stagger({ i, children, className, style }: {
  i: number;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        animation: `fadeUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.09}s both`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
