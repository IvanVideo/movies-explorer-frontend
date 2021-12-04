import "./SearchForm.css";
import React, { useEffect } from "react";
import checkbox from "../../images/check.svg";
import checkbox2 from "../../images/black.svg";

interface SearchFormProps {
  enterValue: Function,
  enterValueSaved: Function,
  shortFilmsStatus: Function,
}

const SearchForm = ({enterValue, enterValueSaved, shortFilmsStatus }: SearchFormProps) => {
  const [inputValue, setInputValue] = React.useState("");
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [status, setStatus] = React.useState(false);

  const handleChangeInputValue = (e: React.FormEvent) => {
    // setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue == "") {
      setStatus(true);
    } else {
      setStatus(false);
      enterValue(inputValue);
      enterValueSaved(inputValue);
    }
  };

  const handleShortFilmsClick = () => {
    setCheckboxState(!checkboxState);
    shortFilmsStatus(checkboxState);
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
                src={checkboxState ? checkbox : checkbox2}
                alt="radiobutton"
                className="searchForm-radio"
              />
            </label>
            <p className="searchForm__shortfilms">Короткометражки</p>
            <span className={status ? "error" : "error__unvisible"}>
              Нужно ввести ключевое слово
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
