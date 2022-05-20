import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from '../services/fetchProducts'
import filtersReducer from "../feactures/filtersSlice";
import allProductsSlice from "../feactures/allProductsSlice";


export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        filters: filtersReducer,
        products: allProductsSlice,


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})
setupListeners(store.dispatch)

// export type RooTState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch