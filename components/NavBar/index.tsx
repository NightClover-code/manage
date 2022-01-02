//importing hooks & utils
import jump from 'jump.js';
import { useContext } from 'react';
import { NavContext } from '../../context';
//importing components
import Button from '../Button';
import { ChevronDownIcon, CloseIcon, Logo, MenuIcon } from '../Icons';

const NavBar = () => {
  const { isNavHidden, setIsNavHidden } = useContext(NavContext);

  return (
    <nav className="flex__between mt-10 font-semibold">
      <Logo className="mt-2" color={!isNavHidden ? 'white' : '#213F70'} />
      <ul className="flex__center lg:hidden">
        <li
          className="list__item"
          onClick={() =>
            jump('.advantages__section', {
              offset: -150,
              duration: 1200,
            })
          }
        >
          Features
        </li>
        <li
          className="list__item"
          onClick={() =>
            jump('.about__section', {
              offset: -100,
              duration: 1200,
            })
          }
        >
          About
        </li>
        <li
          className="flex__center list__item !mr-2 hover:text-orange hover:after:bg-orange"
          onClick={() =>
            jump('.services__section', {
              offset: -100,
              duration: 1200,
            })
          }
        >
          Services <ChevronDownIcon />
        </li>
        <li
          className="list__item"
          onClick={() =>
            jump('.testimonials__section', {
              duration: 1200,
            })
          }
        >
          Testimonials
        </li>
      </ul>
      <ul className="flex__center lg:hidden">
        <li className="!mr-6 list__item">Login</li>
        <li className="!mx-0">
          <Button className="button">Sign up</Button>
        </li>
      </ul>
      <div
        className="cursor-pointer hidden lg:block"
        onClick={() => setIsNavHidden(!isNavHidden)}
      >
        {isNavHidden ? <MenuIcon /> : <CloseIcon />}
      </div>
    </nav>
  );
};

export default NavBar;
