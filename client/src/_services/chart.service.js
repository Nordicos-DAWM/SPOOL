import { authHeader } from '../_helpers';
import { userService } from './user.service';

export const chartService = {
    getSkills,
    getCategories,
    getIsSubject,
    getSchool
};

function getSkills () {
    const requestOptinos = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch('http://54.88.62.27/spoolapi/api/chart/skills/',requestOptinos).then(handleResponse);
}

function getCategories() {
    const requestOptinos = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch('http://54.88.62.27/spoolapi/api/chart/categories/',requestOptinos).then(handleResponse);
}

function getIsSubject() {
    const requestOptinos = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch('http://54.88.62.27/spoolapi/api/chart/is_subject/',requestOptinos).then(handleResponse);
}

function getSchool() {
    const requestOptinos = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch('http://54.88.62.27/spoolapi/api/chart/school/',requestOptinos).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
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