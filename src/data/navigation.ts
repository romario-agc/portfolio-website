import type { NavItem, SidebarItem, SubNavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Apps & Websites',
    href: '/work',
    dropdown: [
      { label: 'Overview', href: '/work', isOverview: true },
      { label: 'Platext', href: '/work/platext' },
      { label: 'Dialog', href: '/work/dialog' },
      { label: 'Darwin', href: '/work/darwin' },
      { label: 'Preelabs', href: '/work/preelabs' },
      { label: 'Mannequin', href: '/work/mannequin' },
      { label: 'Spacebar', href: '/work/spacebar' },
    ],
  },
  {
    label: 'Planning & Engineering',
    href: '/methodology',
    dropdown: [
      { label: 'Overview', href: '/methodology', isOverview: true },
      { label: 'SAFe® Organizational Layers', href: '/methodology', section: 'safe-layers' },
      { label: 'PI Cadence & Phases', href: '/methodology', section: 'pi-cadence' },
      { label: 'Flow Metrics & Resources', href: '/methodology', section: 'flow-metrics' },
      { label: 'AI Agent Model', href: '/methodology', section: 'ai-model' },
      { label: 'Backlog & Roadmapping', href: '/methodology', section: 'backlog' },
    ],
  },
  { label: 'Experiences & Personas', href: '/experiences' },
  { label: 'Design System', href: '/design-system' },
  { label: 'Studio & Marketing', href: '/studio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resumé', href: '/resume', isGreen: true },
];

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 'hero', label: 'Home', href: '/' },
  { id: 'apps-websites', label: 'Apps & Websites', href: '/' },
  { id: 'planning', label: 'Design Planning & Engineering', href: '/' },
  { id: 'design-system', label: 'Design System', href: '/' },
  { id: 'studio-marketing', label: 'Studio & Marketing', href: '/' },
  { id: 'about', label: 'About', href: '/' },
  { id: 'blog', label: 'Blog', href: '/' },
  { id: 'connect', label: 'Connect', href: '/' },
];

export const SUBNAV_MAP: Record<string, SubNavItem[]> = {
  '/': [
    { label: 'Home', id: 'hero' },
    { label: 'Apps & Websites', id: 'apps-websites' },
    { label: 'Planning', id: 'planning' },
    { label: 'Design System', id: 'design-system' },
    { label: 'Studio', id: 'studio-marketing' },
    { label: 'About', id: 'about' },
    { label: 'Blog', id: 'blog' },
    { label: 'Connect', id: 'connect' },
  ],
  '/methodology': [
    { label: 'Overview', id: 'methodology-overview' },
    { label: 'SAFe® Layers', id: 'safe-layers' },
    { label: 'PI Cadence', id: 'pi-cadence' },
    { label: 'Flow Metrics', id: 'flow-metrics' },
    { label: 'Timeline', id: 'cadence-timeline' },
    { label: 'AI Agents', id: 'ai-model' },
  ],
  '/design-system': [
    { label: 'Overview', id: 'ds-overview' },
    { label: 'Tokens', id: 'ds-tokens' },
    { label: 'Components', id: 'ds-components' },
    { label: 'Atoms', id: 'ds-atoms' },
    { label: 'Molecules', id: 'ds-molecules' },
    { label: 'Organisms', id: 'ds-organisms' },
    { label: 'Patterns', id: 'ds-patterns' },
    { label: 'Grid', id: 'ds-grid' },
    { label: 'Responsive', id: 'ds-responsive' },
    { label: 'A11y', id: 'ds-a11y' },
    { label: 'Adaptive', id: 'ds-adaptive' },
    { label: 'Animations', id: 'ds-animations' },
  ],
  '/studio': [
    { label: 'Overview', id: 'studio-overview' },
    { label: 'Photoshoots', id: 'sm-photos' },
    { label: 'Photo Services', id: 'sm-photo-svc' },
    { label: 'Videography', id: 'sm-video' },
    { label: 'Marketing', id: 'sm-marketing' },
  ],
  '/experiences': [
    { label: 'Overview', id: 'exp-overview' },
    { label: 'Experiences', id: 'exp-tabs' },
    { label: 'Interconnectivity', id: 'exp-interconnect' },
    { label: 'User Journeys', id: 'exp-journeys' },
    { label: 'Personas', id: 'exp-personas' },
  ],
  '/work': [
    { label: 'Overview', id: 'work-overview' },
    { label: 'Platext', id: 'project-platext' },
    { label: 'Dialog', id: 'project-dialog' },
    { label: 'Darwin', id: 'project-darwin' },
    { label: 'Preelabs', id: 'project-preelabs' },
    { label: 'Mannequin', id: 'project-mannequin' },
    { label: 'Spacebar', id: 'project-spacebar' },
  ],
  '/blog': [
    { label: 'Overview', id: 'blog-overview' },
    { label: 'Featured', id: 'blog-featured' },
    { label: 'All Posts', id: 'blog-all' },
  ],
  '/resume': [
    { label: 'Overview', id: 'resume-overview' },
    { label: 'Skills', id: 'resume-skills' },
    { label: 'Experience', id: 'resume-experience' },
    { label: 'Contact', id: 'resume-contact' },
    { label: 'Education', id: 'resume-education' },
  ],
  '/photoshoots': [
    { label: 'Overview', id: 'photo-overview' },
    { label: 'Gallery', id: 'photo-gallery' },
  ],
};

/** Maps route paths to which nav item should be highlighted */
export const ROUTE_TO_NAV: Record<string, string> = {
  '/work': '/work',
  '/methodology': '/methodology',
  '/design-system': '/design-system',
  '/experiences': '/experiences',
  '/studio': '/studio',
  '/photoshoots': '/studio',
  '/blog': '/blog',
  '/resume': '/resume',
  '/about': '/about',
};
