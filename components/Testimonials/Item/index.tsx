//importing components
import Image from 'next/image';
import { TestimonialInterface } from '../../../interfaces';
import CustomImage from '../../CustomImage';

const Item: React.FC<TestimonialInterface> = ({
  avatar,
  company,
  content,
  name,
}) => {
  return (
    <div className="bg-white flex flex-col px-11 py-8 shadow-testimonial sm:px-8">
      <div className="flex items-center">
        <CustomImage
          className="overflow-hidden w-12 h-12 relative rounded-full mr-4 shadow-testimonial"
          src={avatar.url}
          layout="fill"
          alt={avatar.alt}
          objectFit="cover"
          objectPosition={avatar.position && avatar.position}
        />
        <h3 className="text-[20px] font-bold">{name}</h3>
      </div>
      <p className="text-sm mt-5 max-w-[360px] sm:mb-8">{content}</p>
      <div className="flex__between mt-auto">
        <CustomImage
          className="w-[122px] h-[37px] sm:w-[100px] sm:h-[30px] relative"
          src={company.url}
          alt={company.alt}
          layout="fill"
        />
        <Image src="/images/stars.svg" width={120} height={24} alt="stars" />
      </div>
    </div>
  );
};

export default Item;
