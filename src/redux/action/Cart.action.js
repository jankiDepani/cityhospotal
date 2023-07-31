import * as ActionTypes from "../ActionType";

export const AddToCart = (id) => (dispacth) =>  {
    dispacth({type: ActionTypes.ADD_TO_CART, payload: {pid:id, qty:1}})
}