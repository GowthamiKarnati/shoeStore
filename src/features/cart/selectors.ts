// src/features/cart/selectors.ts
import { RootState } from '../../store/store';

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectDeliveryMessage = (state: RootState) => state.cart.deliveryMessage;
export const selectSelectedSizes = (state: RootState) => state.cart.selectedSizes;