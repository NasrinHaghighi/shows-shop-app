import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    flag: false
}

export const flagSlice = createSlice({
    name: 'flag',
    initialState,
    reducers: {
        flagChange: (state, action) => {
            state.flag = action.payload
        }

    }
})

export const { flagChange } = flagSlice.actions
export default flagSlice.reducer