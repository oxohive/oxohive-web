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
  { label: "Services", href: "/#services" },
  { label: "Technology", href: "/#technology" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#work" },
  { label: "Internship", href: "/#internship" },
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

/* ---------------------------------------------------------------------------
   Legal pages.

   Written against what this site actually does: no forms, no cookies, no
   analytics, no third-party scripts, and fonts self-hosted by next/font. If
   any of that changes, the "Cookies" and "Collected automatically" blocks in
   the privacy policy have to change with it.
   --------------------------------------------------------------------------- */

export type LegalBlock = { heading: string; body?: string[]; list?: string[] };

export type LegalDoc = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  updatedISO: string;
  intro: string[];
  blocks: LegalBlock[];
};

export const privacyPolicy: LegalDoc = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  description:
    "How Oxohive handles personal information: what we collect, why we hold it, how long we keep it, and the rights you have over it.",
  updated: "15 September 2026",
  updatedISO: "2026-09-15",
  intro: [
    "This policy explains what Oxohive does with personal information — what you send us when you get in touch, what our hosting provider records automatically, and what we handle on your behalf during a project.",
    "It applies to this website and to the services we provide.",
  ],
  blocks: [
    {
      heading: "The short version",
      body: [
        "This website sets no cookies, runs no analytics, and loads no advertising or tracking scripts. Fonts are served from our own domain rather than a third party. There is no consent banner because there is nothing to consent to.",
        "The only personal information we hold about you is what you choose to send us when you email or call.",
      ],
    },
    {
      heading: "Who we are",
      body: [
        "Oxohive builds websites, mobile apps and business software, and provides digital marketing, search and automation services. We operate from India.",
        `For anything in this policy, contact us at ${site.email} or on ${site.phone}.`,
      ],
    },
    {
      heading: "Information you give us",
      body: [
        "This site has no contact forms. Every enquiry reaches us by email or phone, so you control exactly what you send.",
        "A typical enquiry includes some or all of the following:",
      ],
      list: [
        "Your name and the organisation you represent",
        "Your email address and phone number",
        "What you want built, changed or fixed, and your budget or timing if you mention it",
        "Anything else you choose to include in the message",
      ],
    },
    {
      heading: "Information collected automatically",
      body: [
        "This site is hosted on Vercel. Like any web host, its servers record technical details of each request so the site can be served, kept online and protected from abuse.",
        "Those records typically include your IP address, the page requested, the date and time, your browser and operating system, and the referring page. We do not use them to build a profile of you, and we do not combine them with enquiries you send us.",
      ],
    },
    {
      heading: "Cookies and similar technologies",
      body: [
        "We do not set cookies on this website. We do not use local or session storage to identify you, and we embed no analytics, advertising pixels, session recorders or social media trackers.",
        "If we ever add analytics, this policy will be updated first, and we will ask for consent where the law requires it.",
      ],
    },
    {
      heading: "Internship applications",
      body: [
        "If you apply to our internship programme, we collect your contact details, education history, CV, and any portfolio or profile links you send.",
        "We use these only to assess your application, run the programme and issue certificates. We do not pass applications to third parties without asking you first.",
      ],
    },
    {
      heading: "Client and project data",
      body: [
        "When you engage us on a project we often work inside your systems — your website, CRM, ERP or business tools — and may process personal information belonging to your customers or staff.",
        "In that situation you decide what is processed and why; we act on your instructions, and the engagement contract governs the detail. We do not use client data for our own marketing, and we do not use it to train AI models.",
      ],
    },
    {
      heading: "How we use information",
      list: [
        "To reply to your enquiry and prepare a proposal or quote",
        "To deliver, support and improve the services you have engaged us for",
        "To assess internship applications and administer the programme",
        "To send invoices and keep the accounting records the law requires",
        "To keep our systems secure and investigate misuse",
        "To meet legal, regulatory and tax obligations",
      ],
    },
    {
      heading: "Our legal basis",
      body: [
        "Under India's Digital Personal Data Protection Act, 2023, we process personal data with your consent, or for the legitimate uses the Act permits — such as responding to a request you have made, or meeting a legal obligation.",
        "If you contact us from the European Economic Area or the United Kingdom, we rely on your consent, on the steps necessary to enter into or perform a contract, and on our legitimate interest in answering enquiries and running our business.",
      ],
    },
    {
      heading: "Who we share information with",
      body: [
        "We do not sell personal information and we do not trade it for advertising.",
        "We share it only where it is necessary:",
      ],
      list: [
        "Our hosting provider, which serves this website and keeps the server logs described above",
        "Our email and business software providers, which carry and store our correspondence",
        "Professional advisers such as accountants, where they need it to do their work",
        "Public authorities, where we are legally required to disclose",
      ],
    },
    {
      heading: "International transfers",
      body: [
        "Some of the providers above run servers outside India. Where personal information crosses a border, we take reasonable steps to ensure it stays protected to the standard described in this policy and permitted by applicable law.",
      ],
    },
    {
      heading: "How long we keep it",
      list: [
        "Enquiries that do not become projects: up to 24 months, then deleted",
        "Internship applications: up to 12 months after the programme cycle closes",
        "Client records and project data: for the term of the engagement and as set out in the contract",
        "Invoices and accounting records: as long as tax and company law requires",
        "Server logs: a short retention period set by our hosting provider",
      ],
    },
    {
      heading: "Security",
      body: [
        "The site is served over HTTPS. Access to our systems is restricted to the people who need it, protected by strong authentication, and reviewed when someone joins or leaves.",
        "No system is perfectly secure. If a breach ever affects your personal information, we will notify you and the relevant authority as the law requires.",
      ],
    },
    {
      heading: "Your rights",
      body: ["You can ask us to:"],
      list: [
        "Confirm what personal information we hold about you, and give you a copy",
        "Correct anything inaccurate, incomplete or out of date",
        "Delete information we no longer have a reason to keep",
        "Withdraw consent you previously gave, at any time",
        "Let someone you nominate exercise these rights for you if you are unable to",
      ],
    },
    {
      heading: "Making a request or a complaint",
      body: [
        `Write to ${site.email} and tell us what you need. We will respond within 30 days, and there is no charge.`,
        "If you are not satisfied with how we handled your request, you can complain to the Data Protection Board of India, or to your local supervisory authority if you are in the EEA or the UK.",
      ],
    },
    {
      heading: "Children",
      body: [
        "Our services are aimed at businesses and are not directed at children. We do not knowingly collect personal information from anyone under 18, and internship applicants must be 18 or older.",
      ],
    },
    {
      heading: "Links to other sites",
      body: [
        "Where we link to another organisation's website, that site has its own privacy policy, and we are not responsible for how it handles your information.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "If we change how we handle personal information, we will update this page and change the date at the top. Material changes will be made clear rather than slipped in quietly.",
      ],
    },
  ],
};

