'use client';

import { useState, useEffect, useRef } from 'react';
import { CHROME_H } from '@/lib/constants';

/**
 * Scroll-spy hook using IntersectionObserver.
 * Falls back to first section when at page top (for "Overview" items).
 * rootMargin accounts for fixed chrome (UC bar + nav + subnav).
 */
export function useScrollSpy(
  sectionIds: string[],
  options?: { threshold?: number; rootMargin?: string }
) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');
  const visibleRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (sectionIds.length === 0) return;

    // Reset to first item
    setActiveId(sectionIds[0]);
    visibleRef.current.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            visibleRef.current.add(e.target.id);
          } else {
            visibleRef.current.delete(e.target.id);
          }
        });

        // Pick the first visible section in document order
        for (const id of sectionIds) {
          if (visibleRef.current.has(id)) {
            setActiveId(id);
            return;
          }
        }

        // Nothing visible — if at top of page, activate first item
        if (window.scrollY < 200) {
          setActiveId(sectionIds[0]);
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? `-${CHROME_H}px 0px -35% 0px`,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds.join(','), options?.threshold, options?.rootMargin]);

  return activeId;
}
