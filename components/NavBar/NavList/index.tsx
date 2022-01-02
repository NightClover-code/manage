//importing components
import Button from '../../Button';
import { ChevronDownIcon } from '../../Icons';
//importing utils
import jump from 'jump.js';
import { NavContext } from '../../../context';
import { useContext } from 'react';

const NavList = () => {
  const { isNavHidden, setIsNavHidden } = useContext(NavContext);

  const onListItemClickHandler = (className: string, options: jump.Options) => {
    setIsNavHidden(true);

    jump(className, options);
  };

  return (
    <>
      <ul
        className={`flex__center lg:hidden ${!isNavHidden ? 'lg:!block' : ''}`}
      >
        <li
          className="list__item"
          onClick={() =>
            onListItemClickHandler('.advantages__section', {
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
            onListItemClickHandler('.about__section', {
              offset: -100,
              duration: 1200,
            })
          }
        >
          About
        </li>
        <li
          className="flex__center list__item !mr-2 hover:text-orange hover:after:bg-orange lg:!mx-0"
          onClick={() =>
            onListItemClickHandler('.services__section', {
              offset: -100,
              duration: 1200,
            })
          }
        >
          Services{' '}
          <ChevronDownIcon color={isNavHidden ? '#213F70' : '#ffffff'} />
        </li>
        <li
          className="list__item"
          onClick={() =>
            onListItemClickHandler('.testimonials__section', {
              duration: 1400,
            })
          }
        >
          Testimonials
        </li>
      </ul>
      <ul
        className={`flex__center lg:hidden ${!isNavHidden ? 'lg:!block' : ''}`}
      >
        <li className="!mr-6 list__item lg:border-b-1 lg:!mx-0">Login</li>
        <li className="!mx-0">
          <Button className="button lg:mt-10 lg:w-full lg:text-[18px] lg:py-4 lg:uppercase lg:tracking-[2px]">
            Sign up
          </Button>
        </li>
      </ul>
    </>
  );
};

export default NavList;
