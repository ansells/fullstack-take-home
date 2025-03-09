import { ReactNode } from '@tanstack/react-router';
import { ButtonHTMLAttributes } from 'react';

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  warning?: boolean;
}
const FormButton = ({ children, warning, ...rest }: FormButtonProps) => {
  return warning ? (
    <button
      className="bg-white hover:border-red-500 text-red-500 py-2 px-4 rounded border border-gray-300 cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  ) : (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  );
};

export default FormButton;
