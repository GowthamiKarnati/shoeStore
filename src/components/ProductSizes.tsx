// // ProductSizes.js
// import React from 'react';
// import './styles.css';

// interface ProductSizesProps {
//   sizes: number[];
//   id : number; 
// }

// const ProductSizes: React.FC<ProductSizesProps> = ({ sizes, id }) => {
//   return (
//     <div className="product-sizes-container">
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <span id="Size- UK/India">Size: </span>
//         <ul className="_1q8vHb product-sizes-list">
//           {sizes.map((size, index) => (
//             <li key={index} className="_3V2wfe _31hAvz product-size-box" id={`swatch-${index}-size`}>
              
//                 {size}
              
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProductSizes;
// ProductSizes.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectSize } from '../features/cart/actions';
import './styles.css';

interface ProductSizesProps {
  sizes: number[];
  id: number;
}

const ProductSizes: React.FC<ProductSizesProps> = ({ sizes, id }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleSizeClick = (size: number) => {
    const newSize: number = selectedSize === size ? 0 : size; 
  setSelectedSize(newSize);
  dispatch(selectSize({ productId: id, selectedSize: newSize }));
  };

  return (
    <div className="product-sizes-container">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span id={`Size-${id}`}>Size: </span>
        <ul className="_1q8vHb product-sizes-list">
          {sizes.map((size, index) => (
            <li
              key={index}
              className="_3V2wfe _31hAvz product-size-box"
              id={`swatch-${index}-size`}
              onClick={() => handleSizeClick(size)}
              style={{ backgroundColor: selectedSize === size ? '#FFBF00' : 'white' }}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductSizes;
