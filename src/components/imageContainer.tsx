import { Link } from 'react-router-dom';

const ImageContainer = ({ id, src, name, description, category, price }: { id: string, src: string, name: string, description: string, category: string, price: number | undefined }) => {
  return (
    <div className="bg-[#eeeeee] p-3 rounded-lg shadow-lg flex flex-col justify-between card w-full max-w-[400px] sm:w-[350px] md:w-[300px] lg:w-[400px] mx-auto">
      <div className="mb-4 flex justify-center items-center flex-col">
        <img src={src} alt={name} className="object-cover mb-4 rounded-lg h-[200px] sm:h-[250px] md:h-[300px] w-full" />
        <p className="text-gray-600 text-xs sm:text-sm mb-2">{category}</p>
        <h3 className="text-lg sm:text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700 text-sm sm:text-base mb-2">${price}</p>
      </div>
      <div className="flex justify-center items-center">
        <Link to={`/product/${id}`} className="text-white bg-[#ce9d48] rounded-md px-3 py-2 sm:px-4 sm:py-2 transition-all duration-300 hover:bg-gray-800 text-center mr-2 w-36">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default ImageContainer;

