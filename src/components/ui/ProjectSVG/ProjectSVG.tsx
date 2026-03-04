/** Project wireframe SVG illustrations — DS V35 mockup lines 62–210.
 *  Each renders a schematic representing the project's UI.
 *  Colors use CSS vars so they adapt to theme automatically. */

interface IllustrationProps {
  color: string;
  className?: string;
}

const base: React.CSSProperties = { width: '100%', borderRadius: 14, border: '1px solid var(--border)', background: 'var(--surface)' };

export function PlatextSVG({ color: c }: IllustrationProps) {
  return (
    <svg viewBox="0 0 380 280" fill="none" style={base}>
      <text x="190" y="32" fill="var(--dim)" fontFamily="sans-serif" fontSize="7" letterSpacing="3" textAnchor="middle" opacity="0.2">PLATEXT</text>
      <rect x="130" y="45" width="120" height="200" rx="16" fill="var(--bg-alt)" stroke="var(--border)" strokeWidth="0.7"/>
      <rect x="140" y="58" width="100" height="14" rx="4" fill={c} opacity="0.08"/>
      <rect x="145" y="62" width="50" height="6" rx="3" fill={c} opacity="0.2"/>
      <rect x="140" y="80" width="100" height="60" rx="6" fill="var(--surface)" stroke="var(--border)" strokeWidth="0.5"/>
      <text x="190" y="115" fill="var(--dim)" fontFamily="sans-serif" fontSize="8" textAnchor="middle" opacity="0.3">📷 OCR</text>
      <rect x="140" y="150" width="100" height="20" rx="4" fill={c} opacity="0.06" stroke={c} strokeWidth="0.3" strokeOpacity="0.15"/>
      <rect x="140" y="178" width="46" height="16" rx="4" fill="var(--surface)" stroke="var(--border)" strokeWidth="0.5"/>
      <rect x="194" y="178" width="46" height="16" rx="4" fill="var(--surface)" stroke="var(--border)" strokeWidth="0.5"/>
      <rect x="140" y="200" width="100" height="26" rx="6" fill={c} opacity="0.06"/>
      <circle cx="165" cy="213" r="6" fill={c} opacity="0.12" stroke={c} strokeWidth="0.4"/>
      <circle cx="190" cy="213" r="6" fill={c} opacity="0.12" stroke={c} strokeWidth="0.4"/>
      <circle cx="215" cy="213" r="6" fill={c} opacity="0.12" stroke={c} strokeWidth="0.4"/>
    </svg>
  );
}

export function DialogSVG({ color: c }: IllustrationProps) {
  return (
    <svg viewBox="0 0 380 280" fill="none" style={base}>
      <text x="190" y="32" fill="var(--dim)" fontFamily="sans-serif" fontSize="7" letterSpacing="3" textAnchor="middle" opacity="0.2">DIALOG</text>
      <rect x="130" y="45" width="120" height="200" rx="16" fill="var(--bg-alt)" stroke="var(--border)" strokeWidth="0.7"/>
      <rect x="140" y="58" width="100" height="12" rx="3" fill={c} opacity="0.08"/>
      <rect x="145" y="62" width="40" height="4" rx="2" fill={c} opacity="0.2"/>
      <rect x="140" y="78" width="65" height="28" rx="8" fill={c} opacity="0.1" stroke={c} strokeWidth="0.3" strokeOpacity="0.2"/>
      <rect x="145" y="84" width="50" height="4" rx="2" fill="var(--dim)" opacity="0.15"/>
      <rect x="145" y="92" width="35" height="4" rx="2" fill="var(--dim)" opacity="0.1"/>
      <rect x="175" y="114" width="65" height="28" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="0.5"/>
      <rect x="180" y="120" width="50" height="4" rx="2" fill="var(--dim)" opacity="0.15"/>
      <rect x="180" y="128" width="30" height="4" rx="2" fill="var(--dim)" opacity="0.1"/>
      <rect x="140" y="150" width="65" height="40" rx="8" fill={c} opacity="0.08" stroke={c} strokeWidth="0.3" strokeOpacity="0.15"/>
      <rect x="145" y="155" width="55" height="30" rx="4" fill="var(--surface)" stroke="var(--border)" strokeWidth="0.4"/>
      <text x="172" y="174" fill="var(--dim)" fontFamily="sans-serif" fontSize="7" textAnchor="middle" opacity="0.3">🔗 Preview</text>
      <rect x="140" y="210" width="80" height="18" rx="9" fill="var(--surface)" stroke="var(--border)" strokeWidth="0.5"/>
      <circle cx="230" cy="219" r="9" fill={c} opacity="0.15" stroke={c} strokeWidth="0.4"/>
    </svg>
  );
}

