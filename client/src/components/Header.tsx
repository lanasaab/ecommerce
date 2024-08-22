import { useState } from 'react';
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ShoppingCartPage from './ShoppingCartPage';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [productCount, setProductCount] = useState(0); 
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <div className="bg-white shadow-md relative">
        <div className="flex justify-center py-4 bg-gray-100">
          <img alt="Logo" src="/logo (2).png" className=" object-contain h-24 rounded-lg" />
        </div>
        <hr/>
        <nav className="bg-gray-100 py-2 shadow-sm flex justify-center items-center">
          <ul className="flex list-none">
            <li className="mx-4 group">
              <a href="/" className="text-black no-underline p-3.5 block relative">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="mx-4 group">
              <a href="/shop" className="text-black no-underline p-3.5 block relative">
                Shop
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="mx-4 group">
              <a href="/services" className="text-black no-underline p-3.5 block relative">
                Services
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="mx-4 group">
              <a href="/contact" className="text-black no-underline p-3.5 block relative">
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="mx-4 group">
              <a href="/about" className="text-black no-underline p-3.5 block relative">
                About
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="mx-4 group">
              <Link to="/login" className="text-black no-underline p-3.5 flex items-center relative">
                Login
                <FaUser className="ml-2" />
                
              </Link>
            </li>
          </ul>
          <div className="cursor-pointer ml-4" onClick={toggleCart}>
            <FaShoppingCart/>
          </div>
        </nav>
      </div>
      {showCart && <ShoppingCartPage onClose={toggleCart} productCount={productCount} />} {/* Pass productCount as a prop */}
    </div>
  );
};

export default Header;
