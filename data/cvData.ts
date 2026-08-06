import { ExperienceItem, EducationItem, ProjectItem, AchievementItem, SkillCategory } from '@/types/portfolio';

export interface ExtendedProjectItem extends ProjectItem {
  projectType: 'SaaS Platform' | 'B2C Web App' | 'B2B Enterprise' | 'Automation & Tooling';
  database: string;
  liveUrl?: string;
}

export const PERSONAL_INFO = {
  name: 'Alejo Rostata',
  title: 'Full Stack Software Engineer & Team Lead',
  shortBio: 'Seasoned Full Stack Software Engineer with nearly a decade of experience building web, desktop, and mobile applications while leading engineering teams and performance evaluations (KPIs / PAF).',
  email: 'alejorostata@gmail.com',
  viberPhone: '+63 949 575 6987',
  location: 'Naga City, Camarines Sur, Philippines',
  linkedin: 'https://linkedin.com/in/alejorostata',
  github: 'https://github.com/alejorostata',
  yearsOfExperience: '10+',
  availability: 'Open to Full Stack & Team Lead Roles',
  summary: `Seasoned Software Engineer with nearly a decade of experience in full-stack development across web, desktop, and mobile platforms. Skilled in Java (Spring Boot), Node.js, C#, Next.js, Vue.js, Flutter, React Native, and Supabase. Proficient with modern AI-assisted engineering tools (Claude Code AI, GitHub Copilot, Gemini Antigravity). Experienced in engineering team leadership, managing team KPIs and Performance Appraisal Frameworks (PAF), 1-on-1 mentorship, and Agile Scrum delivery.`
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend & APIs',
    skills: ['Java (Spring Boot)', 'Node.js', 'C# / .NET', 'PHP', 'Python', 'C++', 'C', 'RESTful APIs', 'JWT Auth', 'RabbitMQ']
  },
  {
    id: 'frontend',
    name: 'Frontend & UI Frameworks',
    skills: ['Next.js', 'Vue.js', 'React', 'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap', 'TypeScript / JavaScript', 'Accessibility (WCAG)', 'Responsive Design']
  },
  {
    id: 'mobile',
    name: 'Mobile & Desktop',
    skills: ['Flutter (iOS & Android)', 'React Native', 'Electron JS', 'Android Studio']
  },
  {
    id: 'aitools',
    name: 'AI Tooling & Modern Workflows',
    skills: ['Claude Code AI', 'GitHub Copilot', 'Gemini Antigravity', 'Git', 'Prompt Engineering', 'AI API Integrations']
  },
  {
    id: 'devops',
    name: 'DevOps & Databases',
    skills: ['Docker', 'Jenkins (CI/CD)', 'AWS', 'Nginx', 'Supabase (PostgreSQL)', 'MariaDB', 'MySQL', 'CouchDB / PouchDB', 'Liquibase', 'JFrog', 'Redis']
  },
  {
    id: 'leadership',
    name: 'Leadership & Management',
    skills: ['Software Engineering Leadership', 'Team KPIs & Performance Evaluation (PAF)', 'Cross-Functional Team Coordination', '1-on-1 Mentorship', 'Agile / Scrum', 'System Architecture']
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'kryterion-lead',
    role: 'Software Engineering Team Lead',
    company: 'Kryterion, Inc.',
    period: 'Oct 2024 – Present',
    isCurrent: true,
    location: 'Remote',
    summary: 'Leading engineering team workflows, technical architecture, team performance evaluations (KPIs / PAF), and scalable full-stack web & mobile development.',
    responsibilities: [
      'Lead the design, development, and scaling of modern web and mobile applications using Java, SQL, Vue.js, Next.js, Tailwind CSS, Flutter, and React Native.',
      'Manage engineering team Key Performance Indicators (KPIs) and Performance Appraisal Frameworks (PAF), conducting regular 1-on-1 sessions, performance reviews, and career development planning.',
      'Provide technical leadership, code reviews, and architectural guidance to ensure high software quality, performance, and scalability.',
      'Leverage AI-assisted engineering tools (Claude Code AI, GitHub Copilot, Gemini Antigravity) to accelerate development velocity and engineering productivity.',
      'Coordinate across cross-functional teams (Product, Business Analysts, UI/UX, QA, DevOps, DBAs, CTO) to align strategic initiatives and champion Agile Scrum ceremonies.'
    ],
    technologies: ['Java (Spring Boot)', 'Vue.js', 'Next.js', 'Tailwind CSS', 'Flutter', 'React Native', 'AI Tooling', 'Team KPIs / PAF', 'Docker', 'Agile Scrum']
  },
  {
    id: 'kryterion-fullstack',
    role: 'Software Engineer (Full Stack)',
    company: 'Kryterion, Inc.',
    period: 'Nov 2023 – Oct 2024',
    isCurrent: false,
    location: 'Remote',
    summary: 'Delivered high-performance web/mobile features and robust RESTful API services in an international remote environment.',
    responsibilities: [
      'Collaborated closely with international cross-functional teams (PMs, TPMs, BAs, QAs, DevOps, UI/UX) to deliver resilient features.',
      'Designed and integrated secure RESTful APIs with JWT authentication for protected access and reliable service communication.',
      'Maintained and optimized production web and mobile applications with focus on scalability, maintainability, and clean code architecture.',
      'Actively participated in Agile Scrum ceremonies (sprint planning, daily stand-ups, retrospectives) ensuring on-time feature delivery.'
    ],
    technologies: ['Java (Spring Boot)', 'Vue.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'MariaDB', 'Liquibase', 'JWT', 'Docker', 'RabbitMQ', 'Redis', 'Janus']
  },
  {
    id: 'caceres-fullstack',
    role: 'Full Stack Developer',
    company: 'Archdiocese of Caceres',
    period: 'Sept 2021 – Nov 2023',
    isCurrent: false,
    location: 'Naga City, Philippines',
    summary: 'Engineered end-to-end web & mobile applications, managed server infrastructure, and implemented CI/CD pipelines.',
    responsibilities: [
      'Designed, developed, and deployed scalable full-stack web and mobile applications covering frontend, backend APIs, and databases.',
      'Performed in-depth debugging, root-cause analysis, and system optimization to ensure high uptime and user satisfaction.',
      'Managed server environments, configured automated CI/CD pipelines, and secured system architecture.',
      'Built custom document generation, data processing, and reporting automation tools that significantly reduced manual operational work.',
      'Enforced data security access controls, routine audits, and compliance standards for sensitive organizational data.'
    ],
    technologies: ['Java', 'PHP', 'React', 'Node.js', 'MySQL', 'CouchDB / PouchDB', 'Docker', 'Jenkins', 'REST APIs']
  },
  {
    id: 'caceres-sysdev',
    role: 'System Developer',
    company: 'Archdiocese of Caceres',
    period: 'Dec 2016 – Aug 2021',
    isCurrent: false,
    location: 'Naga City, Philippines',
    summary: 'Progressed from IT support to core system development, digitizing key administrative, financial, and scheduling workflows.',
    responsibilities: [
      'Contributed to the full development lifecycle of web and mobile tools for administrative process automation.',
      'Built automated solutions for scheduling, contribution tracking, and financial reporting, replacing error-prone manual tasks.',
      'Enhanced usability, UI responsiveness, and backend query performance across organizational administrative systems.',
      'Delivered day-to-day IT assistance, software training, and user onboarding to ensure seamless adoption.'
    ],
    technologies: ['Java', 'PHP', 'React', 'Electron JS', 'Python', 'MySQL', 'Bootstrap', 'Android Studio']
  }
];

