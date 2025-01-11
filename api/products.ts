import { IProduct } from '@/types/products';

export const fetchProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();
  return data;
};

export const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/categories`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  const data = await response.json();
  return data;
};

export const fetchProductsByCategory = async (
  category: string
): Promise<IProduct[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/category/${category}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch "${category}" category`);
  }

  const data = await response.json();
  return data;
};
