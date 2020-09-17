import { authHeader } from '../_helpers';
import { userService } from './user.service';

export const projectService = {
    add,
    get,
    update,
    delete:_delete,
    getById,
    getByUserId,
    getReports,
    getTypes
};

function add(project){
    const requestOptions = {
        method:'POST',
        headers: {...authHeader(),'Content-Type':'application/json' },
        body:JSON.stringify(project)
    };

    return fetch('http://54.88.62.27/spoolapi/api/project/',requestOptions).then(handleResponse)
}

function get(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`http://54.88.62.27/spoolapi/api/project/`,requestOptions).then(handleResponse)
}

function update(newProject){
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(),'Content-Type':'application/json' },
        body:JSON.stringify(newProject)
    };
    return fetch(`http://54.88.62.27/spoolapi/api/project/${newProject.id}`,requestOptions).then(handleResponse)
}

function _delete(id){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`http://54.88.62.27/spoolapi/api/project/${id}`,requestOptions).then(handleResponse)
}


function getById(id){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`http://54.88.62.27/spoolapi/api/project/by_id/${id}`,requestOptions).then(handleResponse)
}

function getByUserId(user_id){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`http://54.88.62.27/spoolapi/api/project/by_user/${user_id}`,requestOptions).then(handleResponse)
}

function getReports(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`http://54.88.62.27/spoolapi/api/reports/project`,requestOptions).then(handleResponse)
}

function getTypes(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`http://54.88.62.27/spoolapi/api/chart/main_categories`,requestOptions).then(handleResponse)
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