import "./ProfileForm.css";
import React, { useEffect, useCallback } from "react";
import Preloader from "../Preloader/Preloader";
import ButtonSave from "../ButtonSave/ButtonSave";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ProfileForm = (props) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [nameStatus, setNameStatus] = React.useState(false);
  const [mailStatus, setMailStatus] = React.useState(false);
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());

    if (target.name === "name") {
      if (target.value === currentUser.name) {
        setNameStatus(true);
        if (mailStatus === true) {
          setIsValid(false);
        }
      }
    } else {
      if (target.value === currentUser.email) {
        setMailStatus(true);
        if (nameStatus === true) {
          setIsValid(false);
        }
      }
    }
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
    props.check(values);
  }, [resetForm]);

  const handleSubmitForm = (e) => {
    if (!isValid) {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      props.userValues({ ...values });
    }
  };

  return (
    <div className="profile__content">
      <div className="profile__box first">
        <p className="profile__name left">Имя</p>
        <hr className="profile__line" />
        <p className="profile__name left">E-mail</p>
        <div
          className={
            props.success
              ? "profile__notice_position"
              : "profile__notice_position unvisible"
          }
        >
          <h1 className="profile__notice">Данные успешно обновлены!</h1>
        </div>
      </div>
      <form className="profileForm" onSubmit={handleSubmitForm}>
        <input
          className="profileForm__input"
          id="name"
          name="name"
          required
          placeholder={props.userInfo.name}
          onChange={handleChange}
        />
        <span id="name" className="form__error propfile__name">
          {errors.name}
        </span>
        <hr className="form__line" />
        <input
          id="email"
          name="email"
          type="email"
          className="profileForm__input"
          placeholder={props.userInfo.email}
          required
          onChange={handleChange}
        />
        <span id="email" className="form__error propfile__email">
          {errors.email}
        </span>
        {props.isLoading ? (
          <div className="profile__preloader">
            <Preloader isLoading={props.isLoading} />
          </div>
        ) : (
          <ButtonSave inputStatus={isValid} />
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
