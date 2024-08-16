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
      <div className=" mx-auto flex justify-center mt-10 px-4 w-full">
    
        <Main  isHome={false} />
     
      </div>
      
      <Footer />
      {showCart && <ShoppingCartPage onClose={toggleCart} productCount={productCount} />}
    </div>
  );
}

export default ShopPage;
