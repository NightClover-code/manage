interface ButtonProps {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return <button className={`button ${className}`}>{children}</button>;
};

export default Button;
