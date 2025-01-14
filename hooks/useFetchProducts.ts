'use client';

import { QueryClient, useQuery } from '@tanstack/react-query';
import { ESortOrder, IProduct } from '@/types/products';
import { FETCH_PRODUCTS_KEY, fetchProductsApi } from '../api/products';

const useFetchProducts = (
  limit: number,
  sortOrder: ESortOrder,
  category?: string
) => {
  const queryClient = new QueryClient();

  const {
    data: products = [],
    isLoading: isProductsLoading,
    isError: isErrorFetchingProducts,
  } = useQuery<IProduct[]>(
    {
      queryKey: [FETCH_PRODUCTS_KEY, category, sortOrder, limit],
      queryFn: async () => await fetchProductsApi(limit, sortOrder, category),
    },
    queryClient
  );

  return { products, isProductsLoading, isErrorFetchingProducts };
};

export default useFetchProducts;
