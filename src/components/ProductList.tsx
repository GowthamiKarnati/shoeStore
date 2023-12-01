// // ProductList.tsx
// import React from 'react';
// import { Product } from './Product';
// import ProductCard from './ProductCard';

// interface ProductListProps {
//   products: Product[];
// }

// const ProductList:React.FC<ProductListProps>=({ products }) =>{
//   return (
//     <div className="ProductList">
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;
// ProductList.tsx
import React from 'react';
import { Product } from './Product';
import ProductCard from './ProductCard';
import Grid from '@mui/material/Grid';
import LeftPanel from './LeftPanel';
interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="ProductList" >
      <Grid container spacing={2} style={{marginTop:'0.2vw'}}>
        {/* Left Panel */}
        <Grid item xs={2} style={{backgroundColor:'#f5f5f5'}}>
          <LeftPanel />
        </Grid>

        
        <Grid item xs={10} style={{backgroundColor:'#e6f7ff'}}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductList;
