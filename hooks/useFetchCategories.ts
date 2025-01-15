import { useQuery } from '@tanstack/react-query';
import queryClient from '@/utils/queryClient';
import { FETCH_CATEGORIES_KEY, fetchCategoriesApi } from '@/api/products';

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
