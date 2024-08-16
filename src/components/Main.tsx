import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import ImageContainer from './imageContainer';
import { useQuery } from '@tanstack/react-query';

const Main = ({isHome} :{isHome:boolean}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('popularity');

  const { isLoading, error, data } = useQuery({
    queryKey: ['productsalll'],
    queryFn: () => fetch("http://localhost:3000/products").then((res) => res.json())
  });

  if (isLoading) return "Loading...";
  if (error) return "An error occurred";
console.log('====================================');
console.log(data);
console.log('====================================');
 // Filtering logic
 const filteredData = data
 .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
 .filter(item => item.price >= priceRange[0] && item.price <= priceRange[1])
 .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));


  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortOption) {
      case 'price-low-to-high':
        return a.price - b.price;
      case 'price-high-to-low':
        return b.price - a.price;
      case 'newest':
        return new Date(b.id) - new Date(a.id); // Assuming ID is a timestamp
      case 'popularity':
      default:
        return 0; // Default sorting by popularity or no sorting
    }
  });
  return (
    <main className={` ${isHome?" flex justify-center items-center":"flex"} `}>
      <aside className={` w-full md:w-1/4 lg:w-1/4 p-4 mt-40 ${isHome ? "hidden":"relative"} `}>
        <div className="bg-white p-4 flex items-center">
        <input
            type="text"
            placeholder="Search.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 p-2 border-2 border-black rounded-lg"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mt-10">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="list-disc list-inside">
            <li  className='cursor-pointer' onClick={() => setSelectedCategory('All')}>All</li>
            <li  className='cursor-pointer' onClick={() => setSelectedCategory('Skincare')}>Skincare</li>
            <li  className='cursor-pointer' onClick={() => setSelectedCategory('Makeup')}>Makeup</li>
            <li  className='cursor-pointer' onClick={() => setSelectedCategory('Perfume')}>Perfume</li>
          </ul>
        </div>
        <div className="mt-10 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Filter by Price</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
            className="w-full"
          />
          <p>Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
        </div>
      </aside>
      <div className={`w-full md:w-3/4 lg:w-3/4 px-4 `} >
        <div className="mb-10">
          <h2 className="text-center text-3xl font-bold text-black mb-4">Featured Products:</h2>
          <p className="text-xl italic text-black text-center mb-4">"Add a flavor to being a girl"</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sortedData.map((item, index) => (
              <ImageContainer
                key={index}
                id={item._id}
                src={item.src}
                category={item.category}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={ `mt-40 ml-5 ${isHome ? "hidden":"relative"} `}>
          <div className="w-full bg-white p-2 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-semibold mb-2">Sort By</h2>
            <select
              className="w-full p-1 border border-gray-300 rounded-lg"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="popularity">Popularity</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          
        </div>


    </main>
  );
};

export default Main;
