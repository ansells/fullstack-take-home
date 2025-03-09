import { ReactNode } from 'react';
import Divider from '@components/common/Divider';

interface CardProps {
  children: ReactNode;
  header?: ReactNode;
  title: string;
  subTitle: string;
}

const Card = ({ children, header, title, subTitle }: CardProps) => {
  return (
    <div className="max-w-1/3 mx-auto shadow-sm rounded-lg bg-white">
      {header && <>{header}</>}
      <div
        className={`flex flex-col items-stretch px-5 pb-5 ${header ? 'pt-0' : 'pt-5'}`}
      >
        <div className="flex flex-col items-start">
          <p className="text-3xl mb-3 font-bold">{title}</p>
          <p className="text-lg mb-5">{subTitle}</p>
        </div>
        <Divider />
        {children}
      </div>
    </div>
  );
};

export default Card;
