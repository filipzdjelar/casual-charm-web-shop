import { type FC } from 'react';

const ProductPageSkeletonDetails: FC = () => {
  return (
    <div className="h-fit">
      <div className="h-6 bg-gray-300 animate-pulse mb-4"></div>
      <div className="h-4 bg-gray-300 animate-pulse mb-2"></div>
      <div className="h-8 bg-gray-300 animate-pulse mb-4"></div>
      <div className="h-6 bg-gray-300 animate-pulse mb-2"></div>
      <div className="h-8 bg-gray-300 animate-pulse mb-4"></div>
      <div className="h-6 bg-gray-300 animate-pulse mb-2"></div>
      <div className="h-8 bg-gray-300 animate-pulse mb-4"></div>
      <div className="h-6 bg-gray-300 animate-pulse mb-2"></div>
      <div className="h-4 bg-gray-300 animate-pulse mb-4"></div>
    </div>
  );
};

export default ProductPageSkeletonDetails;
