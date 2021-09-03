import "./Error.css";
import { Link, useHistory } from "react-router-dom";
import React from "react";

const Error = (props) => {
  const history = useHistory();

  const redirect = () => {
    const url = localStorage.getItem("url")
    history.push(url);
  }

  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__subtitle">Страница не найдена</p>
        <Link className="notFound__link" onClick={redirect}>
          Назад
        </Link>
    </div>
  );
};

export default Error;
