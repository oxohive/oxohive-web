/* All site copy lives here as typed data. Components never hardcode strings. */

export const site = {
  name: "Oxohive",
  domain: "oxohive.com",
  url: "https://oxohive.com",
  email: "contact@oxohive.com",
  phone: "63791 64226",
  phoneHref: "tel:+916379164226",
  tagline: "Web, Mobile, ERP & SEO",
  description:
    "Websites, mobile apps and business software from Oxohive. We help with design, development and digital marketing.",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Internship", href: "#internship" },
] as const;

export const hero = {
  eyebrow: "Design, development & digital marketing",
  headlineLead: "Websites, apps and software.",
  headlineBrand: "Built around your business.",
  headlineTail: "",
  lead:
    "Need a new website, an app, or a better way to manage your work? We help you plan it, design it and build it.",
  disciplines: ["Design", "Development", "Marketing", "Strategy"],
} as const;

export type Service = {
  num: string;
  kind: "BUILD" | "GROW" | "AUTOMATE" | "OPERATE";
  title: string;
  body: string;
  tags: string[];
};

export const services: Service[] = [
  {
    num: "01",
    kind: "AUTOMATE",
    title: "AI Automation",
    body: "Reduce repetitive work with AI assistants and connected workflows. We automate document processing, customer enquiries and routine tasks across your business tools.",
    tags: ["AI assistants", "Workflow automation", "Integrations"],
  },
  {
    num: "02",
    kind: "GROW",
    title: "Digital Marketing",
    body: "Reach your audience with coordinated content, social media, email and paid campaigns. We plan, manage and measure activity against your business goals.",
    tags: ["Social media", "Paid campaigns", "Content & email"],
  },
  {
    num: "03",
    kind: "GROW",
    title: "Search Engine Optimization",
    body: "Help customers find your business through technical improvements, relevant content and local search. We review your site, prioritise fixes and track progress.",
    tags: ["Technical SEO", "On-page SEO", "Local search"],
  },
  {
    num: "04",
    kind: "BUILD",
    title: "Web Design & Development",
    body: "Create a professional website that makes your business easy to understand and contact. We handle responsive design, development, performance and integration with your business tools.",
    tags: ["Website design", "Web development", "Responsive experiences"],
  },
  {
    num: "05",
    kind: "OPERATE",
    title: "ERPNext & Frappe",
    body: "Bring finance, inventory, sales and operations into one system. We help with ERPNext implementation, Frappe customisation, data migration and team training.",
    tags: ["ERP implementation", "Frappe development", "Migration & support"],
  },
  {
    num: "06",
    kind: "AUTOMATE",
    title: "AI Voice Agents for Business",
    body: "Handle incoming calls, answer common questions and book appointments with an AI voice agent built around your business. Capture enquiry details, connect them to your CRM and transfer calls to your team when needed.",
    tags: ["Call handling", "Appointment booking", "CRM integration"],
  },
];

export type TechCard = { title: string; body: string; rows: [string, string][] };

export const technology: TechCard[] = [
  {
    title: "Less manual work. Faster follow-through.",
    body: "Repeated data entry and disconnected workflows slow teams down. We connect your tools and automate routine steps, with human review where decisions need it.",
    rows: [["Solution", "AI assistants, document processing and workflow automation"], ["Technology", "Python · AI APIs · Webhooks"], ["Measure", "Processing time, manual handoffs and exceptions"]],
  },
  {
    title: "One view of your operations.",
    body: "When sales, stock and finance sit in separate systems, teams work with incomplete information. We bring these workflows together around shared business data.",
    rows: [["Solution", "Connected ERP workflows and operational reporting"], ["Technology", "ERPNext · Frappe · Custom integrations"], ["Measure", "Duplicate entries, reporting time and stock accuracy"]],
  },
  {
    title: "A clearer path from visit to enquiry.",
    body: "A website needs to help visitors find answers and take the next step. We improve page structure, performance and enquiry flows, then measure where people drop off.",
    rows: [["Solution", "Conversion-focused websites and customer portals"], ["Technology", "Next.js · React · APIs"], ["Measure", "Page speed, form completion and qualified enquiries"]],
  },
  {
    title: "Marketing connected to sales.",
    body: "Traffic alone does not explain which activity brings useful leads. We connect search, campaign reporting and CRM data so your team can make better budget decisions.",
    rows: [["Solution", "Search visibility, campaign tracking and lead follow-up"], ["Technology", "Technical SEO · Analytics · CRM integrations"], ["Measure", "Qualified leads, acquisition cost and follow-up time"]],
  },
];

export const process = [
  {
    title: "Find the opportunity",
    body: "We review your workflow, customer journey and costs to identify where a change could create the most value.",
    meta: "A clear scope, baseline and success measures",
  },
  {
    title: "Design the right solution",
    body: "We map the experience and test a prototype with you. Priorities are agreed against expected value, effort and budget.",
    meta: "An approved prototype and delivery plan",
  },
  {
    title: "Build, test and launch",
    body: "We deliver in focused stages, share working demos and test with your team before bringing the solution into daily use.",
    meta: "A tested release, integrations and team handover",
  },
  {
    title: "Measure and improve",
    body: "We compare results with the starting baseline, review ongoing costs and use the findings to prioritise the next improvement.",
    meta: "A performance review and next-step priorities",
  },
] as const;

export const industries = [
  {
    title: "FinTech",
    body: "Payment flows, financial dashboards and tools for managing transactions.",
  },
  {
    title: "Healthcare",
    body: "Appointment booking, patient management and telemedicine applications.",
  },
  {
    title: "E-commerce",
    body: "Online stores with product catalogues, checkout and inventory management.",
  },
  {
    title: "Education",
    body: "Course platforms and tools for managing students, lessons and assessments.",
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
      body: "Practise through project tasks, with time to build, review and improve your work.",
    },
    {
      title: "Mentorship that continues",
      body: "Get feedback on your work and guidance as you move from learning to project training.",
    },
    {
      title: "Certified and recognised",
      body: "Finish with a course certificate, an internship certificate, and a letter of recommendation.",
    },
    {
      title: "Career support you can use",
      body: "Help with your resume and LinkedIn profile as you prepare to apply for roles.",
    },
  ],
  roles: [
    { title: "UI/UX Developer Intern", meta: "Remote · 3 months", href: "/career/ui-ux-developer-intern" },
    { title: "Full Stack Developer Intern", meta: "Remote · 3 months", href: "/career/full-stack-developer-intern" },
    { title: "Content Writing Intern", meta: "Remote · 3 months", href: "/career/content-writing-intern" },
  ],
} as const;

export const cta = {
  eyebrow: "Have a project in mind?",
  title: "Tell us what you are building.",
  body: "Tell us what you need and where you are in the process. We can talk through the scope, timing and next steps.",
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
      { label: "Book a call", href: `mailto:${site.email}` },
    ],
  },
  { title: "Careers", links: internship.roles.map((r) => ({ label: r.title, href: r.href })) },
];

export const social = [
  { label: "LinkedIn", href: site.url },
];
