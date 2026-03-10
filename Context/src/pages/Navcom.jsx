import React, { useContext } from 'react'
import { themes } from '../Theme'

const Navcom = () => {
    const [theme,settheme] = useContext(themes)
    const changeth=()=>{
        console.log(theme)
        if(theme=='dark'){
            settheme('light')
        }
        else{
            settheme('dark')
        }
    }
  return (
    <div className='flex gap-5 items-center'>
        <h1>Home</h1>
        <h1>About us</h1>
        <h1>Contact</h1>
        <button className='border px-2 rounded active:scale-95' onClick={changeth}>{theme}</button>
    </div>
  )
}

export default Navcom