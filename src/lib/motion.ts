/**
 * MOTION LIBRARY — Standardized animation patterns.
 * Governance: LAW 4 — All motion from mockup v35g §8.
 *
 * Three tiers:
 * 1. stg(i)     — Waterfall reveal: fadeUp with staggered delay per element
 * 2. entrance() — Component-level entrance animations (overlays, chrome bars)
 * 3. exit()     — Matching exit animations with reversed easing
 *
 * Timing spec (mockup line 552 + §8.1–8.4):
 * - Waterfall: 0.55s spring, 0.09s stagger increment, translateY(32px)
 * - Overlay backdrop: 0.3s ease-out in, 0.35s ease-in out
 * - Overlay panel: 0.4s spring in, 0.35s ease-in out
 * - Chrome bars: 0.3s ease (slideDown, footerIn/Out)
 * - Micro (dropdown, tooltip): 0.15s ease
 * - Tilt: perspective(800px) rotateX/Y ±7deg scale(1.01)
 */
import type React from 'react';

// ── Easing tokens ──
export const EASE = {
  spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

// ── Duration tokens ──
export const DUR = {
  micro: '0.15s',   // dropdown, tooltip — §8.4
  fast: '0.25s',    // hover states, focus rings
  normal: '0.35s',  // overlay exit, chrome bars
  slow: '0.4s',     // overlay panel entrance
  waterfall: '0.55s', // stg() reveal — mockup line 552
  hero3d: '1.2s',   // 3D wireframe float-in
} as const;

// ── Stagger delay ──
export const STAGGER_BASE = 0; // first element starts immediately
export const STAGGER_INCREMENT = 0.09; // 90ms between each element

/**
 * Waterfall stagger — mockup line 552.
 * Each element fades up with incrementally delayed entrance.
 * Re-fires on parent remount (HomeViewer uses key={idx}).
 */
export function stg(index: number): React.CSSProperties {
  return {
    animation: `fadeUp ${DUR.waterfall} ${EASE.spring} ${index * STAGGER_INCREMENT}s both`,
  };
}

/**
 * Extended stagger — for sections with many children (6+).
 * Uses tighter 0.06s increment to keep total duration reasonable.
 */
export function stgTight(index: number): React.CSSProperties {
  return {
    animation: `fadeUp ${DUR.waterfall} ${EASE.spring} ${index * 0.06}s both`,
  };
}

/**
 * Overlay entrance styles (backdrop + panel).
 * Mockup lines 3381, 3384.
 */
export const overlayMotion = {
  backdrop: {
    enter: `overlayIn_local 0.3s ease-out both`,
    exit: `overlayOut_local 0.35s ease-in both`,
  },
  panel: {
    enter: `overlaySlideIn_local 0.4s ${EASE.spring} both`,
    exit: `overlaySlideOut_local 0.35s ease-in both`,
  },
} as const;

/**
 * Chrome bar entrance (SubNav, Footer).
 */
export const chromeMotion = {
  slideDown: `slideDown_local 0.3s ease both`,
  footerIn: `footerIn_local 0.4s ${EASE.spring} 0.15s both`,
  footerOut: `footerOut_local 0.3s ease-in both`,
} as const;

/**
 * Hero 3D wireframe entrance — staggered float-in.
 * Mockup lines 2952–2983.
 */
export function hero3d(delayS: number): React.CSSProperties {
  return {
    opacity: 0,
    animation: `float3dIn ${DUR.hero3d} ${EASE.spring} ${delayS}s both`,
  };
}

/**
 * Card tilt on hover — mockup lines 342–348.
 */
export function tIn(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  el.style.transition = 'none';
  el.style.transform = `perspective(800px) rotateX(${((0.5 - y) * 7).toFixed(1)}deg) rotateY(${((x - 0.5) * 7).toFixed(1)}deg) scale(1.01)`;
}

export function tOut(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.transform = 'none';
  el.style.transition = `transform 0.5s ${EASE.spring}`;
}
