import { useState, useRef, useEffect, type FC } from 'react';
import { IProduct } from '@/types/products';
import ProductCard from '@/components/ProductCard';
import useFetchProducts from '@/hooks/useFetchProducts';
import LoadingSpinner from '@/components/LoadingSpinner';

const AllProducts: FC = () => {
  const [limit, setLimit] = useState(4);
  const { products, isProductsLoading } = useFetchProducts(limit);

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isProductsLoading) {
          setLimit((prevLimit) => prevLimit + 4);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isProductsLoading]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8 sm:p-20 relative">
      {isProductsLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products?.map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
};

export default AllProducts;
