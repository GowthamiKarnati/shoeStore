import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetailsWrapper />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const ProductDetailsWrapper: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure id is always a string before passing it to ProductDetails
    if (id) {
      // Store the product ID in localStorage
      localStorage.setItem('lastProductId', id);
    } else {
      // Redirect to home page if no product ID is specified
      navigate('/');
    }
  }, [id, navigate]);

  // Pass the id to ProductDetails
  return id ? <ProductDetails id={id} /> : <div>No product ID specified</div>;
};

export default App;