export function DarwinSVG({ color: c }: IllustrationProps) {
  return (
    <svg viewBox="0 0 380 280" fill="none" style={base}>
      <text x="190" y="32" fill="var(--dim)" fontFamily="sans-serif" fontSize="7" letterSpacing="3" textAnchor="middle" opacity="0.2">DARWIN</text>
      <rect x="40" y="55" width="300" height="24" rx="4" fill={c} opacity="0.06" stroke="var(--border)" strokeWidth="0.5"/>
      <rect x="50" y="62" width="60" height="10" rx="3" fill={c} opacity="0.15"/>
      <rect x="120" y="64" width="40" height="6" rx="3" fill="var(--dim)" opacity="0.1"/>
      <rect x="170" y="64" width="40" height="6" rx="3" fill="var(--dim)" opacity="0.1"/>
      <rect x="40" y="100" width="140" height="130" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="0.7"/>
      <rect x="52" y="112" width="80" height="8" rx="2" fill="var(--dim)" opacity="0.12"/>
      <rect x="52" y="128" width="116" height="5" rx="1.5" fill="var(--dim)" opacity="0.08"/>
      <rect x="52" y="138" width="100" height="5" rx="1.5" fill="var(--dim)" opacity="0.08"/>
      <rect x="52" y="155" width="50" height="14" rx="7" fill={c} opacity="0.2"/>
      <rect x="200" y="100" width="140" height="60" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="0.7"/>
      <circle cx="270" cy="130" r="16" fill={c} opacity="0.06" stroke={c} strokeWidth="0.5" strokeOpacity="0.15"/>
      <rect x="200" y="175" width="140" height="55" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="0.7"/>
      <rect x="212" y="188" width="60" height="5" rx="1.5" fill="var(--dim)" opacity="0.1"/>
      <rect x="212" y="198" width="80" height="4" rx="1.5" fill="var(--dim)" opacity="0.06"/>
    </svg>
  );
}

export function PreelabsSVG({ color: c }: IllustrationProps) {
  return (
    <svg viewBox="0 0 380 280" fill="none" style={base}>
      <text x="190" y="32" fill="var(--dim)" fontFamily="sans-serif" fontSize="7" letterSpacing="3" textAnchor="middle" opacity="0.2">PREELABS</text>
      <rect x="120" y="45" width="140" height="210" rx="16" fill="none" stroke="var(--border)" strokeWidth="1"/>
      <rect x="120" y="45" width="140" height="28" rx="16" fill={c} opacity="0.04"/>
      <rect x="155" y="55" width="70" height="8" rx="4" fill={c} opacity="0.12"/>
      <rect x="132" y="86" width="116" height="50" rx="6" fill="var(--surface)"/>
      <rect x="132" y="148" width="56" height="6" rx="2" fill="var(--dim)" opacity="0.12"/>
      <rect x="132" y="160" width="90" height="4" rx="1.5" fill="var(--dim)" opacity="0.08"/>
      <rect x="132" y="190" width="50" height="14" rx="7" fill={c} opacity="0.15"/>
      <circle cx="50" cy="140" r="24" fill={c} opacity="0.03" stroke={c} strokeWidth="0.5" strokeOpacity="0.1"/>
      <circle cx="330" cy="160" r="20" fill={c} opacity="0.03" stroke={c} strokeWidth="0.5" strokeOpacity="0.08"/>
    </svg>
  );
}

