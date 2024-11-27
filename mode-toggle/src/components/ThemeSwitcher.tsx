import React, { useContext } from 'react';
import { MoonIcon } from './Moon';
import { SunnyIcon } from './Sunny';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeSwitcher must be used within a ThemeProvider');
  }

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
    >
      {/* {theme === 'light'  ? 'Dark Mode' : 'Light Mode'} */}
      {theme === 'light'  ? <MoonIcon /> : <SunnyIcon /> }
    </button>
  );
};

export default ThemeSwitcher;