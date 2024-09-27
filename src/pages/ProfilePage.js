// src/pages/ProfilePage.js
import React, { useState } from 'react';

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    username: 'john_doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
    },
    // Add more fields as needed
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address')) {
      const addressField = name.split('.')[1]; // 'street', 'city', etc.
      setUserInfo((prev) => ({
        ...prev,
        address: { ...prev.address, [addressField]: value },
      }));
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Updated User Info:', userInfo);
    setIsEditing(false);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log('User logged out');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly={!isEditing}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly={!isEditing}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly={!isEditing}
            required
          />
        </div>
        <h2 className="text-xl font-bold mb-2">Address</h2>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="address.street">Street</label>
          <input
            type="text"
            id="address.street"
            name="address.street"
            value={userInfo.address.street}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="address.city">City</label>
          <input
            type="text"
            id="address.city"
            name="address.city"
            value={userInfo.address.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="address.state">State</label>
          <input
            type="text"
            id="address.state"
            name="address.state"
            value={userInfo.address.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="address.zip">ZIP Code</label>
          <input
            type="text"
            id="address.zip"
            name="address.zip"
            value={userInfo.address.zip}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly={!isEditing}
          />
        </div>
        {isEditing && (
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        )}
      </form>

      {/* Order History Section */}
      <h2 className="text-xl font-bold mt-6">Order History</h2>
      <ul className="mt-4 bg-gray-200 p-4 rounded-lg">
        {/* This is a static example; replace with dynamic data */}
        <li className="mb-2">Order #12345 - $50.00</li>
        <li className="mb-2">Order #12346 - $30.00</li>
        <li className="mb-2">Order #12347 - $75.00</li>
      </ul>

      {/* Wishlist Section */}
      <h2 className="text-xl font-bold mt-6">Wishlist</h2>
      <ul className="mt-4 bg-gray-200 p-4 rounded-lg">
        {/* This is a static example; replace with dynamic data */}
        <li className="mb-2">Sports Shoes</li>
        <li className="mb-2">Tennis Racket</li>
        <li className="mb-2">Basketball Jersey</li>
      </ul>
    </div>
  );
};

export default ProfilePage;
