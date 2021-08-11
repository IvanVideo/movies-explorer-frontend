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
  const [error, setError] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedUserFilmsArr, setSavedUserFilmsArr] = React.useState([]);
  const [userFilmsArr, setUserFilmsArr] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [width, setWidth] = React.useState(
    document.documentElement.clientWidth
  );
  const [height, setHeight] = React.useState(
    document.documentElement.clientHeight
  );

  const history = useHistory();
  const tokenCheck = () => {
    const jwt = localStorage.getItem("token");
    if (jwt && jwt !== null) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          history.push("/movies");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  useEffect(() => {
    tokenCheck();
    const jwt = localStorage.getItem("token");
    mainApi
      .getUserInfo(jwt)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
      setHeight(document.documentElement.clientHeight);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  //Регистрация пользователя
  const registerUser = ({ name, email, password }) => {
    return mainApi
      .register({ name, email, password })
      .then((res) => {
        setCurrentUser({ email: res.data.email, name: res.data.name });
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Логин пользователя
  const login = ({ email, password }) => {
    return mainApi
      .authorize({ email, password })
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        tokenCheck();
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        setError(true)
      });
  };

  //Api запрос фильмов и поиск в нем фильмов по результату поиска
  const enterValue = (data) => {
    setIsLoading(true);
    if (localStorage.getItem("movies")) {
      let films = JSON.parse(localStorage.getItem("movies"));
      let serchResultArray = films.filter((item) => item.nameRU.includes(data));
      setUserFilmsArr(serchResultArray);
      dataSaveFilms();
      setIsLoading(false);
    } else {
      moviesApi.getFilms().then((dataMovies) => {
        localStorage.setItem("movies", JSON.stringify(dataMovies));
        saveShortFilm();
        dataSaveFilms();
      });
      setIsLoading(false);
    }
  };

  const enterValueSaved = (data) => {
    let serchResultSaveArray = savedUserFilmsArr.filter((item) =>
      item.nameRU.includes(data)
    );
    setSavedUserFilmsArr(serchResultSaveArray);
  };

  //Api запрос сохраненных фильмов
  const dataSaveFilms = () => {
    const jwt = localStorage.getItem("token");
    mainApi.getFilms(jwt).then((res) => {
      setSavedUserFilmsArr(res);
    });
  };

  //Фильтрация короткометражек
  const shortFilms = () => {
    let arrayFilms = JSON.parse(localStorage.getItem("movies"));
    let shortFilms = arrayFilms.filter((item) => item.duration <= 40);
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
  const removeCard = (data) => {
    let id = data._id;
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

  //Резлогирование пользователя
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  //Редактирование инфы пользователя
  const updateUserInfo = ({ name, email }) => {
    const jwt = localStorage.getItem("token");
    mainApi
      .updateUserInfo({ name, email, jwt })
      .then((res) => {
        setCurrentUser({ email: res.data.email, name: res.data.name });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route path="/signin">
            <Login onLoginInfo={login} error={error} />
          </Route>
          <Route path="/signup">
            <Register onRegistrInfo={registerUser} />
          </Route>
          <Route exact path="/">
            <Promo />
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
            component={MoviesCardList}
            enterValue={enterValue}
            enterValueSaved={enterValueSaved}
            savedFilm={savedFilm}
            savedUserFilmsArr={savedUserFilmsArr}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            savedArrFilms={savedUserFilmsArr}
            shortFilms={shortFilms}
            component={SavedMovies}
            removeCard={removeCard}
            enterValueSaved={enterValueSaved}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            logout={logout}
            updateUserInfo={updateUserInfo}
            userInfo={currentUser}
          />
          <Route exact path="/">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
