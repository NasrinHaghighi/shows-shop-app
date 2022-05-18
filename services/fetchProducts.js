import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `users`,
        }),
    }),
})
export const { useGetProductsQuery } = productsApi