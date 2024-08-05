import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

//@ts-expect-error error message
const ShoppingCartPage = ({ onClose, productCount }) => {
  
  return (
    <div className="fixed right-0 top-0 h-full w-1/4 bg-gray-200 z-10 shadow-md flex flex-col justify-between">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">Shopping Cart</p>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <FaTimes />
          </button>
        </div>
        <p className="mt-2 mb-4">You have {productCount} {productCount === 1 ? 'product' : 'products'} in your cart.</p>
      </div>
      <div className="p-4">
        <Link to={'/shop'} className="text-center text-white bg-[#ce9d48] rounded-md px-4 py-2 transition-all duration-300 hover:bg-gray-800 block">
          Go To Shop
        </Link>
        
      </div>
    </div>
  
  );
};

export default ShoppingCartPage;
