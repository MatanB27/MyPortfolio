import { useEffect } from 'react';
import Moon from '../../assets/icons/moon.svg';
import Sun from '../../assets/icons/sun.svg';
import ToggleButton from '../ToggleButton/ToggleButton';
import './ToggleTheme.scss';

export default function ToggleTheme(props) {
    
    const {theme, onClick, changeState} = props;

    function dynamicClass() { 
        if(changeState) {
            return '';
        }

        if(theme.light_theme) {
            return 'light';
        }
        return 'dark';
    }
    return (
        <div className={"toggle-container"}>
            <img className={'icon ' + (dynamicClass())} src={theme.light_theme ? Sun : Moon} alt={'star'}/>
            <ToggleButton
                onClick={onClick}
                theme={theme}
                changeState={dynamicClass}
            />
        </div>
    )
}

