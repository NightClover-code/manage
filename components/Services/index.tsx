//importing utils
import { useState } from 'react';
import { v4 as randomID } from 'uuid';
//importing components
import { ServiceInterface } from '../../interfaces';
import Service from './Item';

interface ServicesProps {
  services: ServiceInterface[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="mt-28 sm:mt-20">
      <div className="custom__container text-center">
        <h1 className="mx-auto max-w-[600px]">
          All the basics to getting work done.
        </h1>
        <p className="max-w-[550px] mx-auto mt-6">
          We provide several plans for you to choose from, pick the most
          suitable for your business.
        </p>
        <div className="flex__center mt-7 ml-20 sm:ml-10 xs:ml-5">
          <div className="flex items-center">
            <span className="text-xs font-semibold xs:text-xxs">
              Bill monthly
            </span>
            <div
              onClick={() => setIsAnnual(!isAnnual)}
              className="flex items-center w-[36px] h-[18px] bg-orange mx-6 rounded-[10px] cursor-pointer xs:text-xs xs:mx-3"
            >
              <div
                className={`block w-[13px] h-[13px] bg-white rounded-[10px] ml-1 transition__250 ${
                  isAnnual ? 'translate-x-[14px]' : ''
                }`}
              ></div>
            </div>
            <span className="text-xs font-semibold xs:text-xxs">
              Bill annualy
            </span>
          </div>
          <span className="text-xxs font-semibold text-red ml-7 xs:ml-5">
            17% Off
          </span>
        </div>
        <div className="grid grid-cols-3 sm:!mt-16 items-end mockup2:mt-28 grid-rows-services gap-10 mt-36 mockup2:grid-cols-2 mockup2:gap-x-10 mockup2:gap-y-14 1100:gap-6 sm:!grid-cols-1 sm:!gap-x-0">
          {services.map(_service => (
            <Service
              {..._service}
              price={
                isAnnual
                  ? Math.floor(_service.price - 0.17 * _service.price)
                  : _service.price
              }
              key={randomID()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
