import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: true,
    value: null, // {name}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        "setReduxUser": (state, action) => {
            console.log(action)
            state.value = action.payload
            state.isLoading = false;
        },
        "logout": (state) => {
            state.value = null
            localStorage.removeItem("access_token")
        },
        "stopLoading": (state) => {
            state.isLoading = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setReduxUser, logout, stopLoading } = userSlice.actions

export default userSlice.reducer