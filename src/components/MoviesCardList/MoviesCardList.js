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

  const cardsConteiner = document.querySelector(".moviesCardList-conteiner");
  // console.log(props.widthWindow, 'ширина окна')

  let cardsArray = Array.from(props.dataFilms);
  let newCardsArray = cardsArray.slice(0, 7);

  const handleButtonClick = () => {
    // cardsConteiner.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const shortFilmsStatus = (data) => {
    let shortFilms = JSON.parse(localStorage.getItem("shortMovies"));
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
                isLiked={props.isLiked}
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
                isLiked={props.isLiked}
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
