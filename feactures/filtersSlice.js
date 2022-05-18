import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    brand: [],
    category: [],
    minPrice: 100,
    maxPrice: 1000,
    availble: true,
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addBrand: (state, action) => {
            state.brand = action.payload
        },
        addCategory: (state, action) => {
            state.category = action.payload
        },
        addMaxPrice: (state, action) => {
            state.maxPrice = action.payload
        },
        addMinPrice: (state, action) => {
            state.minPrice = action.payload
        },
    },

})

export const { addBrand, addCategory, addMaxPrice, addMinPrice } = filtersSlice.actions
export default filtersSlice.reducer