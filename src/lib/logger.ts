/**
 * Structured error logging and crash reporting.
 * Logs to terminal (console) in development.
 * Can be extended to external services (Sentry, LogRocket) in production.
 *
 * Governance: LAW 1 — Do not lie. Errors are logged truthfully with full context.
 */

type LogLevel = 'info' | 'warn' | 'error' | 'fatal';

interface LogEntry {
  level: LogLevel;
  message: string;
  component?: string;
  stack?: string;
  context?: Record<string, unknown>;
  timestamp: string;
  url?: string;
  userAgent?: string;
}

const COLORS: Record<LogLevel, string> = {
  info: '\x1b[36m',   // cyan
  warn: '\x1b[33m',   // yellow
  error: '\x1b[31m',  // red
  fatal: '\x1b[35m',  // magenta
};
const RESET = '\x1b[0m';

function formatEntry(entry: LogEntry): string {
  const prefix = `${COLORS[entry.level]}[${entry.level.toUpperCase()}]${RESET}`;
  const comp = entry.component ? ` [${entry.component}]` : '';
  const time = entry.timestamp;
  return `${prefix}${comp} ${time} — ${entry.message}`;
}

function createEntry(level: LogLevel, message: string, opts?: {
  component?: string;
  error?: Error;
  context?: Record<string, unknown>;
}): LogEntry {
  return {
    level,
    message,
    component: opts?.component,
    stack: opts?.error?.stack,
    context: opts?.context,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
  };
}

/** Log to console in structured format */
function log(entry: LogEntry) {
  const formatted = formatEntry(entry);

  switch (entry.level) {
    case 'info':
      console.log(formatted);
      break;
    case 'warn':
      console.warn(formatted);
      break;
    case 'error':
    case 'fatal':
      console.error(formatted);
      if (entry.stack) console.error(entry.stack);
      if (entry.context) console.error('Context:', entry.context);
      break;
  }

  // Store in crash log buffer for retrieval
  if (typeof window !== 'undefined') {
    const crashes: LogEntry[] = (window as unknown as { __CRASH_LOG__: LogEntry[] }).__CRASH_LOG__ || [];
    crashes.push(entry);
    if (crashes.length > 50) crashes.shift(); // ring buffer
    (window as unknown as { __CRASH_LOG__: LogEntry[] }).__CRASH_LOG__ = crashes;
  }
}

/** Public API */
export const logger = {
  info: (msg: string, opts?: { component?: string; context?: Record<string, unknown> }) =>
    log(createEntry('info', msg, opts)),

  warn: (msg: string, opts?: { component?: string; context?: Record<string, unknown> }) =>
    log(createEntry('warn', msg, opts)),

  error: (msg: string, opts?: { component?: string; error?: Error; context?: Record<string, unknown> }) =>
    log(createEntry('error', msg, opts)),

  fatal: (msg: string, opts?: { component?: string; error?: Error; context?: Record<string, unknown> }) =>
    log(createEntry('fatal', msg, opts)),

  /** Dump all buffered crash logs */
  getCrashLog: (): LogEntry[] => {
    if (typeof window === 'undefined') return [];
    return (window as unknown as { __CRASH_LOG__: LogEntry[] }).__CRASH_LOG__ || [];
  },
};
