import React from 'react';

const Categories = () => {
  const categories = [
    'Footwear',
    'Apparel',
    'Accessories',
    'Equipment',
    'Fitness Gear',
    'Team Sports',
    'Outdoor Sports',
    'Cycling',
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Shop by Category</h2>
      <div className="flex justify-center flex-wrap">
        {categories.map((category, index) => (
          <div key={index} className="m-4 w-1/5 p-2 flex flex-col items-center">
            <img
              src={`https://picsum.photos/200/300?random=${index}`}
              alt={category}
              className="rounded shadow-lg w-full h-40 object-cover"
            />
            <h3 className="text-center mt-2 font-semibold text-lg">{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
