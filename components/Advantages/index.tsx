//importng types & utils
import { v4 as randomID } from 'uuid';
import { AdvantageInterface } from '../../interfaces';
//importing components
import Button from '../Button';
import Advantage from './Item';

interface AdvantagesProps {
  advantages: AdvantageInterface[];
}

const Advantages: React.FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <section className="mt-44 1100:mt-32 sm:mt-20 xs:mt-16">
      <div className="custom__container flex items-start justify-between lg:flex-col">
        <div className="max-w-[380px]">
          <h2 className="text-[45px] sm:text-[38px]">
            What&apos;s different about Manage?
          </h2>
          <p className="mt-5">
            Manage provides all the functionality your team needs, without the
            complexity.
          </p>
          <Button className="mt-8 button">Learn more</Button>
        </div>
        <div className="lg:mt-28 sm:mt-24 lg:!gap-15 lg:!grid-cols-2 xs:!grid-cols-1 grid grid-cols-advantages grid-rows-2 gap-20 mockup:gap-10 1100:grid-cols-advantagesRes items-center mockup2:grid-cols-advantagesRes2">
          {advantages.map(_advantage => (
            <Advantage key={randomID()} {..._advantage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
