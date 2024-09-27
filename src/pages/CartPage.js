// src/pages/CartPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Select cart items from state

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return <div className="text-center mt-10">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b py-4">
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Clear Cart
        </button>
        <div className="font-semibold">
          Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
