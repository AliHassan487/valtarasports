import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div>
      <HeroSection />
      <Categories  />
      <FeaturedProducts products={products} />
    </div>
  );
};

export default HomePage;
