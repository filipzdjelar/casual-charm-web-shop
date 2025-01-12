import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/be-trendy-logo.png';
import { FC } from 'react';

interface IProps {
  textMessage: string;
}

const NotFound: FC<IProps> = ({ textMessage }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-8 justify-evenly min-w-[300px] max-w-[600px]">
        <div className="w-full h-fit bg-white p-6 flex gap-8 flex-col rounded-lg shadow-md text-center">
          <div className="flex justify-center">
            <Image alt="logo" src={logo} width={100} className="block" />
          </div>

          <p className="text-gray-700 text-lg font-bold">{textMessage}</p>
          <Link href="/">
            <span className="text-blue-400 underline">Return to home page</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
