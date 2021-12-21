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
}

export interface AchievementInterface {
  title: string;
  result: number;
  borderLeft: boolean;
  resultType?: string;
}

export interface ServiceInterface {
  serviceType: string;
  isSpecial: boolean;
  price: number;
  listItems: string[];
}