export const termsOfService: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  description:
    "The terms that apply to using the Oxohive website, and to the design, development, marketing and automation services we provide.",
  updated: "15 September 2026",
  updatedISO: "2026-09-15",
  intro: [
    "These terms cover two things: your use of this website, and the basis on which we provide our services.",
    "Where we have signed a separate proposal, statement of work or agreement with you, that document takes precedence over anything here that conflicts with it.",
  ],
  blocks: [
    {
      heading: "Accepting these terms",
      body: [
        "By using this website you accept these terms. If you do not accept them, please do not use the site.",
        "We may update them from time to time. The version published here is the one that applies, and the date at the top tells you when it last changed.",
      ],
    },
    {
      heading: "About us",
      body: [
        `Oxohive provides web design and development, mobile and business software, ERPNext and Frappe implementation, digital marketing, search optimisation and AI automation services. We operate from India and can be reached at ${site.email} or on ${site.phone}.`,
      ],
    },
    {
      heading: "Using this website",
      body: ["You may read, share and link to this site freely. You may not:"],
      list: [
        "Use it for anything unlawful, or in a way that breaches someone else's rights",
        "Attempt to gain unauthorised access to it, or to the systems behind it",
        "Interfere with its operation, or place unreasonable load on it",
        "Scrape or harvest its content in bulk for commercial reuse",
        "Reproduce substantial parts of it as your own work",
      ],
    },
    {
      heading: "Our content",
      body: [
        "The text, design, code, graphics and 3D work on this site belong to Oxohive or are used with permission, and our name and logo are ours.",
        "Nothing here grants you a licence to use them beyond ordinary viewing, linking, and quoting with attribution.",
      ],
    },
    {
      heading: "What this website is and is not",
      body: [
        "The service descriptions, figures and case studies on this site are for information. They are not an offer capable of acceptance, and they are not a guarantee of any particular result.",
        "A binding engagement begins only when we have agreed a written proposal or statement of work with you.",
      ],
    },
    {
      heading: "How our engagements work",
      body: [
        "We scope the work, agree it in writing, and deliver in stages with working demos along the way.",
        "Anything outside the agreed scope is a change request. We will tell you what it costs in time and money before we start it, not afterwards.",
      ],
    },
    {
      heading: "Your responsibilities",
      body: ["To deliver on time we need you to:"],
      list: [
        "Provide content, branding, access and credentials when we ask for them",
        "Give feedback and approvals within the timeframes we agree",
        "Ensure you own, or are licensed to use, any material you supply to us",
        "Keep your own accounts, domains and third-party subscriptions in good standing",
      ],
    },
    {
      heading: "Fees and payment",
      body: [
        "Fees, milestones and payment terms are set out in the proposal or statement of work for your project. Unless it says otherwise, invoices are payable within the period stated on the invoice.",
        "Third-party costs — hosting, domains, licences, advertising spend — are yours, and are either billed to you at cost or paid by you directly.",
        "We may pause work on materially overdue accounts, after telling you first.",
      ],
    },
    {
      heading: "Ownership of what we build",
      body: [
        "On full payment, the deliverables we create specifically for you become yours.",
        "We keep ownership of our pre-existing tools, libraries, components and know-how, and of anything generic we reuse across projects. You get a perpetual licence to use those as part of your deliverables.",
        "We may describe the work publicly and show it in our portfolio, unless we have agreed in writing not to.",
      ],
    },
    {
      heading: "Open-source and third-party components",
      body: [
        "Our work often builds on open-source software. ERPNext and Frappe, for example, are distributed under the GNU General Public License v3, and your use of them is governed by that licence.",
        "Where a project depends on third-party platforms or APIs, their terms, pricing and availability are set by them, not by us. We are not responsible for a third party changing or withdrawing a service.",
      ],
    },
    {
      heading: "AI-assisted services",
      body: [
        "Our automation and voice agent services use AI models. These produce probabilistic output: they can be wrong, and they need human review wherever the outcome matters.",
        "We will help you design the review steps and safeguards, but you remain responsible for decisions taken on the basis of AI output, and for how the systems we build are used once they are live.",
        "If a deployment records or transcribes calls, you are responsible for giving the notices and obtaining the consents the law requires.",
      ],
    },
    {
      heading: "Internship programme",
      body: [
        "Places on our internship programme are offered at our discretion. Certificates and letters of recommendation are issued on genuine completion of the programme requirements.",
        "The programme is training. It is not an offer of employment, and it does not guarantee a job — with us or anyone else.",
      ],
    },
    {
      heading: "Availability",
      body: [
        "We try to keep this site available and correct, but we do not promise it will be uninterrupted or error-free, and we may change or withdraw any part of it without notice.",
      ],
    },
    {
      heading: "Disclaimers",
      body: [
        "Except where these terms or an agreement with you say otherwise, and to the extent the law allows, this website and its content are provided as they are, without warranties of any kind.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be limited.",
        "Subject to that, we are not liable for loss of profit, revenue, business, goodwill, data or anticipated savings, or for indirect or consequential loss.",
        "Our total liability arising out of an engagement is limited to the fees you paid us for that engagement in the twelve months before the claim arose.",
      ],
    },
    {
      heading: "Indemnity",
      body: [
        "You agree to cover us against claims arising from material you supplied to us, from use of the deliverables in breach of these terms, or from your breach of a third party's rights.",
      ],
    },
    {
      heading: "Confidentiality",
      body: [
        "Each of us will keep the other's non-public information confidential, use it only for the project, and protect it with reasonable care. This continues after the engagement ends.",
      ],
    },
    {
      heading: "Termination",
      body: [
        "Either of us may end an engagement as set out in the relevant agreement. On termination you pay for work completed and costs committed up to that point, and we hand over the deliverables covered by that payment.",
      ],
    },
    {
      heading: "Governing law",
      body: [
        "These terms are governed by the laws of India, and disputes arising from them are subject to the jurisdiction of the competent courts in India.",
      ],
    },
    {
      heading: "Contact",
      body: [
        `Questions about these terms can go to ${site.email} or ${site.phone}.`,
      ],
    },
  ],
};

export const legalDocs = [privacyPolicy, termsOfService] as const;
