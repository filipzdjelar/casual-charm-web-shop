import { toast } from 'react-toastify';
import { fetchCategories } from '@/api/products';
import { useState, useEffect, useCallback } from 'react';

type FetchCategoriesResult = {
  categories: string[] | null;
  isCategoriesLoading: boolean;
};

const useFetchCategories = (): FetchCategoriesResult => {
  const [categories, setCategories] = useState<string[] | null>(null);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState<boolean>(true);

  const loadCategories = useCallback(async () => {
    try {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    } catch (err: any) {
      toast.error(err.message || 'Failed to fetch categories');
    } finally {
      setIsCategoriesLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsCategoriesLoading(true);
    loadCategories();
  }, []);

  return { categories, isCategoriesLoading };
};

export default useFetchCategories;
