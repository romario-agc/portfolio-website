import type { PhotoAlbum } from '@/types';

export const PHOTO_CATEGORIES = ['all', 'Portrait', 'BTS', 'Commercial', 'Music', 'Events', 'Editorial'] as const;

export const PHOTOS: PhotoAlbum[] = [
  {
    gradient: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)',
    label: 'Studio Portrait',
    category: 'Portrait',
    items: [
      { type: 'photo', gradient: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)', caption: 'Key light setup — Rembrandt pattern' },
      { type: 'photo', gradient: 'linear-gradient(150deg,#16213e,#1a1a2e,#0f3460)', caption: 'Profile silhouette against seamless' },
      { type: 'video', gradient: 'linear-gradient(140deg,#0f3460,#1a1a2e,#16213e)', caption: 'Behind the scenes — lighting walkthrough', duration: '2:34' },
      { type: 'gif', gradient: 'linear-gradient(125deg,#16213e,#0f3460,#1a1a2e)', caption: 'Continuous light sweep animation' },
    ],
  },
  {
    gradient: 'linear-gradient(145deg,#0d1b2a,#1b263b,#415a77)',
    label: 'Behind the Scenes',
    category: 'BTS',
    items: [
      { type: 'video', gradient: 'linear-gradient(145deg,#0d1b2a,#1b263b,#415a77)', caption: 'Full BTS reel — studio day', duration: '4:12' },
      { type: 'photo', gradient: 'linear-gradient(160deg,#1b263b,#0d1b2a,#415a77)', caption: 'Equipment setup — C-stands and flags' },
      { type: 'photo', gradient: 'linear-gradient(130deg,#415a77,#1b263b,#0d1b2a)', caption: 'Team coordination between takes' },
    ],
  },
  {
    gradient: 'linear-gradient(160deg,#2d1b4e,#1a1a2e,#462255)',
    label: 'Product Campaign',
    category: 'Commercial',
    items: [
      { type: 'photo', gradient: 'linear-gradient(160deg,#2d1b4e,#1a1a2e,#462255)', caption: 'Hero product shot — diffused overhead' },
      { type: 'photo', gradient: 'linear-gradient(145deg,#1a1a2e,#462255,#2d1b4e)', caption: 'Detail macro — texture and finish' },
      { type: 'gif', gradient: 'linear-gradient(170deg,#462255,#2d1b4e,#1a1a2e)', caption: '360° turntable rotation' },
      { type: 'photo', gradient: 'linear-gradient(135deg,#2d1b4e,#462255,#1a1a2e)', caption: 'Lifestyle context — product in use' },
      { type: 'video', gradient: 'linear-gradient(155deg,#1a1a2e,#2d1b4e,#462255)', caption: 'Campaign teaser — 15s cut', duration: '0:15' },
    ],
  },
  {
    gradient: 'linear-gradient(120deg,#1b2838,#0e4429,#1a3c40)',
    label: 'Music Video Still',
    category: 'Music',
    items: [
      { type: 'photo', gradient: 'linear-gradient(120deg,#1b2838,#0e4429,#1a3c40)', caption: 'Wide establishing shot — warehouse set' },
      { type: 'video', gradient: 'linear-gradient(135deg,#0e4429,#1b2838,#1a3c40)', caption: 'Performance take — final cut excerpt', duration: '1:48' },
      { type: 'gif', gradient: 'linear-gradient(110deg,#1a3c40,#1b2838,#0e4429)', caption: 'Slow-motion confetti burst' },
      { type: 'photo', gradient: 'linear-gradient(140deg,#1b2838,#1a3c40,#0e4429)', caption: 'Close-up — artist portrait between takes' },
    ],
  },
  {
    gradient: 'linear-gradient(140deg,#3d1c02,#2d1810,#1a1a2e)',
    label: 'Event Coverage',
    category: 'Events',
    items: [
      { type: 'photo', gradient: 'linear-gradient(140deg,#3d1c02,#2d1810,#1a1a2e)', caption: 'Keynote speaker — stage wide' },
      { type: 'photo', gradient: 'linear-gradient(155deg,#2d1810,#1a1a2e,#3d1c02)', caption: 'Crowd reaction shot' },
      { type: 'video', gradient: 'linear-gradient(130deg,#1a1a2e,#3d1c02,#2d1810)', caption: 'Highlight reel — 60s recap', duration: '1:00' },
    ],
  },
  {
    gradient: 'linear-gradient(130deg,#1a1a2e,#2a1a3e,#0f3460)',
    label: 'Brand Editorial',
    category: 'Editorial',
    items: [
      { type: 'photo', gradient: 'linear-gradient(130deg,#1a1a2e,#2a1a3e,#0f3460)', caption: 'Cover layout — full bleed portrait' },
      { type: 'photo', gradient: 'linear-gradient(145deg,#2a1a3e,#0f3460,#1a1a2e)', caption: 'Spread detail — typography overlay' },
      { type: 'photo', gradient: 'linear-gradient(120deg,#0f3460,#1a1a2e,#2a1a3e)', caption: 'Alternate colorway — warm grade' },
      { type: 'gif', gradient: 'linear-gradient(150deg,#1a1a2e,#0f3460,#2a1a3e)', caption: 'Parallax scroll mockup' },
    ],
  },
  {
    gradient: 'linear-gradient(155deg,#1a2e1a,#0e3420,#1a3c2a)',
    label: 'Live Performance',
    category: 'Events',
    items: [
      { type: 'video', gradient: 'linear-gradient(155deg,#1a2e1a,#0e3420,#1a3c2a)', caption: 'Full set recording — 3-camera edit', duration: '6:22' },
      { type: 'photo', gradient: 'linear-gradient(140deg,#0e3420,#1a3c2a,#1a2e1a)', caption: 'Stage lighting — haze and spot' },
      { type: 'gif', gradient: 'linear-gradient(165deg,#1a3c2a,#1a2e1a,#0e3420)', caption: 'Strobe sequence — 8fps composite' },
    ],
  },
  {
    gradient: 'linear-gradient(125deg,#2e1a1a,#3e1620,#461a22)',
    label: 'Fashion Detail',
    category: 'Commercial',
    items: [
      { type: 'photo', gradient: 'linear-gradient(125deg,#2e1a1a,#3e1620,#461a22)', caption: 'Fabric texture — natural light' },
      { type: 'photo', gradient: 'linear-gradient(140deg,#3e1620,#461a22,#2e1a1a)', caption: 'Garment on model — three-quarter' },
      { type: 'photo', gradient: 'linear-gradient(110deg,#461a22,#2e1a1a,#3e1620)', caption: 'Flat lay — accessories arrangement' },
      { type: 'video', gradient: 'linear-gradient(135deg,#2e1a1a,#461a22,#3e1620)', caption: 'Runway walk — slow motion', duration: '0:28' },
      { type: 'gif', gradient: 'linear-gradient(150deg,#3e1620,#2e1a1a,#461a22)', caption: 'Dress movement loop' },
    ],
  },
];
