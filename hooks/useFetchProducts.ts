import { useQuery } from '@tanstack/react-query';
import { FETCH_PRODUCTS_KEY, fetchProductsApi } from '../api/products';
import { IProduct } from '@/types/products';

const useFetchProducts = () => {
  const {
    data: products,
    isLoading: isProductsLoading,
    error: isErrorFetchingProducts,
  } = useQuery<IProduct[]>({
    queryKey: [FETCH_PRODUCTS_KEY],
    queryFn: async () => await fetchProductsApi(),
  });

  return { products, isProductsLoading, isErrorFetchingProducts };
};

export default useFetchProducts;
