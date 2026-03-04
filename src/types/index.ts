// ── Navigation ──

export interface NavDropdownItem {
  label: string;
  href: string;
  isOverview?: boolean;
  section?: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
  isGreen?: boolean;
}

export interface SidebarItem {
  id: string;
  label: string;
  href: string;
}

export interface SubNavItem {
  label: string;
  id: string;
}

// ── Content ──

export interface Project {
  slug: string;
  tag: string;
  name: string;
  tools: string[];
  desc: string;
  color: string;
  url?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  popularity: number;
  preview: string;      // short description (data field)
  excerpt?: string;     // alias — components can use this
  readTime?: number;
  featured: boolean;
  isReady?: boolean;
  color?: string;
}

export interface PhotoAlbum {
  gradient: string;
  label: string;
  category: string;
  items: PhotoItem[];
}

export interface PhotoItem {
  type: 'photo' | 'video' | 'gif';
  gradient: string;
  caption: string;
  duration?: string;
}

export interface Experience {
  company: string;
  location: string;
  roles: ExperienceRole[];
}

export interface ExperienceRole {
  title: string;
  period: string;
  bullets: string[];
}

export interface Education {
  years: string;
  degree: string;
  school: string;
}

// ── UI State ──

export type Overlay = 'connect' | 'album' | 'onboarding' | null;
export type Theme = 'default' | 'planning' | 'design-system';
