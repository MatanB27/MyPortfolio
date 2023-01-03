import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';

function App() {

  const [lightTheme, setLightTheme] = useState(
    {
      light_theme: true, 
      className: 'light'
    }
  );

  function changeTheme() {
    const new_state = {...lightTheme};
    if(lightTheme.light_theme) {
        new_state.light_theme = false;
        new_state.className = 'dark';
    } else {
        new_state.light_theme = true;
        new_state.className = 'light';
    }
    setLightTheme(new_state);
}

  return (
    <div className="App">
        <div className={"background-slang "  + (lightTheme.className)}>
          <ToggleTheme lightTheme={lightTheme} changeTheme={changeTheme}/>
        </div>
    </div>
  );
}

export default App;
