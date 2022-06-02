import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    flagValuesInfo: false
}

export const flagValuesInfoSlice = createSlice({
    name: 'flagValuesInfo',
    initialState,
    reducers: {
        changeFlagValuesInfo: (state, action) => {
            state.flagValuesInfo = action.payload
        }

    }
})

export const { changeFlagValuesInfo } = flagValuesInfoSlice.actions
export default flagValuesInfoSlice.reducer