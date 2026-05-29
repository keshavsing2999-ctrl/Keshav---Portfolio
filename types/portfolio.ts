export interface Social {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
  phone: string;
  website: string;
}

export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  yearsOfExperience: string;
  bio: string;
  avatarImg: string;
  social: Social;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link: string;
  image?: string;
  images?: string[];
  highlight: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: string[];
  testimonials: Testimonial[];
}
