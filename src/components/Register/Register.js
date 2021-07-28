import "./Register.css";
import logo from "../../images/logo.svg";
import { Link, BrowserRouter } from "react-router-dom";
import React from "react";

const Register = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
      <div className="register-conteiner">
        <img className="register-svg" alt="logo" src={logo} />
        <h1 className="register-title">Добро пожаловать!</h1>
        <form className="form" onSubmit={handleSubmit} >
          <label className="form-label">Имя</label>
          <input className="form-input" required onChange={handleChangeName} />
          <label className="form-label">E-mail</label>
          <input className="form-input" required type="email" onChange={handleChangeEmail} />
          <label className="form-label">Пароль</label>
          <input className="form-input" required onChange={handleChangePassword} />
          <span id="form-err" className="form-error">
            Что-то пошло не так...
          </span>
          <button className="register-button">Зарегистрироваться</button>
        </form>
        <div className="register-footer">
          <p className="register-text">Уже зарегистрированы?</p>
          <Link className="register-link" to="/signin">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
