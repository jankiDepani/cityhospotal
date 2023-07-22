import * as ActionTypes from '../ActionTypes';

export const getDoctors = () => (dispatch) => {
    try {
        fetch("http://localhost:3005/doctors")
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.GET_DOCTORS, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }

}

export const addDoctor = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3005/doctors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => dispatch({type: ActionTypes.ADD_DOCTORS, payload: data}))
        .catch((error) => console.log(error))
    } catch (error) {

    }
}