export const PROJECTS: ExtendedProjectItem[] = [
  {
    id: 'qapione',
    title: 'QAPione — Quality Assurance & Testing Platform',
    category: 'Web & Cloud',
    projectType: 'SaaS Platform',
    database: 'Supabase (PostgreSQL)',
    description: 'B2B SaaS web application platform designed for quality assurance, automated test management, and software quality engineering workflows.',
    highlights: [
      'Built with modern responsive frontend architecture and optimized web performance.',
      'Integrated Supabase PostgreSQL database for real-time test data persistence and user auth.',
      'Deployed live on production web infrastructure.'
    ],
    techStack: ['Next.js', 'TypeScript', 'Supabase (PostgreSQL)', 'Tailwind CSS', 'REST API'],
    liveUrl: 'https://www.qapione.com/'
  },
  {
    id: 'stelifo',
    title: 'Stelifo — Digital Solutions & Web Platform',
    category: 'Web & Cloud',
    projectType: 'SaaS Platform',
    database: 'Supabase (PostgreSQL)',
    description: 'Full-stack web application platform providing digital services, modular component interfaces, and scalable backend integrations.',
    highlights: [
      'Designed with modern responsive UI design system and fast page transitions.',
      'Powered by Supabase cloud database backend and secure authentication layer.',
      'Deployed live on production custom domain.'
    ],
    techStack: ['Next.js', 'React', 'Supabase (PostgreSQL)', 'Node.js', 'Tailwind CSS'],
    liveUrl: 'https://stelifo.com/'
  },
  {
    id: 'vibe-ai',
    title: 'Vibe AI — Intelligent Productivity Assistant',
    category: 'Web & Cloud',
    projectType: 'B2C Web App',
    database: 'Supabase (PostgreSQL)',
    description: 'AI-powered web productivity application delivering intelligent assistance, real-time prompt generation, and automated workflows.',
    highlights: [
      'Engineered with reactive frontend state management and instant AI API response streaming.',
      'Integrated Supabase for user session storage and persistent prompt history.',
      'Deployed live on Vercel platform.'
    ],
    techStack: ['Next.js', 'TypeScript', 'Supabase (PostgreSQL)', 'AI API Integration', 'Vercel'],
    liveUrl: 'https://vibe-ai-rho.vercel.app/'
  },
  {
    id: 'enterprise-assessment-platform',
    title: 'Enterprise Certification & Assessment Platform',
    category: 'Web & Cloud',
    projectType: 'B2B Enterprise',
    database: 'MariaDB + Redis',
    company: 'Kryterion, Inc.',
    description: 'High-concurrency multi-tenant assessment platform supporting secure candidate testing and proctoring workflows.',
    highlights: [
      'Architected resilient microservices using Java (Spring Boot), Next.js, and Redis caching.',
      'Implemented secure JWT-based API authentication and high-throughput messaging via RabbitMQ.'
    ],
    techStack: ['Java (Spring Boot)', 'Next.js', 'MariaDB', 'Liquibase', 'Redis', 'Docker']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'masters-it',
    degree: "Master's in Information Technology (Software Development)",
    institution: 'Ateneo de Naga University',
    period: '2023 – Present',
    badge: 'In Progress',
    details: 'Specializing in advanced software architecture, scalable enterprise systems, and emerging technologies.'
  },
  {
    id: 'bs-it',
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Partido State University',
    period: '2012 – 2016',
    badge: 'Graduated',
    details: 'Focus on software engineering, algorithm analysis, database systems, and object-oriented programming.'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'acm-icpc',
    title: 'ACM-ICPC 2014 Contestant',
    organization: 'Philippine National Programming Contest',
    year: '2014',
    description: 'Represented Partido State University at the prestigious ACM-ICPC Philippine National Programming Contest, showcasing advanced algorithmic problem-solving under intense time pressure.',
    iconName: 'Trophy'
  },
  {
    id: 'team-lead-promotion',
    title: 'Promoted to Software Engineering Team Lead',
    organization: 'Kryterion, Inc.',
    year: '2024',
    description: 'Recognized for technical excellence, team KPI/PAF performance management, and mentorship with promotion to engineering team lead.',
    iconName: 'Award'
  }
];
