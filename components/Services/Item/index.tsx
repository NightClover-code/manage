import Button from '../../Button';

const Service = () => {
  return (
    <div className="bg-lightOrange rounded-[20px] shadow-service pt-10">
      <span className="text-[20px] font-semibold">Standart</span>
      <h1 className="mt-4">$21</h1>
      <h3 className="mt-3 text-sm font-semibold">Per Month</h3>
      <Button className="bg-transparent">Get Started</Button>
    </div>
  );
};

export default Service;
