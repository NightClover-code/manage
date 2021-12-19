//importing components
import Button from '../Button';
import CustomImage from '../CustomImage';

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="custom__container">
        <CustomImage
          className="w-[150px] h-[150px] absolute left-24 top-[40rem]"
          src="/images/icon-bell.svg"
          layout="fill"
          alt="bell icon"
        />
        <CustomImage
          className="w-[150px] h-[150px] absolute right-32 top-[26rem]"
          src="/images/icon-calendar.svg"
          layout="fill"
          alt="calendar icon"
        />
        <h1 className="mx-auto mt-28">
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
        />
      </div>
    </section>
  );
};

export default Hero;
