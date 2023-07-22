import * as ActionTypes from '../ActionTypes';

const initState = {
    loading: false,
    doctors: [],
    error: null
}

export const doctorsReducer = (state=initState, action) => {
    console.log(action);

    switch(action.type) {
        case ActionTypes.GET_DOCTORS:
            return {
                ...state,
                doctors: action.payload
            }
        case ActionTypes.ADD_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.concat(action.payload)
            }
        default:
            return state;
    }
}