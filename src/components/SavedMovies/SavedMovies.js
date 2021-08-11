import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesSavedCard from "../MoviesSavedCard/MoviesSavedCard";
import SearchForm from "../SearchForm/SearchForm";
import React, { useEffect } from "react";
import film from "../../images/pic.svg";
import mainApi from "../../utils/MainApi";

const SavedMovies = (props) => {
  const [saveFilms, setSaveFilms] = React.useState({});
  console.log(props.savedArrFilms, 'что в сохраненках')

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    mainApi.getFilms(jwt).then((saveDataFilms) => {
      setSaveFilms(saveDataFilms);
      localStorage.setItem("savedMomies", saveDataFilms);
    });
  }, []);

  const removeFilm = (data) => {
    props.removeCard(data)
  }

  let cardsArray = Array.from(props.savedArrFilms);
  console.log(cardsArray, 'сохраненки')
  return (
    <section className="savedMovies">
      <Header />
      <div className="savedMoviesCardList__position">
        <SearchForm />
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
