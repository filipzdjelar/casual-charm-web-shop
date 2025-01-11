'use client';

import { usePathname } from 'next/navigation';
import ProductsCategory from '@/pages/ProductsCategory';

const Home = () => {
  const pathname = usePathname();

  return <ProductsCategory category={pathname?.replace('/', '')} />;
};

export default Home;
