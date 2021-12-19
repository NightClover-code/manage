import Image from 'next/image';
import { ImageProps } from '../../interfaces';

interface CustomImageProps {
  className?: string;
  imgProps: ImageProps;
}

const CustomImage: React.FC<CustomImageProps> = ({ className, imgProps }) => {
  return (
    <div className={className}>
      {/*eslint-disable-next-line jsx-a11y/alt-text*/}
      <Image {...imgProps} />
    </div>
  );
};

export default CustomImage;
