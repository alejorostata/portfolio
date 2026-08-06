export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  summary?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web & Cloud' | 'Mobile App' | 'Enterprise & Automation' | 'DevOps & Tooling';
  description: string;
  highlights: string[];
  techStack: string[];
  company?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  iconName: string;
}
