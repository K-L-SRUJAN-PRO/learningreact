import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { themes } from '../Themecon'

const Nav = () => {
  const {ntheme}=useContext(themes)
  return (
    <div className={ntheme}>
      <div className='font-bold text-xl '>
        <h2>Product store</h2>
      </div>
      <div className='flex gap-6  underline'>
        <Link to='/'>Home</Link>
        <Link to='/pro'>Product</Link>
        <Link to='/cour'>Course</Link>
        <Link to='/con'>Contact</Link>
      </div>
    </div>
  )
}

export default Nav