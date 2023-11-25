import React, { useState, useEffect } from 'react';
import NavigationManager from './NavigationManager';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import Welcome from './screens/Welcome/welcome';
import './App.scss';
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer';
import Aboutme from './screens/Aboutme/aboutme';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Clouds from './components/Clouds/clouds';
import Education from './screens/Education/education';

const screens = [
  'Welcome',
  'Aboutme',
  'Education',
  'Work Experience',
  'Skills',
  'Projects',
  'Thank you'
]

function App() {

  const [lightTheme, setLightTheme] = useState(
    {
      light_theme: true, 
      className: 'light',
    }
  );
  const [changeState, setChangeState] = useState(false);
  const screensStack = NavigationManager();
  screensStack.pushScreen(0)

  const [isScreenChanged, setIsScreenChanged] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsScreenChanged(prev => !prev)
    }, 350)
  }, [screensStack.getCurrentScreen()])
  
  function changeTheme() {
    setChangeState(true)
    setTimeout(() => {
      const new_state = {...lightTheme};
      if(lightTheme.light_theme) {
          new_state.light_theme = false;
          new_state.className = 'dark';
      } else {
          new_state.light_theme = true;
          new_state.className = 'light';
      }
      setLightTheme(new_state);
      setChangeState(false)
    }, 350) 
  }

  function getComponent(screenName) {
    let component = null;
    switch(screenName) {
      case 'Welcome':
        component = (
          <Welcome
            key={screenName}
            screensStack={screensStack}
          />
        )
        break;
      case 'Aboutme': 
        component = (
          <Aboutme
            key={screenName}
            screensStack={screensStack}
          />
        )
        break;
      case 'Education': 
      component = (
        <Education
          key={screenName}
          screensStack={screensStack}
        />
      )
      break;
       default: 
        return null
    }
    return component;
  }
  
  function renderScreen() {
    
    const currScreenIndex = screensStack.getCurrentScreen();
    const screenName = screens[currScreenIndex];
  
    let component = getComponent(screenName);
    
    if(component) {
      return (
        <TransitionGroup>
          <CSSTransition
            key={currScreenIndex}
            in={isScreenChanged}
            exit={false}
            timeout={350}
            classNames="fade"
            mountOnEnter
            unmountOnExit
            
          >
              {component}
          </CSSTransition>
        </TransitionGroup>
      );
    }
  }


  return (
    <>
    <div className={"App "   + (lightTheme.className)}>
      <div className={"background-slant"}>
          <ToggleTheme 
            lightTheme={lightTheme} 
            changeTheme={changeTheme}
            changeState={changeState}
            />
        </div>
        <div className={"body"}>
          {
            renderScreen()
          }
        </div>  
        
    </div>
    <ButtonsContainer
      screensStack={screensStack}
      screensLength={screens.length}
    />
    <Clouds/>
    </>
  );
}

export default App;
