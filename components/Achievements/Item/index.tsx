interface AchievementProps {
  title: string;
  result: number;
  resultType?: string;
  className?: string;
}

const Achievement: React.FC<AchievementProps> = ({
  title,
  result,
  resultType,
  className,
}) => {
  return (
    <div className={className}>
      <h2 className="text-orange">
        {result}
        {resultType}
      </h2>
      <h3 className="text-offGray mt-5">{title}</h3>
    </div>
  );
};

export default Achievement;
