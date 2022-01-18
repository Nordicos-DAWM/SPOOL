export const contactService = {
    sendMail
};

function sendMail(contactBody){
    const requestOptions = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(contactBody)
    };

    return fetch('http://ec2-54-224-159-194.compute-1.amazonaws.com/api/contact/',requestOptions).then(handleResponse)
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
