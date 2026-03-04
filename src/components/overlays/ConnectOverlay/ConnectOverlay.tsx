'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useUI } from '@/components/providers/UIProvider';
import { useFocusTrap } from '@/lib/hooks/useFocusTrap';
import styles from './ConnectOverlay.module.css';

/** Connect overlay — mockup lines 3380–3420.
 *  Backdrop + centered panel with entrance/exit animations.
 *  Nav morph button handles open/close (separate component). */
export function ConnectOverlay() {
  const { overlay, closeOverlay } = useUI();
  const panelRef = useRef<HTMLDivElement>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const [closing, setClosing] = useState(false);
  useFocusTrap(panelRef, overlay === 'connect');

  useEffect(() => { setPortalTarget(document.getElementById('portal-root')); }, []);

  const dismiss = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      closeOverlay();
    }, 350);
  }, [closeOverlay]);

  useEffect(() => {
    if (overlay !== 'connect') return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [overlay, dismiss]);

  if (!portalTarget || overlay !== 'connect') return null;

  return createPortal(
    <div
      className={closing ? styles.backdropOut : styles.backdrop}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      {/* Blurred dim layer */}
      <div className={styles.dim} onClick={dismiss} />

      {/* Panel — mockup line 3384 */}
      <div
        className={closing ? styles.panelOut : styles.panel}
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={styles.tag}>Get in Touch</span>
        <h2 className={styles.title}>Send a Message</h2>
        <p className={styles.desc}>
          Interested in working together? Fill out the form below and I&apos;ll get back to you shortly.
        </p>

        <div className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input className={styles.input} type="text" placeholder="Your name" />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} type="email" placeholder="your@email.com" />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea className={styles.textarea} rows={4} placeholder="Tell me about your project or idea..." />
          </div>
          <button className={styles.submit} type="button">Send Message →</button>
        </div>
      </div>
    </div>,
    portalTarget,
  );
}
