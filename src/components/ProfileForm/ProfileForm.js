import "./ProfileForm.css";
import React, { useEffect, useCallback } from "react";
import ButtonSave from "../ButtonSave/ButtonSave";

const ProfileForm = (props) => {
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

  const handleSubmitForm = (e) => {
    e.preventDefault();
    props.userValues({ ...values });
  };

  return (
    <div className="profile__content">
      <div className="profile__box first">
        <p className="profile__name left">Имя</p>
        <hr className="profile__line" />
        <p className="profile__name left">E-mail</p>
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
        <ButtonSave inputStatus={isValid} />
      </form>
    </div>
  );
};

export default ProfileForm;
