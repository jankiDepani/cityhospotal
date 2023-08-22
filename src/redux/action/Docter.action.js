import { AddDoctorData, DeleteDoctorData, GetDoctorData, UpdateDotorcData } from "../../common/apis/Doctors.api";
import * as ActionTypes from "../ActionType"

export const getDoctor = () => (dispacth) => {
    try {
        // fetch("http://localhost:3004/Doctors")
        // .then((response) => response.json())
        // .then((data) => dispacth({type:ActionTypes.GET_DOCTOR_DATA, payload:data}))
        // .catch((error) => console.log(error))
        GetDoctorData() 
            .then((respose) => dispacth({type:ActionTypes.GET_DOCTOR_DATA, payload:respose.data}))
            .catch((error) => console.log(error))
    }catch {
        console.log("error");
    }
}
export const AddDoctos = (data) => (dispacth) => {
    try {
        // fetch("http://localhost:3004/Doctors", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify(data)  
        // })
        // .then((response) => response.json())
        // .then((data) => dispacth({type:ActionTypes.ADD_DOCTOR_DATA, payload:data}))
        // .catch((error) => console.log(error))
        AddDoctorData(data)
            .then((respose) => dispacth({type:ActionTypes.GET_DOCTOR_DATA, payload:respose.data}))
            .catch((error) => console.log(error))
    }catch {
        console.log("error");
    }

}

export const deleteDoctor = (id) => (dispacth) => {
    try {
        // fetch("http://localhost:3004/Doctors/" + id, {
        //     method: "DELETE" 
        // })
        DeleteDoctorData(id)
            .then(dispacth({type:ActionTypes.DELETE_DOCTOR_DATA, payload:id}))
            .catch((error) => console.log(error))
    }catch {
        console.log("error");
    }

}

export const updateDoctos = (data) => (dispacth) => {
    console.log(data);
    try {
        // fetch("http://localhost:3004/Doctors/" + data.id, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify(data)  
        // })
        // .then((response) => response.json())
        // .then((data) => dispacth({type:ActionTypes.DELETE_DOCTOR_DATA, payload:data}))
        // .catch((error) => console.log(error))
        UpdateDotorcData(data)
            .then((response) => dispacth({type:ActionTypes.UPDATE_DOCTOR_DATA, payload: response.data}))
            .catch((error) => console.log(error))
    }catch(error) {
        console.log(error);
    }

}