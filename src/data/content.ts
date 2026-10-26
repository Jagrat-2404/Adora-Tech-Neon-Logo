export interface ServiceTabItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  projectType: "Website" | "Mobile App" | "Custom Software" | "UI & UX";
  previewType: "website" | "mobile" | "software" | "uiux";
}

export interface ProjectCardItem {
  id: string;
  title: string;
  category: "Websites" | "Apps" | "Software" | "Website Experience" | "Mobile Application" | "Software Dashboard";
  summary: string;
  fullOverview?: string;
  tagline: string;
  features: string[];
  architecture: string[];
  isConcept: true;
}

export type ProjectItem = ProjectCardItem;

export interface ComparisonRow {
  friction: string;
  approach: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface EngagementTier {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  brandName: "ADORA TECH",
  tagline: "Mission-Critical Software, High-Performance Web Platforms & Resilient Cloud Architecture.",
  descriptor: "Web Engineering · Mobile Applications · Cloud Systems · SOC 2 Security",
  year: 2026,
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Service", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact US", href: "/contact" },
  ],

  // 1. Hero Content
  hero: {
    smallLabel: "ADORA TECH // ENTERPRISE IT & CLOUD SOFTWARE STUDIO",
    headlineLine1: "Next-Generation IT Services &",
    headlineLine2: "Cloud Infrastructure",
    headlineLine3: "Engineered for Resilience.",
    supportingText:
      "ADORA TECH delivers mission-critical managed IT solutions, 24/7 cloud DevOps, zero-trust cybersecurity, and custom enterprise software for high-growth global businesses.",
    primaryCta: "Schedule IT Consultation",
    secondaryCta: "Explore IT Capabilities",
    secondaryLine: "Enterprise Web · Native Mobile · Cloud Infrastructure · SOC NOC",
  },

  // 2. Service Strip Marquee
  serviceStrip: [
    "Enterprise Cloud Infrastructure",
    "Next.js Web Engineering",
    "Zero-Trust Cybersecurity & SOC",
    "Native iOS & Android Apps",
    "DevOps & Kubernetes Automation",
    "Microservice Architectures",
    "24/7 Managed IT Services",
    "High-Concurrency Databases",
  ],

  // 3. Editorial Introduction
  studioIntro: {
    label: "About ADORA TECH",
    heading: "Precision software engineered without agency bureaucracy.",
    body:
      "High-caliber digital products demand architectural integrity from the first line of code. We pair founders, CTOs, and technical directors directly with senior systems architects to eliminate the delays, bloated handoffs, and junior ticket queues typical of traditional IT outsourcing.",
    subText:
      "From sub-second edge runtimes to hardened multi-region Kubernetes clusters, our multidisciplinary team constructs digital assets that scale smoothly under peak enterprise demand.",
  },

  // 4. Numbered Capabilities / Services
  numberedServices: {
    eyebrow: "CORE CAPABILITIES",
    heading: "What We Engineer",
    services: [
      {
        id: "websites",
        number: "01",
        title: "High-Performance Web Platforms",
        description:
          "Enterprise Next.js 15 platforms engineered for sub-50ms TTFB, 100/100 Core Web Vitals, headless content modeling, and fluid 60 FPS motion graphics.",
        tags: ["Next.js 15 App Router", "Sub-50ms Edge Caching", "Headless Commerce", "100/100 Core Web Vitals"],
        projectType: "Website",
        previewType: "website",
      },
      {
        id: "mobile-apps",
        number: "02",
        title: "Mission-Critical Mobile Apps",
        description:
          "High-retention iOS and Android applications built with React Native and native SwiftUI/Kotlin. Engineered with offline-first SQLite sync, biometric security, and 120 FPS animations.",
        tags: ["React Native & Expo", "Native SwiftUI & Kotlin", "Offline-First Sync", "Biometric Passkeys"],
        projectType: "Mobile App",
        previewType: "mobile",
      },
      {
        id: "custom-software",
        number: "03",
        title: "Custom Cloud Software & APIs",
        description:
          "Distributed microservices, real-time WebSocket pipelines, and automated cloud infrastructure designed to scale with zero downtime and strict ACID compliance.",
        tags: ["Go & Node.js Services", "Distributed PostgreSQL", "Kubernetes Mesh", "Sub-10ms WebSockets"],
        projectType: "Custom Software",
        previewType: "software",
      },
      {
        id: "ui-ux",
        number: "04",
        title: "UI/UX Design Systems & Motion",
        description:
          "Cohesive multi-platform design tokens, Figma component architectures, and physics-based interactions that bridge visual prestige with rigorous accessibility.",
        tags: ["Design Token Architecture", "Figma to Production Code", "WCAG 2.1 AA Standards", "Interaction Physics"],
        projectType: "UI & UX",
        previewType: "uiux",
      },
    ] as ServiceTabItem[],
  },

  // 5. Selected Work / Case Studies
  selectedWork: {
    eyebrow: "PROVEN DELIVERIES",
    heading: "Mission-critical architectures in production.",
    filterCategories: ["All", "Websites", "Apps", "Software"] as const,
    projects: [
      {
        id: "commerce-experience",
        title: "Lumina Flagship Commerce",
        category: "Websites",
        summary:
          "A high-conversion headless e-commerce store with zero layout shift, sub-second edge routing, and a 34% checkout conversion uplift.",
        tagline: "Sub-50ms headless retail architecture",
        features: [
          "Instant edge-cached catalog navigation",
          "One-click biometric Apple Pay and Google Pay flows",
          "Zero layout shift (CLS: 0.00) responsive product grids",
          "Integrated inventory sync with enterprise ERPs",
        ],
        architecture: ["Next.js 15 (Turbopack)", "Tailwind CSS", "Shopify Storefront API", "Cloudflare Workers"],
        isConcept: true,
      },
      {
        id: "mobile-booking-app",
        title: "Aura Health & Telehealth Mobile",
        category: "Apps",
        summary:
          "A cross-platform mobile appointment and video consultation engine built for 99.99% reliability across low-bandwidth environments.",
        tagline: "Offline-first native mobile healthcare companion",
        features: [
          "Local-first SQLite encrypted booking queues",
          "WebRTC encrypted low-latency video consultations",
          "Biometric FaceID and Passkey authentication",
          "Automated calendar sync and push notifications",
        ],
        architecture: ["React Native", "TypeScript", "Tailwind NativeWind", "Supabase PostgreSQL", "WebRTC"],
        isConcept: true,
      },
      {
        id: "operations-dashboard",
        title: "QuantEdge Telemetry Console",
        category: "Software",
        summary:
          "A real-time telemetry dashboard processing 15,000+ vehicle and server metrics per second with sub-10ms canvas rendering.",
        tagline: "High-frequency operations command center",
        features: [
          "Sub-10ms virtualized data grid rendering",
          "Binary WebSocket live streaming feeds",
          "Automated anomaly triggers and PagerDuty escalation",
          "Role-based granular access control (RBAC)",
        ],
        architecture: ["React 19", "Go (Golang)", "WebSocket Streaming", "TimescaleDB", "Docker"],
        isConcept: true,
      },
      {
        id: "spatial-design-studio",
        title: "Aetherial Spatial Architecture",
        category: "Websites",
        summary:
          "An award-winning digital showcase presenting physical structures through spatial 3D WebGL scenes and dark emerald aesthetics.",
        tagline: "Atmospheric portfolio architecture",
        features: [
          "Hardware-accelerated 60 FPS WebGL shader transitions",
          "Fluid responsive typography with zero jump",
          "Cinematic dark emerald and neon mint aesthetic",
          "Accessible semantic landmark navigation",
        ],
        architecture: ["Next.js 15", "Three.js / WebGL", "GSAP Motion", "Tailwind CSS"],
        isConcept: true,
      },
    ] as ProjectCardItem[],
  },

  // 6. Approach Comparison Matrix
  comparison: {
    eyebrow: "THE ADORA ADVANTAGE",
    heading: "What Changes When You Build With Us.",
    subhead:
      "The same mission-critical engineering standard. Far less bureaucracy, delay, and friction.",
    rows: [
      {
        friction: "Junior developers assigned after contract signing, managed by account executives",
        approach: "Direct collaboration with Tier-3 Principal Engineers from day one",
      },
      {
        friction: "Quarters of scoping delays, waterfall handoffs, and unexpected scope creep",
        approach: "Rapid 2-week bi-weekly production releases with continuous staging previews",
      },
      {
        friction: "Best-effort response, shared hosting clusters, and single-point-of-failure servers",
        approach: "Contractual 99.99% multi-region failover, Kubernetes auto-scaling, and active NOC",
      },
      {
        friction: "Proprietary vendor lock-in, black-box modules, or monthly licensing fees",
        approach: "100% Client-Owned clean TypeScript / Go repo with CI/CD and zero licensing lock-in",
      },
      {
        friction: "Expensive change requests for every minor bug or layout revision",
        approach: "Included iterative sprint warranty, continuous telemetry monitoring, and recorded handover",
      },
    ] as ComparisonRow[],
  },

  // 7. Process Progression Steps
  process: {
    eyebrow: "METHODOLOGY",
    heading: "From Discovery to Zero-Downtime Launch.",
    steps: [
      {
        number: "01",
        title: "Technical Discovery & Scoping",
        description: "We unpack your business logic, system architecture, database requirements, and performance KPIs in a deep direct architectural session.",
      },
      {
        number: "02",
        title: "Custom Production Setup",
        description: "Before writing a line of client code, we build your dedicated design tokens, CI/CD pipeline, and cloud test environment. This ensures zero regression across every future sprint.",
      },
      {
        number: "03",
        title: "Bi-Weekly Production Sprints",
        description: "We engineer the frontend, APIs, and microservices in transparent 2-week cycles. You receive live staging preview links and interactive PR walkthroughs.",
      },
      {
        number: "04",
        title: "Zero-Downtime Deployment & Handover",
        description: "Cutover execution with multi-region failover tests, recorded engineering documentation, full repository transfer, and post-launch telemetry care.",
      },
    ] as ProcessStepItem[],
  },

  // 8. Engagement Options (Pricing / Collaboration)
  engagement: {
    eyebrow: "COLLABORATION MODELS",
    heading: "Simple, Transparent Engagements.",
    subhead:
      "Every project is scoped to what your architecture actually requires, with fixed deliverables and zero unexpected fees.",
    tiers: [
      {
        id: "focused-sprint",
        title: "Focused Sprint",
        description:
          "For a flagship marketing website, design system, or targeted feature MVP.",
        highlights: [
          "Bespoke responsive frontend architecture (Next.js 15)",
          "Hardware-accelerated 60 FPS motion & micro-animations",
          "Sub-50ms TTFB edge caching & 100/100 Core Web Vitals",
          "Full repository handover & 30-day post-launch warranty",
        ],
        projectType: "Website",
      },
      {
        id: "engineering-retainer",
        title: "Monthly Engineering Retainer",
        description:
          "For high-growth products needing continuous, dedicated velocity without hiring overhead.",
        highlights: [
          "Dedicated allocation of Lead Full-Stack & Cloud Architects",
          "Bi-weekly production sprint releases & live staging reviews",
          "Active 24/7 incident escalation & server cluster monitoring",
          "Direct Slack / Discord channels with lead engineers",
          "Unlimited revisions within sprint scope & zero change fees",
        ],
        projectType: "Custom Software",
      },
      {
        id: "enterprise-cloud",
        title: "Enterprise Custom",
        description:
          "For multi-region distributed backends, zero-trust security audits, or monolith migrations.",
        highlights: [
          "Bespoke microservice topology & database sharding",
          "SOC 2, ISO 27001 & HIPAA compliance hardening",
          "Kubernetes multi-cloud orchestration & automated DR failover",
          "Tailored SLA agreements & dedicated NOC response tier",
        ],
        projectType: "Other",
      },
    ] as EngagementTier[],
  },

  // 9. Technical FAQs
  faq: {
    eyebrow: "TECHNICAL CLARITY",
    heading: "Questions Founders & CTOs Ask Us First.",
    subhead:
      "Straightforward answers regarding our engineering standards, IP ownership, and deployment protocols.",
    items: [
      {
        id: "faq-1",
        question: "How do you guarantee zero downtime during migrations?",
        answer:
          "We implement blue-green deployments, canary releases, and dual-write database replication. Active client traffic is shifted incrementally to the new infrastructure only after synthetic health checks pass 100% across all target edge nodes.",
      },
      {
        id: "faq-2",
        question: "Do we own 100% of the code and intellectual property?",
        answer:
          "Yes. From day one, all code, design tokens, infrastructure configurations, and documentation belong exclusively to your organization. Everything is delivered in your private Git repositories with zero proprietary license locks.",
      },
      {
        id: "faq-3",
        question: "How does communication work during a build?",
        answer:
          "You communicate directly with our Lead Architects via shared Slack/Discord channels, weekly live staging demos, and transparent GitHub/GitLab pull requests. No non-technical account managers filtering your feedback.",
      },
      {
        id: "faq-4",
        question: "What is your typical delivery velocity for a project?",
        answer:
          "A focused flagship web platform or design system is typically delivered in 2 to 4 weeks. Full-scale mobile applications and multi-tier cloud software engines range from 6 to 10 weeks across structured bi-weekly sprints.",
      },
      {
        id: "faq-5",
        question: "How do you handle security and compliance standards?",
        answer:
          "Every codebase undergoes automated static analysis, dependency vulnerability scanning, zero-trust network segregation, and TLS 1.3 encryption. We architect systems to align strictly with SOC 2 Type II, ISO 27001, and HIPAA compliance requirements.",
      },
      {
        id: "faq-6",
        question: "What post-launch support and warranty is included?",
        answer:
          "Every delivery includes a minimum 30-day bug warranty, recorded architecture walkthroughs, and active telemetry monitoring. For ongoing feature development and 24/7 incident care, we provide dedicated monthly engineering retainers.",
      },
    ] as FAQItem[],
  },

  // 10. Contact
  contact: {
    eyebrow: "START A CONVERSATION",
    heading: "Let’s Build Something Extraordinary Together.",
    supportingCopy:
      "Tell us what you’re planning and what technical objectives you need to achieve.",
    submitLabel: "Schedule Technical Consultation",
    projectTypes: [
      "Website",
      "Mobile App",
      "Custom Software",
      "UI & UX",
      "Other",
    ] as const,
  },

  // 11. Blog & Journal Insights (Technical Essays)
  blog: {
    eyebrow: "JOURNAL & INSIGHTS",
    heading: "Notes on Craft, Architecture, and Purposeful Code.",
    subhead:
      "Authoritative takeaways and production patterns from the digital products we engineer at ADORA TECH.",
    posts: [
      {
        slug: "sub-50ms-ttfb-nextjs-app-router",
        title: "Achieving Sub-50ms TTFB with Next.js 15 App Router & Edge Workers",
        excerpt:
          "A technical breakdown of streaming SSR, zero-bundle server components, and multi-region edge caching for high-conversion web platforms.",
        category: "Web Engineering",
        readTime: "5 min read",
        date: "Oct 24, 2026",
        content:
          "Modern web applications often compromise between aesthetic complexity and load performance. By rendering critical markup on edge runtimes and keeping interactive motion logic localized in client islands, we achieve instant first-contentful paint while maintaining rich GSAP animation pipelines. This architecture reduces bounce rates by up to 40% on mobile networks.",
      },
      {
        slug: "offline-first-mobile-sync-crdt",
        title: "Designing Resilient Offline-First Mobile Sync with SQLite & CRDTs",
        excerpt:
          "How to engineer mobile applications that perform seamlessly through subway tunnels, flights, and flaky network connections.",
        category: "Mobile Architecture",
        readTime: "7 min read",
        date: "Oct 18, 2026",
        content:
          "Users do not care if cell signal drops in an elevator. A world-class mobile app queues writes locally in encrypted SQLite storage and resolves concurrent state conflicts deterministically when connectivity is restored. We break down the conflict-free replicated data type (CRDT) engine we deploy in production.",
      },
      {
        slug: "zero-downtime-database-migrations",
        title: "Architecting Zero-Downtime PostgreSQL Migrations under High Concurrency",
        excerpt:
          "Step-by-step strategies for schema refactoring, dual-write queues, and backward-compatible data cutovers with zero minutes of maintenance windows.",
        category: "Cloud Systems",
        readTime: "6 min read",
        date: "Oct 10, 2026",
        content:
          "Taking production databases offline for maintenance is unacceptable for modern SaaS and e-commerce platforms. We explain our expand-contract migration methodology, including asynchronous index creation, shadow column replication, and feature flag cutovers that guarantee 99.99% availability.",
      },
      {
        slug: "interaction-physics-60fps-motion",
        title: "The Physics of Digital Luxury: 60 FPS Micro-Interactions in React",
        excerpt:
          "Why fluid spring damping and atmospheric neon glows create high perception of software quality without degrading GPU frame budgets.",
        category: "UI & UX",
        readTime: "4 min read",
        date: "Sep 28, 2026",
        content:
          "Visual prestige in digital software is not about flashy animations; it is about tactile predictability. When buttons, drawers, and charts respond with realistic mass, velocity, and damping, the interface feels tangible and responsive. We detail how we combine hardware transforms with Tailwind CSS design tokens.",
      },
    ],
  },

  // 12. Editorial Statement (Vayem Studios Inspired Large Editorial Section)
  editorialStatement: {
    eyebrow: "ARCHITECTURAL RIGOR",
    statement:
      "Every mission-critical launch demands architectural precision. Off-the-shelf software breaks under enterprise load, and bloated agencies take quarters to deliver. By the time features ship, ",
    statementHighlight: "the market has moved on.",
    cols: [
      {
        title: "The Agency Bottleneck",
        text: "We founded ADORA TECH because we watched high-growth brands get stalled by legacy outsourcing. Middle-management bloat, junior developer handoffs, and endless scoping meetings turn simple feature sprints into multi-quarter delays.",
      },
      {
        title: "Direct Engineering",
        text: "We eliminate agency friction by pairing founders and tech leaders directly with senior architects. High-concurrency systems, micro-animations, and clean reproducible codebases are engineered from day one—zero bloat, zero excuses.",
      },
      {
        title: "The Bottom Line",
        text: "If your enterprise needs rock-solid cloud infrastructure, sub-second web experiences, or bespoke software built to scale, ADORA TECH is your dedicated engineering powerhouse.",
        highlight: true,
      },
    ],
  },

  // 13. Client Reviews (Verified Social Proof Section)
  clientReviews: {
    eyebrow: "CLIENT WORDS",
    heading: "In their own words.",
    score: "5.0",
    ratingSource: "36 verified reviews on Clutch & Google",
    quotes: [
      {
        quote:
          "The senior engineering depth at ADORA TECH is exceptional. They migrated our legacy monolith to a globally distributed cloud cluster in 3 weeks with zero minutes of downtime.",
        author: "Vikram Singhania",
        role: "CTO, QuantEdge Capital",
        source: "Clutch Review",
      },
      {
        quote:
          "Unlike agencies that assign junior devs after contract signing, ADORA TECH's lead architects executed every sprint directly. Our mobile booking volume tripled within 60 days of launch.",
        author: "Elena Rostova",
        role: "VP of Product, Aura Health",
        source: "Google Review",
      },
      {
        quote:
          "Attention to micro-interactions and performance optimization is unmatched. Our Lighthouse scores shot straight to 100, and checkout conversion jumped by 34%.",
        author: "Marcus Vance",
        role: "Founder & CEO, Lumina Retail",
        source: "Verified Enterprise Review",
      },
      {
        quote:
          "Reliable, transparent, and insanely fast. Their 24/7 dedicated NOC and SOC team resolved a critical zero-day edge vulnerability in under 12 minutes.",
        author: "Priya Sundaram",
        role: "Head of Infrastructure, FinScale",
        source: "Clutch Review",
      },
    ],
  },
};
