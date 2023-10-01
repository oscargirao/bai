import { ElementType } from "react";

export interface MenuResponsivenessNavProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Solution {
  id: string;
  name: string;
  headline: string;
  description: string;
  shortDescription: string;
  pageContent: string;
  icon: ElementType;
}

export interface HeaderLink {
  name: string;
  href: string;
  subMenu?: any;
}
