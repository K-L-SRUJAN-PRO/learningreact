
import React, { createContext } from 'react'
import App from './App'
import { useState } from 'react';
import './App.css'




export let themes= createContext();

const Theme = (props) => {
  const [theme, settheme] = useState('dark')
  return (
    <div className={theme}>
      <themes.Provider value={[theme,settheme]}>
        {props.children}
      </themes.Provider>
    </div>
  )
}

export default Theme