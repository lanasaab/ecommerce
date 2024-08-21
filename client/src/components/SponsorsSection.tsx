import React from 'react';
import { Link } from 'react-router-dom';
const SponsorsSection: React.FC = () => {
  return (
    <section className="my-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-stretch gap-0">
        <div className="flex-1 ">
          <img src="/sponsorsImage.jpg" alt="A Whole New Look" className="rounded-l-lg shadow-lg object-cover w-full h-full" />
        </div>
        <div className="flex-1 bg-white p-6 rounded-r-lg shadow-lg flex flex-col justify-center items-center text-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">A Whole New Look</h2>
            <p className="text-gray-700 mb-6">Discover a whole new look with our latest collection.
             Transform your style and elevate your beauty routine with our carefully curated products.</p>
          </div>
          
        <Link to={'/'} className="text-center text-white bg-[#ce9d48] rounded-md px-4 py-2 mt-4  transition-all duration-300 hover:bg-gray-800 block ">
         View More
        </Link>
        </div>
      </div>
    </section>
   
    
  );
};

export default SponsorsSection;

