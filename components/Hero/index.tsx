//importing components
import Image from 'next/image';
import Button from '../Button';

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="custom__container">
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
          <Button className="!text-blue !bg-white">Register</Button>
        </div>
        <div className="relative w-[1066px] h-[695px] mt-10 mx-auto">
          <Image src="/images/mockup.svg" layout="fill" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
