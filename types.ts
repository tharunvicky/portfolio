export interface HeroData {
  name: string;
  role: string;
  tagline: string;
  cta: {
    resume: string;
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface AboutData {
  description: string[];
}

export interface SkillsData {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  points: string[];
  githubLink: string;
}

export interface AchievementsData {
  cgpa: string;
  certificationsCount: string;
  projectsCount: string;
  githubRepos: string;
}

export interface Certification {
  title: string;
  platform: string;
  link?: string;
}

export interface FooterData {
  github: string;
  linkedin: string;
  copyright: string;
  email: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: SkillsData;
  projects: Project[];
  achievements: AchievementsData;
  certifications: Certification[];
  footer: FooterData;
}