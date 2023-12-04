// src/pages/CartPage.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectSelectedSizes } from '../features/cart/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../components/styles.css'
import { removeItemFromCart } from '../features/cart/actions';
const CartPage: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const selectedSizes = useSelector(selectSelectedSizes);
    const handleRemoveItem = (itemId: number) => {
        // Dispatch the action to remove the item from the cart
        dispatch(removeItemFromCart(itemId));
    };
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-image">
            <img src={item.image} alt={item.name} />
            <div className="quantity-controls">
              <button className="quantity-button" >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button className="quantity-button">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <div className="cart-item-details">
            <p className="cart-item-name">{item.name}</p>
            <h3 style={{fontSize:'18px'}} >₹{item.price}</h3>
            <p style={{fontSize:'15px'}}>Size: {selectedSizes[item.id]}</p>
            
            
          </div>
          
          <div className="cart-item-actions">
            <button className="save-for-later">Save for later</button>
            <button className="remove" onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
          
        </div>
        
      ))}
    </div>
  );
};

export default CartPage;
