import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import React, { useEffect } from "react";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = (props) => {
  const [arrayShortFilms, setArrayShortFilms] = React.useState({});
  const [renderStatus, setRenderStatus] = React.useState(true);

  let cardsArray = Array.from(props.dataFilms);
  let newCardsArray = cardsArray.slice(0, 7);
  const handleButtonClick = () => {
  };

  const shortFilmsStatus = (data) => {
    let shortFilms = props.dataFilms.filter((item) => item.duration <= 40);
    setArrayShortFilms(shortFilms);
    setRenderStatus(data);
  };

  return (
    <section className="moviesCardList">
      <Header widthWindow={props.widthWindow} />
      <div className="moviesCardList__position">
        <SearchForm
          enterValue={props.enterValue}
          enterValueSaved={props.enterValueSaved}
          shortFilmsStatus={shortFilmsStatus}
        />
        <div className="moviesCardList__conteiner">
          <h1
            className={
              props.dataFilms.length === 0
                ? "emptySearch"
                : "emptySearch__notVisible"
            }
          >
            Ничего не найдено
          </h1>
          {props.isLoading ? (
            <Preloader isLoading={props.isLoading} />
          ) : renderStatus ? (
            newCardsArray.map((item) => (
              <MoviesCard
                key={item.id}
                card={item}
                handleLikeClick={props.handleLikeClick}
                savedFilm={props.savedFilm}
                savedMoviesArr={props.savedMoviesArr}
                savedUserFilmsArr={props.savedUserFilmsArr}
              />
            ))
          ) : (
            arrayShortFilms.map((item) => (
              <MoviesCard
                key={item.id}
                card={item}
                handleLikeClick={props.handleLikeClick}
                savedFilm={props.savedFilm}
                savedMoviesArr={props.savedMoviesArr}
                savedUserFilmsArr={props.savedUserFilmsArr}
              />
            ))
          )}
        </div>
        <button className="moviesCardList__button" onClick={handleButtonClick}>
          Ещё
        </button>
      </div>
      <Footer />
    </section>
  );
};

export default MoviesCardList;
