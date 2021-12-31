import Button from '../Button';

const CTA = () => {
  return (
    <section className="bg-orange text-white text-center py-[70px]">
      <div className="custom__container">
        <div data-aos="fade-up">
          <h1 className="mx-auto">Simplify how your team works today.</h1>
          <p className="text-offWhite my-7 mx-auto sm:max-w-[280px]">
            Save time. Have everything in one place.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay={300}>
          <Button className="button !text-orange !bg-white !px-8 !py-3 relative button__overlay transition__250 hover:after:!opacity-5">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
