import { type FC } from 'react';
import { ESortOrder } from '@/types/products';

interface IProps {
  sortOrder: ESortOrder;
  setSortOrder: React.Dispatch<React.SetStateAction<ESortOrder>>;
}

const AscDescButton: FC<IProps> = ({ sortOrder, setSortOrder }) => {
  const toggleSortOrder = () => {
    setSortOrder((prev) =>
      prev === ESortOrder.ASC ? ESortOrder.DESC : ESortOrder.ASC
    );
  };

  return (
    <button
      onClick={toggleSortOrder}
      className={`flex items-center p-2 rounded-md text-white font-semibold transition-all duration-300 ease-in-out my-4 bg-[#85a49c]`}
    >
      <span className="mr-2 text-md">
        {sortOrder === ESortOrder.ASC ? '⬆' : '⬇'}
      </span>
      {sortOrder === ESortOrder.ASC ? 'Asc' : 'Desc'}
    </button>
  );
};

export default AscDescButton;
