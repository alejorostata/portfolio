export type Locale = 'en' | 'es' | 'fil' | 'de' | 'ja' | 'ko' | 'zh';

export interface LanguageOption {
  code: Locale;
  label: string;      // Native endonym (e.g. "日本語", "Español")
  englishName: string; // English name (e.g. "Japanese", "Spanish")
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', englishName: 'English' },
  { code: 'es', label: 'Español', englishName: 'Spanish' },
  { code: 'fil', label: 'Filipino', englishName: 'Filipino' },
  { code: 'de', label: 'Deutsch', englishName: 'German' },
  { code: 'ja', label: '日本語', englishName: 'Japanese' },
  { code: 'ko', label: '한국어', englishName: 'Korean' },
  { code: 'zh', label: '中文', englishName: 'Chinese (Simplified)' },
];

export interface TranslationSchema {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
    getInTouch: string;
    cvModal: string;
  };
  hero: {
    availabilityBadge: string;
    title: string;
    role: string;
    tagline: string;
    location: string;
    company: string;
    degree: string;
    btnContact: string;
    btnCV: string;
    btnGitHub: string;
    btnLinkedIn: string;
    statsYears: string;
    statsYearsLabel: string;
    statsProjects: string;
    statsProjectsLabel: string;
    statsTeams: string;
    statsTeamsLabel: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    present: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    allCategories: string;
    selectCategory: string;
    categories: {
      languages: string;
      frontend: string;
      backend: string;
      mobile: string;
      database: string;
      devops: string;
    };
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    viewCode: string;
    viewDemo: string;
    featured: string;
  };
  education: {
    badge: string;
    title: string;
    subtitle: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    mobileLabel: string;
    viberActive: string;
    locationLabel: string;
    locationValue: string;
    formTitle: string;
    nameField: string;
    emailField: string;
    subjectField: string;
    messageField: string;
    btnSend: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
  };
  cvModal: {
    title: string;
    downloadBtn: string;
    shareBtn: string;
    copyLinkSuccess: string;
    tabOverview: string;
    tabExperience: string;
    tabSkills: string;
    tabEducation: string;
    closeBtn: string;
  };
  footer: {
    rights: string;
    backToTop: string;
    visits: string;
    wcagBadge: string;
  };
}
