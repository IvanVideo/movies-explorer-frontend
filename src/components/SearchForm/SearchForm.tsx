import "./SearchForm.css";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';
import React, { useEffect } from "react";
import checkbox from "../../images/check.svg";
import checkbox2 from "../../images/black.svg";

interface SearchFormProps {
  enterValue: Function,
  enterValueSaved: Function,
  shortFilmsStatus: Function,
}

const SearchForm = ({ enterValue, enterValueSaved, shortFilmsStatus }: SearchFormProps) => {
  const dispatch = useDispatch();
  const { getInputValue } = bindActionCreators(actionCreators, dispatch);
  const { changeChackboxValue } = bindActionCreators(actionCreators, dispatch);
  const { changeInputErrorValue } = bindActionCreators(actionCreators, dispatch);
  const input = useSelector((state: State) => state.inputValue);
  const chackboxValue = useSelector((state: State) => state.chackbox);
  const inputError = useSelector((state: State) => state.inputError);

  const handleChangeInputValue = (e: any) => {
    getInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (input == "") {
      changeInputErrorValue(true);
    } else {
      changeInputErrorValue(false);
      enterValue(input);
      enterValueSaved(input);
    }
  };

  const handleShortFilmsClick = () => {
    changeChackboxValue(!chackboxValue);
    shortFilmsStatus(chackboxValue);
  };

  return (
    <section className="searchForm">
      <div className="searchForm__conteiner">
        <form className="searchForm__box" onSubmit={handleSubmit}>
          <input
            className="searchForm__input"
            placeholder="Фильм"
            onChange={handleChangeInputValue}
          />
          <input className="searchForm__button" type="submit" value="Поиск" />
          <div className="searchForm__active">
            <input
              type="checkbox"
              className="searchForm__checkbox"
              id="id1"
              onChange={handleShortFilmsClick}
            />
            <label htmlFor="id1">
              <img
                src={chackboxValue ? checkbox : checkbox2}
                alt="radiobutton"
                className="searchForm-radio"
              />
            </label>
            <p className="searchForm__shortfilms">Короткометражки</p>
            <span className={inputError ? "error" : "error__unvisible"}>
              Нужно ввести ключевое слово
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
