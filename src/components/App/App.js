import "./App.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Error from "../Error/Error";
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import React, { useEffect } from "react";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { Route, Switch, useHistory, Redirect } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorFilms, setErrorFilms] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedUserFilmsArr, setSavedUserFilmsArr] = React.useState([]);
  const [userFilmsArr, setUserFilmsArr] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [width, setWidth] = React.useState(
    document.documentElement.clientWidth
  );

  const history = useHistory();

  const tokenCheck = React.useCallback(() => {
    const jwt = localStorage.getItem("token");
    if (jwt && jwt !== null) {
      mainApi
        .checkToken(jwt)
        .then(
          (res) => {
            if (res) {
              setCurrentUser(res);
              setLoggedIn(true);
              if (location.pathname === "/signin") {
                history.push("/movies");
              } else if (location.pathname === "/movies") {
                history.push("/movies");
              } else if (location.pathname === "/saved-movies") {
                history.push("/saved-movies");
              } else if (location.pathname === "/profile") {
                history.push("/profile");
              }
            }
          },
          [history]
        )
        .catch((err) => {
          history.push("/signin");
        });
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      dataSaveFilms();
      const jwt = localStorage.getItem("token");
      if (currentUser.length === 0) {
        mainApi
          .getUserInfo(jwt)
          .then((userInfo) => {
            setCurrentUser(userInfo);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (localStorage.getItem("resultFilms")) {
        const serchFilm = JSON.parse(localStorage.getItem("resultFilms"));
        setUserFilmsArr(serchFilm);
      }
    }
  }, [loggedIn]);

  //Регистрация пользователя
  const registerUser = ({ name, email, password }) => {
    setIsLoading(true);
    return mainApi
      .register({ name, email, password })
      .then((res) => {
        setIsLoading(false);
        login({ name, email, password });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  //Логин пользователя
  const login = (data) => {
    setIsLoading(true);
    return mainApi
      .authorize({ email: data.email, password: data.password })
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        tokenCheck();
        setIsLoading(false);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(true);
      });
  };

  //Api запрос фильмов и поиск в нем фильмов по результату поиска
  const enterValue = (data) => {
    setIsLoading(true);
    if (localStorage.getItem("movies")) {
      const films = JSON.parse(localStorage.getItem("movies"));
      const serchResultArray = films.filter((item) =>
        item.nameRU.includes(data)
      );
      localStorage.setItem("resultFilms", JSON.stringify(serchResultArray));
      setUserFilmsArr(serchResultArray);
      dataSaveFilms();
      setIsLoading(false);
    } else {
      moviesApi
        .getFilms()
        .then((dataMovies) => {
          localStorage.setItem("movies", JSON.stringify(dataMovies));
          saveShortFilm();
          dataSaveFilms();
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
      setIsLoading(false);
    }
  };

  const enterValueSaved = (data) => {
    const serchResultSaveArray = savedUserFilmsArr.filter((item) =>
      item.nameRU.includes(data)
    );
    setSavedUserFilmsArr(serchResultSaveArray);
  };

  //Api запрос сохраненных фильмов
  const dataSaveFilms = () => {
    const jwt = localStorage.getItem("token");
    mainApi
      .getFilms(jwt)
      .then((res) => {
        setSavedUserFilmsArr(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Фильтрация короткометражек
  const shortFilms = () => {
    const arrayFilms = JSON.parse(localStorage.getItem("movies"));
    const shortFilms = arrayFilms.filter((item) => item.duration <= 40);
    localStorage.setItem("shortMovies", JSON.stringify(shortFilms));
  };

  //Сохранение фильмов
  const savedFilm = (data) => {
    const jwt = localStorage.getItem("token");
    mainApi
      .saveFilm({ data, jwt })
      .then((res) => {
        setSavedUserFilmsArr([res.data, ...savedUserFilmsArr]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Удаление фильмов
  const removeCard = (id) => {
    const jwt = localStorage.getItem("token");
    mainApi
      .deleteCard({ id, jwt })
      .then(() => {
        const newCards = savedUserFilmsArr.filter((item) => item._id !== id);
        setSavedUserFilmsArr(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeLike = (data, card) => {
    const filmLiked = savedUserFilmsArr.filter(
      (item) => item.movieId == card.id
    );
    removeCard(filmLiked[0]._id);
  };

  //Резлогирование пользователя
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/");
  };

  //Редактирование инфы пользователя
  const updateUserInfo = (data) => {
    setSuccess(false);
    setIsLoading(true);
    const jwt = localStorage.getItem("token");
    mainApi
      .updateUserInfo({ data, jwt })
      .then((res) => {
        setCurrentUser({ email: res.data.email, name: res.data.name });
        setIsLoading(false);
        setSuccess(true);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route path="/signin">
            <Login onLoginInfo={login} error={error} isLoading={isLoading} />
          </Route>
          <Route path="/signup">
            <Register onRegistrInfo={registerUser} isLoading={isLoading} />
          </Route>
          <Route exact path="/">
            <Promo loggedIn={loggedIn} />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
          </Route>

          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            dataFilms={userFilmsArr}
            isLoading={isLoading}
            widthWindow={width}
            savedUserFilmsArr={savedUserFilmsArr}
            errorFilms={errorFilms}
            isLiked={isLiked}
            removeLike={removeLike}
            component={MoviesCardList}
            enterValue={enterValue}
            enterValueSaved={enterValueSaved}
            savedFilm={savedFilm}
            removeCard={removeCard}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            savedArrFilms={savedUserFilmsArr}
            currentUser={currentUser}
            shortFilms={shortFilms}
            component={SavedMovies}
            removeCard={removeCard}
            enterValueSaved={enterValueSaved}
          />

          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            isLoading={isLoading}
            success={success}
            userInfo={currentUser}
            component={Profile}
            logout={logout}
            updateUserInfo={updateUserInfo}
          />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
