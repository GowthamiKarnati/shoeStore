// ProductSizes.js
import React from 'react';
import './styles.css';

interface ProductSizesProps {
  sizes: number[]; // Adjust the type to an array of numbers
}

const ProductSizes: React.FC<ProductSizesProps> = ({ sizes }) => {
  return (
    <div className="product-sizes-container">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span id="Size- UK/India">Size: </span>
        <ul className="_1q8vHb product-sizes-list">
          {sizes.map((size, index) => (
            <li key={index} className="_3V2wfe _31hAvz product-size-box" id={`swatch-${index}-size`}>
              
                {size}
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductSizes;
