/* All site copy lives here as typed data. Components never hardcode strings. */

export const site = {
  name: "Oxohive",
  domain: "oxohive.com",
  url: "https://oxohive.com",
  email: "hello@oxohive.com",
  tagline: "Web, Mobile, ERP & SEO",
  description:
    "Oxohive builds scalable web platforms, mobile apps, CRM and ERP systems, and runs a structured internship programme. Book a call and get a quote in minutes.",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Internship", href: "#internship" },
] as const;

export const hero = {
  /* PLACEHOLDER: replace with real figures before launch */
  rating: "4.9 average · 200+ reviews",
  headlineLead: "Drive success in the digital era with",
  headlineBrand: "Oxohive",
  headlineTail: "by your side.",
  lead:
    "We build the web platforms, mobile apps, CRM and ERP systems that businesses actually run on — then make sure people can find them. Tell us about your project and get a quote in minutes.",
  disciplines: ["Design", "Development", "Marketing", "Strategy"],
} as const;

export type Service = {
  num: string;
  kind: "BUILD" | "GROW";
  title: string;
  body: string;
  tags: string[];
};

export const services: Service[] = [
  {
    num: "01",
    kind: "BUILD",
    title: "Web Design & Development",
    body: "Take your business further with sites and platforms built to be fast, accessible, and genuinely pleasant to use.",
    tags: ["Next.js", "Spring Boot", "Postgres"],
  },
  {
    num: "02",
    kind: "GROW",
    title: "Search Engine Optimization",
    body: "Get to the top of the results page and stay there, with technical SEO that holds up long after launch.",
    tags: ["Technical", "On-page", "Local"],
  },
  {
    num: "03",
    kind: "GROW",
    title: "Content Creation",
    body: "Words, images, and video that give your brand something worth saying — and a reason for people to come back.",
    tags: ["Editorial", "Video", "Brand"],
  },
  {
    num: "04",
    kind: "GROW",
    title: "Social Media Marketing",
    body: "Show up where your customers already are, with a presence that earns attention instead of buying it.",
    tags: ["Strategy", "Community", "Reporting"],
  },
  {
    num: "05",
    kind: "GROW",
    title: "Email Marketing",
    body: "Stay in touch with the people who already chose you. Lifecycle campaigns that drive repeat revenue, not unsubscribes.",
    tags: ["Lifecycle", "Automation", "CRM"],
  },
  {
    num: "06",
    kind: "GROW",
    title: "Pay-Per-Click Advertising",
    body: "Stop paying for clicks that go nowhere. We build and manage campaigns that reach the people actually ready to buy.",
    tags: ["Search", "Paid social", "Analytics"],
  },
];

export type TechCard = { title: string; body: string; rows: [string, string][] };

export const technology: TechCard[] = [
  {
    title: "Web & Backend",
    body: "Scalable, secure platforms with the boring parts done properly.",
    rows: [
      ["Languages", "Java · JavaScript · Python"],
      ["Frameworks", "Spring Boot · Node.js · Django"],
      ["Databases", "PostgreSQL · MongoDB · MySQL"],
      ["APIs", "REST · GraphQL"],
    ],
  },
  {
    title: "Mobile",
    body: "Cross-platform apps that feel native on both Android and iOS.",
    rows: [
      ["Frameworks", "React Native · Flutter"],
      ["Native", "Kotlin · Swift"],
      ["Tooling", "Expo · Fastlane · Firebase"],
      ["Release", "Play Store · App Store"],
    ],
  },
  {
    title: "Frontend",
    body: "Interfaces that stay quick on real devices and real connections.",
    rows: [
      ["Libraries", "React · Vue · Angular"],
      ["Meta-frameworks", "Next.js · Nuxt"],
      ["Styling", "Tailwind · SCSS"],
      ["Quality", "Core Web Vitals · a11y"],
    ],
  },
  {
    title: "Cloud & Infrastructure",
    body: "Deployments you can reason about, and roll back without drama.",
    rows: [
      ["Providers", "AWS · Google Cloud · Azure"],
      ["Orchestration", "Kubernetes · Docker"],
      ["Pipelines", "CI/CD · GitHub Actions"],
      ["IaC", "Terraform · Nginx"],
    ],
  },
  {
    title: "AI & Machine Learning",
    body: "Models put to work on real problems, not bolted on for the press release.",
    rows: [
      ["Frameworks", "TensorFlow · PyTorch"],
      ["APIs", "Anthropic · OpenAI"],
      ["Applied", "Computer Vision · NLP"],
      ["Serving", "Vector search · RAG"],
    ],
  },
  {
    title: "Business Systems",
    body: "The CRM and ERP layer that keeps operations, sales, and finance in step.",
    rows: [
      ["ERP", "Inventory · Finance · HR"],
      ["CRM", "Pipeline · Support · Billing"],
      ["Integration", "Webhooks · SSO · ETL"],
      ["Reporting", "Dashboards · Exports"],
    ],
  },
];

