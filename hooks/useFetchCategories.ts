'use client';
import { useQuery } from '@tanstack/react-query';
import { FETCH_CATEGORIES_KEY, fetchCategoriesApi } from '@/api/products';
import { queryClient } from '@/types/products';

const useFetchCategories = () => {
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    error: isErrorFetchingCategories,
  } = useQuery<string[]>(
    {
      queryKey: [FETCH_CATEGORIES_KEY],
      queryFn: async () => await fetchCategoriesApi(),
    },
    queryClient
  );

  return { categories, isCategoriesLoading, isErrorFetchingCategories };
};

export default useFetchCategories;
