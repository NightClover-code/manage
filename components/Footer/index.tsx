import Button from '../Button';
import CustomImage from '../CustomImage';
import { Logo } from '../Icons';

const Footer = () => {
  return (
    <footer className="bg-darkGray pt-16">
      <div className="custom__container">
        <div className="flex justify-between mb-36">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col max-w-[170px] mt-[6px]">
              <Logo color="white" />
              <p className="text-tiny text-veryOffWhite leading-6 mt-4">
                Bring everyone together to build better products
              </p>
              <div className="grid grid-cols-footer gap-2 mt-5">
                <CustomImage
                  className="w-6 h-6 bg-white rounded-full flex__center cursor-pointer"
                  src="/images/twitter.svg"
                  width={12}
                  height={11}
                  alt="twitter"
                />
                <CustomImage
                  className="w-6 h-6 bg-white rounded-full flex__center cursor-pointer"
                  src="/images/instagram.svg"
                  width={12}
                  height={11}
                  alt="instagram"
                />
                <CustomImage
                  className="w-6 h-6 bg-white rounded-full flex__center cursor-pointer"
                  src="/images/youtube.svg"
                  width={12}
                  height={11}
                  alt="youtube"
                />
                <CustomImage
                  className="w-6 h-6 bg-white rounded-full flex__center cursor-pointer"
                  src="/images/dribbble.svg"
                  width={12}
                  height={11}
                  alt="dribbble"
                />
              </div>
            </div>
            <div className="flex">
              <ul>
                <li className="title">Solution</li>
                <li className="footer__item">Project Management</li>
                <li className="footer__item">Task Assigning</li>
                <li className="footer__item">Sales Tracking</li>
              </ul>
              <ul className="ml-20">
                <li className="title">Company</li>
                <li className="footer__item">About</li>
                <li className="footer__item">Leadership</li>
                <li className="footer__item">Customers</li>
                <li className="footer__item">Career</li>
              </ul>
              <ul className="ml-20">
                <li className="title">Support</li>
                <li className="footer__item">info@manage.com</li>
                <li className="footer__item">1-882-615-198</li>
                <li className="footer__item">
                  5620, Randel Street, Creek Rd, LA
                </li>
              </ul>
            </div>
          </div>
          <ul className="ml-10">
            <li className="title mx-0">Stay up to date</li>
            <li className="mx-0">
              <form className="w-[220px] h-[40px] relative mt-6">
                <input
                  type="email"
                  className="w-full h-full rounded-full outline-none border-none border-0 px-4 text-[12px]"
                  placeholder="Your email address"
                />
                <Button type="submit">
                  <CustomImage
                    className="absolute right-4 top-[9px]"
                    src="/images/message.svg"
                    width={14}
                    height={14}
                    alt="airplane"
                  />
                </Button>
              </form>
            </li>
          </ul>
        </div>
        <div className="border-t-[1px] border-veryOffGray border-opacity-10 flex__between py-6">
          <p className="text-[13px] text-veryOffWhite opacity-30">
            &copy; Copyright 2021, Manage Inc.
          </p>
          <p className="text-[13px] text-veryOffWhite opacity-30">
            Terms of Use & Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
