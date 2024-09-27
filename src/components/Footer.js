import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are committed to providing high-quality sports products that cater to all your sporting needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/cart" className="text-gray-400 hover:text-white">Cart</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@example.com</p>
            <p className="text-gray-400">Phone: +1 (234) 567-890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">© 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
      {/* WhatsApp Icon */}
      <a 
        href="https://wa.me/YOUR_PHONE_NUMBER" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
    </footer>
  );
};

export default Footer;
