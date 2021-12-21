interface ItemProps {
  title: string;
  result: number;
  className?: string;
}

const Item: React.FC<ItemProps> = ({ title, result, className }) => {
  return (
    <div className={className}>
      <h2 className="text-orange">{result}</h2>
      <h3 className="text-offGray mt-5">{title}</h3>
    </div>
  );
};

export default Item;
