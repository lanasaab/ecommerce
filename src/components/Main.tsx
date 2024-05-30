import React from 'react';
import ImageContainer from './imageContainer';
import { cardData } from '../constants/imageData';

const Main = () => {
  return (
    <main>
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-5xl font-bold text-black mb-4">Beauty Pronounced</h1>
        <p className="text-2xl text-black">A Whole New Look</p>
        <button className="mt-8 text-lg font-semibold text-white bg-black rounded-md px-6 py-3 shadow-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-black border border-transparent">
          View More
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Featured Products:</h2>
          <p className="text-xl italic text-black text-center mb-8">" Add a flavor to being a girl "</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


            {cardData.map((item, index) => { return <ImageContainer key={index} src={item.src} name={item.name} description={item.description} /> })}











          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Customer Testimonials</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-700 mb-4">"This is the best product I have ever used!"</p>
              <p className="text-gray-900 font-bold">- Happy Customer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-700 mb-4">"Absolutely love it! My skin feels amazing."</p>
              <p className="text-gray-900 font-bold">- Satisfied Client</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Join Our Newsletter</h2>
          <p className="text-white mb-4">Stay updated with the latest products and offers.</p>
          <form className="flex flex-col md:flex-row justify-center items-center">
            <input type="email" placeholder="Enter your email" className="p-3 rounded-md mb-4 md:mb-0 md:mr-4 w-full md:w-auto" />
            <button type="submit" className="text-white bg-black rounded-md px-6 py-3 transition-all duration-300 hover:bg-gray-800">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Main;
