//importing components
import Button from '../Button';
import CustomImage from '../CustomImage';
import { ChevronDownIcon, Logo } from '../Icons';

const NavBar = () => {
  return (
    <nav className="flex__between mt-10 font-semibold">
      <Logo className="mt-2" />
      <ul className="flex__center lg:hidden">
        <li className="list__item">Features</li>
        <li className="list__item">About</li>
        <li className="flex__center list__item !mr-2 hover:text-orange hover:after:bg-orange">
          Services <ChevronDownIcon />
        </li>
        <li className="list__item">Testimonials</li>
      </ul>
      <ul className="flex__center lg:hidden">
        <li className="!mr-6 list__item">Login</li>
        <li className="!mx-0">
          <Button className="button">Sign up</Button>
        </li>
      </ul>
      <CustomImage
        className="hidden lg:block"
        src="/images/menu.svg"
        width={30}
        height={30}
        alt="menu"
      />
    </nav>
  );
};

export default NavBar;
