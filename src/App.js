import { useState } from 'react';
import MainPage from './pages/MainPage';
import { useDarkMode } from './hooks/useDarkMode';

function App() {

  let darkMode = useDarkMode()

  return (
    <div className={darkMode.isDarkMode ? "dark" : "light"}>
      <button onClick={darkMode.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );

}

export default App;
