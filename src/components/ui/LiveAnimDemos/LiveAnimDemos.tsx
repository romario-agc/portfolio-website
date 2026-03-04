'use client';

import { useState } from 'react';
import styles from './LiveAnimDemos.module.css';

const DEMOS = [
  { id: 'pulse', label: 'Pulse Glow', desc: 'Radial glow pulse with opacity and scale modulation. Used for attention-drawing indicators.', timing: 'ease-in-out 2s infinite' },
  { id: 'stagger', label: 'Stagger Waterfall', desc: 'Sequential element entry with incremental delay. Core pattern for page section loading.', timing: 'cubic-bezier(0.16,1,0.3,1) 0.55s' },
  { id: 'spring', label: 'Spring Bounce', desc: 'Overshoot easing that simulates physical spring tension. Used in interactive feedback.', timing: 'cubic-bezier(0.34,1.56,0.64,1) 0.6s' },
  { id: 'fadeslide', label: 'Fade + Slide', desc: 'Opacity and translateY composite. The default waterfall entry for all content blocks.', timing: 'cubic-bezier(0.16,1,0.3,1) 0.5s' },
  { id: 'morph', label: 'Shape Morph', desc: 'Border-radius and scale transform creating organic shape transitions between states.', timing: 'ease-in-out 3s infinite' },
  { id: 'shimmer', label: 'Skeleton Shimmer', desc: 'Gradient sweep loading placeholder. Communicates progress for async data fetching.', timing: 'linear 1.5s infinite' },
];

export function LiveAnimDemos() {
  const [replay, setReplay] = useState(0);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.label}>Live Demos</span>
        <button className={styles.replayBtn} onClick={() => setReplay((r) => r + 1)} type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 12 }}>
            <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
          Replay
        </button>
      </div>
      <div className={styles.grid} key={replay}>
        {DEMOS.map((d) => (
          <div key={d.id} className={styles.card}>
            <div className={styles.stage}>
              {d.id === 'pulse' && <PulseDemo />}
              {d.id === 'stagger' && <StaggerDemo />}
              {d.id === 'spring' && <SpringDemo />}
              {d.id === 'fadeslide' && <FadeSlideDemo />}
              {d.id === 'morph' && <MorphDemo />}
              {d.id === 'shimmer' && <ShimmerDemo />}
            </div>
            <div className={styles.info}>
              <div className={styles.demoTitle}>{d.label}</div>
              <div className={styles.demoDesc}>{d.desc}</div>
              <code className={styles.demoTiming}>{d.timing}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PulseDemo() {
  return (
    <div className={styles.pulseWrap}>
      <div className={styles.pulseRing} />
      <div className={styles.pulseDot} />
    </div>
  );
}

function StaggerDemo() {
  return (
    <div className={styles.staggerWrap}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className={styles.staggerBar} style={{ animationDelay: `${i * 0.09}s` }} />
      ))}
    </div>
  );
}

function SpringDemo() {
  return (
    <div className={styles.springWrap}>
      <div className={styles.springBall} />
      <div className={styles.springShadow} />
    </div>
  );
}

function FadeSlideDemo() {
  return (
    <div className={styles.fadeWrap}>
      <div className={styles.fadeLine1} />
      <div className={styles.fadeLine2} />
      <div className={styles.fadeLine3} />
    </div>
  );
}

function MorphDemo() {
  return (
    <div className={styles.morphWrap}>
      <div className={styles.morphShape} />
    </div>
  );
}

function ShimmerDemo() {
  return (
    <div className={styles.shimmerWrap}>
      <div className={styles.shimmerLine} />
      <div className={styles.shimmerLineShort} />
      <div className={styles.shimmerBlock} />
    </div>
  );
}
