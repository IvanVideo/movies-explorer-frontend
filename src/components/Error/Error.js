import "./Error.css";
import { Link, BrowserRouter, useHistory } from "react-router-dom";
import React from "react";

const Error = (props) => {

  console.log(props)
  const history = useHistory();
  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__subtitle">Страница не найдена</p>
      <BrowserRouter>
        <Link className="notFound__link" onClick={() => props.history.goBack()}>
          Назад
        </Link>
      </BrowserRouter>
    </div>
  );
};

export default Error;
