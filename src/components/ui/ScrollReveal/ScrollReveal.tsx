'use client';

import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Delay in ms before animation starts after intersection */
  delay?: number;
  /** Custom animation class — defaults to fadeUp via CSS */
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn';
  /** Threshold for IntersectionObserver (0–1) */
  threshold?: number;
  /** Only animate once */
  once?: boolean;
  /** Additional className */
  className?: string;
  /** Additional inline style */
  style?: CSSProperties;
  /** HTML tag to render */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * ScrollReveal — triggers CSS animations on scroll into viewport.
 * Uses IntersectionObserver (zero deps) instead of Framer Motion.
 *
 * DS V35 §8.1: fadeUp uses translateY(32px), 0.7s, cubic-bezier(0.16, 1, 0.3, 1).
 * Scroll-spy threshold: 0.5 (Gemini correction #6).
 */
export function ScrollReveal({
  children,
  delay = 0,
  animation = 'fadeUp',
  threshold = 0.15,
  once = true,
  className = '',
  style,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, once]);

  const animationMap: Record<string, CSSProperties> = {
    fadeUp: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    },
    fadeIn: {
      opacity: isVisible ? 1 : 0,
      transition: `opacity 0.6s ease ${delay}ms`,
    },
    slideLeft: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
      transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    },
    slideRight: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
      transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    },
    scaleIn: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(0.92)',
      transition: `opacity 0.5s ease ${delay}ms, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    },
  };

  return (
    // @ts-expect-error — dynamic tag
    <Tag
      ref={ref}
      className={className}
      style={{ ...animationMap[animation], willChange: 'opacity, transform', ...style }}
    >
      {children}
    </Tag>
  );
}
