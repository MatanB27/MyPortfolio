import React from "react";
import CircularMoon from '../../assets/icons/circular-moon.svg';
import CircularSun from '../../assets/icons/circular-sun.svg';

import './ToggleButton.scss';
export default function ToggleButton(props) {

    const {onClick, theme, changeState} = props;
    return (
        <div onClick={onClick} className={'toggle-btn-container ' + (theme.className)}>
            <img
                className={'toggle-icon'}
                src={theme.light_theme ? CircularSun : CircularMoon}
            />
        </div>
    )
}
