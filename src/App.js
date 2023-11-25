import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/header';

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
  
  function renderScreen() {
    
    return (
      <div>OK</div>
    )
  }


  return (
    <>
    <div className={"App "   + (lightTheme.className)}>
      <div>
        <Header
          theme={lightTheme} 
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

    </>
  );
}

export default App;
