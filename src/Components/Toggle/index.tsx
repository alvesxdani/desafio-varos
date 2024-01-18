'use client'
import React, { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState<boolean>()

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if(theme === 'dark') setDarkMode(true)
        if(!theme) setDarkMode(true)
    },[])

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

  return (
    <button onClick={() => setDarkMode(!darkMode)}>Dark mode</button>
  )
}

export default useDarkMode
