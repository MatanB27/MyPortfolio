import React, { useState } from "react";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import ToggleButton from "../ToggleButton/ToggleButton";
import LottieAnimation from '../LottieAnimation/LottieAnimation';
import MenuIcon from '../../assets/icons/menu.svg';
import CloseIcon from '../../assets/icons/close.svg'
// import menuAnimation from '../../assets/animations/menu.json'
import './header.scss';

export default function Header({
    theme,
    changeTheme,
    changeState
}) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenu = () => setIsMenuOpen(prev => !prev)

    console.log('isMenuOpen: ', isMenuOpen);
    return (
        <header>
            <ToggleButton
                theme={theme}
                onClick={changeTheme}
                changeState={changeState}
            />
            <span>Xdddd</span>
            <button onClick={handleMenu}>
                <img
                    className={`menu-icon ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}
                    src={isMenuOpen ? CloseIcon : MenuIcon}
                    alt={'menu'}
                />
            </button>
            {/* <LottieAnimation
                className={'menu-icon'}
                animation={menuAnimation}
                autoplay={false}
                loop={false}
                onClick={handleMenu}
                play={isMenuOpen}
            /> */}
        </header>
    )    
}