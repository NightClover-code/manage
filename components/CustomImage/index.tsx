import Image, {type ImageProps} from 'next/image';

interface CustomImageProps extends ImageProps {
  className?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  className,
  onClick,
  ...props
}) => {
  return (
    <div className={className} onClick={onClick}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} />
    </div>
  );
};

export default CustomImage;
