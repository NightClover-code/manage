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
          className="absolute left-24 top-[40rem]"
          width={150}
          height={150}
          src="/images/icon-bell.svg"
          alt="bell-icon"
        />
        <CustomImage
          className="absolute right-32 top-[26rem]"
          src="/images/icon-calendar.svg"
          width={150}
          height={150}
          alt="calendar-icon"
        />
        <h1 className="mx-auto pt-52 text-center">
          Manage projects properly. <span className="text-orange">Plan</span>{' '}
          with purpose.
        </h1>
        <p className="text-center max-w-[587px] mx-auto mt-5">
          Manage makes it easier for software teams to plan day-to-day tasks,
          while keeping the larger goal in view.
        </p>
        <div className="flex__center mt-10">
          <Button className="mr-5">Download</Button>
          <Button className="!text-blue !bg-white !px-[27px]">Register</Button>
        </div>
        <CustomImage
          className="relative w-[1066px] h-[695px] mt-10 mx-auto"
          src="/images/mockup.svg"
          layout="fill"
          alt="mockup"
          priority
        />
        <div className="grid grid-cols-5 gap-20 items-center mt-10 mb-20">
          {companies.map(({ imgHeight, imgWidth, url, alt }) => {
            return (
              <Image
                className={alt}
                key={randomID()}
                width={imgWidth}
                height={imgHeight}
                src={url}
                alt={`${alt}-icon`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
