export type NavItem = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  website?: string;
  highlights: string[];
};

export type ProjectMediaType = "youtube" | "image" | "placeholder";

export type ProjectItem = {
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  mediaType: ProjectMediaType;
  mediaUrl?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  githubUrl?: string;
  accent: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  detail: string;
  website?: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
  summary: string;
  credentialUrl?: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type PortfolioData = {
  nav: NavItem[];
  title: string;
  heroBlurb: string;
  stats: { label: string; value: string }[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  certifications: CertificationItem[];
  contact: ContactItem[];
};
