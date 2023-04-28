import { configureStore } from '@reduxjs/toolkit'

import UserReducer from "./slice/userSlice"

/* cart items  - [ {} ,{} ] */
/* users */


export const store = configureStore({
    reducer: {
        user: UserReducer
    },
})