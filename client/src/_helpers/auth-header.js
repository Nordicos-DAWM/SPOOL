export function authHeader() {
    // return authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        return { 'x-access-token': token };
    } else {
        return {};
    }
}