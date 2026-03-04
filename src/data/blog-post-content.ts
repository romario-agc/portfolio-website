/** Blog post article content.
 *  Full body for Mannequin 1.0; pattern for future posts.
 *  sourceUrl: link to original external publication. */

export interface BlogPostContent {
  lede: string;
  sections: { heading: string; body: string[] }[];
  quote?: string;
  codeBlock?: { comment: string; lines: string[] };
  tags: string[];
  sourceUrl?: string;
  sourceLabel?: string;
}

export const BLOG_CONTENT: Record<string, BlogPostContent> = {
  'designing-mannequin': {
    sourceUrl: 'https://lastcallmedia.com/blog/Designing-Mannequin-1.0',
    sourceLabel: 'Originally published on Last Call Media',
    lede: "Building an open-source Drupal theming tool taught us that the gap between design and development isn't technical — it's cultural. Here's how we bridged it.",
    sections: [
      {
        heading: 'Introduction',
        body: [
          "When designers and developers speak different languages, the product suffers. At Last Call Media, we experienced this firsthand — designers would create beautiful component mockups in Sketch, then wait hours (or days) to see them rendered in Drupal.",
          "The disconnect wasn't just frustrating; it was expensive. Every round of design-to-development translation introduced drift, and every drift introduced bugs. We needed a tool that could eliminate the gap entirely.",
        ],
      },
      {
        heading: 'The Problem',
        body: [
          "Drupal's theming layer is tightly coupled to its backend. Seeing a component required a full CMS setup: database, content types, test data, and a running server. This created a feedback loop measured in hours, not seconds.",
          "Designers couldn't iterate without developer assistance, and developers couldn't validate implementations without designer sign-off. The handoff process was a bottleneck hiding in plain sight.",
          "We measured it: the average time from design completion to first developer review was 3.2 days. For a team shipping biweekly, that's nearly a quarter of the sprint consumed by waiting.",
        ],
      },
      {
        heading: 'Our Approach',
        body: [
          "We studied how other ecosystems solved this: React had Storybook, Rails had ViewComponent. We needed a Drupal-native equivalent — something that rendered Twig templates with mock data, without touching the CMS.",
          "The key insight was that Twig templates are fundamentally just functions: data in, HTML out. If we could provide the data without Drupal, we could render components in isolation. This led to the YAML-driven sample data approach that became Mannequin's core.",
        ],
      },
      {
        heading: 'Technical Architecture',
        body: [
          "Mannequin runs as a standalone Node.js server that renders Twig templates with YAML-defined sample data. The frontend uses React with hot-module replacement for instant feedback.",
          "Each component gets a YAML file describing its variants. The server watches for file changes, re-renders automatically, and pushes updates to the browser. Designers see their changes in under 200ms.",
          "We built the rendering layer on top of Twig.js — a JavaScript implementation of the Twig templating engine. This meant no PHP dependency for the development server, making the tool accessible to designers who had never touched a terminal.",
        ],
      },
      {
        heading: 'Lessons Learned',
        body: [
          "Three years into the project, the biggest lesson wasn't technical — it was that documentation is a feature, not an afterthought. Our contributor growth correlated directly with documentation quality.",
          "We also learned that the tool needed to be opinionated about very little. Early versions enforced a specific directory structure and naming convention. When we relaxed those constraints and made everything configurable, adoption tripled.",
          "The final lesson: open source is a conversation, not a broadcast. Our most impactful features — variant switching, responsive previews, accessibility auditing — all came from community requests.",
        ],
      },
      {
        heading: "What's Next",
        body: [
          "Mannequin continues to evolve. The roadmap includes visual regression testing, Figma token sync, and a web-based component gallery. The project remains open source and community-driven.",
          "We're also exploring integration with design token standards like the W3C Design Tokens specification, which would allow teams to maintain a single source of truth from Figma to Drupal.",
        ],
      },
    ],
    quote: "The best design tools don't just show you pixels — they show you possibilities.",
    codeBlock: {
      comment: '// mannequin.config.yml',
      lines: [
        'components:',
        '  button:',
        '    template: components/button/button.twig',
        '    samples: components/button/samples.yml',
      ],
    },
    tags: ['Design Systems', 'Open Source', 'Drupal', 'Component Design'],
  },
};
