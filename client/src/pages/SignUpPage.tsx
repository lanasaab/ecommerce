import { useState, React } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Use fetch to send a POST request to the backend
      const response = await fetch(`http://localhost:3000/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful sign-up (redirect to login page or show a success message)
        console.log(data.message);
        alert('User created successfully');
      } else {
        // Handle errors from the server
        const errorData = await response.json();
        console.error('Error during sign-up:', errorData.error);
        alert('Error during sign-up');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during sign-up:', error);
      alert('Error during sign-up');
    }
  };

console.log('====================================');
console.log(formData);
console.log('====================================');
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
              <label htmlFor="firstName" className="block text-gray-800 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none placeholder-gray-500"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-800 mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none placeholder-gray-500"
                placeholder="Enter your password"
                required
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-800 mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none placeholder-gray-500"
                placeholder="Confirm your password"
                required
                onChange={handleChange}
                value={formData.confirmPassword}

              />
            </div>
            {/* Sign Up Button */}
            <div className="text-center">
              <button type="submit" onClick={handleSubmit} className="bg-black text-white px-4 py-2 rounded-full">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
