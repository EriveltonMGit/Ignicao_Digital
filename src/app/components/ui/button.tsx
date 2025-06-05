// components/ui/Button.tsx

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-[#ff6600] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#e65c00] transition-colors duration-300 font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
