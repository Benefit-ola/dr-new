import { Specialty, Stat, Fact, ContactLink, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { name: "Home",         id: "home" },
  { name: "About",        id: "about" },
  { name: "Experience",   id: "experience" },
  { name: "Research",     id: "research" },
  { name: "Contact",      id: "contact" },
];

export const stats: Stat[] = [
  { num: "5+", label: "Years experience" },
  { num: "5,000+", label: "Patients treated" },
  { num: "3", label: "Specialties" },
  { num: "98%", label: "Patient satisfaction" },
];

export const specialties: Specialty[] = [
  {
    icon: "🦠",
    title: "Infectious Disease Control",
    description:
      "Diagnosis, treatment and prevention of infectious diseases including tropical illnesses, outbreak management and infection control protocols.",
  },
  {
    icon: "🧠",
    title: "Mental Health Counseling",
    description:
      "Compassionate, evidence-based support for anxiety, depression, stress management and overall psychological wellbeing.",
  },
  {
    icon: "🛡️",
    title: "Preventive Medicine",
    description:
      "Personalised screening programmes, lifestyle counseling and vaccination to prevent illness before it starts.",
  },
];

export const facts: Fact[] = [
  { label: "Qualification", value: "MBBS, MPH" },
  { label: "Location", value: "Lagos, Nigeria" },
  { label: "Languages", value: "English · Yoruba" },
  { label: "Availability", value: "Mon – Sat" },
];

export const contactLinks: ContactLink[] = [
  {
    icon: "✉️",
    label: "Email",
    value: "adekunlemisbau5@gmail.com",
    href: "mailto:adekunlemisbau5@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+234 8179594131 ",
    href: "tel:+234 8179594131 ",
  },
  { icon: "📍", label: "Location", value: "Lagos, Nigeria", href: "#" },
];
