'use client';

import { useEffect } from 'react';

/** Global error boundary — catches errors in root layout itself.
 *  Must provide its own <html> and <body> since layout is broken. */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[FATAL] [GlobalError]', new Date().toISOString(), '—', error.message);
    if (error.stack) console.error(error.stack);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ background: '#06060e', color: '#eaf4ff', fontFamily: 'system-ui' }}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 32,
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: 42, marginBottom: 16 }}>Critical Error</h2>
          <p style={{ fontSize: 17, color: '#94b8d0', maxWidth: 480, lineHeight: 1.8, marginBottom: 32 }}>
            A critical error has occurred. Please try refreshing the page.
          </p>
          <button
            onClick={reset}
            style={{
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#06060e',
              background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
              border: 'none',
              borderRadius: 100,
              padding: '12px 32px',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
