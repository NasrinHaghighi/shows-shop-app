import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: {
        fullName: '',
        state1: '',
        city: '',
        address: '',
        code: '',
        phone: '',
        email: '',
    }

}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            const { fullName, state1, city, address, code, phone, email } = action.payload
            state.user.fullName = fullName,
                state.user.state1 = state1,
                state.user.city = city,
                state.user.address = address,
                state.user.code = code,
                state.user.phone = phone,
                state.user.email = email

        }

    }
})

export const { setUserInfo } = userInfoSlice.actions
export default userInfoSlice.reducer