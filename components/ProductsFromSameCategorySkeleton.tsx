'use client';
import { type FC } from 'react';

const ProductsFromSameCategorySkeleton: FC = () => {
  return (
    <div className="w-full mt-8">
      <div className="bg-gray-200 h-4 w-1/2 rounded mt-4 mb-6"></div>
      <div className="grid grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg drop-shadow-lg flex flex-col items-center animate-pulse"
          >
            <div className="bg-gray-200 h-12 lg:h-24 w-12 lg:w-24 rounded-lg"></div>
            <div className="bg-gray-200 h-3 w-1/2 rounded mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsFromSameCategorySkeleton;
