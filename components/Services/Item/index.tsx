//importing types & utils
import { v4 } from 'uuid';
import { ServiceInterface } from '../../../interfaces';
//importing components
import Image from 'next/image';
import Button from '../../Button';

interface ServiceProps extends ServiceInterface {
  className?: string;
}

const Service: React.FC<ServiceProps> = ({
  isSpecial,
  listItems,
  price,
  serviceType,
}) => {
  return (
    <div
      className={`hover:-translate-y-3 transition-all duration-500 ease-in-out cursor-pointer flex items-center border-2 border-orange flex-col h-full bg-lightOrange rounded-[20px] pt-10 px-8 ${
        isSpecial
          ? 'special shadow-specialService mockup2:row-start-2 mockup2:col-span-2 sm:!col-span-1 sm:!row-start-auto sm:!w-full mockup2:w-[420px] mockup2:mx-auto'
          : 'shadow-service sm:h-[470px]'
      }`}
    >
      <span className="text-[20px] font-semibold">{serviceType}</span>
      <h1 className="mt-4">${price}</h1>
      <h3 className="mt-3 text-sm font-semibold">Per Month</h3>
      <ul className="text-left text-offBlue text-xxs mt-6">
        {listItems.map(_item => (
          <li className="my-4" key={v4()}>
            <Image
              src={`/images/${
                isSpecial ? 'special-checkmark' : 'checkmark'
              }.svg`}
              width={15}
              height={15}
              alt="checkmark icon"
            />
            <span className="mx-3">{_item}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`text-orange font-bold w-full border-[2px] relative rounded-full border-orange py-[12px] mt-auto mb-8  transition__250 hover:bg-orange hover:text-white ${
          isSpecial ? 'hover:bg-white hover:!text-orange' : ''
        }`}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Service;
