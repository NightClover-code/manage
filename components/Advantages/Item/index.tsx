import Image from 'next/image';

const Advantage = () => {
  return (
    <div className="advatange">
      <div className="bg-lightOrange w-[80px] h-[80px] flex__center rounded-[20px]">
        <Image src="/images/zoom.svg" width={42} height={42} alt="zoom" />
      </div>
      <h2 className="text-[29px] mt-2">Wider vision</h2>
      <p className="mt-1">
        Go from tracking progress at the milestone level all the way done to the
        smallest of details.
      </p>
    </div>
  );
};

export default Advantage;
