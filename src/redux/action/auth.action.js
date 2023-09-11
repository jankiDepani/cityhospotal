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
export const emailVarification = (data) => (dispacth) => {
    dispacth({type:ActionTypes.EMAIL_VERIFICATION, payload:data})
}
export const authError = (data) => (dispacth) => {
    console.log(data);
    dispacth({type:ActionTypes.AUTH_ERROR, payload:data})
}