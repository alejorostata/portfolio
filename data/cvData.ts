import { Experience, Education, Achievement, SkillCategory, Project } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: 'Alejo Rostata',
  title: 'Full Stack Software Engineer & Team Lead',
  location: 'Naga City, Camarines Sur, Philippines',
  email: 'alejorostata@gmail.com',
  viberPhone: '+63 949 575 6987',
  linkedin: 'https://www.linkedin.com/in/alejorostata/',
  github: 'https://github.com/alejorostata',
  availability: 'Available for Full-Stack & Engineering Lead Roles',
  summary:
    'Seasoned Full Stack Software Engineer & Team Lead with nearly a decade of experience architecting and delivering web, desktop, and mobile systems. Proven leader driving engineering team performance (KPIs & PAF) while delivering modern scalable applications with 100% WCAG AAA Accessibility standards.',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'kryterion-lead',
    role: 'Software Engineering Team Lead',
    company: 'Kryterion, Inc. (Webassessor Platform)',
    location: 'Remote / Phoenix, Arizona, USA',
    period: 'Oct 2024 — Present',
    isCurrent: true,
    summary: 'Architecting and leading multi-tenant enterprise SaaS applications while providing technical oversight and sprint governance in Jira for 20 Software Engineers across 4 cross-functional sub-teams.',
    responsibilities: [
      'Architect and lead development of multi-tenant enterprise SaaS applications using Java (Spring Boot), TypeScript, Next.js, Vue.js, and SQL databases.',
      'Provide technical oversight and sprint governance in Jira for 20 Software Engineers across 4 cross-functional sub-teams.',
      'Accelerate engineering delivery and code review standards by integrating AI-assisted developer tooling (GitHub Copilot, Claude Code AI, Gemini).',
      'Maintain active coding velocity delivering 8+ story points per sprint, focusing on core RESTful APIs, secure business logic, and system stability.',
      'Oversee site performance optimization and Web Accessibility (a11y / WCAG) compliance audits using Chrome DevTools & Lighthouse.',
      'Coordinate deployment pipelines, code freezes, and production rollouts with Release Managers and DevOps teams across QA, UAT, and production.',
      'Mentor engineers through scheduled 1-on-1 sessions, KPI performance evaluations (PAFs), and technical career growth roadmaps.',
    ],
    technologies: ['Java 11/17/21 (Spring Boot)', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'TypeScript', 'Next.js', 'Vue.js', 'React Native', 'Flutter', 'Node.js', 'Tailwind CSS', 'Bootstrap', 'MariaDB', 'PostgreSQL', 'Liquibase', 'JWT', 'REST API', 'AWS (S3, CloudWatch, EC2)', 'Twilio API', 'Stripe', 'Resend.com', 'Docker', 'Jenkins CI/CD', 'Git', 'Jira', 'Postman', 'Lighthouse', 'a11y / WCAG', '1-on-1 Mentorship', 'Agile Scrum'],
  },
  {
    id: 'kryterion-engineer',
    role: 'Software Engineer (Full Stack)',
    company: 'Kryterion, Inc. (Webassessor Platform)',
    location: 'Remote / Phoenix, Arizona, USA',
    period: 'Nov 2023 — Oct 2024',
    summary: 'Engineered scalable backend microservices, AWS Cloud integrations, payment/communication APIs, and automated schema migrations.',
    responsibilities: [
      'Engineered scalable backend services and microservices using Java 11/17/21 (Spring Boot, MVC, JPA, Security) and Node.js in a remote environment.',
      'Built AWS Cloud integrations: S3 file processing pipelines, AWS Rekognition identity verification, and CloudWatch/DataDog monitoring.',
      'Integrated payment processing and communication APIs (Stripe, Resend.com, Twilio) for secure transactions, SMS/email pipelines, and OTP workflows.',
      'Developed and validated secure RESTful APIs (JWT) using Postman, with RabbitMQ queuing and automated schema migrations via Liquibase.',
      'Utilized Docker, Jenkins CI/CD pipelines, and Jira to support rapid and reliable release cycles.',
    ],
    technologies: ['Java 11/17/21 (Spring Boot)', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'Node.js', 'Express.js', 'Vue.js', 'Next.js', 'Flutter', 'React Native', 'AWS (S3, Rekognition, CloudWatch)', 'DataDog', 'MariaDB', 'PostgreSQL', 'Liquibase', 'JWT', 'REST API', 'RabbitMQ', 'Twilio API', 'Stripe', 'Resend.com', 'Docker', 'Jenkins CI/CD', 'Postman', 'Git', 'Jira'],
  },
  {
    id: 'caceres-fullstack',
    role: 'Full Stack Developer',
    company: 'Archdiocese of Caceres',
    location: 'Hybrid / Naga City, Philippines',
    period: 'Sept 2021 — Nov 2023',
    summary: 'Designed and deployed multi-tenant enterprise web and mobile applications, REST APIs, and database architectures.',
    responsibilities: [
      'Designed and deployed multi-tenant enterprise web applications with isolated tenant databases utilizing Java, PHP, and modern web frameworks.',
      'Created and secured REST APIs for administrative workflows, financial reporting, and document automation.',
      'Set up server environments and built custom cross-platform desktop and mobile applications for organizational operations.',
      'Conducted query optimization and data auditing across Relational and NoSQL databases (MySQL, CouchDB/PouchDB) ensuring high availability and compliance.',
    ],
    technologies: ['Java', 'PHP', 'React', 'Node.js', 'Bootstrap', 'Electron JS', 'Python', 'MySQL', 'CouchDB', 'PouchDB', 'Google Maps API', 'REST API', 'Git', 'Jenkins CI/CD', 'Docker', 'Relational & NoSQL', 'Android Studio'],
  },
  {
    id: 'caceres-system',
    role: 'System Developer',
    company: 'Archdiocese of Caceres',
    location: 'On-Site / Naga City, Philippines',
    period: 'Dec 2016 — Aug 2021',
    summary: 'Modernized departmental operations through custom digital solutions, relational/NoSQL databases, and accessible user interfaces.',
    responsibilities: [
      'Modernized departmental operations through custom digital solutions for scheduling, record management, and contribution tracking.',
      'Structured relational and NoSQL databases (MySQL, CouchDB), authored backend business logic, and delivered accessible user interfaces.',
    ],
    technologies: ['Java', 'PHP', 'Electron JS', 'Python', 'MySQL', 'CouchDB', 'Android Studio', 'Git', 'Troubleshooting'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'qapione-saas',
    title: 'QAPione — Automated Quality Assurance Platform',
    category: 'Web & Cloud',
    categoryKey: 'Web & Cloud',
    projectType: 'SaaS / B2B Platform',
    database: 'Supabase (PostgreSQL)',
    description: 'Cloud-native automated software testing and QA workflow manager.',
    liveUrl: 'https://www.qapione.com/',
    techStack: ['Next.js', 'Vue.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Shadcn UI', 'Stripe', 'Vercel'],
    highlights: [
      'Multi-tenant SaaS with Supabase PostgreSQL, Stripe payments, and Row Level Security.',
      'Automated test suite execution, real-time result dashboards, and Vercel cloud hosting.',
    ],
  },
  {
    id: 'stelifo-platform',
    title: 'Stelifo — SaaS & B2B Web & Mobile Platform',
    category: 'Web & Cloud',
    categoryKey: 'Web & Cloud',
    projectType: 'SaaS / B2B Web & Mobile Platform',
    database: 'Supabase (PostgreSQL)',
    description: 'Digital transformation SaaS platform featuring web and mobile apps for automated business workflows.',
    liveUrl: 'https://stelifo.com/',
    techStack: ['Next.js', 'React', 'React Native', 'Supabase', 'Shadcn UI', 'Tailwind CSS', 'Stripe', 'Resend.com', 'Vercel'],
    highlights: [
      'Web application platform and cross-platform mobile app built with React Native.',
      'Integrated Stripe subscription payments, Resend.com transactional emails, and Vercel hosting.',
    ],
  },
  {
    id: 'vibe-ai',
    title: 'Vibe AI — Intelligent Workspace Assistant',
    category: 'Web & Cloud',
    categoryKey: 'Web & Cloud',
    projectType: 'SaaS / AI Product',
    database: 'Supabase (PostgreSQL)',
    description: 'AI-driven content and productivity engine powered by generative AI models.',
    liveUrl: 'https://vibe-ai-rho.vercel.app/',
    techStack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Shadcn UI', 'Tailwind CSS', 'Vercel'],
    highlights: [
      'Integrated LLM API streams for prompt generation and code refactoring.',
      'Deployed on Vercel with high-performance Next.js App Router architecture.',
    ],
  },
  {
    id: 'kryterion-engine',
    title: 'Webassessor — Kryterion Online Assessment Platform',
    category: 'Enterprise & Automation',
    categoryKey: 'Enterprise & Automation',
    projectType: 'Enterprise Assessment Platform',
    company: 'Kryterion, Inc.',
    database: 'MariaDB + Redis Caching',
    description: 'High-concurrency global exam proctoring and test delivery platform serving thousands of candidates simultaneously.',
    techStack: ['Java (Spring Boot)', 'Vue.js', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'MariaDB', 'Redis', 'Docker', 'Jenkins'],
    highlights: [
      'Scaled core assessment delivery engine with high-concurrency exam session state.',
      'Engineered multi-language internationalization (i18n) and dynamic localization engine supporting seamless language switching for global test candidates.',
      'Engineered responsive web interfaces using Vue.js, Bootstrap, and Tailwind CSS with WCAG accessibility standards.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend & Frameworks',
    skills: ['Java 11/17/21', 'Spring Boot', 'Spring MVC', 'Spring Data JPA/Hibernate', 'Spring Security (JWT)', 'C# / .NET', 'PHP / Laravel', 'Node.js / Express.js', 'Python', 'REST APIs', 'Microservices'],
  },
  {
    id: 'frontend',
    name: 'Frontend & Mobile',
    skills: ['Next.js (App Router)', 'Vue.js', 'React', 'TypeScript', 'React Native (iOS & Android)', 'Flutter (iOS & Android)', 'Electron.js', 'Shadcn UI', 'Tailwind CSS', 'Bootstrap', 'Web Accessibility (a11y / WCAG AAA)', 'Lighthouse'],
  },
  {
    id: 'devops',
    name: 'Databases, Cloud & DevOps',
    skills: ['PostgreSQL / Supabase', 'MariaDB / MySQL', 'CouchDB / PouchDB', 'Redis', 'Liquibase', 'AWS (S3, Rekognition, CloudWatch, EC2)', 'DataDog', 'Vercel (Hosting)', 'Docker', 'Git', 'Jenkins CI/CD', 'Gradle', 'JFrog', 'Nginx', 'RabbitMQ'],
  },
  {
    id: 'integrations',
    name: 'Integrations & Tooling',
    skills: ['Twilio API', 'Stripe (Payments)', 'Resend.com', 'GitHub Copilot', 'Claude Code AI', 'Gemini AI', 'Postman', 'Jira (Agile/Scrum)', 'Google Maps API'],
  },
  {
    id: 'leadership',
    name: 'Leadership & Governance',
    skills: ['Team Leadership (20+ Engineers)', 'Sprint Governance', 'Performance Evaluations (PAFs)', '1-on-1 Mentorship', 'Career Growth Roadmaps', 'Release Management'],
  },
];

export const EDUCATION: Education[] = [
  {
    id: 'msit',
    degree: 'Master of Science in Information Technology (MS IT)',
    institution: 'Ateneo de Naga University',
    period: '2023 — Present',
    location: 'Naga City, Philippines',
    badge: 'Graduate Candidate',
    details: 'System Development & Advanced Enterprise Architecture.',
  },
  {
    id: 'bsit',
    degree: 'Bachelor of Science in Information Technology (BS IT)',
    institution: 'Partido State University',
    period: '2012 — 2016',
    location: 'Camarines Sur, Philippines',
    badge: 'ACM-ICPC 2014 Contestant',
    details: 'Graduated with strong foundations in Computer Science, Data Structures, and Algorithmic Programming. Contestant in ACM-ICPC 2014.',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'acm-icpc',
    title: 'ACM-ICPC Philippine National Contestant',
    year: '2014',
    organization: 'ACM International Collegiate Programming Contest',
    description: 'Selected as a national contestant representing Partido State University in the prestigious ACM-ICPC algorithmic programming competition.',
    iconName: 'Trophy',
  },
  {
    id: 'team-lead-kryterion',
    title: 'Engineering Team Lead Promotion',
    year: '2024',
    organization: 'Kryterion, Inc.',
    description: 'Promoted to lead full-stack engineering team for the Webassessor platform, managing architecture, team KPIs, and PAF reviews.',
    iconName: 'Award',
  },
];
