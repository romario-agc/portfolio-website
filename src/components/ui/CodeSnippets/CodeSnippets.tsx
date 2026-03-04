'use client';

import { useState } from 'react';
import styles from './CodeSnippets.module.css';

interface Snippet {
  framework: string;
  filename: string;
  language: string;
  lines: string[];
}

interface CodeSnippetsProps {
  title: string;
  desc: string;
  snippets: Snippet[];
}

export function CodeSnippets({ title, desc, snippets }: CodeSnippetsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const active = snippets[activeTab];
  const previewLines = 8;
  const needsExpand = active.lines.length > previewLines;
  const visibleLines = expanded || !needsExpand ? active.lines : active.lines.slice(0, previewLines);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{title}</span>
          <span className={styles.desc}>{desc}</span>
        </div>
      </div>

      {/* Framework tabs */}
      <div className={styles.tabs}>
        {snippets.map((s, i) => (
          <button
            key={s.framework}
            className={`${styles.tab} ${i === activeTab ? styles.tabActive : ''}`}
            onClick={() => { setActiveTab(i); setExpanded(false); }}
            type="button"
          >
            {s.framework}
          </button>
        ))}
      </div>

      {/* Code block */}
      <div className={styles.codeBlock}>
        <div className={styles.codeHeader}>
          <span className={styles.filename}>{active.filename}</span>
          <span className={styles.lang}>{active.language}</span>
        </div>
        <div className={styles.codeBody}>
          {visibleLines.map((line, i) => (
            <div key={i} className={styles.codeLine}>
              <span className={styles.lineNum}>{i + 1}</span>
              <span className={styles.lineText}>{colorize(line)}</span>
            </div>
          ))}
        </div>
        {needsExpand && (
          <button
            className={styles.expandBtn}
            onClick={() => setExpanded(!expanded)}
            type="button"
          >
            {expanded ? '▲ Collapse' : `▼ Show all ${active.lines.length} lines`}
          </button>
        )}
      </div>
    </div>
  );
}

/** Minimal syntax coloring for display purposes */
function colorize(line: string) {
  // Keywords
  const kwPattern = /\b(import|export|from|const|let|function|return|default|class|extends|template|script|style|define|props|setup|slot|customElements|this|new)\b/g;
  // Strings
  const strPattern = /(['"`])(?:(?!\1).)*\1/g;
  // Comments
  if (line.trimStart().startsWith('//') || line.trimStart().startsWith('<!--')) {
    return <span className={styles.comment}>{line}</span>;
  }
  // Tags
  const tagPattern = /(&lt;|<)\/?[A-Za-z][A-Za-z0-9.-]*/g;

  const parts: Array<{ text: string; type: 'kw' | 'str' | 'tag' | 'plain' }> = [];
  let remaining = line;
  let lastIdx = 0;

  // Simple approach: just mark keywords and strings
  const combined = line.replace(strPattern, (m) => `§STR§${m}§/STR§`);
  const withKw = combined.replace(kwPattern, (m) => `§KW§${m}§/KW§`);

  // Split on markers
  const segs = withKw.split(/(§KW§|§\/KW§|§STR§|§\/STR§)/);
  let mode: 'plain' | 'kw' | 'str' = 'plain';
  const result: JSX.Element[] = [];
  
  segs.forEach((seg, i) => {
    if (seg === '§KW§') { mode = 'kw'; return; }
    if (seg === '§/KW§') { mode = 'plain'; return; }
    if (seg === '§STR§') { mode = 'str'; return; }
    if (seg === '§/STR§') { mode = 'plain'; return; }
    if (!seg) return;
    if (mode === 'kw') {
      result.push(<span key={i} className={styles.keyword}>{seg}</span>);
    } else if (mode === 'str') {
      result.push(<span key={i} className={styles.string}>{seg}</span>);
    } else {
      result.push(<span key={i}>{seg}</span>);
    }
  });

  return <>{result}</>;
}
