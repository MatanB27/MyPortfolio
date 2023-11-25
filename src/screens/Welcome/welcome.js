import React from 'react';

import './welcome.scss';
function Welcome(props) {
  const {screensStack, screenName, className} = props;

  return (
    <section key={screenName} className={'welcome ' + (className)}>
      
        <p className={'resume-sub-title text-theme'}>Welcome to...</p>
        <p className={'resume-title text-theme'}>Matan Baruch's Resume</p>

        
    </section>
  );
}

export default Welcome;
