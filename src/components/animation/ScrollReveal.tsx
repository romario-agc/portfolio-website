'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

/** ScrollReveal — wraps children in a Framer Motion div that fades up when in view.
 *  Uses IntersectionObserver via useInView (threshold 0.5 per Implementation Plan §3.6).
 *  DS V35 §8.1: translateY(32px), cubic-bezier(0.16, 1, 0.3, 1), 0.7s. */
export function ScrollReveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.7,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // §8.1 spring easing
      }}
    >
      {children}
    </motion.div>
  );
}
