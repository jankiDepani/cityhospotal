import * as ActionTypes from "../ActionType"

export const getDoctor = () => (dispacth) => {
    try {
        fetch("http://localhost:3004/Doctors")
        .then((response) => response.json())
        .then((data) => dispacth({type:ActionTypes.GET_DOCTOR_DATA, payload:data}))
        .catch((error) => console.log(error))
    }catch {
        console.log("error");
    }
}