import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null, // {name}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        "setReduxUser": (state, action) => {
            console.log(action)
            state.value = action.payload
        },
        "logout": () => {
            state.value = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { setReduxUser, logout } = userSlice.actions

export default userSlice.reducer