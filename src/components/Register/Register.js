import "./Register.css";
import logo from "../../images/logo.svg";
import { Link, BrowserRouter } from "react-router-dom";
import React, { useEffect, useCallback } from "react";

const Register = (props) => {
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
    props.onRegistrInfo({...values});
  };
  return (
    <section className="register">
      <div className="register__conteiner">
        <img className="register__svg" alt="logo" src={logo} />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label">Имя</label>
          <input
            id="name"
            name="name"
            className="form__input"
            required
            onChange={handleChange}
          />
          <span id="name" className="form__error">{errors.name}</span>
          <label className="form__label">E-mail</label>
          <input
            id="email"
            name="email"
            className="form__input"
            required
            type="email"
            onChange={handleChange}
          />
          <span id="email" className="form__error">{errors.email}</span>
          <label className="form__label">Пароль</label>
          <input
            id="password"
            name="password"
            className="form__input"
            required
            onChange={handleChange}
          />
          <span id="password" className="form__error">{errors.password}</span>
          <button
            className={isValid ? "register__button" : "unvalible"}
            disabled={isValid ? false : true }
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="register__footer">
          <p className="register__text">Уже зарегистрированы?</p>
          <Link className="register__link" to="/signin">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
