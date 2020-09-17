import { authHeader } from '../_helpers';
import { userService } from './user.service';

export const newService = {
    getAll,
    add,
    update,
    _delete
}

function getAll() {
    const requestOptions = {
        method:'GET'
    };

    return fetch('http://54.88.62.27/spoolapi/api/new',requestOptions).then(handleResponse)
}

function add(_new) {
    const requestOptions = {
        method:'POST',
        headers: {...authHeader(),'Content-Type':'application/json' },
        body:JSON.stringify(_new)
    };

    return fetch('http://54.88.62.27/spoolapi/api/new/',requestOptions).then(handleResponse)
}

function update(_new) {
    const requestOptions = {
        method:'PUT',
        headers:{...authHeader(),'Content-Type':'application/json' },
        body:JSON.stringify(_new)
    };

    return fetch(`http://54.88.62.27/spoolapi/api/new/${_new.id}`,requestOptions).then(handleResponse);
}

function _delete(id) {
    const requestOptions = {
        method:'DELETE',
        headers:authHeader(),
    };

    return fetch(`http://54.88.62.27/spoolapi/api/new/${id}`,requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                
                userService.logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}