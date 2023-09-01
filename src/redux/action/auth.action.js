import * as ActionTypes from "../ActionType";

export const signupUser = (data) => (dispacth) => {
    dispacth({type:ActionTypes.SIGNUP_USER, payload:data})
}