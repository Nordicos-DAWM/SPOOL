import { authHeader } from '../_helpers';
import { userService } from './user.service';

export const applicationService = {
    add,
    getByUserId,
    delete:_delete
}

function add(_new){
    const requestOptions = {
        method:'POST',
        headers:{...authHeader,'Content-Type':'application/json'},
        body:JSON.stringify(_new)
    }

    return fetch('/api/application/',requestOptions).then(handleResponse)
}

function _delete(id){
    const requestOptions = {
        method:'POST',
        headers:{...authHeader,'Content-Type':'application/json'},
    }

    return fetch(`/api/application/${id}`,requestOptions).then(handleResponse)
}

function getByUserId(user_id){
    const requestOptions = {
        method:'GET',
        headers:{...authHeader,'Content-Type':'application/json'},
    }

    return fetch(`/api/application/by_student/${user_id}`,requestOptions).then(handleResponse)
}

function handleResponse(response) {
    return response.text().then(text=>{
        const data = text && JSON.parse(text);

        if(!response.ok){
            if(response.status ===401){
                userService.logout();
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
        
    })
}