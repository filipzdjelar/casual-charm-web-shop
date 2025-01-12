import { type FC } from 'react';
import { IProduct } from '@/types/products';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
  product: IProduct;
}

const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <Link
      href={`/${product.category}/${product.id}`}
      className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 p-4"
    >
      <Image
        loader={({ src }) => src}
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="w-32 h-32 object-contain mb-4"
      />

      <span className="text-sm font-medium text-gray-800 hover:text-gray-600 line-clamp-2">
        {product.title}
      </span>
    </Link>
  );
};

export default ProductCard;
