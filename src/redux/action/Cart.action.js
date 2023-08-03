import * as ActionTypes from "../ActionType";

export const AddToCart = (id) => (dispacth) =>  {
    dispacth({type: ActionTypes.ADD_TO_CART, payload: {pid:id, qty:1}})
}

export const CartIncrement = (id) => (dispacth) => {
    dispacth({type: ActionTypes.INCR_QTY, payload: id})
}
export const CartDcrement = (id) =>  (dispacth) =>  {
    dispacth({type: ActionTypes.DECR_QTY, payload: id})
}

export const removeItem = (id) =>  (dispacth) =>  {
    dispacth({type: ActionTypes.REMOVE_ITEM, payload: id})
}