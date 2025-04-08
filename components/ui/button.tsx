import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, disabled, ...props }) => {
  return (
    <button
      className={`px-4 py-2 text-white rounded-lg transition-all duration-300 ${
        disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 blur"
      } blur-none hover:blur-none`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

