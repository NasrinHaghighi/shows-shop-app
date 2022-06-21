import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    brand: [],
    category: [],
    minPrice: 100,
    maxPrice: 1000,
    availble: true,
    flag: false
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
        clearFilterOption: (state, action) => {
            state.brand = []
            state.category = []
            state.minPrice = 100
            state.maxPrice = 1000
            state.flag = true
        },
        cahngeStateFlag: (state, action) => {
            state.flag = action.payload
        }
    },

})

export const { addBrand, addCategory, addMaxPrice, addMinPrice, clearFilterOption, cahngeStateFlag } = filtersSlice.actions
export default filtersSlice.reducer