import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoding : false,
    cart : [],
    error: null
}

export const CartSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        addToCart:(state, action) => {
            let item = state.cart.some((v) => v.pid === action.payload);

            if (item) {
                let index = state.cart.findIndex((v) => v.pid === action.payload);
                state.cart[index].qty++;
            } else {
                state.cart.push({pid:action.payload, qty:1});
            }
            state.isLoding = false ;
            state.error = null;
        },
        cartIncr: (state, action) => {
            let IncrementId = state.cart.findIndex((v) => v.pid === action.payload);
            state.cart[IncrementId].qty++;

            state.isLoding = false ;
            state.error = null;
        },
        cartDcre: (state, action) =>{
            let DcrementId = state.cart.findIndex((v) => v.pid === action.payload);
            state.cart[DcrementId].qty--;

            state.isLoding = false ;
            state.error = null;
        },
        removeitem: (state, action) => {
            let index = state.cart.findIndex((v) => v.id === action.payload);
            state.cart.splice(index, 1);

            state.isLoding = false ;
            state.error = null;
        }
    }
})

export const {addToCart, cartIncr, cartDcre, removeitem} = CartSlice.actions;

export default CartSlice.reducer;