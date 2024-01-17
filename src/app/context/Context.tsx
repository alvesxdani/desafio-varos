"use client"
import React from "react";
import { IContextTheme, IProvider } from "../interfaces/interfaces";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme")
    if (typeof storedPrefs === "string") {
      return storedPrefs
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    if (userMedia.matches) {
      return "dark"
    }
  }

  return "dark"
}

export const ThemeContext = React.createContext<IContextTheme | undefined>(undefined);

export const ThemeProvider = ({ initialTheme, children }: IProvider) => {
  const [theme, setTheme] = React.useState(getInitialTheme)

  React.useEffect(() => {
    const rawSetTheme = (theme: string) => {
      const root = window.document.documentElement;
      const isDark = theme === "dark";
  
      root.classList.remove(isDark ? "light" : "dark");
      root.classList.add(theme);
  
      localStorage.setItem("color-theme", theme);
    };

    rawSetTheme(theme);
    
    if (initialTheme) {
      rawSetTheme(initialTheme);
    }
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
