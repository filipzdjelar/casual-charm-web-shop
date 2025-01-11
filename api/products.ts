import { IProduct } from '@/types/products';

export const fetchProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();
  return data;
};
