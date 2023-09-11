import * as ActionTypes from '../ActionType'

const initstate = {
    text: '',
    color: '',
}

export const alertReducer = (state=initstate, action) => {
    console.log(action);
    switch(action.type){
        case ActionTypes.SET_ALERT:
            return {
                text: action.payload.text,
                color: action.payload.color
            }
        case ActionTypes.RESET_ALERT :
            return state
        default:
            return state
    }
}