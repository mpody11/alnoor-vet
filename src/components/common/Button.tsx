import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', className = '', onClick }: ButtonProps) => {
  const baseClasses = 'font-semibold py-2 px-6 rounded-lg transition-colors duration-300';
  const variantClasses = {
    primary: 'bg-primary hover:bg-secondary text-white',
    secondary: 'bg-white hover:bg-gray-100 text-primary border-2 border-primary',
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;