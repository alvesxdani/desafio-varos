"use client"
import React, { ChangeEvent } from 'react';
import { ThemeContext } from './Context';

const ThemeComponent: React.FC = () => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    return null;
  }

  const { theme, setTheme } = context;

  function isDark() {
    return theme === "dark";
  }

  function handleChange({target}:ChangeEvent<HTMLInputElement>) {
    setTheme(target.checked ? 'dark' : 'light')
}

  return (
    <>
    <input type="checkbox" checked={isDark()} onChange={handleChange} />
    </>
  );
};

export default ThemeComponent;