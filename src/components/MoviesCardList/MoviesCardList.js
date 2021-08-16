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
  const [buttonVisible, setButtonVidible] = React.useState(true);
  const [visibleItem, setVisibleItem] = React.useState(7);
  const cardsConteiner = document.querySelector(".moviesCardList__button");

  const showMorItems = () => {
    setVisibleItem(visibleItem + 1);
    cardsConteiner.scrollIntoView({ block: "start", behavior: "smooth" });
    // console.log(visibleItem)
    // console.log(props.dataFilms)

  };

  useEffect(() => {
    console.log(props.dataFilms.length)
    if (props.dataFilms.length === 0) {
      setButtonVidible(false);
    }
    if (visibleItem === props.dataFilms.length) {
      setButtonVidible(false);
      console.log("!!!!");
    }
  });

  const shortFilmsStatus = (data) => {
    const shortFilms = props.dataFilms.filter((item) => item.duration <= 40);
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
          {props.errorFilms ? (
            <h1
              className={
                props.error ? "emptySearch" : "emptySearch__notVisible"
              }
            >
              Во время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного и попробуйте
              ещё раз
            </h1>
          ) : (
            <h1
              className={
                props.dataFilms.length === 0
                  ? "emptySearch"
                  : "emptySearch__notVisible"
              }
            >
              Ничего не найдено
            </h1>
          )}

          {props.isLoading ? (
            <Preloader isLoading={props.isLoading} />
          ) : renderStatus ? (
            props.dataFilms
              .slice(0, visibleItem)
              .map((item) => (
                <MoviesCard
                  key={item.id}
                  card={item}
                  handleLikeClick={props.handleLikeClick}
                  savedFilm={props.savedFilm}
                  savedMoviesArr={props.savedMoviesArr}
                  savedUserFilmsArr={props.savedUserFilmsArr}
                  isLiked={props.isLiked}
                  removeCard={props.removeCard}
                  dataFilms={props.dataFilms}
                  removeLike={props.removeLike}
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
        <button
          className={
            buttonVisible
              ? "moviesCardList__button"
              : "moviesCardList__button emptySearch__notVisible"
          }
          onClick={showMorItems}
        >
          Ещё
        </button>
        {/* <button
          className={
            props.dataFilms.length === 0
              ? "moviesCardList__button emptySearch__notVisible"
              : "moviesCardList__button"
          }
          onClick={showMorItems}
        >
          Ещё
        </button> */}
      </div>
      <Footer />
    </section>
  );
};

export default MoviesCardList;
