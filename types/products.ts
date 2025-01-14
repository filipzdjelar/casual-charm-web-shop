import { QueryClient } from '@tanstack/react-query';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export enum ESortOrder {
  DESC = 'desc',
  ASC = 'asc',
}

export const queryClient = new QueryClient();
