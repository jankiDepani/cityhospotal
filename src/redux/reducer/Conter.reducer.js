import * as ActionTypes from '../ActionType'

const initstate = {
    count:0
}

export const coutenRducer = (state=initstate, action) => {
    switch(action.type){
        case ActionTypes.INCREMENT_COUNTER:
            return {
                count : state.count + 1
            }
        case ActionTypes.DECREMENT_COUNTER:
            return {
                count : state.count - 1
            }
        default:
            return state
    }
}