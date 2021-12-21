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
    <section className="advantages__section mt-52 mb-20">
      <div className="custom__container flex items-start justify-between">
        <div className="max-w-[380px]">
          <h2 className="text-[45px] mt-0">
            What&apos;s different about Manage?
          </h2>
          <p className="mt-5">
            Manage provides all the functionality your team needs, without the
            complexity.
          </p>
          <Button className="mt-8 button">Learn more</Button>
        </div>
        <div className="grid grid-cols-advantages grid-rows-2 gap-20">
          {advantages.map(advantage => {
            return <Advantage key={randomID()} {...advantage} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
