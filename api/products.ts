import { IProduct } from '@/types/products';

export const FETCH_PRODUCTS_KEY = 'fetchProducts';
export const fetchProductsApi = async (): Promise<IProduct[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?limit=4`
  );

  const data = await response.json();
  return data;
};

export const FETCH_CATEGORIES_KEY = 'fetchCategories';
export const fetchCategoriesApi = async (): Promise<string[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/categories`
  );

  const data = await response.json();
  return data;
};

export const FETCH_PRODUCTS_BY_CATEGORY_KEY = 'fetchProductsByCategory';

export const fetchProductsByCategory = async (
  category: string
): Promise<IProduct[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/category/${category}`
  );

  const data = await response.json();
  return data;
};
