import { useState, useRef, useEffect, type FC, useMemo } from 'react';
import { IProduct, ESortOrder } from '@/types/products';
import ProductCard from '@/components/ProductCard';
import useFetchProducts from '@/hooks/useFetchProducts';
import LoadingSpinner from '@/components/LoadingSpinner';
import ProductCardSkeleton from '@/components/skeletons/ProductCardSkeleton';
import NotFound from '@/components/NotFound';
import AscDescButton from '@/components/AscDescButton';

interface IProps {
  category?: string;
}

const ProductsCategory: FC<IProps> = ({ category }) => {
  const [limit, setLimit] = useState(4);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [lastFetchedCount, setLastFetchedCount] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<ESortOrder>(ESortOrder.DESC);
  const [consecutiveIdenticalFetches, setConsecutiveIdenticalFetches] =
    useState(0);

  const { products, isProductsLoading } = useFetchProducts(
    limit,
    sortOrder,
    category
  );
  const observerRef = useRef<HTMLDivElement | null>(null);

  const memoizedProducts = useMemo(() => {
    const uniqueProducts = Array.from(
      new Map(allProducts.map((product) => [product.id, product])).values()
    );
    return uniqueProducts;
  }, [allProducts]);

  useEffect(() => {
    setAllProducts([]);
    setLimit(4);
    setConsecutiveIdenticalFetches(0);
    setLastFetchedCount(null);
  }, [sortOrder]);

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
    if (
      consecutiveIdenticalFetches >= 2 ||
      (!isProductsLoading && allProducts.length === 0)
    )
      return;

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
        <div>
          <div className="w-16 h-12 bg-gray-300 rounded-md my-4"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[...Array(4)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <AscDescButton sortOrder={sortOrder} setSortOrder={setSortOrder} />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {memoizedProducts.map((product: IProduct) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      )}

      {!isProductsLoading && allProducts.length === 0 && (
        <NotFound textMessage="No available Products for selected category" />
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

export default ProductsCategory;
