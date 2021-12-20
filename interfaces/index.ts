import { Dispatch, SetStateAction } from 'react';

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

export interface AdvantagesState {
  advantages: AdvantageInterface[];
  setAdvantages: Dispatch<SetStateAction<AdvantageInterface[]>>;
}
