import React from 'react';
import { Link } from 'react-router-dom';

const ImageContainer = ({ id, src, name, description, category, price }: { id: string, src: string, name: string, description: string, category: string, price: number | undefined }) => {
 
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between card">
      <div className="mb-4">
        <img src={src} alt={name} className="object-cover mb-4 rounded-lg h-[400px] w-[400px]" />
        <p className="text-gray-600 text-sm mb-2">{category}</p>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700 mb-2">${price}</p>
      </div>
      <div className="flex justify-between">
        <div>
          <Link to={`/product/${id}`} className="text-white bg-black rounded-md px-4 py-2 transition-all duration-300 hover:bg-gray-800 text-center mr-2">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
