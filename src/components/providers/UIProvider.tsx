'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Overlay, Theme } from '@/types';

interface UIState {
  overlay: Overlay;
  openOverlay: (o: Overlay) => void;
  closeOverlay: () => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const UIContext = createContext<UIState | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [theme, setTheme] = useState<Theme>('default');

  const openOverlay = useCallback((o: Overlay) => setOverlay(o), []);
  const closeOverlay = useCallback(() => setOverlay(null), []);

  return (
    <UIContext.Provider value={{ overlay, openOverlay, closeOverlay, theme, setTheme }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within UIProvider');
  return ctx;
}
