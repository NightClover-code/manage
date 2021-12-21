import Item from './Item';

const Achievements = () => {
  return (
    <section className="feedback__section mt-44 bg-pink pt-[94px] pb-20">
      <div className="custom__container text-center overflow-hidden">
        <h1 className="mx-auto">
          They really like <span className="text-orange">Manage.</span>
        </h1>
        <p className="max-w-[550px] mx-auto mt-6">
          We have been trusted and offered the right to collaborate with
          top-leading industries in the world.
        </p>
        <div className="grid grid-cols-4 mt-20">
          <Item title="Years of Collaboration" result={18} />
          <Item title="Years of Collaboration" result={18} />
          <Item title="Years of Collaboration" result={18} />
          <Item title="Years of Collaboration" result={18} />
        </div>
      </div>
    </section>
  );
};

export default Achievements;