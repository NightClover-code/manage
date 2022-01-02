//importing hooks & components
import { useContext } from 'react';
import { NavContext } from '../../context';
import NavBar from '../NavBar';

const Header = () => {
  const { isNavHidden } = useContext(NavContext);

  return (
    <header
      className={`absolute left-0 top-0 w-full bg-transparent z-50 ${
        !isNavHidden ? 'overlay' : ''
      }`}
    >
      <div className="custom__container">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
