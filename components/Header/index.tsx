import NavBar from '../NavBar';

const Header = () => {
  return (
    <header className="absolute left-0 top-0 w-full bg-transparent z-50">
      <div className="custom__container">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
