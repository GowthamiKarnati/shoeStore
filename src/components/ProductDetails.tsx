// // ProductDetails.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import Products from './Products';
// import { Product } from './Product';
// import ProductSizes from './ProductSizes';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch } from 'react-redux';
// import { addToCart} from '../features/cart/actions';
// interface ProductDetailsProps {
//   id: string;
// }

// const ProductDetails: React.FC<ProductDetailsProps> = ({ id }) => {
//   const dispatch = useDispatch();
//   const [productDetails, setProductDetails] = useState<Product | null>(null);
//   const [deliveryMessage, setDeliveryMessage] = useState<string | null>(null);
//   useEffect(() => {
    
//     const selectedProduct = Products.find((product) => product.id === Number(id));

//     if (selectedProduct) {
//       setProductDetails(selectedProduct);
//     }
//   }, [id]);
//   const handleAddToCart = () => {
//     if (productDetails) {
//       dispatch(addToCart(productDetails));
//       console.log('Added to Cart:', productDetails);
//     }
//   };

//   const handleBuyNow = () => {
//     console.log('Buy Now:', productDetails);
//     setDeliveryMessage('This item will be delivered in 2 days.');
//   };

//   if (!productDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div style={{ display: 'flex' }}>
//         <div style={{ flex: 1 , marginLeft:'100px', marginTop:'20px'}}>
//           <img
//             src={productDetails.image} 
//             alt={productDetails.name}
//             style={{ width: '600px', height: '550px', objectFit: 'cover' }}
//           />
//          <div style={{ marginTop: '10px', width:'600px'}}>
//             <button style={{ width: '295px', height: '50px', marginRight: '10px', backgroundColor: 'orange', border: 'none', fontWeight: 'bold', color: 'white' , cursor:'pointer'}} onClick={handleAddToCart}>
//               <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '8px' }} />
//               Add to Cart
//             </button>
//             <button style={{ width: '295px', height: '50px', backgroundColor: '#FF5733', border: 'none', fontWeight: 'bold', color: 'white', marginTop: '10px', cursor:'pointer' }} onClick={handleBuyNow}>
//               <FontAwesomeIcon icon={faShoppingBag} style={{ marginRight: '8px' }} />
//               Buy Now
//             </button>
//             {deliveryMessage && <p style={{ marginTop: '10px', color: 'green', fontWeight: 'bold' }}>{deliveryMessage}</p>}
//           </div>
//         </div>
//         <div style={{ flex: 1, padding: '16px' }}>
//           <h1>{productDetails.name}</h1>
//           <p>Brand: {productDetails.brand}</p>
//           <p>Price: ₹{productDetails.price}</p>
//           <ProductSizes sizes={productDetails.sizes} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import { Product } from './Product';
import ProductSizes from './ProductSizes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/actions';

interface ProductDetailsProps {
  id: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ id }) => {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const selectedProduct = Products.find((product) => product.id === Number(id));

    if (selectedProduct) {
      setProductDetails(selectedProduct);
    }
  }, [id]);

  const handleAddToCart = async () => {
    if (productDetails) {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch(addToCart(productDetails));
        setSuccessMessage('Item added to Cart');
      } catch (error) {
        setErrorMessage('Error adding item to Cart');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBuyNow = () => {
    console.log('Buy Now:', productDetails);
    // Assuming a synchronous operation for simplicity
    setSuccessMessage('Item purchased. It will be delivered in 2 days.');
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, marginLeft: '100px', marginTop: '20px' }}>
          <img
            src={productDetails.image}
            alt={productDetails.name}
            style={{ width: '600px', height: '550px', objectFit: 'cover' }}
          />
          <div style={{ marginTop: '10px', width: '600px' }}>
            <button
              style={{
                width: '295px',
                height: '50px',
                marginRight: '10px',
                backgroundColor: 'orange',
                border: 'none',
                fontWeight: 'bold',
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={handleAddToCart}
            >
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '8px' }} />
              {loading ? 'Adding to Cart...' : 'Add to Cart'}
              
            </button>
            <button
              style={{
                width: '295px',
                height: '50px',
                backgroundColor: '#FF5733',
                border: 'none',
                fontWeight: 'bold',
                color: 'white',
                marginTop: '10px',
                cursor: 'pointer',
              }}
              onClick={handleBuyNow}
            >
              <FontAwesomeIcon icon={faShoppingBag} style={{ marginRight: '8px' }} />
              Buy Now
            </button>
            {successMessage && (
              <p style={{ marginTop: '10px', color: 'green', fontWeight: 'bold' }}>{successMessage}</p>
            )}
            {errorMessage && (
              <p style={{ marginTop: '10px', color: 'red', fontWeight: 'bold' }}>{errorMessage}</p>
            )}
          </div>
        </div>
        <div style={{ flex: 1, padding: '16px' }}>
          <h1>{productDetails.name}</h1>
          <p>Brand: {productDetails.brand}</p>
          <p>Price: ₹{productDetails.price}</p>
          <ProductSizes sizes={productDetails.sizes} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
