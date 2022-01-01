//importing components & types
import { AdvantageInterface } from '../../../interfaces';
import CustomImage from '../../CustomImage';

interface AdvantageProps extends AdvantageInterface {
  order: number;
}

const Advantage: React.FC<AdvantageProps> = ({
  title,
  description,
  image: { url, imgWidth, imgHeight, alt },
  order,
}) => {
  return (
    <div data-aos="fade-up" data-aos-delay={150 * order}>
      <CustomImage
        className="bg-lightOrange w-[80px] h-[80px] flex__center rounded-[20px] border-orange border-1"
        src={url}
        width={imgWidth}
        height={imgHeight}
        alt={`${alt}-icon`}
      />
      <h2 className="text-[29px] mt-7 mb-5 leading-8">{title}</h2>
      <p className="mt-1 xs:max-w-[300px]">{description}</p>
    </div>
  );
};

export default Advantage;
