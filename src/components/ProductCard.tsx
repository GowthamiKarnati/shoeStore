// ProductCard.tsx
import React from 'react';
import { Product } from './Product';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    
  return (
    <Card className="ProductCard" style={{ maxWidth: 280, margin: 8 ,maxHeight: 370}}>
      <Link to={`/product-details/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '70%', objectFit: 'cover' }}/>
      </Link>
      <CardContent>
        <Typography variant="h6" component="div" color="text.secondary" style={{fontWeight:'bolder', fontSize:'16px'}}>
          {product.brand}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.primary" style={{ fontSize:'15px',color:'black'}}>
          {product.name} 
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary" style={{ fontWeight:'bold',fontSize:'15px',color:'black'}}>
        ₹{product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
