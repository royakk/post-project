
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`bg-white/5 text-white rounded py-2 px-4 font-bold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;