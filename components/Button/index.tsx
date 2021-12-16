interface ButtonProps {
  className?: string;
}

const Button: React.FC<ButtonProps> = props => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
