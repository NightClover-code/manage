import { AchievementInterface } from '../../../interfaces';

const Achievement: React.FC<AchievementInterface> = ({
  title,
  result,
  resultType,
  borderLeft,
  borderBottom,
}) => {
  return (
    <div
      className={`p-2 lg:border-l-0 border-orange border-opacity-50 ${
        borderLeft && 'border-l-[1px]'
      } xs:p-12 ${borderBottom && 'xs:border-b-[1px]'}`}
    >
      <h2 className="text-orange text-[45px] mockup2:text-[40px] lg:!text-[45px]">
        {result}
        {resultType}
      </h2>
      <h3 className="text-offGray mt-2 font-medium mockup2:text-xs lg:!text-sm sm:mt-3">
        {title}
      </h3>
    </div>
  );
};

export default Achievement;
