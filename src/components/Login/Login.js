import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import React, { useEffect, useCallback } from "react";

const Login = (props) => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLoginInfo({ ...values });
  };

  return (
    <section className="login">
      <div className="login__conteiner">
        <img className="login__svg" alt="logo" src={logo} />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label">E-mail</label>
          <input
            className="form__input"
            id="email"
            name="email"
            type="email"
            required
            onChange={handleChange}
          />
          <label className="form__label">Пароль</label>
          <input
            id="password"
            className="form__input"
            name="password"
            required
            onChange={handleChange}
          />
          <span id="form-err" className={props.error ? "form__error" : 'form__error_hide'}>
            Что-то пошло не так...
          </span>
          {/* <button className="login__button">Войти</button> */}
          <button
            className={isValid ? "login__button" : "unvalible"}
            disabled={isValid ? false : true}
          >
            Войти
          </button>
        </form>
        <div className="login__footer">
          <p className="login__text">Ещё не зарегистрированы?</p>
          <Link className="login__link" to="/signup">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
