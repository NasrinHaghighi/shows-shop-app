import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    login: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.login = action.payload
        }

    }
})

export const { loginUser } = loginSlice.actions
export default loginSlice.reducer