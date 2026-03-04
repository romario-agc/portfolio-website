'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  baseDelay?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** StaggerContainer — wraps children with waterfall stagger.
 *  DS V35 §8.1: base 0.08s, increment 0.06s per child.
 *  Uses Framer Motion's staggerChildren orchestration. */
export function StaggerContainer({
  children,
  staggerDelay = 0.06,
  baseDelay = 0.08,
  className,
  style,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: baseDelay,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** StaggerItem — must be direct child of StaggerContainer */
export function StaggerItem({
  children,
  className,
  style,
  y = 32,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  y?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
