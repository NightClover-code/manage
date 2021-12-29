import { useEffect, useState, type Dispatch, type SetStateAction} from 'react';
import { useWindowWidth } from './useWindowWidth';

export const useCounter = () => {
  const [counter, setCounter] = useState<number>(0);
  const width = useWindowWidth();

  useEffect(() => setCounter(0), [width]);

  return [counter, setCounter] as [number, Dispatch<SetStateAction<number>>];
};
