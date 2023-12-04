// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToCart, removeItemFromCart } from './actions'; // Import the correct action
import { Product } from '../../components/Product';
import { selectSize } from './actions';
interface CartState {
  items: Product[];
  deliveryMessage: string | null;
  selectedSizes: Record<number, number>;
}

const initialState: CartState = {
  items: [],
  deliveryMessage: null,
  selectedSizes: {},
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart, (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    });

    builder.addCase(removeItemFromCart, (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    });
    builder.addCase(selectSize, (state, action: PayloadAction<{ productId: number; selectedSize: number }>) => {
      const { productId, selectedSize } = action.payload;
      state.selectedSizes[productId] = selectedSize;
    });
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
