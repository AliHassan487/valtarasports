import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <Link to={`/products/${product.id}`}> 
      <img src={product.image} alt={product.title} className="h-56 w-full object-scale-down transition-opacity duration-300 hover:opacity-75" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
        <p className="text-gray-600 mt-1">{`$${product.price}`}</p>
        <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-500 transition duration-300">
          Add to Cart
        </button>
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;
