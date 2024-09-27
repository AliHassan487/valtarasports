import React, { useState } from 'react';
import { FaSearch, FaUserCircle, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo Image */}
        <div className="flex items-center">
          <a href="/">
            <img src="/logo.png" alt="Sports Shop Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Hamburger Icon (Visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {/* Search Bar (Hidden on very small screens) */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-md overflow-hidden w-full md:w-1/3 lg:w-1/4">
          <input
            type="text"
            className="w-full px-4 py-2 text-black outline-none"
            placeholder="Search for products..."
          />
          <button className="px-4 bg-orange-500 hover:bg-orange-600 transition duration-300">
            <FaSearch />
          </button>
        </div>
        
        {/* Nav Items (Hidden on small screens, shown in hamburger menu on click) */}
        <div className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 right-0 bg-gray-900 md:bg-transparent py-4 md:py-0`}>
          <a href="/" className="block px-6 py-2 text-white hover:bg-gray-800 md:hover:bg-transparent hover:text-orange-500 transition">Home</a>
          <a href="/products" className="block px-6 py-2 text-white hover:bg-gray-800 md:hover:bg-transparent hover:text-orange-500 transition">Products</a>
          <a href="/clothing" className="block px-6 py-2 text-white hover:bg-gray-800 md:hover:bg-transparent hover:text-orange-500 transition">Clothing</a>
          <a href="/playing-items" className="block px-6 py-2 text-white hover:bg-gray-800 md:hover:bg-transparent hover:text-orange-500 transition">Playing Items</a>
          <a href="/about" className="block px-6 py-2 text-white hover:bg-gray-800 md:hover:bg-transparent hover:text-orange-500 transition">About</a>
        </div>
        
        {/* Icons (Always visible) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/account" className="hover:text-orange-500">
            <FaUserCircle size={24} />
          </a>
          <a href="/cart" className="relative hover:text-orange-500">
            <FaShoppingCart size={24} />
            <span className="absolute top-0 right-0 text-sm bg-red-600 text-white rounded-full px-1"> {cartItems.length}</span>
          </a>
        </div>
      </div>

      {/* Mobile Search Bar (Visible on small screens) */}
      <div className="md:hidden mt-4">
        <div className="flex items-center bg-gray-800 rounded-md overflow-hidden w-full">
          <input
            type="text"
            className="w-full px-4 py-2 text-black outline-none"
            placeholder="Search for products..."
          />
          <button className="px-4 bg-orange-500 hover:bg-orange-600 transition duration-300">
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