export function MannequinSVG({ color: c }: IllustrationProps) {
  return (
    <svg viewBox="0 0 380 280" fill="none" style={base}>
      <text x="190" y="32" fill="var(--dim)" fontFamily="sans-serif" fontSize="7" letterSpacing="3" textAnchor="middle" opacity="0.2">MANNEQUIN</text>
      <rect x="30" y="50" width="155" height="200" rx="10" fill="none" stroke="var(--border)" strokeWidth="0.7"/>
      <rect x="42" y="62" width="60" height="8" rx="2" fill={c} opacity="0.15"/>
      <rect x="42" y="80" width="130" height="60" rx="6" fill="var(--surface)"/>
      <rect x="42" y="152" width="80" height="5" rx="1.5" fill="var(--dim)" opacity="0.1"/>
      <rect x="42" y="162" width="110" height="4" rx="1.5" fill="var(--dim)" opacity="0.07"/>
      <rect x="42" y="195" width="44" height="12" rx="6" fill={c} opacity="0.18"/>
      <rect x="92" y="195" width="44" height="12" rx="6" fill="none" stroke="var(--border)" strokeWidth="0.7"/>
      <rect x="210" y="70" width="140" height="180" rx="8" fill="none" stroke="var(--border)" strokeWidth="0.7" strokeDasharray="4 4"/>
      <rect x="222" y="82" width="50" height="5" rx="1.5" fill={c} opacity="0.12"/>
      <rect x="222" y="98" width="116" height="48" rx="4" fill="var(--surface)"/>
      <rect x="222" y="158" width="60" height="5" rx="1.5" fill="var(--dim)" opacity="0.1"/>
      <rect x="222" y="195" width="28" height="28" rx="6" fill={c} opacity="0.05" stroke={c} strokeWidth="0.5" strokeOpacity="0.12"/>
      <rect x="258" y="195" width="28" height="28" rx="6" fill={c} opacity="0.05" stroke={c} strokeWidth="0.5" strokeOpacity="0.12"/>
      <rect x="294" y="195" width="28" height="28" rx="6" fill={c} opacity="0.05" stroke={c} strokeWidth="0.5" strokeOpacity="0.12"/>
    </svg>
  );
}

export function SpacebarSVG({ color: c }: IllustrationProps) {
  return (
    <svg viewBox="0 0 380 280" fill="none" style={base}>
      <text x="190" y="32" fill="var(--dim)" fontFamily="sans-serif" fontSize="7" letterSpacing="3" textAnchor="middle" opacity="0.2">SPACEBAR</text>
      <rect x="120" y="48" width="140" height="8" rx="4" fill={c} opacity="0.5"/>
      <rect x="145" y="64" width="90" height="5" rx="2.5" fill={c} opacity="0.2"/>
      <text x="45" y="115" fill="var(--dim)" fontFamily="'Gilda Display',serif" fontSize="12" opacity="0.5">Aa</text>
      <rect x="75" y="106" width="80" height="5" rx="2.5" fill="var(--dim)" opacity="0.15"/>
      <rect x="75" y="116" width="55" height="3" rx="1.5" fill="var(--dim)" opacity="0.1"/>
      <circle cx="45" cy="170" r="14" fill={c} opacity="0.35"/>
      <circle cx="80" cy="170" r="14" fill="var(--cyan)" opacity="0.25"/>
      <circle cx="115" cy="170" r="14" fill="var(--bg)" stroke="var(--border)" strokeWidth="1"/>
      <rect x="210" y="95" width="130" height="155" rx="8" fill="none" stroke="var(--border)" strokeWidth="0.7"/>
      <rect x="222" y="107" width="106" height="10" rx="3" fill={c} opacity="0.1"/>
      <rect x="222" y="125" width="106" height="44" rx="4" fill="var(--surface)"/>
      <rect x="222" y="180" width="40" height="5" rx="2.5" fill="var(--dim)" opacity="0.12"/>
      <rect x="222" y="210" width="36" height="12" rx="6" fill={c} opacity="0.2"/>
    </svg>
  );
}

/** Lookup map for dynamic rendering by slug */
export const PROJECT_SVGS: Record<string, React.FC<IllustrationProps>> = {
  platext: PlatextSVG,
  dialog: DialogSVG,
  darwin: DarwinSVG,
  preelabs: PreelabsSVG,
  mannequin: MannequinSVG,
  spacebar: SpacebarSVG,
};
