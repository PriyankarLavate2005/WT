// CombinedPage.js

import React from 'react';
import ProductList from '../pages/Products.js';
import Header from '../components/Header';

const CombinedPage = () => {
  return (
    <div>
    <Header/>
    <ProductList />
      
    </div>
  );
};

export default CombinedPage;
