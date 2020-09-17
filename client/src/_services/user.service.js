import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete,
    getReports,
    getTypes
};

function login(username, password) {
    const user = { email:username, password }
    const requestOptions = {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`http://54.88.62.27/spoolapi/api/auth/`, requestOptions).then(handleResponse)
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/api/user`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:3000/api/user/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`http://54.88.62.27/spoolapi/api/user/`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`/api/user/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`/api/user/${id}`, requestOptions).then(handleResponse);
}

function getReports(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://54.88.62.27/spoolapi/api/reports/user`, requestOptions).then(handleResponse);
}

function getTypes(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://54.88.62.27/spoolapi/api/user/types`, requestOptions).then(handleResponse);
}

/*function getUser(token){
    const requestOptions = {
        method: 'GET',
        body: JSON.stringify({token:token})
    };

    return fetch(`http://54.88.62.27/spoolapi/api/me/`, requestOptions).then(handleResponse);
}
*/
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}