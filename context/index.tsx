import { createContext, useState } from 'react';
import { isNavHiddenState } from '../interfaces';

//context
export const NavContext = createContext<isNavHiddenState>({
  isNavHidden: true,
  setIsNavHidden: () => '',
});

export const NavProvider: React.FC = ({ children }) => {
  const [isNavHidden, setIsNavHidden] = useState(true);

  return (
    <NavContext.Provider value={{ isNavHidden, setIsNavHidden }}>
      {children}
    </NavContext.Provider>
  );
};
