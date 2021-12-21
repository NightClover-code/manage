//importing utils
import { v4 as randomID } from 'uuid';
//importing components
import { ServiceInterface } from '../../interfaces';
import Service from './Item';

interface ServicesProps {
  services: ServiceInterface[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section className="services__section mt-44">
      <div className="custom__container text-center">
        <h1 className="mx-auto max-w-[600px]">
          All the basics to getting work done.
        </h1>
        <p className="max-w-[550px] mx-auto mt-6">
          We provide several plans for you to choose from, pick the most
          suitable for your business.
        </p>
        <div className="flex__center mt-7 ml-20">
          <div className="flex items-center">
            <span className="text-xs font-semibold">Bill monthly</span>
            <div className="flex items-center w-[36px] h-[18px] bg-orange mx-6 rounded-[10px] cursor-pointer">
              <div className="block w-[13px] h-[13px] bg-white rounded-[10px] ml-1"></div>
            </div>
            <span className="text-xs font-semibold">Bill annualy</span>
          </div>
          <span className="text-xxs font-semibold text-red ml-7">17% Off</span>
        </div>
        <div className="grid grid-cols-3 grid-rows-services items-end gap-10 mt-44">
          {services.map(_service => (
            <Service {..._service} key={randomID()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
