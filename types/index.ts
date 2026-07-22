export interface NavLink {
  name: string;
  id: string;
}

export interface Specialty {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
}