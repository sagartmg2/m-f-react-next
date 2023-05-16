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

            let cart_items = [...state.value]

            if (cart_items.find(item => item._id == action.payload._id)) {
                cart_items = cart_items.map(el => {
                    if (el._id == action.payload._id) {
                        return {
                            ...el,
                            quantity: el.quantity + 1
                        }
                    } else {
                        return el
                    }

                })

            } else {
                let { _id, name, price } = action.payload
                cart_items.push({
                    _id,
                    name,
                    price,
                    quantity: 1
                })
            }

            state.value = cart_items
            localStorage.setItem("cart_items", JSON.stringify(cart_items))


        },
        "setCartItems": (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, setCartItems } = cartSlice.actions

export default cartSlice.reducer