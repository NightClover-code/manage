import Button from '../Button';

const CTA = () => {
  return (
    <section className="bg-orange text-white text-center py-20">
      <div className="custom__container">
        <h1 className="mx-auto">Simplify how your team works today.</h1>
        <p className="text-offWhite my-7 mx-auto">
          Save time. Have everything in one place.
        </p>
        <Button className="button !text-orange !bg-white !px-8 !py-3">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CTA;
