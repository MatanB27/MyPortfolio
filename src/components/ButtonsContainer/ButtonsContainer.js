import React, { useState } from 'react';

import ArrowBlack from '../../assets/icons/arrow-black.svg';
import ArrowWhite from '../../assets/icons/arrow-white.svg';

import './ButtonsContainer.scss';
function ButtonsContainer(props) {

    const {screensStack, screensLength} = props;
    const [currNumPage, setCurrNumPage] = useState(1);

    const handlePush = (index) => {
        setCurrNumPage(prev => prev+1);
        screensStack.pushScreen(index);
    }
    const handlePull = () => {
        setCurrNumPage(prev => prev-1);
        screensStack.pullScreen()
    }

    const isLastPage = () => currNumPage >= screensLength;

    return (
        <div className={'btns-container'}>
            <button className={'btn go-back ' + (screensStack.isStackExists() ? '' : 'hidden')} 
                onClick={handlePull}>
                    <img src={ArrowBlack} className={'btn-icon'}/>
            </button>
            {/* TODO: IF LAST PAGE - DONT SHOW BUTTON */}
            <button className={'btn go-forward ' + (isLastPage() ? 'hidden' : '')} onClick={() => handlePush(currNumPage)}>
                <img src={ArrowBlack} className={'btn-icon'}/>
            </button>
        </div>
    )
}

export default ButtonsContainer;