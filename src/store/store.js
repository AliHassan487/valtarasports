// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Adding cartReducer to the store
  },
});

export default store;
