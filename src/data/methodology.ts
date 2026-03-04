// Methodology page data — extracted from mockup v35g lines 1473–1743

export const METHODOLOGY_TAGS = ['SAFe® 6.0', 'Lean Portfolio Management', 'PI Planning', 'Agile Release Train', 'OKRs', 'AI Agents'];

export const SAFE_LAYERS = [
  {
    layer: 'Portfolio',
    color: '#22c55e',
    icon: '◆',
    roles: 'Lean Portfolio Mgmt · Epic Owners · Enterprise Architect',
    events: 'Strategic Themes → Portfolio Kanban → Lean Budgets → OKRs',
    desc: 'Executives align strategy to funding. Portfolio Kanban governs Epic flow. Lean budgets replace project-based funding with value stream allocation. Guardrails set spending policy and investment horizons.',
    ai: 'AI forecasts budget utilization across value streams, flags portfolio-level bottlenecks, and auto-generates Epic hypotheses from market signals.',
  },
  {
    layer: 'Large Solution',
    color: 'var(--purple)',
    icon: '◈',
    roles: 'Solution Train Engineer · Solution Architect · Solution Mgmt',
    events: 'Pre-PI Planning → Solution Demo → Inspect & Adapt',
    desc: 'Coordinates multiple Agile Release Trains building integrated solutions. Solution Intent documents fixed vs. variable requirements. Supplier coordination aligns external dependencies with internal cadences.',
    ai: 'AI agents monitor cross-ART dependency matrices, predict integration risks before Solution Demos, and auto-route inter-team blockers to the right Solution Architect.',
  },
  {
    layer: 'Agile Release Train (ART)',
    color: 'var(--cyan)',
    icon: '◎',
    roles: 'Release Train Engineer · Product Management · System Architect',
    events: 'PI Planning → System Demo → Inspect & Adapt → ART Sync',
    desc: 'The primary value delivery mechanism. 5–12 Agile Teams aligned to a shared mission operate on synchronized Planning Intervals (8–12 weeks). PI Planning is the heartbeat — two-day face-to-face event where teams commit to PI Objectives.',
    ai: 'AI drafts PI Objective suggestions from backlog analysis, estimates capacity using historical velocity, and runs "what-if" simulations across team load balancing.',
  },
  {
    layer: 'Team',
    color: 'var(--text)',
    icon: '●',
    roles: 'Scrum Master / Team Coach · Product Owner · Developers · AI Agents',
    events: 'Sprint Planning → Daily Standup → Sprint Review → Retro',
    desc: 'Cross-functional teams of 5–9 own their backlog, velocity, and definition of done. Teams choose Scrum, Kanban, or Scrumban. Built-in quality practices — TDD, CI/CD, pair programming — prevent technical debt from compounding.',
    ai: 'AI pair-programs with developers, automates code review, generates unit tests, and drafts user story acceptance criteria from stakeholder conversations.',
  },
];

