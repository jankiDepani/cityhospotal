import * as ActionTypes from "../ActionType"

const initState ={
    Loading: false,
    doctors: [],
    error: null
}

export const DoctrorRducer = (state=initState , action) => {
    switch(action.type) {
        case ActionTypes.GET_DOCTOR_DATA:
            return {
                ...state,
                doctors: action.payload
            }
        case ActionTypes.ADD_DOCTOR_DATA:
            return {
                ...state,
                doctors: state.doctors.concat(action.payload)
            }
        case ActionTypes.DELETE_DOCTOR_DATA:
            return {
                ...state, 
                doctors: state.doctors.filter((v) => v.id !== action.payload)
            }
        case ActionTypes.UPDATE_DOCTOR_DATA:
            return {
                ...state,
                doctors: state.doctors.map((v) => {
                    if (v.id == action.payload.id) {
                        return action.payload;
                    }else {
                        return v;
                    }
                })
            }
        default :
            return state
    }
}