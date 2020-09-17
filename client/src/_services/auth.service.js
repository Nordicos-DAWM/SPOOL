import { authHeader } from '../_helpers';
export const authService={
    authHeader,
    getUser
};


function getUser(){
    
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`http://54.88.62.27/spoolapi/api/user/me/`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                localStorage.removeItem('token');
                window.location.reload(true);
            }else if(response.status == 400){
                return data;
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}