import { type FC } from 'react';
import ProductCard from '@/components/ProductCard';
import ProductCardSkeleton from '@/components/Skeletons/ProductCardSkeleton';
import useFetchProducts from '@/hooks/useFetchProducts';
import { IProduct } from '@/types/products';

const AllCategoriesPage: FC = () => {
  const { products, isProductsLoading } = useFetchProducts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8 sm:p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {products?.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
        {isProductsLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default AllCategoriesPage;
