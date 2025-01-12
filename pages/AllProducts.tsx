import { useState, useRef, useEffect, type FC, useMemo } from 'react';
import { IProduct } from '@/types/products';
import ProductCard from '@/components/ProductCard';
import useFetchProducts from '@/hooks/useFetchProducts';
import LoadingSpinner from '@/components/LoadingSpinner';

const AllProducts: FC = () => {
  const [limit, setLimit] = useState(4);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [lastFetchedCount, setLastFetchedCount] = useState<number | null>(null);
  const [consecutiveIdenticalFetches, setConsecutiveIdenticalFetches] =
    useState(0);
  const { products, isProductsLoading } = useFetchProducts(limit);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const memoizedProducts = useMemo(() => {
    const uniqueProducts = Array.from(
      new Map(allProducts.map((product) => [product.id, product])).values()
    );
    return uniqueProducts;
  }, [allProducts]);

  useEffect(() => {
    if (products.length) {
      setAllProducts((prevProducts) => [...prevProducts, ...products]);

      if (lastFetchedCount !== null && lastFetchedCount === products.length) {
        setConsecutiveIdenticalFetches((prev) => prev + 1);
      } else {
        setConsecutiveIdenticalFetches(0);
      }

      setLastFetchedCount(products.length);
    }
  }, [products, lastFetchedCount]);

  useEffect(() => {
    if (consecutiveIdenticalFetches >= 2) return;

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
  }, [isProductsLoading, consecutiveIdenticalFetches]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative">
      {isProductsLoading && allProducts.length === 0 ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {memoizedProducts.map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}

      {isProductsLoading && allProducts.length !== 0 && (
        <div className="flex justify-center mt-8 mb-8">
          <LoadingSpinner />
        </div>
      )}

      <div className="mt-96">
        {consecutiveIdenticalFetches < 2 && (
          <div ref={observerRef} className="h-2"></div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
