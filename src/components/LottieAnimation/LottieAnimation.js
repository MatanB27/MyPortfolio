import React from "react";
import Lottie from "react-lottie-player";

import { useState } from "react";
import './LottieAnimation.scss'
export default function LottieAnimation (props) {

    const {
        className = '',
        loop = true,
        autoPlay = true,
        animation = '',
        height = '',
        width = '',
        onClick = () => {},
    } = props;

    const [isHalfway, setIsHalfway] = useState(false)
    const defaultOptions = {
        loop: loop,
        autoPlay: autoPlay,       
    }

    // const handleAnimationComplete = (e) => {
    //     setPlay(false);
    // };

    // const handleLottieClick = () => {
    //     setPlay(true)
    //     typeof onClick === 'function' && onClick()
    // }

    // const onFrame = (e) => {
    //     const {currentTime, totalTime} = e
    //     setIsHalfway(false)
    //     if((Math.floor(currentTime) === (Math.floor(totalTime) / 2))) {
    //         !isHalfway ? setPlay(false) : setPlay(true)
    //         setIsHalfway(true)
    //         return
    //     }
    //     setIsHalfway(false)
    // }

    return (
        <div className={`lottie-animation ${className}`}>
            <Lottie
                options={defaultOptions}
                // play={play}
                width={width}
                height={height}
                animationData={animation}
                onClick={onClick}
                // onLoopComplete ={handleAnimationComplete}
                // onEnterFrame={onFrame}
            />
        </div>
    )
}