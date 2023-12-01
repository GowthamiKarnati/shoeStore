
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      
      
      <h1 className="NavbarShoppingCart">
       Shoes Store
       <span className="icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
      </h1>
    </nav>
  );
}

export default Navbar;