export const ENGINEERING_PHASES = [
  {
    phase: 'Discovery & Architecture', num: '01', color: 'var(--cyan)',
    desc: 'Problem decomposition into Epics, Features, and Stories. System architecture defined: Clean Architecture layers, data flow diagrams, API contracts, and dependency graphs. Enabler Stories capture technical infrastructure work. Architectural runway ensures teams never block on foundational decisions.',
    deliverables: ['Architecture Decision Records (ADRs)', 'System context diagrams', 'API contract specifications', 'Data flow & dependency maps', 'Enabler backlog with acceptance criteria'],
    ai: 'AI generates ADR drafts from conversation transcripts, proposes architectural patterns from similar codebases, and validates dependency graphs for circular references.',
  },
  {
    phase: 'PI Planning & Capacity', num: '02', color: 'var(--cyan)',
    desc: 'Two-day PI Planning ceremony aligns all teams. Product Management presents the vision and top Features. Teams self-organize, estimate capacity (velocity × available sprints), draft PI Objectives, identify risks and dependencies. Management Review surfaces cross-team conflicts for real-time resolution.',
    deliverables: ['PI Objectives with business value', 'Team capacity allocation', 'Risk/dependency board (ROAM)', 'Feature breakdown by sprint', 'Confidence vote (1–5 fist)'],
    ai: 'AI pre-calculates team capacity from historical velocity, surfaces likely dependency conflicts, generates draft PI Objective language, and models resource allocation scenarios across teams.',
  },
  {
    phase: 'Sprint Execution', num: '03', color: 'var(--purple)',
    desc: 'Two-week Sprints within the PI. Daily standups surface blockers. Sprint Reviews demonstrate working software to stakeholders. Built-in quality: TDD, CI/CD pipelines, code review, and automated regression suites ensure every increment is potentially shippable. WIP limits prevent context-switching overhead.',
    deliverables: ['Working software increment', 'Sprint burndown / velocity', 'CI/CD pipeline metrics', 'Code coverage reports', 'Updated team backlog'],
    ai: 'AI pair-programs on complex implementations, generates test suites from acceptance criteria, performs automated code review, monitors CI/CD pipeline health, and flags technical debt accumulation in real-time.',
  },
  {
    phase: 'System Demo & Integration', num: '04', color: 'var(--purple)',
    desc: 'End-of-sprint System Demo integrates all team outputs into a unified working system. Integration testing validates cross-team dependencies. Performance testing validates non-functional requirements. Feature flags control progressive rollout. Solution Demo (for Large Solutions) aggregates across ARTs.',
    deliverables: ['Integrated system demo', 'Performance test results', 'Feature flag configurations', 'Cross-ART integration report', 'Stakeholder feedback capture'],
    ai: 'AI orchestrates integration test suites, correlates performance regressions to specific commits, generates demo scripts from completed stories, and predicts release readiness confidence scores.',
  },
  {
    phase: 'Inspect & Adapt', num: '05', color: '#22c55e',
    desc: 'PI retrospective and problem-solving workshop. Quantitative metrics reviewed: predictability measure (planned vs. actual), flow metrics, defect trends. Root cause analysis on systemic issues. Improvement backlog items promoted to next PI. This is the organizational learning engine.',
    deliverables: ['PI Predictability report', 'Improvement backlog items', 'Root cause analysis (5 Whys / Fishbone)', 'Updated team agreements', 'Kaizen events scheduled'],
    ai: 'AI analyzes sprint velocity trends, identifies systemic bottleneck patterns across PIs, generates root cause hypotheses from retrospective notes, and tracks improvement item completion rates over time.',
  },
];

export const CAPACITY_ALLOCATION = [
  { type: 'New Features', pct: 60, color: 'var(--cyan)' },
  { type: 'Enablers (Tech Debt / Architecture)', pct: 20, color: 'var(--purple)' },
  { type: 'Maintenance & Support', pct: 15, color: '#22c55e' },
  { type: 'Innovation & Exploration', pct: 5, color: '#f59e0b' },
];

export const FLOW_METRICS = [
  { metric: 'Flow Distribution', desc: 'Balance of feature, defect, risk, and debt work', icon: '■' },
  { metric: 'Flow Velocity', desc: 'Throughput of backlog items per time period', icon: '▲' },
  { metric: 'Flow Time', desc: 'Total time from item creation to done', icon: '●' },
  { metric: 'Flow Load', desc: 'WIP items in active development (lower is faster)', icon: '◆' },
  { metric: 'Flow Efficiency', desc: 'Active time vs. wait time ratio', icon: '◎' },
  { metric: 'Flow Predictability', desc: 'Planned vs. actual delivery per PI', icon: '≡' },
];

export const CADENCE_COLUMNS = [
  { day: 'Daily', items: ['Standup (15m)', 'Blocker escalation', 'AI commit summary', 'WIP limit check'], color: 'var(--text)', freq: 'Every day' },
  { day: 'Weekly', items: ['ART Sync', 'Scrum of Scrums', 'Backlog refinement', 'Demo prep'], color: 'var(--cyan)', freq: 'Every week' },
  { day: 'Per Sprint', items: ['Sprint Planning', 'Sprint Review', 'Sprint Retro', 'Velocity tracking'], color: 'var(--cyan)', freq: 'Every 2 weeks' },
  { day: 'Per PI', items: ['PI Planning (2 days)', 'System Demo', 'Inspect & Adapt', 'Management Review'], color: 'var(--purple)', freq: 'Every 8–12 weeks' },
  { day: 'Annual', items: ['Portfolio Review', 'Strategic Themes', 'Lean Budget reset', 'Value Stream mapping'], color: '#22c55e', freq: 'Yearly' },
];

