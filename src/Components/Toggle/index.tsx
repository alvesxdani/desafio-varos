'use client'
import React, { useEffect, useState } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

const Toggle = () => {
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
    <button onClick={() => setDarkMode(!darkMode)}>
      { darkMode ?
      <IoIosMoon size="1.7rem"/> :
      <MdOutlineWbSunny size="1.7rem" /> }
    </button>
  )
}

export default Toggle
