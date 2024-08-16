import { React, useState } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SignIn } from '@clerk/clerk-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use fetch to send a POST request to the backend
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data.message);
        alert('Login successful');
        localStorage.setItem('token', data.token);
        window.location.href = '/';
      } else {
        const errorData = await response.json();
        console.error('Error during login:', errorData.error);
        alert('Error during login: ' + errorData.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex">
        {/* Left Side (Sign In) */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center">Sign In</h2>
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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none placeholder-gray-500" 
                placeholder="Enter your password"
                required 
              />
            </div>
            {/* Sign In Button */}
            <div className="text-center">
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-full">Sign In</button>
            </div>
          </form>
        </div>
        {/* Right Side (Sign Up) */}
        <div className="flex-1 bg-black p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold text-center mb-8">Welcome back</h2>
          <p className="text-white text-center">Enter your personal details to create your account.</p>
          {/* Sign Up Button */}
          <div className="mt-10 text-center">
            <a href="/signup">
              <button className="rounded-full border border-white bg-black text-white px-4 py-2 transition duration-300">Sign Up</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
