import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
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
    </div>
 
  );
};

export default Footer;