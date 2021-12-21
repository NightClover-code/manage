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
      className={`flex items-center flex-col h-full bg-lightOrange rounded-[20px] pt-10 ${
        isSpecial ? 'special shadow-specialService' : 'shadow-service'
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
            <span className="mx-2">{_item}</span>
          </li>
        ))}
      </ul>
      <Button className="text-orange font-bold w-[85%] border-2 rounded-full border-orange py-[10px] mt-auto mb-8">
        Get Started
      </Button>
    </div>
  );
};

export default Service;
