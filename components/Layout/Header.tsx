'use client';

import { useState, type FC } from 'react';

const categories = [
  { name: 'Electronics', path: '/electronics' },
  { name: 'Jewelry', path: '/jewelery' },
  { name: "Men's Clothing", path: '/mens-clothing' },
  { name: "Women's Clothing", path: '/womens-clothing' },
];

const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between border-b border-gray-400 py-8 px-6">
        <a href="/">
          <span className="text-[#85144B] text-lg font-bold">Casual Charm</span>
        </a>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
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
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="border-b border-gray-400 my-4 uppercase"
                  >
                    <a
                      href={category.path}
                      className="text-black px-4 py-2 rounded transition-colors duration-300 hover:text-white hover:bg-[#85144B]"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            {categories.map((category) => (
              <li key={category.name}>
                <a
                  href={category.path}
                  className="text-black px-4 py-2 rounded transition-colors duration-300 hover:text-white hover:bg-[#85144B]"
                >
                  {category.name}
                </a>
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
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </header>
  );
};

export default Header;
