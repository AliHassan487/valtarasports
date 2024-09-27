// src/App.js
import React from 'react';
import AppRouter from './routes/Routes';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
