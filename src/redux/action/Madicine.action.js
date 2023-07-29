import * as ActionTypes from "../ActionType";

export const getMadicineData = () => (dispacth) => {
    try {
        fetch(" http://localhost:3004/medicines")
        .then((response) => response.json())
        .then((data) => dispacth({type:ActionTypes.GET_MADICINE_DATA, payload:data}))
        .catch((error) => console.log(error))
    }catch {
        console.log("error");
    }
}