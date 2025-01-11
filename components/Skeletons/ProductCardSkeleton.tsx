const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg shadow-md p-4 animate-pulse">
      <div className="w-full h-32 w-24 bg-gray-300 rounded-md mb-4"></div>
      <div className="w-4/5 h-4 bg-gray-300 rounded-md mb-2"></div>
      <div className="w-1/5 h-4 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default ProductCardSkeleton;
