import * as ActionTypes from '../ActionType'

const initstate = {
    user:[],
    isLoading:false,
    Error:null
}

export const authReducer = (state=initstate, action) => {
    console.log(action);
    switch(action.type){
        case ActionTypes.SIGNUP_USER:
            return state
        case ActionTypes.LOGIN_uSER:
            return state
        case ActionTypes.RESETPASSWORD_USER:
            return state
        case ActionTypes.EMAIL_VERIFICATION:
            return state
        case ActionTypes.AUTH_ERROR :
            return {
                user: [],
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}