//importing hooks
import { useRef, useEffect } from 'react';
import { useResponsiveNum, useCounter } from '../../hooks';
//importing types & utils
import { v4 as randomID } from 'uuid';
import { TestimonialInterface } from '../../interfaces';
//importing components
import Button from '../Button';
import CustomImage from '../CustomImage';
import Item from './Item';

interface TestimonialsProps {
  testimonials: TestimonialInterface[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const responsiveNum = useResponsiveNum();
  const [counter, setCounter] = useCounter();

  const onArrowRightClickHandler = () => {
    if (counter < responsiveNum) setCounter(counter + 1);
  };

  const onArrowLeftClickHandler = () => {
    if (counter > 0 && counter <= responsiveNum) setCounter(counter - 1);
  };

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.style.transform =
        'translateX(' +
        ((-gridRef.current.scrollWidth + gridRef.current.clientWidth) /
          responsiveNum) *
          counter +
        'px)';
    }
  }, [counter, responsiveNum]);

  return (
    <section className="bg-pink py-28 mt-32 lg:mt-28 lg:py-24 sm:mt-24 border-y-orange border-1">
      <div className="custom__container">
        <div
          className="flex items-end justify-between mockup5:flex-col mockup5:justify-start"
          data-aos="fade-up"
        >
          <div className="max-w-[470px] mockup2:max-w-[440px] sm:!max-w-[360px] mockup5:!max-w-full">
            <h1>
              Join <span className="text-orange">350M+</span> users around the
              world.
            </h1>
            <p className="mt-6 sm:max-w-[350px]">
              We provide several plans for you to choose from, pick the most
              suitable for your business.
            </p>
          </div>
          <div className="transition-all duration-500 ease-in-out flex items-center lg:flex-col lg:items-end mockup5:flex-row mockup5:justify-between mockup5:w-full mockup5:mt-5">
            <div className="flex">
              <CustomImage
                className="flex__center bg-white w-10 h-10 rounded-full cursor-pointer shadow-arrow relative button__overlay transition__250 after:rounded-full hover:after:!opacity-5"
                src="/images/arrow-left.svg"
                width={24}
                height={24}
                alt="arrow-left icon"
                onClick={onArrowLeftClickHandler}
              />
              <CustomImage
                className="flex__center bg-orange w-10 h-10 rounded-full ml-4 cursor-pointer shadow-arrow relative button__overlay transition__250 after:rounded-full"
                src="/images/arrow-right.svg"
                width={24}
                height={24}
                alt="arrow-right icon"
                onClick={onArrowRightClickHandler}
              />
            </div>
            <Button className="button ml-10 mockup2:ml-6 lg:mt-5 sm:ml-0">
              Learn more
            </Button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          ref={gridRef}
          className="grid grid-rows-testimonials mt-24 sm:mt-20 gap-10 grid-cols-testimonials sm:grid-cols-testimonialsRes sm:grid-rows-auto"
        >
          {testimonials.map(_testimonial => (
            <Item key={randomID()} {..._testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
