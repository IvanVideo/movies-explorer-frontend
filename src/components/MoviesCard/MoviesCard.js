import "./MoviesCard.css";
import React, { useEffect } from "react";

const MoviesCard = (props) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [card, setCard] = React.useState(props.card);

  const hours = Math.trunc(card.duration / 60);
  const minutes = card.duration % 60;
  useEffect(() => {}, []);
  const checkLikeStatus = () => {
    const dataSaveMocies = JSON.parse(localStorage.getItem("savedMomies"));
    console.log(dataSaveMocies, "000");
  };

  const changeStatus = () => {
    props.savedFilm(props.card);
  };

  return (
    <section className="moviesCard">
      <div className="moviesCard__content">
        <h2 className="moviesCard__title">{card.nameRU}</h2>
        <p className="moviesCard__time">{`${hours}ч ${minutes}м`}</p>
        <button
          className={
            isLiked ? "moviesCard__like activelike" : "moviesCard__like"
          }
          onClick={changeStatus}
        />
      </div>
      <img
        className="moviesCard__img"
        alt="picture"
        src={`https://api.nomoreparties.co${card.image.url}`}
      />
    </section>
  );
};

export default MoviesCard;
