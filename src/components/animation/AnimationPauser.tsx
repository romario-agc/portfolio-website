'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** IO threshold — fraction visible before unpausing. Default 0.1 */
  threshold?: number;
  /** Root margin for early trigger. Default '100px' */
  rootMargin?: string;
}

/**
 * AnimationPauser — Gemini perf audit: pause infinite CSS animations when offscreen.
 *
 * Wraps children in a div that adds `data-visible="false"` when the element
 * is not intersecting the viewport. CSS can target this:
 *
 *   [data-visible="false"] .myAnimated { animation-play-state: paused; }
 *
 * Uses IntersectionObserver with no dependencies. CPU stays cool during scroll.
 */
export function AnimationPauser({ children, threshold = 0.1, rootMargin = '100px' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true); // Start visible (SSR-safe)

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} data-visible={visible ? 'true' : 'false'}>
      {children}
    </div>
  );
}
