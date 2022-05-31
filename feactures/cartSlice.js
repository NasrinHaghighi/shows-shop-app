import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { id, mainColor, mainSize, mainAmount, price, name, model, ShortDescription, images, discont } = action.payload
            let tempItem = state.cart.find((item) => item.newId === id + mainColor + mainSize)
            if (tempItem) {
                state.cart.map((item) => {
                    if (item.newId === id + mainColor + mainSize) {
                        return item.amount = item.amount + mainAmount
                    } else {
                        return {...item }
                    }
                })
            } else {
                const newItem = {
                    newId: id + mainColor + mainSize,
                    id: id,
                    amount: mainAmount,
                    color: mainColor,
                    size: mainSize,
                    name: name,
                    price: price,
                    model: model,
                    shortDescription: ShortDescription,
                    images: images,
                    discont: discont

                }
                state.cart.push(newItem)
            }


        },
        deleteItem: (state, action) => {

            let newCart = state.cart.filter(item => item.newId !== action.payload)
            state.cart = newCart
        }
    }


})

export const { addItem, deleteItem } = cartSlice.actions
export default cartSlice.reducer