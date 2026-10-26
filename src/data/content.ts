export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  extendedDescription: string;
  deliverables: string[];
  ctaLabel: string;
  projectType: "Website" | "Mobile App" | "Custom Software";
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Website Experience" | "Mobile Application" | "Software Dashboard";
  summary: string;
  fullOverview: string;
  tagline: string;
  features: string[];
  architecture: string[];
  isConcept: true;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface Principle {
  number: string;
  title: string;
  description: string;
}

export const SITE_CONFIG = {
  brandName: "ADORA TECH",
  tagline: "Digital experiences. Thoughtfully engineered.",
  descriptor: "WEBSITES / APPS / SOFTWARE",
  year: 2026,
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ],
  hero: {
    badge: "DIGITAL PRODUCT STUDIO",
    headlinePart1: "Digital experiences.",
    headlinePart2: "Thoughtfully engineered.",
    supportingText:
      "We build websites, apps, and custom software that turn your ideas into useful digital products.",
    primaryCta: "Start a Project",
    secondaryCta: "Explore Our Work",
    categoryLabel: "WEBSITES / APPS / SOFTWARE",
  },
  servicesSection: {
    eyebrow: "CAPABILITIES",
    heading: "Built around your next big idea.",
    description:
      "Every project is shaped around your strategic objectives, user expectations, and the engineering rigor required for dependable long-term performance.",
    services: [
      {
        id: "websites",
        number: "01",
        title: "Websites",
        shortDescription:
          "Fast, responsive websites that communicate clearly and turn interest into action.",
        extendedDescription:
          "From brand flagships to high-conversion product sites, we combine editorial typography, resilient architecture, and smooth motion to tell your story and drive results.",
        deliverables: [
          "Responsive, accessible frontend",
          "Search engine optimization (SEO)",
          "Performance-tuned asset delivery",
          "Headless CMS integration",
        ],
        ctaLabel: "Discuss a website",
        projectType: "Website",
      },
      {
        id: "mobile-apps",
        number: "02",
        title: "Mobile Apps",
        shortDescription:
          "Thoughtful mobile experiences designed around the people who use them.",
        extendedDescription:
          "Intuitive iOS and Android applications crafted for high daily engagement, smooth gestures, offline capability, and seamless cloud synchronization.",
        deliverables: [
          "Cross-platform or native architecture",
          "Fluid micro-interactions and tactile feedback",
          "Biometric authentication & secure storage",
          "App Store compliance and readiness",
        ],
        ctaLabel: "Discuss a mobile app",
        projectType: "Mobile App",
      },
      {
        id: "custom-software",
        number: "03",
        title: "Custom Software",
        shortDescription:
          "Purpose-built tools that simplify operations and support your next stage of growth.",
        extendedDescription:
          "Tailored internal tools, client portals, and cloud backends engineered to replace clunky spreadsheets, eliminate bottlenecks, and automate manual routines.",
        deliverables: [
          "Bespoke dashboards and workflows",
          "Granular role-based access control (RBAC)",
          "Real-time event streams & analytics",
          "Secure API and ERP integrations",
        ],
        ctaLabel: "Discuss custom software",
        projectType: "Custom Software",
      },
    ] as ServiceItem[],
  },
  workSection: {
    eyebrow: "PORTFOLIO",
    heading: "Selected work. Considered from every angle.",
    description:
      "A curated preview of our design principles and engineering depth across web platforms, mobile interfaces, and operational dashboards.",
    honestyNote:
      "All items shown below are original design concepts and technical architecture studies created by ADORA TECH.",
    projects: [
      {
        id: "aura-architecture",
        title: "Aura Spatial Design",
        category: "Website Experience",
        summary:
          "An immersive, editorial digital presence for a contemporary architectural practice featuring spatial canvas navigation and fluid imagery.",
        fullOverview:
          "A bespoke web experience created to highlight high-end physical spaces through editorial typography, smooth progressive image loading, and micro-interactions that mirror architectural discipline.",
        tagline: "Atmospheric portfolio with sub-second transitions",
        features: [
          "Smooth spatial project transitions without page reloads",
          "Custom dark emerald & stone aesthetic tokens",
          "Dynamic aspect-ratio preserved layout grid",
          "Full keyboard navigation and accessibility compliance",
        ],
        architecture: ["Next.js App Router", "Tailwind CSS", "GSAP ScrollTrigger", "Edge CDN"],
        isConcept: true,
      },
      {
        id: "pulse-health",
        title: "Pulse Health Companion",
        category: "Mobile Application",
        summary:
          "A human-centric mobile interface focused on continuous biometric tracking, ambient recovery feedback, and circadian cadence.",
        fullOverview:
          "A native-feeling mobile app concept crafted for effortless health logging, low cognitive friction, and actionable telemetry rendered in calming emerald and warm copper palettes.",
        tagline: "Biometric telemetry with human clarity",
        features: [
          "Haptic-responsive circadian dial controller",
          "Real-time sensor sync and sleep debt visualization",
          "Private-by-design local SQLite cache with cloud sync",
          "Restrained dark-mode interface reducing eye fatigue",
        ],
        architecture: ["React Native / Expo", "TypeScript", "Tailwind", "Local SQLite"],
        isConcept: true,
      },
      {
        id: "nexus-logistics",
        title: "Nexus Fleet Cloud",
        category: "Software Dashboard",
        summary:
          "A high-density operational telemetry console orchestrating multimodal freight logistics, real-time routing, and exception resolution.",
        fullOverview:
          "A purpose-built internal web application engineered for operations dispatchers managing hundreds of transit vehicles simultaneously without visual clutter.",
        tagline: "Mission-critical operations console",
        features: [
          "Sub-millisecond tabular updates with virtualized scrolling",
          "Live telemetry map overlay with anomaly alerts",
          "Keyboard shortcuts for rapid route adjustments",
          "Role-based permission matrix and audit trails",
        ],
        architecture: ["React", "TypeScript", "WebSocket Streaming", "Tailwind CSS"],
        isConcept: true,
      },
    ] as ProjectItem[],
  },
  processSection: {
    eyebrow: "METHODOLOGY",
    heading: "A clear process. From first conversation to launch.",
    description:
      "We replace guesswork with structured sprints, transparent milestones, and continuous refinement.",
    steps: [
      {
        number: "01",
        title: "Discover",
        description: "Understand the business, audience, and goals.",
        details:
          "We begin by unpacking your core value proposition, interviewing stakeholders, auditing technical constraints, and mapping clear success benchmarks.",
      },
      {
        number: "02",
        title: "Design",
        description: "Shape the experience, interface, and visual direction.",
        details:
          "We construct clickable prototypes, establish the visual identity system, test ergonomic layouts, and ensure every micro-interaction has deliberate purpose.",
      },
      {
        number: "03",
        title: "Build",
        description: "Develop, test, and refine the product.",
        details:
          "We write clean, typed, modular code with automated test suites, responsive checks across devices, and performance profiling for immediate feedback.",
      },
      {
        number: "04",
        title: "Launch",
        description: "Release carefully and plan what comes next.",
        details:
          "We execute zero-downtime production deployment, configure monitoring and analytics, hand over complete documentation, and outline future enhancements.",
      },
    ] as ProcessStep[],
  },
  aboutSection: {
    eyebrow: "ABOUT ADORA TECH",
    heading: "Thoughtful design. Purposeful technology.",
    copy: "ADORA TECH brings design and development together to create digital products with clarity, care, and a practical purpose.",
    subCopy:
      "We believe that great software is neither bloated with novelty nor stripped of emotion. It exists at the intersection of aesthetic restraint and rigorous engineering.",
    principles: [
      {
        number: "01",
        title: "Clarity over complexity.",
        description:
          "We remove friction and eliminate superfluous layers so users immediately understand where they are and what to do next.",
      },
      {
        number: "02",
        title: "Details that make a difference.",
        description:
          "From typographic rhythm to micro-transitions and accessible contrast, subtle craftsmanship elevates everyday utility into delight.",
      },
      {
        number: "03",
        title: "Technology that serves the goal.",
        description:
          "We select tools and architectures based on resilience, maintainability, and real business outcomes—never fleeting hype.",
      },
    ] as Principle[],
  },
  contactSection: {
    eyebrow: "START A CONVERSATION",
    heading: "Let’s build something meaningful.",
    supportingCopy:
      "Tell us what you’re planning. We’ll help shape the next step.",
    projectTypes: [
      "Website",
      "Mobile App",
      "Custom Software",
      "Other",
    ] as const,
  },
};
