//importing components & types
import { AdvantageInterface } from '../../../interfaces';
import CustomImage from '../../CustomImage';

interface AdvantageProps {
  advantage: AdvantageInterface;
}

const Advantage: React.FC<AdvantageProps> = ({ advantage }) => {
  const {
    title,
    description,
    image: { url, imgWidth, imgHeight, alt },
  } = advantage;

  return (
    <div className="advatange">
      <CustomImage
        className="bg-lightOrange w-[80px] h-[80px] flex__center rounded-[20px]"
        src={url}
        width={imgWidth}
        height={imgHeight}
        alt={`${alt}-icon`}
      />
      <h2 className="text-[29px] mt-2">{title}</h2>
      <p className="mt-1">{description}</p>
    </div>
  );
};

export default Advantage;
