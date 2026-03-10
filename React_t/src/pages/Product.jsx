import React from 'react'
import { Link, Outlet } from 'react-router-dom';


const Product = () => {
  return (
    <div className='flex justify-center p-10 text-2xl'>
      <div className='flex gap-10'>
        <Link to='/pro/girl'>Girls</Link>
        <Link to='/pro/boy'>Boys</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Product