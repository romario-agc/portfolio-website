'use client';

import { useEffect } from 'react';
import { logger } from '@/lib/logger';

/** Next.js Error Boundary — catches runtime errors in route segments.
 *  Logs to terminal via logger, shows recovery UI. */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.fatal('Unhandled route error', {
      component: 'ErrorBoundary',
      error,
      context: { digest: error.digest },
    });
  }, [error]);

  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 42,
        color: 'var(--text)',
        marginBottom: 16,
      }}>
        Something went wrong
      </h2>
      <p style={{
        fontFamily: 'var(--font-reading)',
        fontSize: 17,
        color: 'var(--desc)',
        maxWidth: 480,
        lineHeight: 1.8,
        marginBottom: 32,
      }}>
        An unexpected error occurred. The error has been logged for investigation.
      </p>
      <button
        onClick={reset}
        className="oval-link"
        style={{ cursor: 'pointer' }}
      >
        Try Again
      </button>
    </div>
  );
}
