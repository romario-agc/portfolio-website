'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useFocusTrap } from '@/lib/hooks/useFocusTrap';
import styles from './Onboarding.module.css';

const STORAGE_KEY = 'portfolio-onboarding-dismissed';

/** Mockup line 748–807: four steps, progress bars, keyboard hint. */
const STEPS = [
  {
    num: '01', label: 'Plan', color: '#00d4ff',
    heading: 'Every great product starts with a plan',
    desc: 'Lean-Agile methodology for software delivery, creative production planning for shoots and campaigns, and content strategy for marketing. Strategy across every discipline.',
  },
  {
    num: '02', label: 'Design', color: '#a855f7',
    heading: 'Design with intention, not decoration',
    desc: 'Atomic design systems, accessibility-first components, and user experiences that solve real problems.',
  },
  {
    num: '03', label: 'Develop', color: '#4ade80',
    heading: 'Build it right the first time',
    desc: 'Flutter, React, full-stack architecture. Production-grade code with offline-first patterns and real-time sync.',
  },
  {
    num: '04', label: 'Create', color: '#ff9a9a',
    heading: 'Bring ideas to life',
    desc: 'Photography, videography, marketing campaigns, and brand identity. Creative production that tells stories across every medium.',
    icons: [
      { icon: '📸', label: 'Photography' },
      { icon: '🎬', label: 'Videography' },
      { icon: '✦', label: 'Branding' },
      { icon: '📣', label: 'Marketing' },
    ],
  },
];

export function Onboarding() {
  const pathname = usePathname();
  const [step, setStep] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [dismissed, setDismissed] = useState(true); // default true — only show after mount check
  const [mounted, setMounted] = useState(false);
  const panelRef = useFocusTrap(!dismissed);

  // Check localStorage on mount — only show if not previously dismissed AND on homepage
  useEffect(() => {
    setMounted(true);
    try {
      const wasDismissed = localStorage.getItem(STORAGE_KEY);
      if (!wasDismissed && pathname === '/') {
        setDismissed(false);
      }
    } catch {
      // localStorage unavailable (SSR, private browsing) — don't show
    }
  }, [pathname]);

  const dismiss = useCallback(() => {
    setExiting(true);
    setTimeout(() => {
      setDismissed(true);
      try {
        localStorage.setItem(STORAGE_KEY, 'true');
      } catch {
        // localStorage unavailable — dismissal won't persist but UI still works
      }
    }, 450);
  }, []);

  const advance = useCallback(() => {
    if (step < STEPS.length - 1) setStep((s) => s + 1);
    else dismiss();
  }, [step, dismiss]);

  useEffect(() => {
    if (dismissed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
      if (e.key === 'Enter' || e.key === 'ArrowRight') advance();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [dismissed, dismiss, advance]);

  // Don't render if dismissed, not mounted, or not on homepage
  if (dismissed || !mounted || pathname !== '/') return null;

  const current = STEPS[step];

  return createPortal(
    <div
      className={styles.backdrop}
      style={{ animation: exiting ? 'fadeOut 0.5s ease both' : 'fadeIn 0.6s ease both' }}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome onboarding"
    >
      <div className={styles.panel} ref={panelRef}>
        {/* Progress bars — mockup line 752 */}
        <div className={styles.bars}>
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={styles.bar}
              style={{
                width: step >= i ? 48 : 8,
                background: step >= i ? '#00d4ff' : 'rgba(100,200,255,0.15)',
              }}
            />
          ))}
        </div>

        {/* Step content — mockup line 759 */}
        <div className={styles.content} key={step}>
          <div className={styles.stepLabel} style={{ color: current.color }}>
            {current.num} — {current.label}
          </div>
          <h2 className={styles.heading}>{current.heading}</h2>
          <p className={styles.desc}>{current.desc}</p>
          {current.icons && (
            <div className={styles.iconRow}>
              {current.icons.map((item, i) => (
                <div key={i} className={styles.iconItem}>
                  <span style={{ fontSize: 14 }}>{item.icon}</span>{item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions — mockup line 790 */}
        <div className={styles.actions}>
          {step < STEPS.length - 1 ? (
            <>
              <button className={styles.skip} onClick={dismiss}>Skip</button>
              <button className={styles.next} onClick={advance}>Continue</button>
            </>
          ) : (
            <button className={styles.explore} onClick={dismiss}>Explore Portfolio</button>
          )}
        </div>

        {/* Keyboard hint — mockup line 802 */}
        <div className={styles.keyHint}>
          Press <kbd className={styles.kbd}>Enter</kbd> or <kbd className={styles.kbd}>→</kbd> to continue
        </div>
      </div>
    </div>,
    document.getElementById('portal-root')!,
  );
}
