import React from 'react';
import LottieAnimation from '../../components/LottieAnimation/LottieAnimation';
import AboutMeLottie from '../../assets/animations/aboutme-lottie.json'
import './aboutme.scss';
function Aboutme(props) {
    const {screensStack, screenName, className} = props;
    return (
        <section key={screenName} className={'aboutme-section ' + (className)}>
            <h1 className={'aboutme-title text-theme'}>ABOUT ME</h1>
            <p className={'aboutme-content text-theme'}>
                <span className={'text block'}>My name is Matan and I'm a developer with a passion for creating things that make people's lives easier.</span>
                <span className={'text block'}>I have experience in both web development and application development,</span>
                <span className={'text block'}>And I am currently seeking to leverage my skills and knowledge </span>
                <span className={'text block'}>to fill a developer role at a company.</span>
                <span className={'text block'}>I am a highly motivated, team-oriented, self-learner,</span>
                <span className={'text block'}>with strong problem solving and time management skills.</span>      
            </p>
            <LottieAnimation
                animation={AboutMeLottie}
                height={300}
                width={300}
            />
        </section>
    )
}

export default Aboutme;