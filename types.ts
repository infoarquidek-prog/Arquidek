
export type ProjectCategory = 'Residencial' | 'Comercial' | 'Cultural' | 'Interiorismo';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  image: string;
  description: string;
  gallery: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface Publication {
  year: string;
  title: string;
  source: string;
  type: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}
