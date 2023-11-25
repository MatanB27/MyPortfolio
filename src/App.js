import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/header';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';

function App() {

  const [lightTheme, setLightTheme] = useState(
    {
      light_theme: true, 
      className: 'light',
    }
  );
  const [changeState, setChangeState] = useState(false);

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

  const themeProps = {
    theme: lightTheme,
    changeTheme: changeTheme,
    changeState: changeState,
  };

  function renderScreen() {
    return (
      <>
        <ToggleTheme {...themeProps}/>
      </>
    )
  }

  return (

    <div className={"App "   + (lightTheme.className)}>
        <Header {...themeProps}/>

        
        <div className={"body"}>
          {
            renderScreen()
          }
        </div>
    </div>

  );
}

export default App;
