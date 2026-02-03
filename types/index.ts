export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface Course {
  title: string;
  img: string;
  description?: string;
}

export interface CoreValue {
  title: string;
  icon: string;
  description: string;
}

export interface Stat {
  value: string | number;
  label: string;
  suffix?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}
