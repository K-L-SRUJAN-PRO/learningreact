import React from 'react'
import {Landmark } from 'lucide-react'
const Navbar = () => {
  return (
    <div className=' flex  justify-between px-2.5 py-2.5 '>
        <h1 className='bg-black py-2 px-3 rounded-2xl text-amber-50 text-xs flex items-center'>TRAGET AUDINECE</h1>
        <button className='bg-gray-300 py-2 px-3 rounded-2xl text-xs flex items-center' ><Landmark />DIGITAL BANKING PLATFORM</button>
    </div>
  )
}

export default Navbar