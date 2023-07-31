import * as ActionTypes from '../ActionType'

const initstate = {
    isLoading:false,
    cart:[],
    error:null
}

export const CartReducer = (state=initstate, action) => {
    console.log(action);
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return {
                cart: state
            }
        default:
            return state
    }
}