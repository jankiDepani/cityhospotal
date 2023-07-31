import * as ActionTypes from "../ActionType";

const initState = {
    Loading: false,
    madicines: [],
    error: null
}

export const MadicineReducer = (state = initState , action) => {

    switch (action.type) {
        case ActionTypes.GET_MADICINE_DATA :
            return {
                ...state,
                madicines: action.payload
            }
            default :
            return state
        }
}