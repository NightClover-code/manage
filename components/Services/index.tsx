const Services = () => {
  return (
    <section className="services__section mt-44 mb-44">
      <div className="custom__container text-center">
        <h1 className="mx-auto max-w-[600px]">
          All the basics to getting work done.
        </h1>
        <p className="max-w-[550px] mx-auto mt-6">
          We provide several plans for you to choose from, pick the most
          suitable for your business.
        </p>
        <div className="flex__center mt-7">
          <div className="flex">
            <span className="text-xs">Bill monthly</span>
            <div className="toggle"></div>
            <span className="text-xs">Bill annualy</span>
          </div>
          <span className="text-xxs text-red">17% Off</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
