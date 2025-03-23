import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}


const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers : {
        addToCart : (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        removeToCart: (state, action) => {
            const index = state.cart.findIndex(prod => prod.id === action.payload);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        }
    }
})

export const { addToCart, removeToCart, resetToCart} = cartSlice.actions;
export default cartSlice.reducer;