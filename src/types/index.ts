export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}