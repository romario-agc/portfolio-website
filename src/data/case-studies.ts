/** Case study extended data — extracted from mockup v35g lines 1279–1390 */

interface CaseStudy {
  overview: string;
  role: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  platext: {
    overview: 'Platext is a license plate spotting community app that transforms a niche hobby into a connected social experience. Users capture plates using OCR-powered recognition, build personal collections, track rare finds, and share sightings with a community feed. The app is built with Flutter for cross-platform deployment and Supabase for real-time backend services.',
    role: 'Founder, Sole Designer & Developer — responsible for product vision, UI/UX design, Flutter development, Supabase architecture, OCR integration, and community governance.',
    challenge: 'How do you build a niche community app that feels polished enough to attract early adopters while maintaining the technical sophistication needed for real-time OCR, geolocation tracking, and social features — all as a solo developer?',
    approach: [
      'Established design system tokens and component library before building features',
      'Implemented Google ML Kit OCR for real-time plate recognition',
      'Built offline-first architecture for reliable field use',
      'Created Supabase backend with real-time subscriptions for community feed',
      'Designed progressive onboarding to reduce time-to-first-sighting',
    ],
    outcomes: [
      'Cross-platform app with consistent experience on iOS and Android',
      'Sub-2-second OCR recognition accuracy in field conditions',
      'Offline-first architecture with seamless sync on reconnect',
      'Community governance model with feedback-driven feature prioritization',
    ],
  },
  dialog: {
    overview: 'Dialog is a modern messaging application built to explore real-time communication patterns in Flutter. It features text messaging, voice note recording and playback, camera capture, WhatsApp-style link previews, and a ChatController architecture for reliable state management across account switches.',
    role: 'Sole Designer & Developer — responsible for UI/UX design, Flutter development, real-time messaging architecture, and camera/voice integration.',
    challenge: 'Building a messaging app requires handling complex state: messages must persist across sessions, voice notes need reliable recording/playback, link previews must load asynchronously, and the entire state tree must cleanly transition when switching accounts.',
    approach: [
      'Transitioned from inline state management to ChatController pattern',
      'Implemented Repository Pattern with BehaviorSubject for auth transitions',
      'Built comprehensive camera capture with preview and editing',
      'Created voice note system with waveform visualization',
      'Developed link preview parser with Open Graph metadata extraction',
    ],
    outcomes: [
      'Zero-state-leak architecture across account switches',
      'Comprehensive camera system matching native app quality',
      'Voice note playback with visual waveform feedback',
      'Link previews rendering within 500ms of URL detection',
    ],
  },
  darwin: {
    overview: "Darwin began as a personal lab — a single platform to develop and refine my ability to implement any design I conceived from the ground up. Built as a monolithic dashboard, it aggregates Reddit data and presents it through custom-designed visualizations. The name references evolution: each iteration pushed my understanding of full-stack product thinking further.",
    role: 'Sole Designer & Developer — responsible for product strategy, UI/UX design, front-end development, server architecture, and data pipeline.',
    challenge: 'How do you build a platform that serves as both a learning environment and a functional product? The challenge was maintaining professional design standards while experimenting with unfamiliar technologies across the entire stack.',
    approach: [
      'Established design system tokens before writing any application code',
      'Built component library in React with reusable patterns',
      'Implemented server-side data aggregation with Node.js and MongoDB',
      'Created custom data visualization components for Reddit analytics',
      'Iterated through 3 major design revisions based on self-critique',
    ],
    outcomes: [
      'Full-stack proficiency across React, Angular, Ember, Node.js, and MongoDB',
      'Reusable component architecture that influenced later professional work',
      'Deep understanding of data pipeline design and API integration',
      'Portfolio piece demonstrating end-to-end product ownership',
    ],
  },
  preelabs: {
    overview: 'Preelabs is a property management and real estate platform designed to help owners streamline operations, manage properties, and reduce overhead costs. The project demanded a mobile-first approach with complex information architecture across property listings, tenant management, maintenance workflows, and financial reporting.',
    role: 'Lead UI/UX Designer — owned the full design lifecycle from user research through high-fidelity prototyping and developer handoff.',
    challenge: "Property management involves deeply nested workflows — a single maintenance request touches tenants, owners, vendors, and financial systems. The challenge was making this complexity accessible on a 5-inch screen.",
    approach: [
      'Conducted contextual inquiry interviews with 12 property managers',
      'Built user journey maps for 6 primary workflows',
      'Designed progressive disclosure patterns to manage information density',
      'Created a component system in Sketch with InVision prototyping',
      'Ran 3 rounds of usability testing with iterative refinement',
    ],
    outcomes: [
      '40% reduction in task completion time for maintenance requests',
      'Consistent 4.2/5 usability score across test participants',
      'Component library with 60+ reusable mobile patterns',
      'Design documentation adopted as template for future projects',
    ],
  },
  mannequin: {
    overview: "Mannequin is an open-source Drupal theming tool built at Last Call Media. It bridges the gap between design and development by letting designers create and preview component variations in isolation — without needing a full Drupal backend running. Think of it as a Storybook equivalent for the Drupal ecosystem.",
    role: 'Lead Designer & Front-End Developer — designed the product interface and built the React-based component preview system.',
    challenge: "Drupal's theming layer is tightly coupled to its backend. Designers couldn't see their components without spinning up databases, content types, and test data. This created a slow feedback loop that frustrated both designers and developers.",
    approach: [
      'Researched existing component development workflows (Storybook, Pattern Lab)',
      'Designed a standalone preview UI that renders Twig templates with mock data',
      'Built the front-end layer in React with hot-reloading for instant feedback',
      'Created GitHub Actions CI pipeline for automated testing',
      'Wrote comprehensive documentation for open-source contributors',
    ],
    outcomes: [
      'Adopted by 3 agency teams within 6 months of launch',
      'Reduced theming feedback loop from hours to seconds',
      '15+ contributors on the open-source repository',
      'Featured in Drupal community presentations',
    ],
  },
  spacebar: {
    overview: 'Spacebar is a social venue and event discovery platform designed for the nightlife industry. Users discover events, connect with venues, and navigate social experiences. The design challenge centered on creating an interface that functions in low-light environments with one-handed use.',
    role: 'UI/UX Designer — designed the complete mobile experience including discovery, booking, navigation, and social features.',
    challenge: 'Nightlife apps compete with distraction. Users are in dark, noisy environments with divided attention. Every interaction needs to be fast, accessible in low light, and achievable with one thumb.',
    approach: [
      'Studied competitor apps (Dice, Resident Advisor, Eventbrite) for UX patterns',
      'Designed dark-mode-first interface with high contrast ratios for low-light readability',
      'Created thumb-zone-optimized navigation with bottom-anchored primary actions',
      'Built interactive prototype for in-venue usability testing',
      'Refined typography scale for readability at arm\'s length',
    ],
    outcomes: [
      'Dark-mode interface with WCAG AAA contrast ratios',
      'One-handed interaction model with 90%+ primary actions in thumb zone',
      'Prototype tested in 3 live venue environments',
      'Design system with venue-specific theming capabilities',
    ],
  },
};
