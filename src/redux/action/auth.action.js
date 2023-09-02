import * as ActionTypes from "../ActionType";

export const signupUser = (data) => (dispacth) => {
    dispacth({type:ActionTypes.SIGNUP_USER, payload:data})
}
export const loginUser = (data) => (dispacth) => {
    dispacth({type:ActionTypes.LOGIN_uSER, payload:data})
}
export const resetPasswordUser = (data) => (dispacth) => {
    dispacth({type:ActionTypes.RESETPASSWORD_USER, payload:data})
}