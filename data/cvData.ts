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
    id: 'kryterion',
    role: 'Software Engineering Team Lead',
    company: 'Kryterion Inc.',
    location: 'Phoenix, Arizona, USA (Remote / Naga City)',
    period: 'Mar 2021 — Present',
    isCurrent: true,
    summary: 'Directing a team of software engineers while maintaining hands-on full-stack development for high-stakes online assessment and test delivery platforms.',
    responsibilities: [
      'Engineered and scaled core test delivery engines handling thousands of concurrent high-stakes candidate exam sessions globally.',
      'Established and managed Team Key Performance Indicators (KPIs) and Performance Appraisal Frameworks (PAF) to evaluate engineering throughput and foster career progression.',
      'Architected resilient backend APIs using MariaDB, Redis caching, and PHP, reducing API response latency by 35%.',
      'Pioneered AI-assisted development workflows (Claude Code AI, Copilot, Antigravity) to accelerate feature shipping and code refactoring.',
      'Led Agile Scrum ceremonies, sprint planning, pull request code reviews, and cross-functional technical alignment.',
    ],
    technologies: ['PHP', 'MariaDB', 'Redis', 'Node.js', 'Docker', 'Git', 'Agile Scrum', 'KPIs & PAF Management'],
  },
  {
    id: 'qapione',
    role: 'Lead Full Stack Software Engineer',
    company: 'QAPione Platform',
    location: 'Remote',
    period: '2023 — Present',
    isCurrent: true,
    summary: 'Lead architect for QAPione, an automated quality assurance and testing SaaS platform.',
    responsibilities: [
      'Designed end-to-end cloud architecture using Next.js 16, Vue.js, Node.js, and Supabase (PostgreSQL).',
      'Integrated real-time execution dashboards and automated test suite runners with instant email notification alerts.',
      'Implemented row-level security (RLS) policies and JWT authentication in Supabase for multi-tenant isolation.',
    ],
    technologies: ['Next.js', 'Vue.js', 'Node.js', 'Supabase (PostgreSQL)', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'stelifo',
    role: 'Full Stack Engineer & Co-Founder',
    company: 'Stelifo Digital Solutions',
    location: 'Remote',
    period: '2022 — Present',
    isCurrent: true,
    summary: 'Architecting B2B digital transformation platforms and custom enterprise solutions.',
    responsibilities: [
      'Developed responsive web and cross-platform desktop applications (Electron JS) for enterprise clients.',
      'Built automated CI/CD deployment pipelines using GitHub Actions, Docker, and cloud hosting.',
    ],
    technologies: ['React', 'Next.js', 'Electron JS', 'Supabase', 'Node.js', 'Docker'],
  },
  {
    id: 'archdiocese',
    role: 'Software Systems Developer',
    company: 'Archdiocese of Caceres',
    location: 'Naga City, Philippines',
    period: 'Nov 2016 — Mar 2021',
    summary: 'Engineered centralized diocesan administrative systems, financial tracking databases, and record management software.',
    responsibilities: [
      'Built custom accounting and records management software serving parish networks across the Caceres region.',
      'Developed desktop and web applications in C# / .NET, Java, and MySQL.',
      'Trained non-technical parish staff and maintained 99.9% database uptime.',
    ],
    technologies: ['Java', 'C# / .NET', 'MySQL', 'PHP', 'JavaScript', 'SQL Server'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'qapione-saas',
    title: 'QAPione — Automated Quality Assurance Platform',
    category: 'Web & Cloud',
    projectType: 'SaaS / B2B',
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
    projectType: 'B2B Digital Platform',
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
    projectType: 'SaaS / AI Product',
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
    projectType: 'Enterprise Core System',
    company: 'Kryterion Inc.',
    database: 'MariaDB + Redis Caching',
    description: 'High-concurrency global exam delivery platform serving thousands of candidates simultaneously.',
    techStack: ['PHP', 'MariaDB', 'Redis', 'Docker', 'Jenkins', 'Linux'],
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
    skills: ['Next.js (App Router)', 'Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'State Management'],
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
    period: 'Graduate Candidate',
    location: 'Naga City, Philippines',
    badge: 'Graduate Study',
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
    year: '2021',
    organization: 'Kryterion Inc.',
    description: 'Promoted to lead full-stack engineering team, managing platform architecture, team KPIs, and PAF reviews.',
    iconName: 'Award',
  },
];
