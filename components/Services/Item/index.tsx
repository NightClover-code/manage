import Button from '../../Button';

const Service = () => {
  return (
    <div className="flex items-center flex-col bg-lightOrange rounded-[20px] shadow-service pt-10">
      <span className="text-[20px] font-semibold">Standart</span>
      <h1 className="mt-4">$21</h1>
      <h3 className="mt-3 text-sm font-semibold">Per Month</h3>
      <ul className="text-left text-offBlue text-xxs mt-6">
        <li className="py-2">Unlimited Draft</li>
        <li className="py-2">Limit 12 schedule</li>
        <li className="py-2">Basic Settings</li>
      </ul>
      <Button className="text-orange font-bold w-[85%] border-2 rounded-full border-orange py-[10px] mt-auto mb-8">
        Get Started
      </Button>
    </div>
  );
};

export default Service;
