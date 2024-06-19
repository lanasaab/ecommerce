import React, { useState } from 'react';
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
            <li className="mx-4"><Link to="/login" className="text-black no-underline p-3.5 flex items-center">Login
            <FaUser className="ml-2"/></Link></li>
          </ul>
          <div className="cursor-pointer" onClick={toggleCart}>
            <FaShoppingCart/>
          </div>
        </nav>

        <div
  className="flex flex-col items-center justify-center mb-8 p-10"
  style={{
    backgroundImage: "url(/images/bg.jpg)",
    backgroundSize: "cover",
  }}
>
  <p className="text-black">A Whole New Look</p>
  <h2 className="text-3xl font-semibold text-black">Beauty Pronounced</h2>
  <button className="bg-[#ce9d48] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4">
    View More
  </button>
</div>


      </header>
      {showCart && <ShoppingCartPage onClose={toggleCart} productCount={productCount} />} {/* Pass productCount as a prop */}
    </div>
  );
};

export default Header;
