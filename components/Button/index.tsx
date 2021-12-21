interface ButtonProps {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export default Button;
