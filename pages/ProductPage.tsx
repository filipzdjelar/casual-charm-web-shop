interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const product: Product = {
  id: 2,
  title: 'Mens Casual Premium Slim Fit T-Shirts',
  price: 22.3,
  description:
    'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
  category: "men's clothing",
  image:
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  rating: {
    rate: 4.1,
    count: 259,
  },
};

const ProductPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-evenly">
      {/* Product Image */}
      <div className="w-full md:w-1/2 max-w-md mb-6 md:mb-0">
        <img
          src={product.image}
          alt={product.title}
          className="shadow-md object-cover w-full"
        />
      </div>

      {/* Product Details */}
      <div className=" md:w-1/2 h-fit  bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {product.title}
        </h1>
        <p className="text-gray-500 text-sm mb-2">{product.category}</p>

        <p className="text-gray-700 text-lg mb-4">{product.description}</p>

        <div className="flex items-center space-x-4 mb-4">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400 text-sm mr-1">&#9733;</span>
            <span className="text-gray-700 text-sm">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
