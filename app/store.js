import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from '../services/fetchProducts'
import filtersReducer from "../feactures/filtersSlice";


export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        filters: filtersReducer,


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})
setupListeners(store.dispatch)

// export type RooTState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch