import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex">
        {/* Left Side (Sign In) */}
        <div className="flex-1 bg-black p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold text-center mb-8">Welcome back</h2>
          <p className="text-white text-center">If you already have an account, please sign in.</p>
          {/* Sign In Button */}
          <div className="mt-10 text-center">
            <a href="/login">
              <button className="rounded-full border border-white bg-black text-white px-4 py-2 transition duration-300">Sign In</button>
            </a>
          </div>
        </div>
        {/* Right Side (Sign Up) */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>
          <div className="flex justify-center mt-4 space-x-2">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white transition-all duration-300">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white transition-all duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white transition-all duration-300">
              <AiOutlineInstagram />
            </a>
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none placeholder-gray-500" 
                placeholder="Enter your name"
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none placeholder-gray-500" 
                placeholder="Enter your email"
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-800 mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none placeholder-gray-500" 
                placeholder="Enter your password"
                required 
              />
            </div>
            {/* Sign Up Button */}
            <div className="text-center">
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-full">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
