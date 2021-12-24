//importing utils
import { v4 as randomID } from 'uuid';
import { ImageInterface } from '../../interfaces';
//importing components
import Button from '../Button';
import CustomImage from '../CustomImage';
import Image from 'next/image';

interface HeroProps {
  companies: ImageInterface[];
}

const Hero: React.FC<HeroProps> = ({ companies }) => {
  return (
    <section className="hero__section">
      <div className="custom__container">
        <CustomImage
          className="absolute left-24 top-[40rem] lg:hidden xl:-left-8 xxl:top-[42rem] xxl:left-0"
          width={150}
          height={150}
          src="/images/icon-bell.svg"
          alt="bell-icon"
        />
        <CustomImage
          className="absolute right-32 top-[26rem] lg:hidden xxl:right-5"
          src="/images/icon-calendar.svg"
          width={150}
          height={150}
          alt="calendar-icon"
        />
        <h1 className="mx-auto pt-52 text-center xl:text-[48px] sm:text-[42px] sm:leading-[46px]">
          Manage projects properly. <span className="text-orange">Plan</span>{' '}
          with purpose.
        </h1>
        <p className="text-center max-w-[587px] mx-auto mt-5 sm:max-w-[400px]">
          Manage makes it easier for software teams to plan day-to-day tasks,
          while keeping the larger goal in view.
        </p>
        <div className="flex__center mt-10">
          <Button className="mr-5 button">Download</Button>
          <Button className="relative !text-blue !bg-white !px-7 button">
            Register
          </Button>
        </div>
        <CustomImage
          className="relative w-full h-[695px] mt-10 mx-auto mockup:h-[550px] mockup2:h-[470px] mockup3:h-[420px] mockup4:h-[380px] mockup5:h-[320px] mockup6:h-280px"
          src="/images/mockup.svg"
          layout="fill"
          alt="mockup"
          priority
        />
        <div className="grid grid-cols-5 gap-20 items-center mt-10 mb-20 xl:gap-10 lg:gap-5 sm:mt-0">
          {companies.map(({ imgHeight, imgWidth, url, alt }) => (
            <Image
              className={alt}
              key={randomID()}
              width={imgWidth}
              height={imgHeight}
              src={url}
              alt={`${alt}-icon`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
