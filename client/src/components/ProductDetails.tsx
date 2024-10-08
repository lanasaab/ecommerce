import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../constants/imageData';
import Footer from './Footer';
import Header from './Header';
import { addToCart } from '../store';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const [reviewData, setReviewData] = useState({
    name: '',
    email: '',
    review: ''
  });
  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/product/${productId}`,
        {
          name: reviewData.name,
          email: reviewData.email,
          review: reviewData.review,
          productId

        });
      if (response.data) {
        console.log('====================================');
        console.log(response.data);
        console.log('====================================');
      }
      setReviewData({ name: '', email: '', review: '' }); // Clear form after submission
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  // const product = cardData.find(item => item.id === productId);
  const [cartCount, setCartCount] = useState(0);
  const [showReviews, setShowReviews] = useState(false);

  const { isLoading, error, data: product } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetch(`http://localhost:3000/product/${productId}`).then((res) => res.json())
  });

  if (isLoading) return "Loading...";
  if (error) return "An error occurred";
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, cartCount);
    setCartCount(0); // Reset cart count after adding to cart
  };

  const handleIncrease = () => {
    setCartCount(cartCount + 1);
  };

  const handleDecrease = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  console.log('====================================');
  console.log(product);
  console.log('====================================');
  return (
    <div className='flex flex-col min-h-screen '>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8  flex-grow">
        <div className="flex flex-col md:flex-row items-center ">
          <img src={product.src} alt={product.name} className="w-full md:w-1/2 h-auto rounded-lg shadow-md" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h2 className="text-xl font-bold mb-2">{product.category}</h2>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="mx-2 text-lg">{cartCount}</div>
                <div className="flex flex-col items-center mr-2">
                  <button onClick={handleIncrease} className="px-2 py-1">
                    ▲
                  </button>
                  <button onClick={handleDecrease} className={`px-2 py-1${cartCount === 0 && 'opacity-50 cursor-not-allowed'}`} disabled={cartCount === 0}>
                    ▼
                  </button>
                </div>
              </div>
              <div className="ml-5">
                <button onClick={handleAddToCart} className="text-white bg-black rounded-md px-4 py-2 transition-all duration-300 hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
        <div>
          <button onClick={toggleReviews} className="text-center underline-none hover:underline focus:underline-none">Reviews</button>
        </div>
        {showReviews && (
          <>
          <div id="review-form" className="mt-8">
            <h3 className="text-xl font-bold mb-4">Write a Review</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={reviewData.name}
                  onChange={(e) => {
                    setReviewData({ ...reviewData, name: e.target.value });
                  }}

                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  value={reviewData.email}
                  onChange={(e) => {
                    setReviewData({ ...reviewData, email: e.target.value });
                  }}

                  type="email" id="email" name="email" className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="review" className="block text-sm font-medium text-gray-700">Your Review</label>
                <textarea
                  value={reviewData.review}
                  onChange={(e) => {
                    setReviewData({ ...reviewData, review: e.target.value });
                  }}

                  id="review" name="review" rows={5} className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <button onClick={handleSubmitReview} className="inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
            </form>
          </div>
           <div className='mt-10'>
           {
           //@ts-expect-error error
           product.reviews.map((review, index) => (
             <div key={index} className="p-4 mb-6 bg-white shadow-lg rounded-lg">
               <div className="flex items-center">
                 <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
                   {review.name.charAt(0).toUpperCase()}
                 </div>
                 <div>
                   <h3 className="text-lg font-semibold">{review.name}</h3>
                   <p className="text-sm text-gray-500">{review.email}</p>
                 </div>
               </div>
               <p className="mt-4 text-gray-700 leading-relaxed">{review.review}</p>
               <div className="mt-4 flex items-center">
                 <span className="text-yellow-500">
                   {/* Replace with star icons for rating, if applicable */}
                   ★★★★☆
                 </span>
                 <span className="ml-2 text-sm text-gray-400">Posted on August 22, 2024</span>
               </div>
             </div>
           ))}
         </div>
         </>
        )}
      </div>
     

      <Footer />
    </div>
  );
};

export default ProductDetails;
