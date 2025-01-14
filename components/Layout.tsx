'use client';
import { ReactNode, type FC } from 'react';
import Header from './Header';
import Footer from './Footer';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="flex-grow p-8 sm:p-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
