'use client';

import { type FC, useState } from 'react';
import Link from 'next/link';

const CategoriesMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const categories = [
    { name: 'Electronics', path: '/electronics' },
    { name: 'Jewelry', path: '/jewelery' },
    { name: "Men's Clothing", path: '/mens-clothing' },
    { name: "Women's Clothing", path: '/womens-clothing' },
  ];

  return (
    <div className="w-full relative">
      <div className="flex items-center justify-between md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-gray-800">
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mt-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mt-1"></span>
        </button>
      </div>

      <div
        className={`md:flex ${
          isOpen
            ? 'block absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 p-6'
            : 'hidden'
        }`}
      >
        <div className="flex flex-col items-center w-full">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.path}
              className="text-lg text-white hover:bg-[#85144B] py-2 px-6 rounded-full mb-4 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesMenu;
