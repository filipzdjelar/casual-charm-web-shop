import { toast } from 'react-toastify';
import { ESortOrder, IProduct } from '@/types/products';

export const FETCH_PRODUCTS_KEY = 'fetchProducts';
export const fetchProductsApi = async (
  limit: number,
  sortOrder: ESortOrder,
  category?: string
): Promise<IProduct[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products${
      category ? `/category/${category}` : ''
    }?limit=${limit}&sort=${sortOrder}`
  );

  if (!response.ok) {
    toast.error('Error while getting products');
  }
  return response.json();
};

export const FETCH_CATEGORIES_KEY = 'fetchCategories';
export const fetchCategoriesApi = async (): Promise<string[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/categories`
  );

  if (!response.ok) {
    toast.error('Error while getting categories');
  }

  return response.json();
};

export const FETCH_PRODUCT_KEY = 'fetchProduct';
export const fetchProductApi = async (
  productId?: string
): Promise<IProduct> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
  );

  if (!response.ok) {
    toast.error('Error while getting product information');
  }

  return response.json();
};
