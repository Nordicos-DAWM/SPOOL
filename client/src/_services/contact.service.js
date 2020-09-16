export const contactService = {
    sendMail
};

function sendMail(contactBody){
    const requestOptions = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(contactBody)
    };

    return fetch('http://54.88.62.27/spoolapi/api/contact/',requestOptions).then(handleResponse)
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
