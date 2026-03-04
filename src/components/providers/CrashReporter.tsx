'use client';

import { useEffect } from 'react';
import { logger } from '@/lib/logger';

/** Global crash reporter — catches unhandled errors and promise rejections.
 *  Logs everything to terminal via structured logger.
 *  Wire into root layout alongside UIProvider. */
export function CrashReporter() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      logger.error('Unhandled window error', {
        component: 'CrashReporter',
        error: event.error instanceof Error ? event.error : new Error(event.message),
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      logger.error('Unhandled promise rejection', {
        component: 'CrashReporter',
        error: reason instanceof Error ? reason : new Error(String(reason)),
        context: { type: 'unhandledrejection' },
      });
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);

    logger.info('CrashReporter initialized', { component: 'CrashReporter' });

    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
    };
  }, []);

  return null;
}
