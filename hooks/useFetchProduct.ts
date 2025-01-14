import { useQuery } from '@tanstack/react-query';
import { IProduct } from '@/types/products';
import queryClient from '@/utils/queryClient';
import { FETCH_PRODUCT_KEY, fetchProductApi } from '../api/products';

const useFetchProduct = (productId?: string) => {
  const {
    data: product,
    isLoading: isProductLoading,
    isError: isErrorFetchingProduct,
  } = useQuery<IProduct>(
    {
      queryKey: [FETCH_PRODUCT_KEY, productId],
      queryFn: async () => await fetchProductApi(productId),
      enabled: !!productId,
    },
    queryClient
  );

  return { product, isProductLoading, isErrorFetchingProduct };
};

export default useFetchProduct;
