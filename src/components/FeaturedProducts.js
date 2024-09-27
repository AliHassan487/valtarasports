import React from 'react';
import ProductCard from './ProductCard';


const FeaturedProducts = ({ products }) => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
