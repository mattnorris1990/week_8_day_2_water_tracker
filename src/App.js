import { useState } from 'react';
import MainPage from './pages/MainPage';
import { useToggle } from './hooks/useToggle'

function App() {

  const [isDarkMode, setIsDarkMode] = useToggle(false);

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <button onClick={setIsDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );

}

export default App;
