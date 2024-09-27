// src/components/HeroSection/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-60 bg-cover bg-center" style={{ backgroundImage: "url('../../assets/images/hero-bg.jpg')" }}>
      <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to valtarasports Store!</h1>
          <p className="text-lg md:text-xl mb-6">Find the best products at unbeatable prices.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition duration-300">Shop Now</button>
            <button className="border-2 border-white py-2 px-4 rounded text-white hover:bg-white hover:text-black transition duration-300">Explore Collections</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
