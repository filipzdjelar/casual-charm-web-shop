import Link from 'next/link';
import { IProduct } from '@/types/products';

interface IProps {
  product: IProduct;
}

const ProductDetails: React.FC<IProps> = ({ product }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
      <Link
        href={`/${product.category}`}
        className="text-blue-500 mt-2 mb-4 block"
      >
        <span className="text-blue-500 text-md hover:underline uppercase">
          {product.category}
        </span>
      </Link>

      <p className="text-gray-700 text-lg mb-4">{product.description}</p>

      <div className="flex items-center space-x-4 mb-4">
        <span className="text-lg font-bold text-lime-600 ">
          ${product.price}
        </span>
        <div className="flex items-center">
          <span className="text-yellow-400 text-sm mr-1">&#9733;</span>
          <span className="text-gray-700 text-sm">
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
