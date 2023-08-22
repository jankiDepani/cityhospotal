import * as ActionTypes from '../ActionType'

const initstate = {
    isLoading: false,
    cart: [],
    error: null
}

export const Cartreducer = (state = initstate, action) => {

    switch (action.type) {

        case ActionTypes.ADD_TO_CART:
            let item = state.cart.some((v) => v.pid === action.payload.pid)

            if (item) {
                let index = state.cart.findIndex((v) => v.pid === action.payload.pid)
                state.cart[index].qty++;
            } else {
                state.cart.push(action.payload)
            }
            return {
                ...state,
                isloading: false,
                error: null
            }

        case ActionTypes.INCR_QTY:
            let IncrementId = state.cart.findIndex((v) => v.pid === action.payload);
            state.cart[IncrementId].qty++;
            return {
                ...state,
                isLoading: false,
                error: null
            }

        case ActionTypes.DECR_QTY:
            let DcrementId = state.cart.findIndex((v) => v.pid === action.payload);
            state.cart[DcrementId].qty--;
            return {
                cart: state.cart,
                isLoading: false,
                error: null
            }
        case ActionTypes.REMOVE_ITEM:
            let index = state.cart.findIndex((v) => v.id === action.payload);

            state.cart.splice(index, 1);

            return {
                ...state,
                isLoading: false,
                error: null
            }

        default:
            return state
    }
}