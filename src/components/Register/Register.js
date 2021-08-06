import "./Register.css";
import logo from "../../images/logo.svg";
import { Link, BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";

const Register = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isEmpty, setIsEmpty] = React.useState(false);
  console.log(isEmpty,'00')
  console.log(name.length)
  console.log(email.length)
  console.log(password.length)

  useEffect(() => {
    if(name.length && email.length && password.length === 0) {
      setIsEmpty(true)
    }
    }, [])

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegistrInfo({ name, email, password });
  };

  return (
    <section className="register">
      <div className="register__conteiner">
        <img className="register__svg" alt="logo" src={logo} />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="form" onSubmit={handleSubmit} >
          <label className="form__label">Имя</label>
          <input className="form__input" required onChange={handleChangeName} />
          <label className="form__label">E-mail</label>
          <input className="form__input" required type="email" onChange={handleChangeEmail} />
          <label className="form__label">Пароль</label>
          <input className="form__input" required onChange={handleChangePassword} />
          <span id="form-err" className="form__error">
            Что-то пошло не так...
          </span>
          <button className={isEmpty ? "register__button" : 'unvalible'} disabled={isEmpty ? true : false}>Зарегистрироваться</button>
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
