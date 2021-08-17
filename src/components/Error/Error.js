import "./Error.css";
import { Link } from "react-router-dom";
import React from "react";

const Error = (props) => {

  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__subtitle">Страница не найдена</p>
        <Link className="notFound__link" onClick={() => props.history.goBack()}>
          Назад
        </Link>
    </div>
  );
};

export default Error;
