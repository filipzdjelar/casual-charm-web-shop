import { type FC } from 'react';
import { IProduct } from '@/types/products';

interface IProps {
  product: IProduct;
}

const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <a
      key={product.id}
      href={`/product/${product.id}`}
      className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 p-4"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-contain mb-4"
      />
      <span className="text-sm font-medium text-gray-800 hover:text-gray-600 line-clamp-2">
        {product.title}
      </span>
    </a>
  );
};

export default ProductCard;
