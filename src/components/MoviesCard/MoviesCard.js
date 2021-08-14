import "./MoviesCard.css";
import React, { useEffect } from "react";

const MoviesCard = (props) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const hours = Math.trunc(props.card.duration / 60);
  const minutes = props.card.duration % 60;

  const handleSaveCard = () => {
    props.savedFilm(props.card);
    setIsLiked(true)
  };

  useEffect(() => {
    let isLiked = props.savedUserFilmsArr.some(
      (item) => item.movieId == props.card.id
    );
    setIsLiked(isLiked);
  }, []);
  console.log(props.card.trailerLink, 'ссылка')
  return (
    <a href={props.card.trailerLink} target="_blank" className="moviesCard">
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
      <img
        className="moviesCard__img"
        alt="picture"
        src={`https://api.nomoreparties.co/.${props.card.image.url}`}
      />
    </a>
  );
};

export default MoviesCard;
