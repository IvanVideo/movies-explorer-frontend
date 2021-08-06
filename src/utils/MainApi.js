class MainApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers
    }

    _checkResponse(response) {
        return response.ok ? response.json() : Promise.reject(new Error(`Ошибка ${response.status} : ${response.statusText}`))
    }

    checkToken(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            credentials: 'include',
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
            .then(res => this._checkResponse(res));
    }

    register({ name, email, password }) {
        return fetch(`${this._baseUrl}/signup`, {
            credentials: 'include',
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password
            })
        })
            .then(res => this._checkResponse(res));
    }

    authorize({ email, password }) {
        return fetch(`${this._baseUrl}/signin`, {
            credentials: 'include',
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                "password": password,
                "email": email
            })
        })
            .then(res => this._checkResponse(res));
    }

    getUserInfo(jwt) {
        return fetch(`${this._baseUrl}/users/me`, {
            credentials: 'include',
            headers: {
                authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json'
              }
        })
            .then(res => {
                return this._checkResponse(res);
            })
    }

}

const config = {
    baseUrl: 'https://api.cinema.nomoredomains.monster',
    headers: { 'Content-Type': 'application/json' }
}

const mainApi = new MainApi(config);
export default mainApi;