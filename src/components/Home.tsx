import React from 'react'
import ProductList from './ProductList'
import Navbar from './Navbar'
import Products from './Products'
const Home:React.FC = () => {
  return (
    <div>
       <Navbar />
        <ProductList products={Products} /> 
    </div>
  )
}

export default Home