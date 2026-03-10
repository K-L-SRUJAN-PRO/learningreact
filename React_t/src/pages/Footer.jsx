import React, { useContext } from 'react'
import { themes } from '../Themecon'

const Footer = () => {
    const {ftheme}=useContext(themes)
    return (
        <div className={ftheme}>
            <div className=' absolute bottom-0.5 p-3'>footer</div>
        </div>
    )
}

export default Footer