import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import './App.css'

export let themes = createContext();

const Themecon = (t) => {
  const [ntheme, setntheme] = useState('ndark')
  const [natheme, setnatheme] = useState('nadark')
  const [htheme, seththeme] = useState('hdark')
  const [ftheme, setftheme] = useState('fdark')

  return (
    <div className={htheme}>

      <themes.Provider value={{ntheme, setntheme, natheme, setnatheme, htheme,seththeme,ftheme,setftheme}}>
        {t.children}
      </themes.Provider>
    </div>

  )
}

export default Themecon