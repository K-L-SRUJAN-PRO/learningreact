import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between px-10 py-4 bg-cyan-400'>
      <div className='font-bold text-xl text-black'>
        <h2>Product store</h2>
      </div>
      <div className='flex gap-6 text-black underline'>
        <Link to='/'>Home</Link>
        <Link to='/pro'>Product</Link>
        <Link to='/cour'>Course</Link>
        <Link to='/con'>Contact</Link>
      </div>
    </div>
  )
}

export default Nav