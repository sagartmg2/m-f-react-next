import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [], // {name}

    /*
            [
                {
                    name:"charger..",price,_id,quantiy:4
                }
            ]
    
    */

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        "addToCart": (state, action) => {

            /*   
                 if product alreadey in cart, update quanity only
                 else 
                 create new cart item wtith quanity 0

            */

            state.value.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer