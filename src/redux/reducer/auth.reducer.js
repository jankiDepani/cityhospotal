import * as ActionTypes from '../ActionType'

const initstate = {
    user:[],
    isLoading:false,
    Error:null
}

export const authReducer = (state=initstate, action) => {
    switch(action.type){
        case ActionTypes.SIGNUP_USER:
            return state
        case ActionTypes.LOGIN_uSER:
            return state
        case ActionTypes.RESETPASSWORD_USER:
            return state
        default:
            return state
    }
}