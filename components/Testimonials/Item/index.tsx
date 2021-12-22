//importing components
import Image from 'next/image';
import CustomImage from '../../CustomImage';

const Item = () => {
  return (
    <div className="bg-white flex flex-col px-10 py-8 shadow-testimonial">
      <div className="flex items-center">
        <CustomImage
          className="overflow-hidden w-12 h-12 relative rounded-full mr-4"
          src="/images/avatar.jpg"
          layout="fill"
          alt="avatar"
          objectFit="cover"
        />
        <h3 className="text-[20px] font-bold">Anisha Li</h3>
      </div>
      <p className="text-xs mt-5">
        Manage has supercharged our team’s workflow. The ability to maintain
        visibility on larger milestones at all times keeps everyone motivated.
      </p>
      <div className="flex__between mt-auto">
        <Image src="/images/amazon.svg" alt="amazon" width={122} height={37} />
        <Image src="/images/stars.svg" width={120} height={24} alt="stars" />
      </div>
    </div>
  );
};

export default Item;
