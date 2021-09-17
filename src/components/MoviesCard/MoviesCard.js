import "./MoviesCard.css";
import React, { useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const MoviesCard = (props) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [userFilms, setUserFilms] = React.useState([]);
  const hours = Math.trunc(props.card.duration / 60);
  const minutes = props.card.duration % 60;
  const currentUser = React.useContext(CurrentUserContext);

  const handleSaveCard = () => {
    setIsLiked(!isLiked);
    if (isLiked !== true) {
      props.savedFilm(props.card);
    } else {
      const newArr = props.dataFilms.filter(
        (item) => item.id !== props.card.id
      );
      props.removeLike(newArr, props.card);
    }
  };

  return (
    <section
      href={props.card.trailerLink}
      target="_blank"
      className="moviesCard"
    >
      <div className="moviesCard__content">
        <h2 className="moviesCard__title">{props.card.nameRU}</h2>
        <p className="moviesCard__time">{`${hours}ч ${minutes}м`}</p>
        <button
          className={
            isLiked ? "moviesCard__like activelike" : "moviesCard__like"
          }
          onClick={handleSaveCard}
        />
      </div>
      <a href={props.card.trailerLink} target="_blank">
        <img
          className="moviesCard__img"
          alt="picture"
          src={`https://api.nomoreparties.co/.${props.card.image.url}`}
        />
      </a>
    </section>
  );
};

export default MoviesCard;
