import './ButtonSave.css';
import React from 'react';

const ButtonSave = (props) => {

    return (
        <button className={props.inputStatus ? 'buttonSave-active' : 'buttonSave-disabled'} >Сохранить</button>
    )
}

export default ButtonSave