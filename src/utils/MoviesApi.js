class MoviesApi {

    getFilms() {
        return fetch('https://api.nomoreparties.co/beatfilm-movies', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.ok ? res.json() : Promise.reject(new Error(`Ошибка ${res.status} : ${res.statusText}`)))
    }
}

const moviesApi = new MoviesApi

export default moviesApi;