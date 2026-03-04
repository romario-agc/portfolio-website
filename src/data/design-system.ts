// ── Data for the Design System page ──
// All arrays extracted from the mockup's designsystem section.
// No inline styles or JSX — pure data.

export const DS_COLORS = [
  { name: 'Cyan', hex: '#00d4ff', var: '--cyan', hasBorder: false },
  { name: 'Purple', hex: '#a855f7', var: '--purple', hasBorder: false },
  { name: 'Background', hex: '#06060e', var: '--bg', hasBorder: true },
  { name: 'Surface', hex: 'rgba(100,200,255,0.04)', var: '--surface', hasBorder: true },
  { name: 'Text', hex: '#eaf4ff', var: '--text', hasBorder: false },
  { name: 'Muted', hex: '#7ea0ba', var: '--muted', hasBorder: false },
  { name: 'Dim', hex: '#7a9db4', var: '--dim', hasBorder: false },
  { name: 'Border', hex: 'rgba(100,200,255,0.12)', var: '--border', hasBorder: true },
];

export const DS_TYPE_SCALE = [
  { font: 'heading', size: 32, weight: 800, label: 'Headings · 800', text: 'Gilroy' },
  { font: 'display', size: 28, weight: 400, label: 'Section titles · 400', text: 'Gilda Display' },
  { font: 'body', size: 18, weight: 400, label: 'Body / UI · 400,600', text: 'Helvetica Neue' },
  { font: 'reading', size: 18, weight: 400, label: 'Long-form text · 400', text: 'Charter', dim: true },
  { font: 'mono', size: 14, weight: 400, label: 'Code · tokens', text: 'monospace', accent: true },
];

export const DS_SPACING = [4, 8, 12, 16, 20, 24, 32, 48];

export const DS_GRADIENTS = ['Primary Gradient', 'Subtle Tint', 'Elevation 1', 'Elevation 2'];

export const DS_BUTTONS = [
  { label: 'Primary', variant: 'primary' },
  { label: 'Secondary', variant: 'secondary' },
  { label: 'Ghost', variant: 'ghost' },
  { label: 'Gradient', variant: 'gradient' },
  { label: 'Disabled', variant: 'disabled' },
];

export const DS_BADGES = [
  { label: 'Active', variant: 'cyan' },
  { label: 'In Progress', variant: 'purple' },
  { label: 'Success', variant: 'success' },
  { label: 'Error', variant: 'error' },
  { label: 'Default', variant: 'default' },
];

export const DS_INPUTS = [
  { label: 'Default', value: 'Placeholder text...', state: 'default' },
  { label: 'Active', value: 'Input value', state: 'active' },
  { label: 'Error', value: 'Invalid input', state: 'error', hint: 'This field is required' },
  { label: 'Disabled', value: 'Disabled field', state: 'disabled' },
];

export const DS_NOTIFICATIONS = [
  { unread: true, icon: '›', title: 'Title of unread notification', desc: 'This is where the notification text is located', selected: false },
  { unread: true, icon: '›', title: 'Title of unread notification', desc: 'This is where the notification text is located', selected: true },
  { unread: false, icon: '›', title: 'Title of read notification', desc: 'This is where the notification text is located', selected: false },
  { unread: true, icon: '▲', title: 'Title of unread notification', desc: 'This is an error or change event', selected: false, isError: true },
];

export const DS_TABS = ['Overview', 'Components', 'Tokens', 'Changelog'];

export const DS_NAV_ITEMS = ['Home', 'Mockups ▾', 'Planning', 'Design System'];

export const DS_SIDEBAR_ITEMS = ['Hero', 'Work', 'About', 'Photoshoots', 'Planning', 'Design System', 'Backlog'];

export const DS_STAT_CARDS = [
  { label: 'Users', val: '15M+', trend: '+12%', up: true },
  { label: 'Sessions', val: '34%', trend: '+8%', up: true },
  { label: 'Bounce Rate', val: '22%', trend: '-5%', up: false },
  { label: 'Components', val: '60+', trend: '+15', up: true },
];

export const DS_PROGRESS_BARS = [
  { percent: 75, variant: 'cyan', label: 'Upload' },
  { percent: 45, variant: 'purple', label: 'Processing' },
  { percent: 100, variant: 'success', label: 'Complete' },
];

export const DS_GRID_SPANS = [
  { span: 12, label: 's12 — Full width' },
  { span: 6, label: 's6' },
  { span: 6, label: 's6' },
  { span: 4, label: 's4' },
  { span: 4, label: 's4' },
  { span: 4, label: 's4' },
  { span: 3, label: 's3' },
  { span: 3, label: 's3' },
  { span: 3, label: 's3' },
  { span: 3, label: 's3' },
];

export const DS_BREAKPOINTS = [
  { bp: 'sm', px: '≤ 640px', cols: '1 col stack' },
  { bp: 'md', px: '641 – 1024px', cols: '6-col max' },
  { bp: 'lg', px: '1025 – 1440px', cols: 'Full 12-col' },
  { bp: 'xl', px: '1441px +', cols: 'Max-width 1440' },
];

