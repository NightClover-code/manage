//importing components
import Button from '../Button';
import CustomImage from '../CustomImage';

const NavBar = () => {
  return (
    <nav className="flex__between mt-10 font-semibold">
      <CustomImage
        className="cursor-pointer flex__center"
        width={146}
        height={24}
        src="/images/logo.svg"
        alt="logo"
      />
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
        <li className="mr-2">Login</li>
        <li>
          <Button className="button">Sign up</Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
