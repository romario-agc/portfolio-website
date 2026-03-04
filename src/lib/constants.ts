/** Layout constants — mirrors CSS custom properties in tokens.css */

export const UC_BAR_H = 32;
export const NAV_H = 56;
export const CHROME_H = UC_BAR_H + NAV_H; // 88
export const SUBNAV_H = 36;
export const FULL_CHROME_H = CHROME_H + SUBNAV_H; // 124
export const SB_WIDTH = 180;
export const SB_BREAKPOINT = 1920; // §2: Sidebar hidden below this
export const CONTENT_MAX_W = 1440;

/** Breakpoints — mobile-first, matches styles/grid.css */
export const BP = {
  PHONE: 0,
  TABLET: 480,
  TABLET_LG: 768,
  DESKTOP: 1024,
  DESKTOP_LG: 1440,
  LAPTOP_XL: 1536,
  WIDESCREEN: 1920,
} as const;

/** Z-index layer map — matches DS V35 §6 exactly */
export const Z = {
  bgLayers: 0,
  scrollContainer: 2,
  pageContent: 5,
  mobNav: 149,
  sidebar: 150,
  subnav: 195,
  btt: 198,
  nav: 200,
  ucBar: 201,
  album: 998,
  connect: 999,
  onboarding: 9999,
} as const;

/** Route-to-theme mapping */
export const ROUTE_THEME: Record<string, 'default' | 'planning' | 'design-system'> = {
  '/methodology': 'planning',
  '/design-system': 'design-system',
};

/** Valid standalone page IDs — for 404 checking */
export const VALID_PAGES = new Set([
  '/',
  '/work',
  '/methodology',
  '/design-system',
  '/experiences',
  '/studio',
  '/photoshoots',
  '/blog',
  '/about',
  '/resume',
]);
