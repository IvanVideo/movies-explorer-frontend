import "./ProfileForm.css";
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';
import Preloader from "../Preloader/Preloader";
import ButtonSave from "../ButtonSave/ButtonSave";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

interface ProfileFormProps {
  userInfo: {
    email: string,
    name: string,
    _id: string
  },
  userValues: Function,
  isLoading: Boolean,
  success: Boolean,
  name: string,
  changeStatus: Function,
}

const ProfileForm = ({ userInfo, userValues, isLoading, success, name, changeStatus }: ProfileFormProps) => {
  const dispatch = useDispatch();

  const currentUser = React.useContext(CurrentUserContext);
  // const [values, setValues] = React.useState({});
  // const [errors, setErrors] = React.useState({});
  // const [isValid, setIsValid] = React.useState(false);
  // const [nameStatus, setNameStatus] = React.useState(false);
  // const [mailStatus, setMailStatus] = React.useState(false);

  const values = useSelector((state: State) => state.inputsValues);
  const errors = useSelector((state: State) => state.inputErrors);
  const isValid = useSelector((state: State) => state.isValid);
  const nameStatus = useSelector((state: State) => state.name);
  const mailStatus = useSelector((state: State) => state.mail);

  const { getInputsValues } = bindActionCreators(actionCreators, dispatch);
  const { getErrorsValue } = bindActionCreators(actionCreators, dispatch);
  const { changeIsValidValue } = bindActionCreators(actionCreators, dispatch);
  const { changeNameValue } = bindActionCreators(actionCreators, dispatch);
  const { changeMailValue } = bindActionCreators(actionCreators, dispatch);
  console.log(errors, '1111')
  const handleChange = (event: any) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    getInputsValues({ ...values, [name]: value });
    getErrorsValue({ ...errors, [name]: target.validationMessage });
    changeIsValidValue(target.closest("form").checkValidity());

    if (target.name === "name") {
      if (target.value === currentUser.name) {
        changeNameValue(true);
        if (mailStatus === true) {
          changeIsValidValue(false);
        }
      }
    } else {
      if (target.value === currentUser.email) {
        changeMailValue(true);
        if (nameStatus === true) {
          changeIsValidValue(false);
        }
      }
    }
  };

  // const resetForm = useCallback(
  //   (newValues = {}, newErrors = {}, newIsValid = false) => {
  //     getInputsValues(newValues);
  //     getErrorsValue(newErrors);
  //     changeIsValidValue(newIsValid);
  //   },
  //   [getInputsValues, getErrorsValue, changeIsValidValue]
  // );

  // useEffect(() => {
  //   resetForm();
  // }, [resetForm]);

  const handleSubmitForm = (e: any) => {
    if (!isValid) {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      userValues({ ...values });
      changeStatus();
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
            success
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
          placeholder={userInfo.name}
          onChange={handleChange}
        />
        <span id="name" className="form__error propfile__name">
          {/* {errors.name} */}
        </span>
        <hr className="form__line" />
        <input
          id="email"
          name="email"
          type="email"
          className="profileForm__input"
          placeholder={userInfo.email}
          required
          onChange={handleChange}
        />
        <span id="email" className="form__error propfile__email">
          {/* {errors.email} */}
        </span>
        {isLoading ? (
          <div className="profile__preloader">
            <Preloader isLoading={isLoading} />
          </div>
        ) : (
          <ButtonSave inputStatus={isValid} />
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
