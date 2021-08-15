class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(response) {
    return response.ok
      ? response.json()
      : Promise.reject(
          new Error(`Ошибка ${response.status} : ${response.statusText}`)
        );
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  register({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      credentials: "include",
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then((res) => this._checkResponse(res));
  }

  authorize({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      credentials: "include",
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getUserInfo(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  updateUserInfo({ data, jwt }) {
    console.log(data, "отправляем на бэк");
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
      }),
    }).then((res) => this._checkResponse(res));
  }

  saveFilm({ data, jwt }) {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: "include",
      method: "POST",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co` + data.image.url,
        trailer: data.trailerLink,
        thumbnail: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        movieId: data.id,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getFilms(jwt) {
    return fetch(`${this._baseUrl}/movies/`, {
      credentials: "include",
      method: "GET",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  deleteCard({ id, jwt }) {
    console.log(id);
    return fetch(`${this._baseUrl}/movies/${id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => this._checkResponse(res));
  }
}

const config = {
  baseUrl: "https://api.cinema.nomoredomains.monster",
  headers: { "Content-Type": "application/json" },
};

const mainApi = new MainApi(config);
export default mainApi;