/* PLACEHOLDER: percentages are illustrative — set from real team capability */
export const capability: { title: string; bars: [string, number][] }[] = [
  { title: "Frontend depth", bars: [["React", 95], ["Vue.js", 85], ["Angular", 80]] },
  { title: "Backend depth", bars: [["Node.js", 90], ["Python", 88], ["Java", 85]] },
];

export const process = [
  {
    title: "Discovery",
    body: "We work out what you actually need — the requirements, the constraints, and the outcome you are measuring against.",
    meta: "Week 1 · Scope & fixed quote",
  },
  {
    title: "Design",
    body: "Wireframes, user flows, and interface design — reviewed with you before a single line of production code gets written.",
    meta: "Weeks 2–3 · Prototype you can click",
  },
  {
    title: "Development",
    body: "We build in short cycles with working software at the end of each one, so progress is visible rather than promised.",
    meta: "Weeks 3–6 · Weekly demos",
  },
  {
    title: "Deploy",
    body: "Testing, launch, and the support that follows. We stay on after go-live, because that is when the real feedback arrives.",
    meta: "Week 6 onward · Monitoring & support",
  },
] as const;

export const industries = [
  {
    title: "FinTech",
    body: "Payment processing, banking apps, and trading platforms — built to the compliance bar from day one.",
  },
  {
    title: "Healthcare",
    body: "Patient management, telemedicine, and health analytics, with privacy handled as a requirement rather than a feature.",
  },
  {
    title: "E-commerce",
    body: "Storefronts, inventory, and analytics that stay fast on the days that matter most.",
  },
  {
    title: "Education",
    body: "Learning platforms, student management, and LMS builds designed for people who are not power users.",
  },
] as const;

export type WorkItem = {
  kind: string;
  score: string;
  title: string;
  body: string;
  stack: string[];
  stats: [string, string][];
};

/* PLACEHOLDER: swap for real client projects, ratings and figures before launch */
export const work: WorkItem[] = [
  {
    kind: "Full-stack · UI/UX",
    score: "4.8",
    title: "Digital Solutions Platform",
    body: "An agency operating system covering project delivery, client reporting, and portfolio management in one place.",
    stack: ["React", "Next.js", "Node", "MongoDB"],
    stats: [["15+", "Projects"], ["25+", "Clients"], ["4.8", "Rating"]],
  },
  {
    kind: "EdTech platform",
    score: "4.6",
    title: "Learning & Innovation Hub",
    body: "A hands-on education platform for AI, IoT, and robotics coursework, built around real project work rather than video lectures.",
    stack: ["Next.js", "Python", "Postgres", "AWS"],
    stats: [["40+", "Courses"], ["1.2k", "Learners"], ["4.6", "Rating"]],
  },
  {
    kind: "ERP · Operations",
    score: "4.9",
    title: "Inventory & Finance Suite",
    body: "A custom ERP replacing five disconnected spreadsheets, with live stock levels and month-end close cut from days to hours.",
    stack: ["Spring Boot", "Postgres", "Docker", "Terraform"],
    stats: [["5", "Systems merged"], ["99.9%", "Uptime"], ["4.9", "Rating"]],
  },
];

export const internship = {
  points: [
    {
      title: "Hands-on, project-based learning",
      body: "You apply what you learn on real builds and task-based sprints, not exercises invented for a classroom.",
    },
    {
      title: "Mentorship that continues",
      body: "Mentors stay with you through both stages — learning and training — with personal feedback and career advice throughout.",
    },
    {
      title: "Certified and recognised",
      body: "Finish with a course certificate, an internship certificate, and a letter of recommendation.",
    },
    {
      title: "Career support you can use",
      body: "Resume review and LinkedIn profile work, so you are positioned properly when the opportunities show up.",
    },
  ],
  roles: [
    { title: "UI/UX Developer Intern", meta: "Remote · 3 months", href: "/career/ui-ux-developer-intern" },
    { title: "Full Stack Developer Intern", meta: "Remote · 3 months", href: "/career/full-stack-developer-intern" },
    { title: "Content Writing Intern", meta: "Remote · 3 months", href: "/career/content-writing-intern" },
  ],
} as const;

export const cta = {
  eyebrow: "Let us meet",
  title: "Tell us what you are building.",
  body: "We are always glad to meet new people and hear about new projects. Book a slot and we will come back with a quote in minutes, not weeks.",
  note: "Free consultation · Development & design · Technical support",
} as const;

export const footerCols = [
  { title: "Services", links: services.map((s) => ({ label: s.title, href: "#services" })) },
  {
    title: "Company",
    links: [
      { label: "Work", href: "#work" },
      { label: "Technology", href: "#technology" },
      { label: "Process", href: "#process" },
      { label: "Internship", href: "#internship" },
      { label: "Book a call", href: "#contact" },
    ],
  },
  { title: "Careers", links: internship.roles.map((r) => ({ label: r.title, href: r.href })) },
];

export const social = [
  { label: "Instagram", href: site.url },
  { label: "LinkedIn", href: site.url },
  { label: "GitHub", href: site.url },
];
