import React from "react";
import Lottie from "react-lottie";

export default function (props) {

    const {
        customClassName = '',
        loop = true,
        autoPlay = true,
        animation = '',
        height,
        width,
    } = props;

    const defaultOptions = {
        loop: loop,
        autoPlay: autoPlay,
        animationData: animation,
    }
    return (
        <Lottie
            className={'lottie-animation ' + customClassName}
            options={defaultOptions}
            width={width}
            height={height}
        />
    )
}