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
import React from "react";
import apiAuth from "../../utils/apiAuth";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { Route, Switch, useHistory } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = React.useState('false');
  console.log(loggedIn, 'статус')
  const history = useHistory();
  // const [userInfo, setUserInfo] = React.useState({
  //   email: "",
  //   name: "",
  // });

  //   const tokenCheck = () => {
  //   const jwt = localStorage.getItem('token');
  //   if (jwt && jwt !== null) {
  //     apiAuth.checkToken(jwt)
  //       .then((res) => {
  //         setUserInfo({ email: res.email });
  //         setLoggedIn(true);
  //         history.push("/");
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   } else {
  //     return
  //   }
  // }

  const registerUser = ({ name, email, password }) => {
    return apiAuth
      .register({ name, email, password })
      .then((res) => {
        // setUserInfo({ email: res.email, name: res.name });
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = ({ email, password }) => {
    return apiAuth
      .authorize({ email, password })
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        // tokenCheck();
        history.push("/movies")
      })
  }

  return (
    <div className="app">
      <Switch>
        <Route path="/signin">
          <Login onLoginInfo={loginUser} />
        </Route>
        <Route path="/signup">
          <Register onRegistrInfo={registerUser} />
        </Route>

        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={MoviesCardList} >
        </ProtectedRoute>
        <ProtectedRoute path="/saved-movies">
          <SavedMovies />
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route path="/">
          <Promo />
          <NavTab />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
          <Footer />
        </Route>
      </Switch>
      {/* <Header /> */}

      {/* <Error /> */}
    </div>
  );
}

export default App;
