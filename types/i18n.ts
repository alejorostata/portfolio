export type Locale = 'en' | 'es' | 'fil' | 'de' | 'ja' | 'ko' | 'zh';

export interface LanguageOption {
  code: Locale;
  label: string;
  englishName: string;
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
    brandName: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
    getInTouch: string;
  };
  hero: {
    availabilityBadge: string;
    greeting: string;
    name: string;
    role: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    tagline: string;
    location: string;
    company: string;
    degree: string;
    btnExploreExperience: string;
    btnReviewCV: string;
    consoleOverviewTab: string;
    consoleStackTab: string;
    consoleLeadershipTab: string;
    consoleAiTab: string;
    consoleOverviewHeader: string;
    consolePrimaryRoleLabel: string;
    consolePrimaryRoleVal: string;
    consoleCoreSpecLabel: string;
    consoleCoreSpecVal: string;
    consoleLeadershipLabel: string;
    consoleLeadershipVal: string;
    consoleStackHeader: string;
    consoleLeadershipHeader: string;
    consoleEvalVal: string;
    consoleMentorshipVal: string;
    consoleAgileVal: string;
    consoleAiHeader: string;
    consoleImpactVal: string;
    consoleStatus: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    present: string;
    keyResponsibilities: string;
    techAndTools: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    allSkills: string;
    filterLabel: string;
    skillsCount: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    liveSite: string;
    database: string;
    highlights: string;
    visitLiveSite: string;
  };
  education: {
    badge: string;
    title: string;
    subtitle: string;
    formalEducation: string;
    honors: string;
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
    namePlaceholder: string;
    emailField: string;
    emailPlaceholder: string;
    subjectField: string;
    subjectPlaceholder: string;
    messageField: string;
    messagePlaceholder: string;
    btnSend: string;
    copiedClipboard: string;
    copiedViber: string;
    openingMailClient: string;
    mailClientSubtext: string;
    sendEmailTo: string;
  };
  cvModal: {
    title: string;
    verifiedPdf: string;
    webResumeTab: string;
    pdfDocTab: string;
    downloadBtn: string;
    shareBtn: string;
    openNewTab: string;
    copyLinkSuccess: string;
    closeBtn: string;
  };
  footer: {
    rights: string;
    backToTop: string;
    wcagBadge: string;
    visits: string;
    techNote: string;
  };
}
