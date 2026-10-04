export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'training'
  | 'internships'
  | 'technologies'
  | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  description: string;
  capabilities: string[];
  process: { step: string; label: string; detail: string }[];
  technologies: string[];
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'CMS & Platforms' | 'Analytics & Marketing';
  role: string;
  description: string;
}

export interface CourseItem {
  id: string;
  title: string;
  category: 'Web & Frontend' | 'Backend & Database' | 'Digital Marketing' | 'Full Stack';
  summary: string;
  overview: string;
  keyTechnologies: string[];
  learningOutcomes: string[];
  format: string;
  targetAudience: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  requirement: string;
  message: string;
}
