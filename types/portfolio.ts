export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  badge?: string;
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Web & Cloud' | 'Mobile App' | 'Enterprise & Automation' | 'DevOps & Tooling';
  projectType: string;
  database: string;
  description: string;
  liveUrl?: string;
  company?: string;
  techStack: string[];
  highlights: string[];
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  organization: string;
  description: string;
  iconName: string;
}
