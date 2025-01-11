import { toast } from 'react-toastify';
import { fetchProductsByCategory } from '@/api/products';
import { useState, useEffect, useCallback } from 'react';
import { IProduct } from '@/types/products';

type FetchProductsResult = {
  products: IProduct[] | null;
  isProductsLoading: boolean;
};

const useFetchProductsByCategory = (category?: string): FetchProductsResult => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [isProductsLoading, setIsProductsLoading] = useState<boolean>(true);

  const loadProducts = useCallback(async () => {
    if (!category) return;
    try {
      const fetchedProducts = await fetchProductsByCategory(category);
      setProducts(fetchedProducts);
    } catch (err: any) {
      toast.error(
        err.message || `Failed to fetch products for category: ${category}`
      );
    } finally {
      setIsProductsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    if (category) {
      setIsProductsLoading(true);
      loadProducts();
    }
  }, [category, loadProducts]);

  return { products, isProductsLoading };
};

export default useFetchProductsByCategory;
