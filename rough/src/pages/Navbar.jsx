import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <h2>Some company</h2>
            <div className='navs'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About us</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar