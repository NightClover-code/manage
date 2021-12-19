//importing components
import Button from '../Button';
import { ChevronRightIcon } from '../Icons';
import CustomImage from '../CustomImage';

const NavBar = () => {
  return (
    <nav className="flex__between mt-10 font-medium">
      <CustomImage
        className="cursor-pointer flex__center"
        width={146}
        height={24}
        src="/images/logo.svg"
        alt="logo"
      />
      <ul className="flex">
        <li>Features</li>
        <li>Pricing</li>
        <li className="flex__center">
          Resources <ChevronRightIcon />
        </li>
        <li>About</li>
        <li>Blog</li>
      </ul>
      <ul className="flex__center">
        <li className="mr-2">Login</li>
        <li>
          <Button>Sign up</Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
