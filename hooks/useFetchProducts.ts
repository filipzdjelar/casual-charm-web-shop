import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { fetchProducts } from '../api/products';
import { IProduct } from '@/types/products';

type FetchProductsResult = {
  products: IProduct[] | null;
  isProductsLoading: boolean;
};

const useFetchProducts = (): FetchProductsResult => {
  const [products, setProducts] = useState<IProduct[] | null>([]);
  const [isProductsLoading, setIsProductsLoading] = useState<boolean>(true);

  const loadProducts = useCallback(async () => {
    try {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong');
    } finally {
      setIsProductsLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsProductsLoading(true);
    loadProducts();
  }, []);

  return { products, isProductsLoading };
};

export default useFetchProducts;
