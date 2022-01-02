//importing components
import Button from '../../Button';
import { ChevronDownIcon } from '../../Icons';
//importing utils
import jump from 'jump.js';
import { NavContext } from '../../../context';
import { useContext } from 'react';

const NavList = () => {
  const { isNavHidden } = useContext(NavContext);

  return (
    <>
      <ul
        className={`flex__center lg:hidden ${!isNavHidden ? 'lg:!block' : ''}`}
      >
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
      <ul
        className={`flex__center lg:hidden ${!isNavHidden ? 'lg:!block' : ''}`}
      >
        <li className="!mr-6 list__item">Login</li>
        <li className="!mx-0">
          <Button className="button">Sign up</Button>
        </li>
      </ul>
    </>
  );
};

export default NavList;
