import { Experience, Education, Achievement, SkillCategory, Project } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: 'Alejo Rostata',
  title: 'Full Stack Software Engineer & Team Lead',
  location: 'Naga City, Camarines Sur, Philippines',
  email: 'alejorostata@gmail.com',
  viberPhone: '+63 949 575 6987',
  linkedin: 'https://linkedin.com/in/alejo-rostata',
  github: 'https://github.com/alejorostata',
  availability: 'Available for Full-Stack & Engineering Lead Roles',
  summary:
    'Seasoned Full Stack Software Engineer & Team Lead with nearly a decade of experience architecting and delivering web, desktop, and mobile systems. Proven leader driving engineering team performance (KPIs & PAF) while delivering modern scalable applications.',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'kryterion-lead',
    role: 'Software Engineering Team Lead',
    company: 'Kryterion, Inc.',
    location: 'Remote / Naga City, Philippines',
    period: 'Oct 2024 — Present',
    isCurrent: true,
    summary: 'Leading engineering team execution, architectural scaling, and full-stack development across web and mobile platforms.',
    responsibilities: [
      'Lead the design, development, and scaling of modern web and mobile applications using Java, SQL, Vue.js, Next.js, Tailwind CSS, Flutter, and React Native (iOS and Android).',
      'Provide technical leadership and architectural guidance to ensure the quality, performance, and scalability of software solutions.',
      'Mentor software engineers through regular 1-on-1 sessions, performance reviews, and career development planning.',
      'Coordinate with cross-functional teams, including Software Engineers, Product Team, Business Analysts, UI/UX Designers, QAs, DevOps, DBAs, CTO, and Managers to align priorities and drive strategic initiatives.',
      'Champion Agile methodologies, improving team workflows, sprint planning, and delivery efficiency.',
      'Foster a collaborative and growth-oriented engineering culture focused on innovation and continuous improvement.',
    ],
    technologies: ['Java (Spring Boot)', 'Vue.js', 'Next.js', 'Flutter', 'React Native', 'Tailwind CSS', 'SQL', 'Team Leadership', 'Agile Scrum'],
  },
  {
    id: 'kryterion-engineer',
    role: 'Software Engineer (Full Stack)',
    company: 'Kryterion, Inc.',
    location: 'Remote / Naga City, Philippines',
    period: 'Nov 2023 — Oct 2024',
    summary: 'Full-stack engineering for scalable cloud platforms, microservices, and secure API integrations.',
    responsibilities: [
      'Worked effectively in a fully remote environment, collaborating through Microsoft Teams, Slack, and Jira.',
      'Collaborated closely with international, cross-functional teams including Product Owners, Engineering Managers, TPMs, BAs, QAs, DevOps, UI/UX Designers, and fellow engineers to deliver high-quality features.',
      'Developed and maintained web and mobile applications with a focus on scalability, performance, and maintainability.',
      'Designed and integrated RESTful APIs with secure authentication to ensure protected access and reliable communication.',
      'Participated in Agile Scrum ceremonies such as sprint planning, stand-ups, and retrospectives to ensure alignment and timely delivery.',
    ],
    technologies: ['Java (Spring Boot)', 'Vue.js', 'Next.js', 'Flutter', 'React Native', 'Node.js', 'MariaDB', 'Liquibase', 'JWT', 'REST API', 'Docker', 'Jenkins', 'AWS', 'Redis'],
  },
  {
    id: 'caceres-fullstack',
    role: 'Full Stack Developer',
    company: 'Archdiocese of Caceres',
    location: 'Naga City, Philippines',
    period: 'Sept 2021 — Nov 2023',
    summary: 'Architecting and deploying full-stack web and mobile systems, database architectures, and automated tools.',
    responsibilities: [
      'Designed, developed, and deployed scalable full-stack web and mobile applications, delivering features across frontend, backend, APIs, and databases.',
      'Performed in-depth debugging, root-cause analysis, and issue resolution to ensure application stability and user satisfaction.',
      'Managed server environments, implemented CI/CD pipelines, and secured system architecture to achieve reliable uptime and performance.',
      'Built integrations and automation tools for tasks such as document generation, data processing, and reporting, reducing manual effort.',
      'Delivered technical assistance, onboarding sessions, and user documentation to ensure smooth adoption and usability.',
      'Applied access controls, monitoring, and routine audits to safeguard sensitive information and maintain compliance standards.',
    ],
    technologies: ['Java', 'PHP', 'React', 'Node.js', 'Bootstrap', 'REST API', 'CI/CD Pipelines', 'SQL Databases'],
  },
  {
    id: 'caceres-system',
    role: 'System Developer',
    company: 'Archdiocese of Caceres',
    location: 'Naga City, Philippines',
    period: 'Dec 2016 — Aug 2021',
    summary: 'Building administrative software, process automation, and database systems.',
    responsibilities: [
      'Progressed from IT and administrative support into system development, contributing to the design, development, and maintenance of web and mobile applications.',
      'Built solutions to digitize scheduling, contribution tracking, and reporting, reducing manual workload and improving accuracy.',
      'Improved usability, performance, and workflows in financial and administrative systems, resulting in more efficient operations.',
      'Delivered day-to-day IT assistance to end users, ensuring minimal downtime and smooth system adoption.',
      'Structured databases, implemented backend logic, and adjusted frontend interfaces to support complete system functionality.',
    ],
    technologies: ['Java', 'PHP', 'Electron JS', 'Python', 'MySQL', 'CouchDB', 'PouchDB', 'Android Studio'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'qapione-saas',
    title: 'QAPione — Automated Quality Assurance Platform',
    category: 'Web & Cloud',
    projectType: 'SaaS / B2B Platform Project',
    database: 'Supabase (PostgreSQL)',
    description: 'Cloud-native automated software testing and QA workflow manager.',
    liveUrl: 'https://www.qapione.com/',
    techStack: ['Next.js', 'Vue.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    highlights: [
      'Multi-tenant SaaS with Supabase PostgreSQL & Row Level Security.',
      'Automated test suite execution and real-time result dashboards.',
    ],
  },
  {
    id: 'stelifo-platform',
    title: 'Stelifo — Enterprise B2B Digital Platform',
    category: 'Web & Cloud',
    projectType: 'B2B Digital Platform Project',
    database: 'Supabase (PostgreSQL)',
    description: 'Digital transformation software suite for business process automation.',
    liveUrl: 'https://stelifo.com/',
    techStack: ['Next.js', 'React', 'Electron JS', 'Supabase', 'Node.js'],
    highlights: [
      'Cross-platform support across Web and Desktop (Electron JS).',
      'Real-time data synchronization and client portal.',
    ],
  },
  {
    id: 'vibe-ai',
    title: 'Vibe AI — Intelligent Workspace Assistant',
    category: 'Web & Cloud',
    projectType: 'SaaS / AI Product Project',
    database: 'Supabase (PostgreSQL)',
    description: 'AI-driven content and productivity engine powered by generative AI models.',
    liveUrl: 'https://vibe-ai-rho.vercel.app/',
    techStack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    highlights: [
      'Integrated LLM API streams for prompt generation and code refactoring.',
      'High-performance responsive UI built with Next.js App Router.',
    ],
  },
  {
    id: 'kryterion-engine',
    title: 'Kryterion Online Test Delivery Engine',
    category: 'Enterprise & Automation',
    projectType: 'Enterprise Platform Project',
    company: 'Kryterion, Inc.',
    database: 'MariaDB + Redis Caching',
    description: 'High-concurrency global exam delivery platform serving thousands of candidates simultaneously.',
    techStack: ['Java (Spring Boot)', 'PHP', 'MariaDB', 'Redis', 'Docker', 'Jenkins'],
    highlights: [
      'Optimized backend queries reducing latency by 35%.',
      'Maintained high-security candidate proctoring and exam session state.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend & APIs',
    skills: ['Java (Spring Boot)', 'Node.js / Express', 'PHP', 'C# / .NET', 'REST APIs', 'GraphQL', 'Microservices'],
  },
  {
    id: 'frontend',
    name: 'Frontend Web',
    skills: ['Next.js (App Router)', 'Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Bootstrap', 'HTML5 / CSS3'],
  },
  {
    id: 'mobile',
    name: 'Mobile & Desktop',
    skills: ['Flutter (iOS/Android)', 'React Native', 'Electron JS (Desktop)', 'Cross-Platform Architecture'],
  },
  {
    id: 'aitools',
    name: 'AI Tools & Productivity',
    skills: ['Gemini Antigravity', 'Claude Code AI', 'GitHub Copilot', 'Prompt Engineering', 'AI Workflow Integration'],
  },
  {
    id: 'devops',
    name: 'Databases & DevOps',
    skills: ['Supabase (PostgreSQL)', 'MariaDB / MySQL', 'Redis', 'Docker', 'Git', 'Jenkins CI/CD', 'AWS Cloud Services'],
  },
  {
    id: 'leadership',
    name: 'Leadership & Delivery',
    skills: ['Team Leadership', 'Team KPIs Management', 'Performance Appraisal Frameworks (PAF)', '1-on-1 Mentorship', 'Agile Scrum Delivery'],
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
    details: 'Advanced coursework in Software Engineering Architecture, Enterprise Systems, and IT Management.',
  },
  {
    id: 'bsit',
    degree: 'Bachelor of Science in Information Technology (BS IT)',
    institution: 'Partido State University',
    period: '2012 — 2016',
    location: 'Camarines Sur, Philippines',
    badge: 'Graduated',
    details: 'Graduated with strong foundations in Computer Science, Data Structures, and Algorithmic Programming.',
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
    description: 'Promoted to lead full-stack engineering team, managing platform architecture, team KPIs, and PAF reviews.',
    iconName: 'Award',
  },
];
