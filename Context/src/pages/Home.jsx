import React, { useContext } from 'react'
import Navbar from './Navbar'
import '../App.css'
import { themes } from '../Theme'

const Home = () => {
    let [theme] = useContext(themes)
    console.log(theme);

    return (
        <div >
            <Navbar/>
            <div className='h1 '>
                HOME PAGE
            </div>

        </div>
    )
}

export default Home