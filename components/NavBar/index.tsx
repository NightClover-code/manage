//importing components
import Button from '../Button';
import CustomImage from '../CustomImage';
import { Logo } from '../Icons';

const NavBar = () => {
  return (
    <nav className="flex__between mt-10 font-semibold">
      <Logo className="mt-2" />
      <ul className="flex__center">
        <li>Features</li>
        <li>Pricing</li>
        <li className="flex__center">
          Resources{' '}
          <CustomImage
            className="mt-2"
            src="/images/chevron-right.svg"
            width={18}
            height={18}
            alt="chevron-right icon"
          />
        </li>
        <li>About</li>
        <li>Blog</li>
      </ul>
      <ul className="flex__center">
        <li className="mr-7">Login</li>
        <li className="!mx-0">
          <Button className="button">Sign up</Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
