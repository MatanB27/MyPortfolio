import React from 'react';
import LottieAnimation from '../../components/LottieAnimation/LottieAnimation';
import EducationLottie from '../../assets/animations/education-lottie.json'
export default function Education(props) {
    const {screensStack, screenName, className} = props;
    return (
        <section className={'education-section ' + (className)}>

            <h1 className={'aboutme-title text-theme'}>EDUCATION</h1>
            <p className={'aboutme-content text-theme'}>
                <span className={'text block'}>Education content here</span>
                    
            </p>
            <LottieAnimation
                animation={EducationLottie}
                height={300}
                width={300}
            />
        </section>
    )
}