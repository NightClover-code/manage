import Button from '../Button';
import { ChevronRightIcon, Logo } from '../Icons';

const NavBar = () => {
  return (
    <nav className="flex__between mt-[55px] font-medium">
      <div className="cursor-pointer">
        <Logo />
      </div>
      <ul className="flex__center gap-[40px]">
        <li>Features</li>
        <li>Pricing</li>
        <li className="flex__center">
          Resources <ChevronRightIcon />
        </li>
        <li>About</li>
        <li>Blog</li>
      </ul>
      <ul className="flex__center">
        <li>Login</li>
        <li>
          <Button className="ml-5">Sign up</Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
