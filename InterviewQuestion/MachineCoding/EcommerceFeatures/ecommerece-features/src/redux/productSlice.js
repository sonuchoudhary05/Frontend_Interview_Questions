import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    products: [],
}
const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        removeProducts: (state) => {
            state.products = [];
        },
    },
});

export const { setProducts, removeProducts } = productSlice.actions;
export default productSlice.reducer;