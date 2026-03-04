import type { Project } from '@/types';

export const PROJECT_IDS = [
  'platext', 'dialog', 'darwin', 'preelabs', 'mannequin', 'spacebar',
] as const;

export type ProjectSlug = (typeof PROJECT_IDS)[number];

export const PROJECTS: Record<string, Project> = {
  platext: {
    slug: 'platext',
    tag: 'mobile app — flutter + supabase',
    name: 'Platext',
    tools: ['Flutter', 'Dart', 'Supabase', 'Google ML Kit'],
    desc: 'A license plate spotting community app. Capture, catalog, and share plate sightings with OCR recognition, real-time feeds, and social features. Built with Flutter and Supabase for cross-platform performance.',
    color: 'var(--cyan)',
    url: 'https://platextapp.com/',
  },
  dialog: {
    slug: 'dialog',
    tag: 'messaging app — flutter',
    name: 'Dialog',
    tools: ['Flutter', 'Dart', 'Supabase', 'WebSocket'],
    desc: 'A modern messaging application with real-time chat, voice notes, camera capture, and WhatsApp-style link previews. Built with Flutter using ChatController architecture for reliable state management.',
    color: '#22c55e',
  },
  darwin: {
    slug: 'darwin',
    tag: 'ui design + front end development',
    name: 'Darwin',
    tools: ['React', 'AngularJS', 'EmberJS', 'MongoDB'],
    desc: 'A platform to develop and refine my ability to make use of any design I made from the ground up. Designed as a single website where I manage the server, data, and front end to explore full-stack product thinking.',
    color: 'var(--cyan)',
  },
  preelabs: {
    slug: 'preelabs',
    tag: 'mobile app ui design',
    name: 'Preelabs',
    tools: ['Sketch', 'InVision', 'XHTML', 'CSS'],
    desc: 'Property management and real estate platform helping owners streamline operations, manage properties, and reduce costs. End-to-end mobile experience design from research through high-fidelity prototyping.',
    color: 'var(--purple)',
  },
  mannequin: {
    slug: 'mannequin',
    tag: 'open source drupal theming tool',
    name: 'Mannequin',
    tools: ['React', 'Twig', 'Drupal', 'GitHub Actions'],
    desc: 'Bridging design and development by emulating complex creation in a tailored environment. A component-based Drupal theming tool built at Last Call Media — lead designer and front end developer on this open source project.',
    color: 'var(--cyan)',
    url: 'https://mannequin.io/',
  },
  spacebar: {
    slug: 'spacebar',
    tag: 'ui design + branding',
    name: 'Spacebar',
    tools: ['Sketch', 'InVision', 'Flinto', 'SCSS', 'Bootstrap'],
    desc: 'A comprehensive branding and UI design project encompassing visual identity, marketing collateral, and a responsive web presence. Every touchpoint designed to communicate a unified brand voice and elevate the user experience.',
    color: 'var(--purple)',
  },
};
