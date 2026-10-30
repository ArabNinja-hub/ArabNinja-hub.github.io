/**
 * Centralized Portfolio Data Configuration for Ronisher Bwalya
 * 
 * Strict factual accuracy:
 * - No invented email, phone, or LinkedIn links.
 * - No fake proficiency percentages or ratings.
 * - Verified project records, research hypotheses, and technical focus areas.
 */

export const personalInfo = {
  name: "Ronisher Bwalya",
  monogram: "RB.",
  age: 19,
  title: "Web Developer & Technology Entrepreneur",
  institution: "Copperbelt University",
  location: "Copperbelt University • Kitwe, Zambia",
  country: "Zambia",
  city: "Kitwe",
  githubUsername: "ArabNinja-hub",
  githubUrl: "https://github.com/ArabNinja-hub",
  tagline: "Building digital products, exploring ideas and turning real-world problems into practical technology solutions.",
  biography: "I am a Zambian web developer and technology entrepreneur interested in building practical digital products that address real-world problems. My work focuses on web development, software architecture and the exploration of technology-driven solutions across education, business management and digital services. As a student at Copperbelt University, I combine academic learning with independent product development, research and experimentation.",
  principles: [
    {
      title: "Pragmatic Architecture",
      description: "Selecting technologies that solve concrete operational friction, prioritizing lightweight maintainability over needless complexity."
    },
    {
      title: "Context-Driven Solutions",
      description: "Designing specifically for regional workflows—such as informal retail accounting and student housing discovery—where generic tools fall short."
    },
    {
      title: "Iterative Engineering",
      description: "Combining academic foundation at Copperbelt University with structured prototypes, data modeling, and hands-on validation."
    }
  ]
};

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

export const projects = [
  {
    id: "countup",
    title: "CountUp",
    category: "Small Business Management",
    status: "In Development",
    statusBadgeColor: "emerald",
    repository: {
      type: "public",
      url: "https://github.com/ArabNinja-hub/CountUp",
      label: "View Repository"
    },
    description: "A small-business management application focused on sales, inventory tracking and customer credit records.",
    technologyStack: ["React", "Vite", "Express", "Firebase"],
    problemContext: "Informal retail and grocery shops frequently track customer credit, sales records, and inventory on loose paper or exercise books, leading to calculation mistakes and record loss.",
    currentImplementation: "Development build structured around a React frontend bootstrapped with Vite, integrating Express server routes and Firebase client/auth modules in the codebase.",
    plannedFunctionality: [
      "Structured sales logging and daily totals calculation.",
      "Customer credit tracking interface with balance ledgers.",
      "Inventory item tracking and reorder alerts."
    ],
    researchHypothesis: "An idea being explored: whether a lightweight, low-friction mobile web interface will encourage daily record-keeping in small shops compared to generic accounting tools."
  },
  {
    id: "nestiq",
    title: "Nestiq",
    category: "Accommodation Technology",
    status: "In Development",
    statusBadgeColor: "amber",
    repository: {
      type: "private",
      url: null,
      label: "Private Repository",
      notice: "Proprietary source code under active local development."
    },
    description: "An accommodation marketplace project designed to connect accommodation providers with people searching for places to stay.",
    technologyStack: ["Node.js", "Express", "SQLite", "JavaScript", "HTML", "CSS"],
    problemContext: "Tertiary students and renters often experience challenges finding verified accommodation near institutions, relying on informal middle-agents with inconsistent pricing.",
    currentImplementation: "Local development build: Node.js and Express backend using SQLite for local record storage, with server-rendered HTML/CSS/JavaScript views.",
    plannedFunctionality: [
      "Accommodation listing catalog with price, room capacity and location details.",
      "Search filtering by proximity and accommodation type.",
      "Direct inquiry workflow connecting seekers with accommodation managers."
    ],
    researchHypothesis: "An idea being explored: whether transparent listings and direct contact mechanisms can streamline off-campus student accommodation discovery in Zambia."
  },
  {
    id: "orqeli",
    title: "Orqeli",
    category: "Education Technology",
    status: "Research & Development",
    statusBadgeColor: "cyan",
    repository: {
      type: "withheld",
      url: null,
      label: "Documentation Pending",
      notice: "Public repository link intentionally withheld until documentation and architectural specifications are updated."
    },
    description: "An education technology initiative exploring improved school administration and access to academic results.",
    technologyStack: ["System Architecture", "React", "Express", "Relational Modeling"],
    problemContext: "Manual mark calculation, physical score sheet collation, and paper report card distribution create administrative backlogs in primary and secondary schools.",
    currentImplementation: "Research and specification phase: Formulating academic grade models, administrative record flows, and permission hierarchies.",
    plannedFunctionality: [
      "Assessment mark entry and grade calculation pipelines.",
      "Role-separated views for school administrators, educators and guardians.",
      "Digital academic result record verification."
    ],
    researchHypothesis: "An idea being explored: whether standardizing digital score collation can reduce grade turnaround times and improve record retention in African learning institutions."
  }
];

export const skills = {
  currentlyWorkingWith: [
    { name: "HTML", category: "Core Web" },
    { name: "CSS", category: "Styling" },
    { name: "JavaScript", category: "Languages" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend Runtime" },
    { name: "Express", category: "Server Framework" },
    { name: "Git", category: "Version Control" },
    { name: "GitHub", category: "Collaboration" },
    { name: "Responsive Web Development", category: "Interface Architecture" }
  ],
  developingExperienceWith: [
    { name: "TypeScript", category: "Type Systems" },
    { name: "PostgreSQL", category: "Relational DB" },
    { name: "Prisma", category: "ORM / Modeling" },
    { name: "API Integration", category: "Systems Interop" }
  ]
};

export const siteMetadata = {
  siteUrl: "https://arabninja-hub.github.io/",
  title: "Ronisher Bwalya | Web Developer & Technology Entrepreneur",
  description: "Personal portfolio of Ronisher Bwalya, a Zambian Web Developer and Technology Entrepreneur studying at Copperbelt University. Building practical digital products that address real-world problems.",
  author: "Ronisher Bwalya",
  keywords: [
    "Ronisher Bwalya",
    "Zambian Web Developer",
    "Copperbelt University",
    "Technology Entrepreneur Zambia",
    "CountUp",
    "Nestiq",
    "Orqeli",
    "Software Architecture Zambia",
    "African Tech Founders"
  ],
  locale: "en_US"
};

