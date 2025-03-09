import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  inError: boolean;
}

const InputField = ({ inError, ...props }: InputFieldProps) => {
  return (
    <input
      className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${inError ? 'border-red-500' : 'border-gray-200'}`}
      id="username"
      {...props}
    />
  );
};

export default InputField;
