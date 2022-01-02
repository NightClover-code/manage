//importing components
import Header from '../components/Header';
import Footer from '../components/Footer';
//importing utils
import { hideNav, disableScroll } from '../utils';
import { NavContext } from '../context';
import { useEffect, useContext } from 'react';

const MainLayout: React.FC = ({ children }) => {
  const { isNavHidden, setIsNavHidden } = useContext(NavContext);

  useEffect(() => {
    hideNav(setIsNavHidden);
  }, [setIsNavHidden]);

  useEffect(() => {
    disableScroll(isNavHidden);
  }, [isNavHidden]);

  return (
    <div className="app__container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
