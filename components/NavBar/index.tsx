//importing components
import Button from '../Button';
import { ChevronDownIcon, Logo } from '../Icons';

const NavBar = () => {
  return (
    <nav className="flex__between mt-10 font-semibold">
      <Logo className="mt-2" />
      <ul className="flex__center">
        <li className="list__item">Features</li>
        <li className="list__item">Pricing</li>
        <li className="flex__center list__item !mr-3">
          Resources <ChevronDownIcon />
        </li>
        <li className="list__item">About</li>
        <li className="list__item">Blog</li>
      </ul>
      <ul className="flex__center">
        <li className="!mr-6 list__item">Login</li>
        <li className="!mx-0">
          <Button className="button">Sign up</Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
