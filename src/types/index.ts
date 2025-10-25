export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
  link?: string;
}

export interface Patent {
  id: number;
  title: string;
  patentNumber: string;
  filingDate: string;
  status: string;
  description: string;
  link?: string;
}

export interface Certification {
  id: number;
  name: string;
  institution: string;
  date: string;
  skills: string[];
  link?: string;
  badge?: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

export interface Publication {
  id: number;
  title: string;
  authors: string;
  venue?: string;
  date: string;
  description: string;
  link?: string;
}

export type TabType = 'about' | 'experience' | 'patents' | 'certifications' | 'projects' | 'publications' | 'contact';
