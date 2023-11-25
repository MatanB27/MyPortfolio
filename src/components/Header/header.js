import React from "react";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import ToggleButton from "../ToggleButton/ToggleButton";

export default function Header({
    theme,
    changeTheme,
    changeState
}) {
    return (
        <header>
            <ToggleButton
                theme={theme}
                onClick={changeTheme}
                changeState={changeState}
            />
        </header>
    )    
}