import { DeleteRequest, UpdateRequest, getRequest, postRequest } from "../request"

export const GetDoctorData = () => {
    return getRequest('Doctors');
}
export const AddDoctorData = (data) => {
    return postRequest('Doctors', data);
}

export const DeleteDoctorData = (id) => {
    return DeleteRequest('Doctors/',id)
}
export const UpdateDotorcData = (data) =>  {
    return UpdateRequest('Doctors/', data)
}
