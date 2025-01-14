'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, type FC } from 'react';
import useFetchCategories from '@/hooks/useFetchCategories';

import logo from './../public/be-trendy-logo.png';

const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { categories, isCategoriesLoading } = useFetchCategories();

  const handleMenuToggle = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setIsNavOpen((prev) => !prev);
  };

  const renderSkeleton = () => (
    <div className="skeleton-loader flex gap-8">
      <div className="skeleton-item w-32 h-6 mb-4 bg-gray-300 animate-pulse" />
      <div className="skeleton-item w-32 h-6 mb-4 bg-gray-300 animate-pulse" />
      <div className="skeleton-item w-32 h-6 mb-4 bg-gray-300 animate-pulse" />
      <div className="skeleton-item w-32 h-6 mb-4 bg-gray-300 animate-pulse" />
    </div>
  );

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between border-b border-gray-400 py-2 px-6">
        <Link href={'/'}>
          <Image alt="logo" src={logo} width={150} />
        </Link>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={handleMenuToggle}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                {isCategoriesLoading
                  ? renderSkeleton()
                  : categories?.map((category) => (
                      <li
                        key={category}
                        className="border-b border-gray-400 my-4 uppercase"
                      >
                        <Link
                          href={`/${category}`}
                          className="text-black px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-100 font-medium"
                          onClick={() => setIsNavOpen(false)}
                        >
                          {category.toUpperCase()}
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            {isCategoriesLoading
              ? renderSkeleton()
              : categories?.map((category) => (
                  <li key={category}>
                    <Link
                      href={`/${category}`}
                      className="text-black border-b border-gray-400 px-4 py-2 hover:rounded transition-colors duration-300 hover:bg-gray-100 font-medium"
                    >
                      {category.toUpperCase()}
                    </Link>
                  </li>
                ))}
          </ul>
        </nav>
        <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
          html, body {
            overflow: ${isNavOpen ? 'hidden' : 'auto'};
          }
          .skeleton-loader .skeleton-item {
            border-radius: 4px;
          }
        `}</style>
      </div>
    </header>
  );
};

export default Header;
