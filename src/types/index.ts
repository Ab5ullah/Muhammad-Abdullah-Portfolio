export interface StoreLink {
  platform: "ios" | "android";
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  company: string;
  platform: string;
  stack: string[];
  status: "live" | "in-review";
  image?: string;
  links: StoreLink[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
}
