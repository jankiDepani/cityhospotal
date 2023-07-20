import * as ActionTypes from "../ActionType"

const initState ={
    Loading: false,
    doctors: [],
    error: null
}

export const DoctrorRducer = (state=initState , action) => {
    console.log(action);

    switch(action.type) {
        case ActionTypes.GET_DOCTOR_DATA:
            return {
                ...state,
                doctors: action.payload
            }
        default :
            return state
    }
}