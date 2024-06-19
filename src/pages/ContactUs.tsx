import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ContactUs = () => {
  return (
    <>
  
  <main className="bg-gray-100 py-16">
  <section className="max-w-4xl mx-auto">
    <div className="bg-white rounded-lg shadow-md p-8">
      <form>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Message Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input type="text" id="firstName" name="firstName" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3" />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" name="email" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3" />
        </div>
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea id="message" name="message" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"></textarea>
        </div>
        <div className="mt-6">
          <button type="submit" className="inline-block w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ce9d48] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Send
          </button>
        </div>
      </form>
    </div>
  </section>

  <section className="mt-10 max-w-4xl mx-auto">
          {/* Contact Us card */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-8">We'd love to hear from you! Get in touch with us through our social media channels or contact details below.</p>
            <p className="text-gray-700 mb-8">Get in touch with us through our social media channels or contact details below.</p>

            <div>
              <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:contact@info.com" className="text-indigo-600 hover:underline">contact@info.com</a></p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:+123456789" className="text-indigo-600 hover:underline">+123 456 789</a></p>
              <p className="text-gray-700"><strong>Address:</strong> Beirut, Lebanon</p>
            </div>
            <div className="relative">
              <div className="absolute bottom-0 right-0">
                <div className="flex flex-col justify-between">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Follow Us</h2>
                  <div className="flex space-x-4 mb-8">
                    <a href="https://www.facebook.com" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                      <FaFacebook className="w-8 h-8" />
                    </a>
                    <a href="https://www.twitter.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300">
                      <FaTwitter className="w-8 h-8" />
                    </a>
                    <a href="https://www.instagram.com" className="text-gray-400 hover:text-pink-500 transition-all duration-300">
                      <AiOutlineInstagram className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/" className="bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white font-bold py-2 px-4 rounded-full">
        Back
      </Link>
        </section>
</main>

</>

  )
}

export default ContactUs
