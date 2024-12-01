import React from 'react';
import Header from './components/Glowa';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <h1 className="main-heading">Discover Our Collection</h1>
        <ProductList />
      </main>
    </div>
  );
};

export default App;
