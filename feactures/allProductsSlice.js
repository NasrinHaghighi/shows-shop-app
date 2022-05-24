import { createSlice } from "@reduxjs/toolkit";

import { products } from "../services/productsList";


const initialState = {
    products: []
}

export const allProductsSlice = createSlice({

    name: 'products',
    initialState,
    reducers: {
        getAllProducts: (state, action) => {
            state.products = products
                //console.log(state.products)
        },
        fillterProductsHandler: (state, action) => {
            const { brand, category, minPrice, maxPrice } = action.payload
            let tempProducts = [...products];

            console.log(`minprice${minPrice}`)
            console.log(`maxprice${maxPrice}`)
                //console.log(products)
            if (minPrice >= 100 || maxPrice <= 1000) {
                const t = tempProducts.filter(item => item.price >= minPrice && item.price <= maxPrice)
                state.products = t
            }
            if (brand.length > 0) {
                tempProducts = tempProducts.filter(item => brand.indexOf(item.brand) !== -1)
                state.products = tempProducts
            }
            if (category.length > 0) {
                tempProducts = tempProducts.filter(item => category.indexOf(item.category) !== -1)
                state.products = tempProducts
            }
            if (category.length > 0) {
                tempProducts = tempProducts.filter(item => category.indexOf(item.category) !== -1)
                state.products = tempProducts
            }
        },
        sortProductsHandler: (state, action) => {
            if (action.payload === 'mostCheapest') {
                let tempProducts = [...products];
                tempProducts = tempProducts.sort((a, b) => a.price - b.price)
                state.products = tempProducts
            }
            if (action.payload === 'mostExpensive') {
                let tempProducts = [...products];
                tempProducts = tempProducts.sort((a, b) => b.price - a.price)
                state.products = tempProducts
            }
            if (action.payload === 'mostPopular') {
                let tempProducts = [...products];
                tempProducts = tempProducts.filter(item => item.mostPopular === true)
                state.products = tempProducts
            }
            if (action.payload === 'bestSeller') {
                let tempProducts = [...products];
                tempProducts = tempProducts.filter(item => item.bestSeller === true)
                state.products = tempProducts
            }
            if (action.payload === 'mostVisited') {
                let tempProducts = [...products];
                tempProducts = tempProducts.filter(item => item.mostVisited === true)
                state.products = tempProducts
            }

        }


    },

})


export const { getAllProducts, fillterProductsHandler, sortProductsHandler } = allProductsSlice.actions
export default allProductsSlice.reducer

// tempProducts = tempProducts.filter((item) => {
//     return (item.price >= minPrice && item.price <= maxPrice)
// })