'use client';

import { motion } from 'framer-motion';

/** template.tsx re-renders on every route change (unlike layout.tsx).
 *  This gives us per-page entrance animation via Framer Motion.
 *  DS V35 §8.2: pageIn — translateY(16px) → 0, 0.45s, spring ease. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
