//importing hooks & utils
import { useContext } from 'react';
import { NavContext } from '../../context';
//importing components
import { CloseIcon, Logo, MenuIcon } from '../Icons';
import NavList from './NavList';

const NavBar = () => {
  const { isNavHidden, setIsNavHidden } = useContext(NavContext);

  return (
    <nav className="flex__between items-center mt-10 font-semibold">
      <Logo className="mt-2" color={!isNavHidden ? 'white' : '#213F70'} />
      {!isNavHidden ? (
        <div className="flex-col">
          <NavList />
        </div>
      ) : (
        <NavList />
      )}
      <div
        className="cursor-pointer hidden lg:block "
        onClick={() => setIsNavHidden(!isNavHidden)}
      >
        {isNavHidden ? <MenuIcon /> : <CloseIcon />}
      </div>
    </nav>
  );
};

export default NavBar;
