import React, { useState } from 'react';
import { FaShoppingCart, FaArrowRight, FaFacebook, FaTwitter, FaUser } from "react-icons/fa";
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
     <Header/>
      <div className=" mx-auto flex mt-10 px-4 w-full">
        <aside className="w-full md:w-1/4 lg:w-1/4 p-4 mt-40">
        <div className="bg-white p-4 flex items-center">
            <input
              type="text"
              placeholder="Search.."
              className="w-64 p-2 border-2 border-black rounded-lg"
            />
            <button className="ml-2 p-2 text-white bg-black rounded-lg">
              <FaArrowRight />
            </button>
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
            <input type="range" min="0" max="100" className="w-full "/>
          </div>
        </aside>
        <Main />
        <div className="mt-40 ml-5">
          <div className="w-full bg-white p-2 rounded-lg shadow-md mb-6">
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