export const DS_SPACING_SCALE = [
  { token: '--space-xs', val: '4px' },
  { token: '--space-sm', val: '8px' },
  { token: '--space-md', val: '16px' },
  { token: '--space-lg', val: '24px' },
  { token: '--space-xl', val: '48px' },
  { token: '--space-2xl', val: '64px' },
];

export const DS_DEVICES = [
  { device: 'Desktop', width: '100%', cols: 3 },
  { device: 'Tablet', width: '65%', cols: 2 },
  { device: 'Mobile', width: '35%', cols: 1 },
];

export const DS_FLUID_TYPE = [
  { label: 'Display', size: 'clamp(32px, 5vw, 64px)', demo: 32 },
  { label: 'Heading', size: 'clamp(24px, 3.5vw, 44px)', demo: 24 },
  { label: 'Subhead', size: 'clamp(18px, 2.5vw, 28px)', demo: 18 },
  { label: 'Body', size: 'clamp(14px, 1.5vw, 18px)', demo: 15 },
  { label: 'Caption', size: 'clamp(11px, 1vw, 13px)', demo: 11 },
];

export const DS_CONTRAST = [
  { pair: 'Text on Dark', fg: '#e2e8f0', bg: '#06060e', ratio: '15.7:1', pass: 'AAA' as const },
  { pair: 'Cyan on Dark', fg: '#00d4ff', bg: '#06060e', ratio: '9.2:1', pass: 'AAA' as const },
  { pair: 'Purple on Dark', fg: '#a855f7', bg: '#06060e', ratio: '4.8:1', pass: 'AA' as const },
  { pair: 'Dim on Dark', fg: '#64748b', bg: '#06060e', ratio: '4.5:1', pass: 'AA' as const },
];

export const DS_KEYBOARD = [
  { key: 'Tab', desc: 'Move focus forward through interactive elements' },
  { key: 'Shift+Tab', desc: 'Move focus backward' },
  { key: 'Enter / Space', desc: 'Activate focused button or link' },
  { key: 'Escape', desc: 'Close modals, dropdowns, overlays' },
  { key: 'Arrow Keys', desc: 'Navigate within composite widgets' },
];

export const DS_A11Y_FEATURES = [
  { label: 'Focus Visible', desc: '2px cyan ring on all interactive elements' },
  { label: 'Semantic HTML', desc: 'Proper headings, landmarks, and ARIA labels' },
  { label: 'Screen Reader', desc: 'Alt text, aria-live regions, role attributes' },
  { label: 'Motion Reduced', desc: 'prefers-reduced-motion disables animations' },
];

export const DS_PLATFORMS = [
  {
    platform: 'iOS (HIG)',
    variant: 'cyan' as const,
    items: ['SF Symbols icon set', '44pt minimum touch targets', 'Navigation bar with large titles', 'Sheet presentations (modal)', 'Haptic feedback patterns'],
    radius: '14px',
  },
  {
    platform: 'Material 3',
    variant: 'purple' as const,
    items: ['Material Design icons', '48dp touch targets', 'Top App Bar with scroll behavior', 'Bottom Sheet & Snackbar', 'Dynamic Color from wallpaper'],
    radius: '28px',
  },
  {
    platform: 'Web (DS Tokens)',
    variant: 'text' as const,
    items: ['Lucide icon library', 'Keyboard + pointer targets', 'Sticky nav with scroll spy', 'Overlay modals + toasts', 'CSS custom property theming'],
    radius: '12px',
  },
];

export const DS_DENSITY = [
  { mode: 'Compact', height: 32, fontSize: 12, desc: 'Data-dense tables, toolbars' },
  { mode: 'Default', height: 40, fontSize: 14, desc: 'Standard interactive contexts' },
  { mode: 'Comfortable', height: 52, fontSize: 16, desc: 'Touch-first, mobile interfaces' },
];

export const DS_ANIMATIONS = [
  { label: 'Gesture Navigation', desc: 'Swipe-driven card stack with physics spring dynamics and velocity tracking', tool: 'Origami Studio' },
  { label: 'Parallax Depth Layers', desc: 'Multi-layer scroll with variable velocity, depth-of-field blur, and z-axis transforms', tool: 'Origami Studio' },
  { label: 'Card Open Transition', desc: 'Shared element morph from grid thumbnail to full detail view with spring easing', tool: 'After Effects → Lottie' },
  { label: 'Pull to Refresh', desc: 'Custom elastic indicator with multi-state feedback: idle, pulling, loading, success', tool: 'Origami Studio' },
  { label: 'Tab Bar Morph', desc: 'Icon-to-label transition with spring easing and background pill animation', tool: 'Principle' },
  { label: 'Onboarding Flow', desc: 'Sequenced page reveals with parallax imagery and staggered content entry', tool: 'Origami Studio' },
];

export const DS_MOTION_TOOLS = ['Origami Studio', 'After Effects', 'Principle', 'Lottie', 'Framer Motion'];
