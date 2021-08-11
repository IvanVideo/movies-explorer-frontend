import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesSavedCard from "../MoviesSavedCard/MoviesSavedCard";
import SearchForm from "../SearchForm/SearchForm";
import React, { useEffect } from "react";
import film from "../../images/pic.svg";
import mainApi from "../../utils/MainApi";
import checkbox from "../../images/check.svg";
import checkbox2 from "../../images/black.svg";

const SavedMovies = (props) => {
  const [saveFilms, setSaveFilms] = React.useState({});

  // const [arrayShortFilms, setArrayShortFilms] = React.useState({});
  const [renderStatus, setRenderStatus] = React.useState(true);
  console.log(props.savedArrFilms, "что в сохраненках");

  // useEffect(() => {
  //   const jwt = localStorage.getItem("token");
  //   mainApi.getFilms(jwt).then((saveDataFilms) => {
  //     setSaveFilms(saveDataFilms);
  //     localStorage.setItem("savedMomies", saveDataFilms);
  //   });
  // }, []);

  let cardsArray = Array.from(props.savedArrFilms);

  const shortFilmsStatus = (data) => {
    let shortFilms = JSON.parse(localStorage.getItem("shortMovies"));
    // setArrayShortFilms(shortFilms);
    setRenderStatus(data);
  };

  const removeFilm = (data) => {
    props.removeCard(data);
  };


  const [inputValue, setInputValue] = React.useState("");
  const [checkboxState, setCheckboxState] = React.useState(false);

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.enterValueSaved(inputValue);
  };

  const handleShortFilmsClick = () => {
    setCheckboxState(!checkboxState);
    // props.shortFilmsStatus(checkboxState);
  };

  return (
    <section className="savedMovies">
      <Header />
      <div className="savedMoviesCardList__position">
        <section className="searchForm">
          <div className="searchForm__conteiner">
            <form className="searchForm__box" onSubmit={handleSubmit}>
              <input
                className="searchForm__input"
                required
                placeholder="Фильм"
                onChange={handleChangeInputValue}
              />
              <input
                className="searchForm__button"
                type="submit"
                value="Поиск"
              />
              <div className="searchForm__active">
                <input
                  type="checkbox"
                  className="searchForm__checkbox"
                  id="id1"
                  onChange={handleShortFilmsClick}
                />
                <label htmlFor="id1">
                  <img
                    src={checkboxState ? checkbox : checkbox2}
                    alt="radiobutton"
                    className="searchForm-radio"
                  />
                </label>
                <p className="searchForm__shortfilms">Короткометражки</p>
              </div>
            </form>
          </div>
        </section>
        {/* <SearchForm
          shortFilmsStatus={shortFilmsStatus}
          shortFilms={props.shortFilms}
        /> */}
        <div className="savedMoviesCardList__conteiner">
          {cardsArray.map((item) => (
            <MoviesSavedCard
              key={item._id}
              card={item}
              removeFilm={removeFilm}
            />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SavedMovies;
