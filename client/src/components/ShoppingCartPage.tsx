import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { getCart, getTotalPrice, removeFromCart } from '../store'; // Adjust path as necessary

const ShoppingCartPage = ({ onClose }) => {
  const cart = getCart();
  const totalPrice = getTotalPrice();

  const handleRemove = (productId) => {
    removeFromCart(productId);
    // To force re-render, you may want to use a state or effect to reload the cart data
    window.location.reload(); // Simple way to refresh cart data; consider a more efficient approach
  };

  return (
    <div className="fixed right-0 top-0 h-full w-1/4 bg-gray-200 z-10 shadow-md flex flex-col justify-between">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">Shopping Cart</p>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <FaTimes />
          </button>
        </div>
        <p className="mt-2 mb-4">You have {cart.reduce((total, item) => total + item.quantity, 0)} {cart.length === 1 ? 'product' : 'products'} in your cart.</p>
        <p className="font-bold text-lg">Total Price: ${totalPrice.toFixed(2)}</p>
        <div className="mt-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4 p-2 border-b border-gray-300">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-600 hover:text-red-800 focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <Link to={'/checkout'} className="text-center text-white bg-[#ce9d48] rounded-md px-4 py-2 transition-all duration-300 hover:bg-gray-800 block">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
