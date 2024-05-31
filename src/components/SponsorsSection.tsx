import React from 'react';

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
          <button type="submit" className="text-white bg-black rounded-md px-6 py-3 transition-all duration-300 hover:bg-gray-800">
          View More
        </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-stretch gap-0">
        <div className="flex-1 bg-white p-6 rounded-r-lg shadow-lg flex flex-col justify-center items-center text-center m-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Season Sale</h2>
            <p className="text-gray-700 mb-6">Get ready to refresh your beauty stash with our exclusive Season Sale! Enjoy incredible discounts on your favorite cosmetics for a limited time only.</p>
          </div>
        </div>
        <div className="flex-1 bg-white p-6 rounded-r-lg shadow-lg flex flex-col justify-center items-center text-center m-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Free Shipping</h2>
            <p className="text-gray-700 mb-6">Enjoy our Free Shipping offer! No minimum purchase required. It's the perfect time to stock up on your beauty essentials.</p>
          </div> 
        </div>
      </div>
    </section>
    
  );
};

export default SponsorsSection;
