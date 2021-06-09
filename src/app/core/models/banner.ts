export interface Banner {
  img: string;
  title: string;
  description: string;
  btn: string;
  link: string;
}

export interface EcombannerOptions {
  items?: number;
  nav?: boolean;
  navClass?: string[];
  navText?: string[];
  dots?: boolean;
  autoplay?: boolean;
  slideSpeed?: number;
  loop?: boolean;
  margin?: number;
}

export interface Offer {
  img: string;
}
