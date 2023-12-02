// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartScile from '../features/cart/cartScile';

const store = configureStore({
  reducer: {
    cart: cartScile,
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
