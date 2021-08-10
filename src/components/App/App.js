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
  const [currentUser, setCurrentUser] = React.useState({});
  const [userFilmsArr, setUserFilmsArr] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  // const [savedMoviesArr, setSavedMoviesArr] = React.useState({});

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

  const login = ({ email, password }) => {
    return mainApi.authorize({ email, password }).then((res) => {
      localStorage.setItem("token", res.token);
      setLoggedIn(true);
      tokenCheck();
      history.push("/movies");
    });
  };

  //Api запрос фильмов и поиск в нем фильмов по результату поиска
  const enterValue = (data) => {
    setIsLoading(true);
    if (localStorage.getItem("movies")) {
      let films = JSON.parse(localStorage.getItem("movies"));
      let serchResultArray = films.filter((item) => item.nameRU.includes(data));
      setUserFilmsArr(serchResultArray);
      setIsLoading(false);
    } else {
      moviesApi.getFilms().then((dataMovies) => {
        localStorage.setItem("movies", JSON.stringify(dataMovies));
        let savedMoviesArr = [];
        localStorage.setItem("savedMovies", JSON.stringify(savedMoviesArr));
      });
      setIsLoading(false);
    }
  };

  //Сохранение фильмов
  const savedFilm = (data) => {
    console.log(data);
    const jwt = localStorage.getItem("token");
    mainApi
      .saveFilm({ data, jwt })
      .then((res) => {
        console.log(res, "ответ с бэка на создание");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkStatusLike = (data) => {
    let dataFilms = JSON.parse(localStorage.getItem("savedMovies"));
    console.log(dataFilms, "что есть");
    if (dataFilms.length == 0) {
      return;
    } else {
      for (let i = 0; i < dataFilms.length; i++) {
        if (dataFilms[i].id === data.id) {
          console.log("одинаковые");
          setIsLiked(true);
        } else {
          console.log("разные");
          setIsLiked(false);
        }
      }
    }
    return;
  };

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const handleLikeClick = (card) => {
    const jwt = localStorage.getItem("token");
    console.log(card);
  };

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















  const removeCard = (data) => {
    let id = data._id;
    const jwt = localStorage.getItem("token");
    mainApi.deleteCard({ id, jwt }).card((res) => {
      console.log(res, "ответ с бэка");
    });
  };



























  const statusLike = () => {
    const dataSaveMocies = JSON.parse(localStorage.getItem("savedMomies"));
    console.log(dataSaveMocies, '000')
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route path="/signin">
            <Login onLoginInfo={login} />
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
            // serchValue={serchValue}
            // savedMoviesArr={savedMoviesArr}
            component={MoviesCardList}
            enterValue={enterValue}
            handleLikeClick={handleLikeClick}
            savedFilm={savedFilm}
            isLiked={isLiked}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            removeCard={removeCard}
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
        {/* <Header /> */}

        {/* <Error /> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
