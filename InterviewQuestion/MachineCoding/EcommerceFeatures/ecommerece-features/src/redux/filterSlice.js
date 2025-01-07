import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   byStock: false,
   byRating: 0,
   searchQuery: '',
   sort: "lowToHigh"
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setCategory: (state, action) => {
            state.searchQuery = action.payload;
        },
        setPrice: (state, action) => {
            state.sort = action.payload;
        },
        setRating: (state, action) => {
            state.byRating = action.payload;
        },
        setStock: (state, action) => {
            state.byStock = action.payload;
        }
    },
});

export const { setCategory, setPrice, setRating, setStock} = filterSlice.actions;
export default filterSlice.reducer;