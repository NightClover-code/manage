import Image, {type ImageProps} from 'next/image';

interface CustomImageProps extends ImageProps {
  className?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/alt-text*/}
      <Image {...props} />
    </div>
  );
};

export default CustomImage;
