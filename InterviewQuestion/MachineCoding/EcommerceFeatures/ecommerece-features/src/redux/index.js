import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import filterReducer from './filterSlice';
import cartReducer from './cartSlice';


export const store = configureStore({
    reducer: {
        product: productReducer,
        filter: filterReducer,
        cart: cartReducer,
    },
});
