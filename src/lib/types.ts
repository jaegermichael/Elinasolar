export interface NavItem {
  label: string;
  href: string;
}

export interface StatCard {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  capacity?: string;
  completionDate?: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  service: string;
  rating: number;
  image: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}