import type { Experience, Education } from '@/types';

export const SKILLS_STRATEGY = [
  'Roadmapping', 'User Testing', 'Backlogs', 'Agile', 'UI/UX',
  'JIRA & Confluence', 'User Research', 'Figma', 'Prototyping',
  'Design Systems', 'Strategy', 'SAFe® POPM',
];

export const SKILLS_TECHNICAL = [
  'HTML', 'CSS', 'JavaScript', 'AI Tools', 'Node.JS', 'Angular.JS',
  'MongoDB', 'MixPanel', 'Illustrator', 'InDesign', 'Photoshop',
  'Animation', 'Video Editing', 'Photography', 'Market Analysis',
];

export const EDUCATION: Education[] = [
  {
    years: '2012 – 2014',
    degree: 'Computer Science',
    school: 'University of the West Indies — Mona, Jamaica',
  },
  {
    years: '2010 – 2012',
    degree: 'Pure Science and Computer Science',
    school: "Wolmer's Boys 6th Form — Kingston, Jamaica",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Independent Consultant',
    location: 'Remote (Local & International)',
    roles: [
      {
        title: 'Agile Software Development & AI Integration',
        period: 'May 2023 – Present',
        bullets: [
          'Owned features end-to-end from epic decomposition through iOS and web deployment — defining acceptance criteria, refining backlogs, and shipping across Flutter/Supabase, React, Python, and Node.js stacks',
          'Delivered an on-device OCR enabler with a custom Temporal Consensus Voting algorithm — multi-frame aggregation, confusion matrices, and motion-aware scanning for in-vehicle use cases',
          'Built architectural runway through a platform-adaptive design system (iOS HIG + Material 3 + Atomic Design tokens), reusable component libraries, and offline-first patterns with database-level filtering',
          'Drove a dual-scoring Trust & Reputation feature (SQL + Dart) from spike through hardening — evaluating sighting credibility and user reliability via weighted verification signals',
          'Established a governance framework enforcing built-in quality: root-cause-before-fix, zero deferred debt without consent, mandatory regression audits, and a living Definition of Done across concurrent products',
          'Operated a peer-review workflow with AI development agents across 40+ inspect-and-adapt sessions — reviewing implementations against acceptance criteria, enforcing architectural standards, and maintaining sustainable velocity as a single-contributor team through structured handoff documentation and decision records',
        ],
      },
    ],
  },
  {
    company: 'Journal of Visualized Experiments (JoVE)',
    location: 'Cambridge, MA',
    roles: [
      {
        title: 'Design Manager',
        period: 'May 2019 – April 2023',
        bullets: [
          "Led the company's website re-design and assisted with product branding initiatives with leadership. Launched January 2020, followed by a 70% YoY increase in subscriptions.",
          "Created the company's first cross departmental-backlog, using lean economics to prioritize features addressing user pains with the highest ROI.",
          'Explored and hypothesized potential value streams and developed solution visions alongside executive leadership and system architects.',
          'Created User Stories, Journey Maps and complete responsive high fidelity designs, animations and prototypes for Web and Mobile Apps.',
          'Implemented alongside development a continuous delivery pipeline that served feature pipelines, team backlogs and KPI initiatives.',
          'Created and maintained a department-based team backlog with department Directors as stakeholders.',
          "Built, evolved and managed the company's Design System and Design Analytics, and onboarded new designers and creatives.",
        ],
      },
      {
        title: 'UI/UX Designer',
        period: 'March 2019 – May 2019',
        bullets: [
          'Forged relationships with relevant team members and executives to understand their relationship to the JoVE experience.',
          'Created high level design concepts and prototypes for the executive team as well as development ready responsive designs.',
          "Established the company's first design and development backlog that addressed customers and internal needs.",
        ],
      },
    ],
  },
  {
    company: 'Accenture',
    location: 'Boston, MA',
    roles: [
      {
        title: 'UI Designer',
        period: 'October 2018 – March 2019',
        bullets: [
          "Developed and maintained Accenture Experience Design team's design system and processes.",
          'Designed web and mobile app solutions for internal enterprise applications across corporate departments.',
        ],
      },
    ],
  },
  {
    company: 'Last Call Media',
    location: 'Northampton, MA',
    roles: [
      {
        title: 'Product Designer',
        period: 'June 2017 – January 2018',
        bullets: [
          'Met with stakeholders to document their technology stack and identify business obstacles.',
          'Lead designer/Front end dev on open source project "Mannequin" — a component-based Drupal theming tool.',
          'Created intricate UI animations and interactions in Origami Studio.',
          "Built and managed alongside Creative Director the company's first Design System.",
        ],
      },
      { title: 'UI/UX Designer', period: 'January 2017 – May 2017', bullets: [] },
      { title: 'Jr. UI/UX Designer', period: 'June 2016 – December 2016', bullets: [] },
    ],
  },
  {
    company: 'Media Consultant (Self Employed)',
    location: 'Remote',
    roles: [
      {
        title: 'Production, Content and Web Design',
        period: 'May 2023 – February 2025',
        bullets: [
          'Designed compelling websites and branding materials for digital platforms and print.',
          'Managed and operated professional photo, video, and audio equipment for production sets and live events.',
          'Produced and directed multimedia projects, including short films, music videos, interviews, and marketing campaigns.',
        ],
      },
    ],
  },
];
