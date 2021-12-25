//importing types & utils
import { v4 as randomID } from 'uuid';
import { AchievementInterface } from '../../interfaces';
//importing components
import Achievement from './Item';

interface AchievementsProps {
  achievements: AchievementInterface[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section className="mt-36 bg-pink py-20 sm:mt-24 sm:pb-10">
      <div className="custom__container text-center overflow-hidden">
        <h1 className="mx-auto">
          They really like <span className="text-orange">Manage.</span>
        </h1>
        <p className="max-w-[550px] mx-auto mt-6 sm:max-w-[350px]">
          We have been trusted and offered the right to collaborate with
          top-leading industries in the world.
        </p>
        <div className="grid grid-cols-4 mt-20 lg:mt-10 lg:grid-cols-2 lg:gap-10 xs:grid-cols-[80%] xs:justify-center xs:gap-0">
          {achievements.map(achievement => {
            return <Achievement {...achievement} key={randomID()} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
