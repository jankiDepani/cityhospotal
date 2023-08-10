import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3004/',
    timeout: 1000
});

const sendRequest = (config) =>  {
    return instance.request(config);
}

export const getRequest = (path) => {
    return sendRequest({
        method: 'GET',
        url: path
    })
}

export const postRequest = (path, data)  => {
    return sendRequest({
        method: 'POST',
        url: path,
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: JSON.stringify(data)
    })
}

export const UpdateRequest = (path, data) => {
    return sendRequest({
        method: 'PUT',
        url:path + data.id,
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: JSON.stringify(data)
    })
}

export const DeleteRequest = (path, id) => {
    return sendRequest({
        method: 'DELETE',
        url:path + id
    })
}

