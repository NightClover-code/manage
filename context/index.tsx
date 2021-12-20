//importing context & types
import { createContext, useState } from 'react';
import { AdvantageInterface, AdvantagesState } from '../interfaces';

//context
export const AdvantagesContext = createContext<AdvantagesState>({
  advantages: [],
  setAdvantages: () => '',
});

export const AdvantagesProvider: React.FC = ({ children }) => {
  //local state
  const [advantages, setAdvantages] = useState<AdvantageInterface[]>([]);

  return (
    <AdvantagesContext.Provider value={{ advantages, setAdvantages }}>
      {children}
    </AdvantagesContext.Provider>
  );
};
