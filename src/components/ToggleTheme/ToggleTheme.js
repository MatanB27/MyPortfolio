import { useEffect } from 'react';
import Moon from '../../assets/icons/moon.svg';
import Sun from '../../assets/icons/sun.svg';
import ToggleButton from '../ToggleButton/ToggleButton';
import './ToggleTheme.scss';

const images = [Sun, Moon];
export default function ToggleTheme(props) {
    
    const {lightTheme, changeTheme, changeState} = props;

    function dynamicClass() { 
        if(changeState) {
            return '';
        }

        if(lightTheme.light_theme) {
            return 'light';
        }
        return 'dark';
    }
    return (
        <div className={"toggle-container"}>
            <img className={'icon ' + (dynamicClass())} src={lightTheme.light_theme ? Sun : Moon} alt={'star'}/>
            <ToggleButton
                onClick={changeTheme}
                theme={lightTheme}
                changeState={dynamicClass}
            />
        </div>
    )
}

