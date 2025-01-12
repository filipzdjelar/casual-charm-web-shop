import { useQuery } from '@tanstack/react-query';
import { FETCH_PRODUCTS_KEY, fetchProductsApi } from '../api/products';
import { IProduct } from '@/types/products';

const useFetchProducts = (limit: number, category?: string) => {
  const {
    data: products = [],
    isLoading: isProductsLoading,
    isError: isErrorFetchingProducts,
  } = useQuery<IProduct[]>({
    queryKey: [FETCH_PRODUCTS_KEY, category, limit],
    queryFn: async () => await fetchProductsApi(limit, category),
  });

  return { products, isProductsLoading, isErrorFetchingProducts };
};

export default useFetchProducts;
