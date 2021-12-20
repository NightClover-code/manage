import Button from '../Button';
import Advantage from './Item';

const Advantages = () => {
  return (
    <section className="advantages mt-52 mb-20">
      <div className="custom__container flex items-start justify-between">
        <div className="max-w-[380px]">
          <h2 className="text-[45px] mt-0">
            What&apos;s different about Manage?
          </h2>
          <p className="mt-5">
            Manage provides all the functionality your team needs, without the
            complexity.
          </p>
          <Button className="mt-8">Learn more</Button>
        </div>
        <div className="grid grid-cols-advantages grid-rows-2 gap-20">
          <Advantage />
          <Advantage />
          <Advantage />
          <Advantage />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
