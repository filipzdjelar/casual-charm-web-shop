import { type FC } from 'react';

const HeaderCategoriesSkeleton: FC = () => {
  return (
    <div className="skeleton-loader flex gap-8">
      <div className="skeleton-item w-32 h-6 mb-4 bg-gray-300 animate-pulse" />
      <div className="skeleton-item w-32 h-6 mb-4 bg-gray-300 animate-pulse" />
      <div className="skeleton-item w-32 h-6 mb-4 bg-gray-300 animate-pulse" />
      <div className="skeleton-item w-32 h-6 mb-4 bg-gray-300 animate-pulse" />
    </div>
  );
};

export default HeaderCategoriesSkeleton;
