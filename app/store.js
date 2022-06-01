import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from '../services/fetchProducts'
import filtersReducer from "../feactures/filtersSlice";
import allProductsSlice from "../feactures/allProductsSlice";
import cartSlice from '../feactures/cartSlice'
import loginSlice from "../feactures/loginSlice";
import flagSlice from "../feactures/flagSlice";
import userInfoSlice from "../feactures/userInfoSlice";


export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        filters: filtersReducer,
        products: allProductsSlice,
        cart: cartSlice,
        login: loginSlice,
        flag: flagSlice,
        userInfo: userInfoSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})
setupListeners(store.dispatch)

// export type RooTState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch