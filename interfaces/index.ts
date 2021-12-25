export interface AdvantageInterface {
  title: string;
  description: string;
  image: ImageInterface;
}

export interface ImageInterface {
  url: string;
  alt: string;
  imgWidth: number;
  imgHeight: number;
  position?: string;
}

export interface AchievementInterface {
  title: string;
  result: number;
  borderLeft: boolean;
  borderBottom: boolean;
  resultType?: string;
}

export interface ServiceInterface {
  serviceType: string;
  isSpecial: boolean;
  price: number;
  listItems: string[];
}

export interface TestimonialInterface {
  name: string;
  content: string;
  avatar: ImageInterface;
  company: ImageInterface;
}
