import * as ActionTypes from "../ActionType";

export const signupUser = (data) => (dispacth) => {
    dispacth({type:ActionTypes.SIGNUP_USER, payload:data})
}
export const loginUser = (data) => (dispacth) => {
    dispacth({type:ActionTypes.LOGIN_uSER, payload:data})
}
export const loggedInUser = (data) => (dispacth) => {
    dispacth({type:ActionTypes.LOGGEDIN_USER, payload:data})
}
export const logOutuser = () => (dispacth) => {
    dispacth({type:ActionTypes.LOGOUT_USER})
}
export const resetPasswordUser = (data) => (dispacth) => {
    dispacth({type:ActionTypes.RESETPASSWORD_USER, payload:data})
}
export const emailVarification = (data) => (dispacth) => {
    dispacth({type:ActionTypes.EMAIL_VERIFICATION, payload:data})
}
export const authError = (data) => (dispacth) => {
    dispacth({type:ActionTypes.AUTH_ERROR, payload:data})
}