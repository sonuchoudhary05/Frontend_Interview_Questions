import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}


const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers : {
        addToCart : (state, action) => {
            state.cart = action.payload;
        },
        removeToCart : (state, action) => {
            state.cart = state.cart.filter((prod) => prod.id !== action.payload.id)
        },
        resetToCart : (state) => {
            state.cart = []
        }   
    }
})

export const { addToCart, removeToCart, resetToCart} = cartSlice.actions;
export default cartSlice.reducer;