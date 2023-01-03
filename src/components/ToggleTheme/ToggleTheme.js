import React from "react";

import Moon from '../../assets/moon.svg';
import Sun from '../../assets/sun.svg';

import './ToggleTheme.scss';
export default function ToggleTheme(props) {
    
    const {lightTheme, changeTheme} = props;
    
    return (
        <div className={"toggle-container " + (lightTheme.className)}>
            <img className={'icon'} src={lightTheme.light_theme ? Sun : Moon}/>
            <button onClick={changeTheme}>Click here!</button>
        </div>
    )
}

