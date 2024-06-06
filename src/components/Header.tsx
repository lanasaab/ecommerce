import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ShoppingCartPage from './ShoppingCartPage'; // Import the ShoppingCartPage component

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [productCount, setProductCount] = useState(0); // State to track the number of products in the cart

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <header className="bg-white shadow-md relative">
        <div className="flex justify-center py-4">
          <img alt="Logo" src="/logo.jpg" className="w-36 h-24 rounded-lg" />
        </div>
        <nav className="bg-gray-100 py-2 shadow-sm flex justify-center items-center">
          <ul className="flex list-none">
            <li className="mx-4"><a href="/" className="text-black no-underline p-3.5 block">Home</a></li>
            <li className="mx-4"><a href="/shop" className="text-black no-underline p-3.5 block">Shop</a></li>
            <li className="mx-4"><a href="/contact" className="text-black no-underline p-3.5 block">Contact</a></li>
            <li className="mx-4"><a href="/about" className="text-black no-underline p-3.5 block">About</a></li>
          </ul>
          <div className="cursor-pointer ml-4" onClick={toggleCart}>
            <FaShoppingCart/>
          </div>
        </nav>
        <div className="flex flex-col items-center text-center mb-10 py-8 relative">
          <p>A Whole New Look</p>
          <h2 className="mt-8 text-3xl font-semibold text-black">Beauty Pronounced</h2>
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4">
            View More
          </button>
        </div>
      </header>
      {showCart && <ShoppingCartPage onClose={toggleCart} productCount={productCount} />} {/* Pass productCount as a prop */}
    </div>
  );
};

export default Header;
