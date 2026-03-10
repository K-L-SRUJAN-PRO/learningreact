import React from 'react'
import Navcom from './Navcom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-pink-950 h-full p-5'>
        <h1>Company</h1>
        <Navcom/>
    </div>
  )
}

export default Navbar