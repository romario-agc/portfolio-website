// Experiences page data — extracted from mockup v35g lines 2645–2874

export const EXP_TABS = ['explore', 'onboarding', 'performance', 'checkout'] as const;
export type ExpTab = typeof EXP_TABS[number];

interface Experience { name: string; color: string; patterns: string[]; }
interface TabData { desc: string; experiences: Experience[]; }

export const EXP_DATA: Record<ExpTab, TabData> = {
  explore: {
    desc: 'The initial discovery phase where users encounter the product for the first time. These are broad-range interactions users engage in that a designer can use to solve problems with intention.',
    experiences: [
      { name: 'First Impression', color: 'var(--cyan)', patterns: ['Hero Layout', 'Value Proposition', 'Social Proof', 'Feature Preview', 'CTA Hierarchy'] },
      { name: 'Content Discovery', color: 'var(--purple)', patterns: ['Search & Filter', 'Category Navigation', 'Content Cards', 'Recommendation Engine', 'Infinite Scroll'] },
      { name: 'Trust Building', color: 'var(--success)', patterns: ['Testimonials', 'Case Studies', 'Credentials Display', 'Transparent Pricing', 'Security Indicators'] },
    ],
  },
  onboarding: {
    desc: "The guided journey from new user to active user. Progressive disclosure of features matched to the user's growing familiarity with the product.",
    experiences: [
      { name: 'Account Setup', color: 'var(--cyan)', patterns: ['Progressive Forms', 'OAuth Integration', 'Profile Builder', 'Preference Selection', 'Email Verification'] },
      { name: 'Product Tour', color: 'var(--purple)', patterns: ['Tooltip Walkthrough', 'Interactive Demo', 'Checklist Progress', 'Contextual Help', 'Empty States'] },
      { name: 'First Value', color: 'var(--success)', patterns: ['Quick Win Template', 'Sample Data', 'Guided Creation', 'Success Celebration', 'Next Steps Prompt'] },
    ],
  },
  performance: {
    desc: 'The core usage patterns where users accomplish their primary goals. These interactions must be optimized for speed, clarity, and reliability.',
    experiences: [
      { name: 'Task Execution', color: 'var(--cyan)', patterns: ['Inline Editing', 'Keyboard Shortcuts', 'Batch Actions', 'Auto-Save', 'Undo/Redo'] },
      { name: 'Data Comprehension', color: 'var(--purple)', patterns: ['Dashboard Layout', 'Data Visualization', 'Comparison Views', 'Export Functions', 'Real-Time Updates'] },
      { name: 'Collaboration', color: 'var(--success)', patterns: ['Shared Workspaces', 'Comment Threads', 'Mentions & Notifications', 'Version History', 'Permission Layers'] },
    ],
  },
  checkout: {
    desc: 'The conversion and commitment phase. Reducing friction while maintaining trust through transparent processes and clear confirmation.',
    experiences: [
      { name: 'Decision Support', color: 'var(--cyan)', patterns: ['Plan Comparison', 'Feature Matrix', 'ROI Calculator', 'Free Trial Flow', 'FAQ Accordion'] },
      { name: 'Transaction', color: 'var(--purple)', patterns: ['Step Indicator', 'Form Validation', 'Payment Security', 'Address Auto-Complete', 'Order Summary'] },
      { name: 'Confirmation', color: 'var(--success)', patterns: ['Success State', 'Receipt/Invoice', 'Next Steps', 'Share/Refer', 'Support Access'] },
    ],
  },
};

export const JOURNEY_STAGES = ['Awareness', 'Consideration', 'Decision', 'Onboarding', 'Retention'] as const;
export const JOURNEY_COLORS = ['var(--cyan)', 'var(--purple)', '#22c55e', 'var(--cyan)', 'var(--purple)'];
export const JOURNEY_ACTIONS = ['Discovers brand via search, social, or referral', 'Explores features, reads reviews, compares alternatives', 'Signs up for trial, evaluates pricing, requests demo', 'Completes onboarding flow, configures settings', 'Uses core features daily, explores advanced tools'];
export const JOURNEY_TOUCHPOINTS = ['Landing page, Blog, Social ads', 'Pricing page, Docs, Case studies', 'Checkout, Demo call, Free trial', 'Welcome email, Setup wizard, Tooltips', 'Dashboard, Support, Community'];
export const JOURNEY_EMOTIONS = [{ emoji: '🤔', text: 'Curious but skeptical' }, { emoji: '⚖️', text: 'Weighing options carefully' }, { emoji: '😤', text: 'Anxious about commitment' }, { emoji: '🎯', text: 'Hopeful, slightly overwhelmed' }, { emoji: '😊', text: 'Confident and productive' }];
export const JOURNEY_PAIN_POINTS = ['Value prop unclear from hero', 'Feature comparison is tedious', 'Pricing tiers are confusing', 'Too many steps before first value', 'Feature discovery is accidental'];
export const DESIGN_OPPORTUNITIES = [{ opp: 'Streamline onboarding to 3 steps max — deliver first value in under 2 minutes', stage: 'Onboarding' }, { opp: 'Add interactive comparison tool replacing static feature tables', stage: 'Consideration' }, { opp: 'Implement contextual feature discovery via usage-triggered tooltips', stage: 'Retention' }];

export const PERSONAS = [
  { name: 'Sarah Chen', role: 'Design Manager', age: 34, goal: 'Streamline team workflows and maintain design consistency across products', pain: 'Fragmented tools, unclear design-to-dev handoff, no single source of truth', tech: 'Expert', color: 'var(--cyan)' },
  { name: 'Marcus Williams', role: 'Junior Developer', age: 26, goal: 'Quickly implement designs without ambiguity or guesswork', pain: 'Inconsistent component specs, missing edge cases, outdated documentation', tech: 'Intermediate', color: 'var(--purple)' },
  { name: 'Emily Torres', role: 'Product Owner', age: 41, goal: 'Make informed prioritization decisions with design impact data', pain: 'No visibility into design backlog, unclear ROI of design investments', tech: 'Basic', color: 'var(--success)' },
];
