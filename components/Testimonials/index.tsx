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
  return (
    <section className="bg-pink pt-32 pb-40 mt-44">
      <div className="custom__container">
        <div className="flex items-end justify-between">
          <div className="max-w-[470px]">
            <h1>
              Join <span className="text-orange">350M+</span> users around the
              world.
            </h1>
            <p className="mt-6">
              We provide several plans for you to choose from, pick the most
              suitable for your business.
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex">
              <CustomImage
                className="flex__center bg-white w-10 h-10 rounded-full cursor-pointer"
                src="/images/arrow-left.svg"
                width={24}
                height={24}
                alt="arrow-left icon"
              />
              <CustomImage
                className="flex__center bg-orange w-10 h-10 rounded-full ml-5 cursor-pointer"
                src="/images/arrow-right.svg"
                width={24}
                height={24}
                alt="arrow-right icon"
              />
            </div>
            <Button className="button ml-20">Learn more</Button>
          </div>
        </div>
        <div
          className="grid grid-rows-testimonials mt-32 gap-10"
          style={{
            gridTemplateColumns: `repeat(${testimonials.length}, 440px)`,
          }}
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
