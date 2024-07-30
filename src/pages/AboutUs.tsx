
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ShoppingCartPage from '../components/ShoppingCartPage';
import { useState } from "react";
import Header from "../components/Header";

const AboutUs: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const [productCount, setProductCount] = useState(0); 

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (

    <div className="font-sans antialiased text-gray-900">
     <Header/>
  <div className="flex flex-col items-center text-center mb-10 py-8 ">
      <h2 className="mt-8 text-3xl font-semibold text-black">About Us</h2>
    </div>
  {showCart && <ShoppingCartPage onClose={toggleCart} productCount={productCount} />} 
      <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="mb-16 text-center">
          <div className="flex flex-col md:flex-row items-center mt-8">
            <div className="w-full md:w-1/2 rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8">
              <img src="/aboutUs.jpg" alt="About Us" className=" w-full h-full rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Helping You Look Good</h2>
              <p className="text-xl text-gray-500 mb-8">Let's Talk about Beauty</p>
                <p className="text-lg text-gray-700 mb-4">Our mission is to provide the highest quality beauty products that help you look and feel your best. We believe in the power of beauty and the confidence it can bring to each individual.</p>
                <p className="text-lg text-gray-700">From skincare to makeup, each product is crafted with care and precision, using only the finest ingredients. Our goal is to enhance your natural beauty and give you the tools to express yourself in new and exciting ways.</p>
                
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-800">Types of Products</h2>
                  <ul>
                    <li>
                      <p className="ml-5 mb-4 text-gray-800">Skincare</p>
                    </li>
                    <li>
                      <p className="ml-5 mb-4 text-gray-800">Makeup</p>
                    </li>
                    <li>
                      <p className="ml-5 mb-4 text-gray-800">Haircare</p>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality</h3>
              <p className="text-lg text-gray-700">We are committed to providing products of the highest quality. Each item is carefully tested and crafted to meet our rigorous standards.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Innovation</h3>
              <p className="text-lg text-gray-700">We continuously innovate to bring you the latest in beauty trends and technology. Our products are at the forefront of the industry.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Customer Satisfaction</h3>
              <p className="text-lg text-gray-700">Your satisfaction is our priority. We strive to provide excellent customer service and ensure that you are happy with every purchase.</p>
            </div>
          </div>
        </section>

        <section className="mt-20 mb-16 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Story</h2>
          <img src="/aboutUs.jpg" alt="google Image" className="ml-40 mb-4 rounded-lg w-full h-[400px] " />
          <p className="text-lg text-gray-700 mb-4">Founded in 2024, our beauty store has always been dedicated to offering a diverse range of products to suit all skin types and preferences. We started with a simple mission: to make beauty accessible to everyone. Over the years, we've expanded our product line and grown our community, but our commitment to quality and customer satisfaction remains unchanged.</p>
          <p className="text-lg text-gray-700 mb-4">We believe that beauty is more than skin deep. It's about feeling good in your own skin, expressing yourself, and embracing your uniqueness. Our products are designed to empower you to do just that.</p>
        </section>

        
      </main>

      <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">Discover more about our brand and what drives us to deliver the best beauty products for you.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@info.com</p>
            <p className="text-gray-400">Phone: +123 456 789</p>
            <p className="text-gray-400">Address: Beirut, Lebanon</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-2">
              <a href="https://www.facebook.com" className="text-gray-400 hover:text-white transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" className="text-gray-400 hover:text-white transition-all duration-300">
                <i className="fab fa-twitter"></i>
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" className="text-gray-400 hover:text-white transition-all duration-300">
                <i className="fab fa-instagram"></i>
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Cosmetics Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default AboutUs;
