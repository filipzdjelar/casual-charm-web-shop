import Image from 'next/image';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { IProduct } from '@/types/products';
import useFetchProductsByCategory from '@/hooks/useFetchProductsByCategory';
import ProductsFromSameCategorySkeleton from './skeletons/ProductsFromSameCategorySkeleton';

interface IProps {
  product: IProduct;
}

const ProductsFromSameCategory: FC<IProps> = ({ product }) => {
  const limit = 4;
  const { products, isProductsLoading } = useFetchProductsByCategory(
    limit,
    product?.category
  );

  const filteredProducts = useMemo(
    () => products?.filter((prod) => prod.id !== product?.id),
    [products, product]
  );

  return (
    <div>
      {isProductsLoading ? (
        <ProductsFromSameCategorySkeleton />
      ) : (
        <>
          {filteredProducts && filteredProducts.length > 0 && (
            <div className="w-full mt-8">
              <h3 className="text-xl font-semibold mb-4">
                More Products from This Category
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {filteredProducts.map((prod) => (
                  <Link
                    key={prod.id}
                    href={`/product/${prod.id}`}
                    className="text-blue-500 mt-2 block"
                  >
                    <div className="bg-white p-4 rounded-lg drop-shadow-lg flex flex-col items-center">
                      <Image
                        loader={({ src }) => src}
                        src={prod.image}
                        alt={prod.title}
                        width={200}
                        height={200}
                        className="object-scale-down h-48 w-96"
                      />
                      <span className="text-lg font-bold text-lime-600 mt-4">
                        ${prod.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductsFromSameCategory;
