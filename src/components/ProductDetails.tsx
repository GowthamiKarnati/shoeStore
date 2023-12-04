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
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import Products from './Products';
// import { Product } from './Product';
// import ProductSizes from './ProductSizes';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../features/cart/actions';

// interface ProductDetailsProps {
//   id: string;
// }

// const ProductDetails: React.FC<ProductDetailsProps> = ({ id }) => {
//   const dispatch = useDispatch();
//   const [productDetails, setProductDetails] = useState<Product | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   useEffect(() => {
//     const selectedProduct = Products.find((product) => product.id === Number(id));

//     if (selectedProduct) {
//       setProductDetails(selectedProduct);
//     }
//   }, [id]);

//   const handleAddToCart = async () => {
//     if (productDetails) {
//       try {
//         setLoading(true);
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         dispatch(addToCart(productDetails));
//         setSuccessMessage('Item added to Cart');
//       } catch (error) {
//         setErrorMessage('Error adding item to Cart');
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const handleBuyNow = () => {
//     console.log('Buy Now:', productDetails);
//     // Assuming a synchronous operation for simplicity
//     setSuccessMessage('Item purchased. It will be delivered in 2 days.');
//   };

//   if (!productDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div style={{ display: 'flex' }}>
//         <div style={{ flex: 1, marginLeft: '100px', marginTop: '20px' }}>
//           <img
//             src={productDetails.image}
//             alt={productDetails.name}
//             style={{ width: '600px', height: '550px', objectFit: 'cover' }}
//           />
//           <div style={{ marginTop: '10px', width: '600px' }}>
//             <button
//               style={{
//                 width: '295px',
//                 height: '50px',
//                 marginRight: '10px',
//                 backgroundColor: 'orange',
//                 border: 'none',
//                 fontWeight: 'bold',
//                 color: 'white',
//                 cursor: 'pointer',
//               }}
//               onClick={handleAddToCart}
//             >
//               <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '8px' }} />
//               {loading ? 'Adding to Cart...' : 'Add to Cart'}
              
//             </button>
//             <button
//               style={{
//                 width: '295px',
//                 height: '50px',
//                 backgroundColor: '#FF5733',
//                 border: 'none',
//                 fontWeight: 'bold',
//                 color: 'white',
//                 marginTop: '10px',
//                 cursor: 'pointer',
//               }}
//               onClick={handleBuyNow}
//             >
//               <FontAwesomeIcon icon={faShoppingBag} style={{ marginRight: '8px' }} />
//               Buy Now
//             </button>
//             {successMessage && (
//               <p style={{ marginTop: '10px', color: 'green', fontWeight: 'bold' }}>{successMessage}</p>
//             )}
//             {errorMessage && (
//               <p style={{ marginTop: '10px', color: 'red', fontWeight: 'bold' }}>{errorMessage}</p>
//             )}
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
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/actions';
import { RootState } from '../store/store';
interface ProductDetailsProps {
  id: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ id }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
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
      const isInCart = cartItems.some((item) => item.id === productDetails.id);

      if (isInCart) {
        setErrorMessage('Item is already in the cart');

        // Clear the error message after 5 seconds
        setTimeout(() => {
          setErrorMessage(null);
        }, 1000);

        return;
      }

      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch(addToCart(productDetails));

        setSuccessMessage('Item added to Cart');
        setTimeout(() => {
          setSuccessMessage(null);
        }, 1500);
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
    setTimeout(() => {
      setSuccessMessage(null);
    }, 1500);
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
      <Navbar />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 100%', maxWidth: '600px', margin: '20px', marginLeft:'80px' }}>
          <img
            src={productDetails.image}
            alt={productDetails.name}
            style={{ width: '100%',  height: '500px' }}
          />
          <div style={{ marginTop: '10px' }}>
            <button
              style={{
                width: '100%',
                height: '50px',
                marginBottom: '10px',
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
                width: '100%',
                height: '50px',
                backgroundColor: '#FF5733',
                border: 'none',
                fontWeight: 'bold',
                color: 'white',
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
        <div style={{ flex: '1', padding: '16px' }}>
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
