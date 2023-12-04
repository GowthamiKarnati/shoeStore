// actions.ts
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../components/Product';

// Action creators
export const addToCart = createAction<Product>('cart/addToCart');
export const removeItemFromCart = createAction<number>('cart/removeItemFromCart');
//export const selectSize = createAction<{ productId: number; selectedSize: number }>('productSizes/selectSize');
export const selectSize = createAction<{ productId: number; selectedSize: number }>('productSizes/selectSize');
