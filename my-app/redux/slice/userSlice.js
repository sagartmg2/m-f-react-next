import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "Ram",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export default userSlice.reducer