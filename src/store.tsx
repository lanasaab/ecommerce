// cartStore.js
const CART_KEY = 'cart';

// Load cart from local storage
const loadCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

// Save cart to local storage
const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Add item to cart
export const addToCart = (product, quantity) => {
  const cart = loadCart();
  const existingProductIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingProductIndex > -1) {
    // Update quantity of existing product
    cart[existingProductIndex].quantity += quantity;
  } else {
    // Add new product to cart
    cart.push({ ...product, quantity });
  }

  saveCart(cart);
};

// Remove item from cart
export const removeFromCart = (productId) => {
  const cart = loadCart();
  const updatedCart = cart.filter(item => item.id !== productId);
  saveCart(updatedCart);
};

// Get cart items
export const getCart = () => {
  return loadCart();
};

// Get total price
export const getTotalPrice = () => {
  const cart = loadCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};
