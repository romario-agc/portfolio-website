'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/** FadeUp — scroll-triggered reveal using IntersectionObserver via Framer Motion.
 *  DS V35 §8.1: translateY(32px), cubic-bezier(0.16,1,0.3,1), 0.7s.
 *  Use `delay` prop or wrap in StaggerContainer for waterfall effect. */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  y = 32,
  once = true,
  className,
  style,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // --ease-spring
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
