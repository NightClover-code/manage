import { Dispatch, SetStateAction } from 'react';

export const hideNav = (setIsNavHidden: Dispatch<SetStateAction<boolean>>) => {
  window.addEventListener('resize', (e: any) => {
    if (e.target.innerWidth > 840) {
      setIsNavHidden(true);
    }
  });
};

export const disableScroll = (isNavHidden: boolean) => {
  if (!isNavHidden) {
    document.body.classList.add('disable__scroll');
  } else {
    document.body.classList.remove('disable__scroll');
  }
};

export * from './config';
