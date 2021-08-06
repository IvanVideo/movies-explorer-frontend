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
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import React, { useEffect } from "react";
import mainApi from "../../utils/MainApi";
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { Route, Switch, useHistory, Redirect } from "react-router-dom";

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [userFilmsArr, setUserFilmsArr] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);


  const [width, setWidth] = React.useState(document.documentElement.clientWidth);
  const [height, setHeight] = React.useState(document.documentElement.clientHeight);

  // console.log(`высота ${height}, ширина ${width}`)
  const history = useHistory();

  const tokenCheck = () => {
    const jwt = localStorage.getItem('token');
    if (jwt && jwt !== null) {
      mainApi.checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          history.push("/movies");
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      return
    }
  }

  useEffect(() => {
    tokenCheck();
    const jwt = localStorage.getItem('token');
    mainApi.getUserInfo(jwt)
      .then(userInfo => {
        setCurrentUser(userInfo)
      })
      .catch((err) => {
        console.log(err)
      })
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
      setHeight(document.documentElement.clientHeight);
    }
    window.addEventListener('resize', handleResize)
  }, [])


  const registerUser = ({ name, email, password }) => {
    return mainApi
      .register({ name, email, password })
      .then((res) => {
        setUserInfo({ email: res.data.email, name: res.data.name });
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = ({ email, password }) => {
    return mainApi
      .authorize({ email, password })
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        tokenCheck();
        console.log('000');
        history.push("/movies")
      })
  }

  //Api запрос фильмов и поиск в нем фильмов по результату поиска
  const enterValue = (data) => {
    setIsLoading(true);
    moviesApi.getFilms()
      .then((dataMovies) => {
        let serchResultArray = dataMovies.filter(item => item.nameRU.includes(data))
        setUserFilmsArr(serchResultArray)
        setIsLoading(false);
      })
  }

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/');
  }

  const handleLikeClick = (card) => {
    const jwt = localStorage.getItem('token');
    console.log(card)
    // setIsLiked
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

          {/* <MoviesCardList path="/movies" enterValue={enterValue} handleLikeClick={handleLikeClick} isLoading={isLoading} dataFilms={userFilmsArr}  /> */}
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            dataFilms={userFilmsArr}
            isLoading={isLoading}
            widthWindow={width}
            // serchValue={serchValue}
            component={MoviesCardList}
            enterValue={enterValue}
            handleLikeClick={handleLikeClick}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            logout={logout}
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
