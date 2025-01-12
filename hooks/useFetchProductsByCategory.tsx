import { useQuery } from '@tanstack/react-query';
import { IProduct } from '@/types/products';
import {
  fetchProductsByCategory,
  FETCH_PRODUCTS_BY_CATEGORY_KEY,
} from '@/api/products';

const useFetchProductsByCategory = (limit: number, category?: string) => {
  const {
    data: products,
    isLoading: isProductsLoading,
    error: isErrorFetchingProducts,
  } = useQuery<IProduct[]>({
    queryKey: [FETCH_PRODUCTS_BY_CATEGORY_KEY, category],
    queryFn: async () => await fetchProductsByCategory(limit, category),
    enabled: !!category,
  });

  return { products, isProductsLoading, isErrorFetchingProducts };
};

export default useFetchProductsByCategory;
