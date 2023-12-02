
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../features/cart/selectors';

const Navbar: React.FC = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <nav className="navbar">
      <h1 className="NavbarShoppingCart">
        Shoes Store
        <span className="icon">
          <Link to="/cart" style={{color:'white'}}>
            <FontAwesomeIcon icon={faShoppingCart} style={{marginRight:'10px'}}/>
            
          </Link>
          <span className="cart-count">{cartItems.length}</span>
        </span>
      </h1>
    </nav>
  );
};

export default Navbar;
