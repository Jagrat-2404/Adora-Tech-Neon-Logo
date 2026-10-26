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
  tagline: "Your next big idea. Built for the real world.",
  descriptor: "Websites · Mobile Apps · Custom Software",
  year: 2026,
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Service", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact US", href: "/contact" },
  ],

  // 1. Hero
  hero: {
    smallLabel: "ADORA TECH · DESIGN & DEVELOPMENT",
    headlineLine1: "Your next big idea.",
    headlineLine2: "Built for the real world.",
    supportingText:
      "We design and develop websites, mobile apps, and custom software that help businesses move forward.",
    primaryCta: "Start a Project",
    secondaryCta: "Explore Our Work",
    secondaryLine: "Websites · Mobile Apps · Custom Software",
  },

  // 2. Service Strip
  serviceStrip: [
    "Cloud Infrastructure",
    "Custom Software",
    "Cybersecurity & SOC",
    "DevOps & Automation",
    "Web Engineering",
    "Mobile Applications",
    "Managed IT Services",
    "Database Architecture",
  ],

  // 3. Editorial Introduction
  studioIntro: {
    label: "About ADORA TECH",
    heading: "Good digital products bring clarity to complex ideas.",
    body:
      "Your website, app, or software should make things easier—not more complicated. We bring design and development together to create digital experiences with a clear purpose, thoughtful details, and room to grow.",
    subText:
      "Rather than separating strategic design from technical execution, we work as a cohesive unit. From early interface architecture to the final deployment pipeline, every detail is engineered with practical restraint.",
  },

  // 4. Numbered Services
  numberedServices: {
    eyebrow: "CAPABILITIES",
    heading: "What we build",
    services: [
      {
        id: "websites",
        number: "01",
        title: "Websites",
        description:
          "Responsive websites and web experiences that communicate clearly and make it easy to take the next step.",
        tags: ["Business websites", "E-commerce", "Landing pages"],
        projectType: "Website",
        previewType: "website",
      },
      {
        id: "mobile-apps",
        number: "02",
        title: "Mobile Apps",
        description:
          "Practical, intuitive mobile experiences shaped around the people who use them.",
        tags: ["Mobile interfaces", "Product development", "User journeys"],
        projectType: "Mobile App",
        previewType: "mobile",
      },
      {
        id: "custom-software",
        number: "03",
        title: "Custom Software",
        description:
          "Purpose-built software that helps teams manage work, simplify operations, and connect their tools.",
        tags: ["Dashboards", "Internal tools", "Web applications"],
        projectType: "Custom Software",
        previewType: "software",
      },
      {
        id: "ui-ux",
        number: "04",
        title: "UI & UX Design",
        description:
          "Clear interfaces and considered interactions that turn complex requirements into usable experiences.",
        tags: ["User flows", "Prototypes", "Design systems"],
        projectType: "UI & UX",
        previewType: "uiux",
      },
    ] as ServiceTabItem[],
  },

  // 5. Selected Work
  selectedWork: {
    eyebrow: "SELECTED WORK",
    heading: "Digital ideas, brought into focus.",
    filterCategories: ["All", "Websites", "Apps", "Software"] as const,
    projects: [
      {
        id: "commerce-experience",
        title: "Commerce Experience",
        category: "Websites",
        summary:
          "A high-conversion editorial storefront with instant product previews, fluid typography, and sub-second page transitions.",
        tagline: "Fluid headless retail platform",
        features: [
          "Zero-layout-shift catalog grids",
          "Express checkout orchestration",
          "Edge-cached product taxonomy",
          "Accessible keyboard cart drawers",
        ],
        architecture: ["Next.js App Router", "Tailwind CSS", "Shopify Storefront API"],
        isConcept: true,
      },
      {
        id: "mobile-booking-app",
        title: "Mobile Booking App",
        category: "Apps",
        summary:
          "An intuitive scheduling companion engineered for high recurring booking retention, offline reservation queues, and calendar syncing.",
        tagline: "Tactile scheduling without friction",
        features: [
          "Haptic calendar slot picker",
          "Real-time availability sync",
          "Biometric passkey authentication",
          "Automated SMS & push reminders",
        ],
        architecture: ["React Native", "TypeScript", "Tailwind", "Cloud Functions"],
        isConcept: true,
      },
      {
        id: "operations-dashboard",
        title: "Operations Dashboard",
        category: "Software",
        summary:
          "A real-time telemetry console orchestrating fleet dispatch, low-latency live route mapping, and automated exception triggers.",
        tagline: "Mission-critical operations console",
        features: [
          "Sub-millisecond data grid rendering",
          "WebSocket telemetry feeds",
          "Configurable alerting rules engine",
          "Role-based permission matrix",
        ],
        architecture: ["React", "TypeScript", "WebSocket Streaming", "Tailwind CSS"],
        isConcept: true,
      },
      {
        id: "spatial-design-studio",
        title: "Spatial Design Studio",
        category: "Websites",
        summary:
          "An architectural showcase presenting physical structures through spatial layout grids and responsive typographic hierarchy.",
        tagline: "Atmospheric portfolio architecture",
        features: [
          "Dynamic aspect-ratio galleries",
          "Fluid spatial transitions",
          "Dark emerald tonal theme",
          "Screen-reader optimized layouts",
        ],
        architecture: ["Next.js", "GSAP Motion", "Tailwind CSS"],
        isConcept: true,
      },
    ] as ProjectCardItem[],
  },

  // 6. Approach Comparison
  comparison: {
    eyebrow: "OUR ADVANTAGE",
    heading: "A clearer way to build.",
    subhead:
      "Same engineering rigor. Far less friction, ambiguity, and wasted time.",
    rows: [
      {
        friction: "Unclear requirements and changing assumptions mid-flight",
        approach: "Structured discovery sprint and mutually agreed scope",
      },
      {
        friction: "Design and development disconnected across separate silos",
        approach: "A unified product workflow where designers and engineers collaborate daily",
      },
      {
        friction: "Limited visibility with weeks of radio silence",
        approach: "Transparent milestones, staging previews, and weekly review checkpoints",
      },
      {
        friction: "Last-minute bug fixes and frantic testing right before launch",
        approach: "Continuous automated testing and device verification throughout the build",
      },
      {
        friction: "Unclear handover with missing documentation and zero support",
        approach: "Fully documented code, deployment walkthroughs, and agreed next steps",
      },
    ] as ComparisonRow[],
  },

  // 7. Process
  process: {
    eyebrow: "METHODOLOGY",
    heading: "From first conversation to launch.",
    steps: [
      {
        number: "01",
        title: "Discover",
        description: "Understand your goals, users, requirements, and constraints.",
      },
      {
        number: "02",
        title: "Design",
        description: "Shape the structure, user experience, and visual direction.",
      },
      {
        number: "03",
        title: "Develop",
        description: "Build, test, and refine the experience across devices.",
      },
      {
        number: "04",
        title: "Launch",
        description: "Prepare for release, hand over clearly, and agree on what comes next.",
      },
    ] as ProcessStepItem[],
  },

  // 8. Engagement Options
  engagement: {
    eyebrow: "COLLABORATION MODELS",
    heading: "The right scope for your next step.",
    subhead:
      "Every project is tailored to your timeline and technical maturity. Choose the engagement shape that fits best.",
    tiers: [
      {
        id: "focused-website",
        title: "Focused Website",
        description:
          "For a business website, landing page, or clearly scoped web experience.",
        highlights: [
          "Custom responsive frontend architecture",
          "Editorial typography & design system tokens",
          "On-page SEO & performance optimization",
          "Headless CMS or static deployment",
        ],
        projectType: "Website",
      },
      {
        id: "product-build",
        title: "Product Build",
        description:
          "For a mobile app, web application, or custom software project.",
        highlights: [
          "End-to-end interface design and development",
          "Database modeling & secure API integrations",
          "Authentication, roles & user permission flows",
          "Staging environments & automated test coverage",
        ],
        projectType: "Custom Software",
      },
      {
        id: "ongoing-collaboration",
        title: "Ongoing Collaboration",
        description:
          "For iterative improvements and continued product development.",
        highlights: [
          "Dedicated monthly development sprints",
          "Rapid feature releases & UI enhancements",
          "Performance profiling & infrastructure care",
          "Direct communication with lead engineers",
        ],
        projectType: "Other",
      },
    ] as EngagementTier[],
  },

  // 9. FAQ
  faq: {
    eyebrow: "CLARITY",
    heading: "Questions before we begin.",
    subhead:
      "Straightforward answers to how we work, scope, and deliver digital products.",
    items: [
      {
        id: "faq-1",
        question: "What types of projects do you build?",
        answer:
          "We develop responsive websites, native and cross-platform mobile apps, bespoke internal tools, customer dashboards, and customized software systems. Every project is engineered from scratch around your specific business objectives.",
      },
      {
        id: "faq-2",
        question: "Can you redesign an existing website or app?",
        answer:
          "Yes. We frequently audit and modernize existing digital products. We can overhaul outdated frontends, migrate legacy codebases to modern frameworks like Next.js, and refine user journeys without disrupting active operations.",
      },
      {
        id: "faq-3",
        question: "How is a project scoped?",
        answer:
          "We start with a discovery conversation to examine your functional needs, audience expectations, and technical constraints. From there, we prepare a clear, written scope outlining deliverables, milestones, and timeline estimates before any work begins.",
      },
      {
        id: "faq-4",
        question: "How long will development take?",
        answer:
          "Timelines depend directly on complexity and scope. A focused website or landing page typically takes 2 to 4 weeks, while a comprehensive mobile application or multi-tier software platform ranges from 6 to 12 weeks. We establish mutually agreed sprint schedules during onboarding.",
      },
      {
        id: "faq-5",
        question: "Can you work with our existing branding?",
        answer:
          "Absolutely. If you already have established brand guidelines, typography, or color palettes, we implement them with high fidelity. If your branding needs refinement or digital expansion, we can expand it into a comprehensive web design system.",
      },
      {
        id: "faq-6",
        question: "What happens after launch?",
        answer:
          "We provide comprehensive documentation, recorded code walkthroughs, and post-launch warranty support to ensure stability. For ongoing feature development and maintenance, we offer flexible continuing collaboration sprints.",
      },
    ] as FAQItem[],
  },

  // 10. Contact
  contact: {
    eyebrow: "START A CONVERSATION",
    heading: "Let’s build your next chapter.",
    supportingCopy:
      "Tell us what you’re planning and what you want it to achieve.",
    submitLabel: "Send Project Enquiry",
    projectTypes: [
      "Website",
      "Mobile App",
      "Custom Software",
      "UI & UX",
      "Other",
    ] as const,
  },

  // 11. Blog & Studio Journal
  blog: {
    eyebrow: "JOURNAL & INSIGHTS",
    heading: "Notes on craft, architecture, and purposeful code.",
    subhead:
      "Observations and engineering takeaways from the digital products we design and build.",
    posts: [
      {
        slug: "designing-with-subtle-neon-glows",
        title: "Designing for High-DPI Screens with Restrained Atmospheric Glows",
        excerpt:
          "Why luminous neon halos work better when paired with deep obsidian emerald palettes rather than generic saturated purples.",
        category: "Design System",
        readTime: "4 min read",
        date: "Oct 24, 2026",
        content:
          "In digital product design, luminous accents should guide attention, not exhaust it. By restricting vivid mint (#8DE0C1) and copper (#D5A17D) to intentional focal points—such as our circular emblem—and anchoring them against deep green-black surfaces (#081B19), interfaces gain a sense of depth and tangible physical atmosphere without suffering visual fatigue.",
      },
      {
        slug: "nextjs-app-router-turbopack-benefits",
        title: "Why We Build Client Frontends with Next.js App Router and Edge Workers",
        excerpt:
          "A breakdown of sub-50ms TTFB, zero-bundle-overhead server components, and streaming hydration for editorial websites.",
        category: "Engineering",
        readTime: "6 min read",
        date: "Oct 18, 2026",
        content:
          "Modern web applications often compromise between aesthetic complexity and load performance. By rendering critical markup on edge runtimes and keeping interactive motion logic localized in client islands, we achieve instant first-contentful paint while maintaining rich GSAP animation pipelines.",
      },
      {
        slug: "realtime-fleet-telemetry-architecture",
        title: "The Architecture of Zero-Latency Operations Consoles",
        excerpt:
          "How we engineer mission-critical dashboards that process thousands of live vehicle coordinates without UI stutter.",
        category: "Custom Software",
        readTime: "7 min read",
        date: "Oct 10, 2026",
        content:
          "When dispatchers manage multi-region transit networks, sluggish tables and bloated DOM nodes introduce real operational hazards. We unpack how virtualized windowing, binary WebSocket streams, and canvas rendering enable buttery 60 FPS performance under high load.",
      },
      {
        slug: "offline-first-mobile-sqlite-sync",
        title: "Offline-First Mobile Architecture: Designing Resilient Sync Queues",
        excerpt:
          "Strategies for human-centric mobile apps that perform seamlessly on flights, subways, and low-connectivity regions.",
        category: "Mobile Apps",
        readTime: "5 min read",
        date: "Sep 28, 2026",
        content:
          "Users do not care if their cell signal drops. A well-designed mobile application stores writes in a deterministic local SQLite queue and synchronizes conflicts gracefully upon reconnection. Here is our blueprint for local-first mobile development.",
      },
    ],
  },
};
