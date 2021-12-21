import { AchievementInterface } from '../../../interfaces';

const Achievement: React.FC<AchievementInterface> = ({
  title,
  result,
  resultType,
  borderLeft,
}) => {
  return (
    <div className={borderLeft ? 'border-l-2 border-gray' : ''}>
      <h2 className="text-orange">
        {result}
        {resultType}
      </h2>
      <h3 className="text-offGray mt-5">{title}</h3>
    </div>
  );
};

export default Achievement;