export const AI_AGENTS = [
  { role: 'Pair Programmer Agent', layer: 'Team', color: 'var(--text)', desc: 'Writes implementation code alongside developers using Claude Code, Copilot, or similar tools. Generates unit tests, refactors legacy code, drafts PR descriptions, and explains complex codebases. Operates within developer-defined guardrails and governance.', tools: ['Claude Code', 'GitHub Copilot', 'Cursor', 'Aider'] },
  { role: 'QA & Testing Agent', layer: 'Team', color: 'var(--text)', desc: 'Generates test suites from acceptance criteria. Monitors CI/CD pipeline health. Performs automated regression, accessibility, and performance audits. Flags flaky tests and suggests fixes. Runs before every merge.', tools: ['Playwright', 'Jest', 'Lighthouse', 'Detox'] },
  { role: 'Planning Intelligence Agent', layer: 'ART', color: 'var(--cyan)', desc: 'Analyzes historical velocity to estimate capacity. Surfaces dependency conflicts before PI Planning. Generates draft PI Objectives from Feature descriptions. Models resource allocation across teams using constraint optimization.', tools: ['Jira AI', 'Linear', 'Azure DevOps', 'Custom LLM'] },
  { role: 'Architecture Review Agent', layer: 'ART / Solution', color: 'var(--purple)', desc: 'Validates Architecture Decision Records against codebase reality. Detects architectural drift, circular dependencies, and layer violations. Generates system context diagrams from code. Enforces Clean Architecture boundaries.', tools: ['ArchUnit', 'Madge', 'Deptrac', 'SonarQube'] },
  { role: 'Portfolio Analytics Agent', layer: 'Portfolio', color: '#22c55e', desc: 'Forecasts Epic-level ROI using market signals and internal data. Tracks OKR progress across value streams. Generates executive dashboards with predictive analytics. Recommends Lean Budget reallocation based on flow metrics.', tools: ['Tableau', 'Looker', 'Power BI', 'Custom AI'] },
];

export const PRIORITIZATION_FRAMEWORKS = [
  { name: 'RICE Scoring', desc: "Reach × Impact × Confidence ÷ Effort. Quantitative ranking that removes bias from feature prioritization. Applied across JoVE's 3 product verticals to align design and engineering sprint capacity.", color: 'var(--cyan)' },
  { name: 'MoSCoW', desc: 'Must-have, Should-have, Could-have, Won\'t-have. Used during PI Planning to classify features by delivery commitment. Prevents scope creep while maintaining stakeholder visibility into trade-offs.', color: 'var(--cyan)' },
  { name: 'Value vs. Effort Matrix', desc: '2×2 quadrant mapping for rapid triage. Quick wins (high value, low effort) ship first. Big bets get scoped into phased releases. Used in weekly design reviews with engineering leads.', color: 'var(--purple)' },
  { name: 'Kano Model', desc: 'Categorizes features as Basic, Performance, or Delight. Prevents over-investment in table-stakes functionality. Informed the JoVE Journal Reader redesign — identifying that video chapter navigation was a Performance feature driving session duration.', color: 'var(--purple)' },
];

export const SPRINT_CADENCE = [
  { day: 'Monday', items: ['Sprint Planning', 'Backlog Grooming', 'Capacity Review'] },
  { day: 'Tue–Thu', items: ['Daily Standup', 'Design Reviews', 'Dev Pairing'] },
  { day: 'Bi-Weekly', items: ['Sprint Demo', 'Stakeholder Review', 'Retrospective'] },
  { day: 'Monthly', items: ['Roadmap Sync', 'OKR Check-in', 'Metrics Review'] },
  { day: 'Quarterly', items: ['PI Planning', 'Strategy Offsite', 'Portfolio Review'] },
];

export const ARTIFACTS_LEFT = [
  'Sprint Planning Documents',
  'Product Roadmaps (quarterly + annual)',
  'Release Notes & Changelogs',
  'User Story Maps',
  'PRDs with Acceptance Criteria',
  'Competitive Analysis Reports',
];

export const ARTIFACTS_RIGHT = [
  'Stakeholder Status Reports',
  'JIRA Board Configuration & Workflow',
  'Retrospective Action Items',
  'Design QA Checklists',
  'Feature Flag Documentation',
  'Analytics & KPI Dashboards',
];
