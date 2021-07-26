import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error from '../Error/Error';
import Techs from '../Techs/Techs';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import React from 'react';

import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/movies'>
          <MoviesCardList />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/'>
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
