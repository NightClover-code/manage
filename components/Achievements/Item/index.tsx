import { AchievementInterface } from '../../../interfaces';

const Achievement: React.FC<AchievementInterface> = ({
  title,
  result,
  resultType,
  borderLeft,
}) => {
  return (
    <div
      className={borderLeft ? 'border-l-[1px] border-solidGray py-2' : 'py-2'}
    >
      <h2 className="text-orange">
        {result}
        {resultType}
      </h2>
      <h3 className="text-offGray mt-3 font-medium">{title}</h3>
    </div>
  );
};

export default Achievement;
