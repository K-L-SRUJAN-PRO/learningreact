import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import './App.css'

export let themes= createContext();

const Themecon = (t) => {
  const [theme, settheme] = useState('light')

  return (
    <themes.Provider value={[theme,settheme]}>
      {t.children}
    </themes.Provider>

  )
}

export default Themecon