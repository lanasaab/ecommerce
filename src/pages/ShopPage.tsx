import React, { useState } from 'react';
import { FaShoppingCart, FaArrowRight, FaFacebook, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
import ShoppingCartPage from '../components/ShoppingCartPage';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ImageContainer from '../components/ImageContainer';

const ShopPage = () => {
  const [showCart, setShowCart] = useState(false);
  const [productCount, setProductCount] = useState(0); 

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <header className="bg-white shadow-md">
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
    
  </header>
      <div className="max-w-6xl mx-auto flex mt-10 px-4">
        <aside className="w-full md:w-1/4 lg:w-1/4 p-4 flex-shrink-0 mt-40">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Search Products</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="Search.."
                className="w-full p-2 border-2 border-black"
              />
              <button className="ml-2 p-2 text-white bg-black rounded-lg">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="list-disc list-inside">
              <li>Skin Toner</li>
              <li>Face Cream</li>
              <li>Hair Mask</li>
              <li>Makeup</li>
              <li>Body Lotion</li>
            </ul>
          </div>
          <div className="mt-10 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Filter by Price</h2>
            <input type="range" min="0" max="100" className="w-full" />
          </div>
        </aside>
        <Main />
        <div className="mt-40 ml-5">
          <div className="w-full bg-white p-2 rounded-lg shadow-md mb-6 self-end">
            <h2 className="text-lg font-semibold mb-2">Sort By</h2>
            <select className="w-full p-1 border border-gray-300 rounded-lg">
              <option value="popularity">Popularity</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>
      <Footer />
      {showCart && <ShoppingCartPage onClose={toggleCart} productCount={productCount} />}
    </div>
  );
}

export default ShopPage;
