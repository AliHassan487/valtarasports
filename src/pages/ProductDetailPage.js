import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      alert(`${product.title} added to cart!`); // Alert for feedback
    }
  };;

  if (!product) return <div className="text-center text-lg">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-3/4 h-auto object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-md text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">Price: ${product.price}</p>
          </div>
          <div>
            <button
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-blue-600 text-white text-lg px-5 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 p-5 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Product Details</h2>
        <p className="text-sm text-gray-600">
          * This product is available for a limited time only. Check out our other products for more great deals!
        </p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
