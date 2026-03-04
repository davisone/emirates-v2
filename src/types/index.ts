export type Airport = {
  code: string;
  name: string;
  city: string;
  country: string;
};

export type Destination = {
  slug: string;
  city: string;
  country: string;
  image: string;
  description: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export type CabinClass = "first" | "business" | "premium-economy" | "economy";

export type ServiceItem = {
  icon: string;
  label: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
};
