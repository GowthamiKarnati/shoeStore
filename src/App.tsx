import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetailsWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

const ProductDetailsWrapper: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  // Ensure id is always a string before passing it to ProductDetails
  return id ? <ProductDetails id={id} /> : <div>No product ID specified</div>;
};

export default App;
