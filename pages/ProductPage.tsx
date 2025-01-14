import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NotFound from '@/components/NotFound';
import useFetchProduct from '@/hooks/useFetchProduct';
import ProductDetails from '@/components/ProductDetails';
import ProductsFromSameCategory from '@/components/ProductsFromSameCategory';
import ProductPageSkeletonImage from '@/components/ProductPageSkeletonImage';
import ProductPageSkeletonDetails from '@/components/ProductPageSkeletonDetails';

const ProductPage: React.FC = () => {
  const pathname = usePathname();
  const { product, isProductLoading } = useFetchProduct(
    pathname?.split('/').pop()
  );

  if (isProductLoading) {
    return (
      <div className="flex flex-col md:flex-row gap-8 justify-evenly">
        <div className="w-full md:w-1/2 max-w-md mb-6 md:mb-0 flex items-center justify-center">
          <ProductPageSkeletonImage />
        </div>

        <div className="md:w-1/2 h-fit bg-white p-6 rounded-lg shadow-md">
          <ProductPageSkeletonDetails />
        </div>
      </div>
    );
  }

  if (!product) {
    return <NotFound textMessage="Product not found." />;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-evenly">
      <div className="w-full md:w-1/2 max-w-md mb-6 md:mb-0 flex items-center justify-center">
        <Image
          loader={({ src }) => src}
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-scale-down drop-shadow-lg rounded-lg"
        />
      </div>

      <div className="md:w-1/2 h-fit bg-white p-6 rounded-lg shadow-md">
        <ProductDetails product={product} />

        <ProductsFromSameCategory product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
