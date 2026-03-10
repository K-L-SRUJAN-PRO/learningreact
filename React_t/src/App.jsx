import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Boys from './pages/Boys'
import Girls from './pages/Girls'

import Nav from './pages/Nav'
import Footer from './pages/Footer'
import Not from './pages/Not'
import Course from './pages/Course'
import CourseDe from './pages/CourseDe'
import Pagenav from './pages/Pagenav'
const App = () => {
  return (
    <div>
      <div className='text-amber-50'>
        <Nav />
        <Footer/>
        <Pagenav/>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/con' element={<Contact />} />
        <Route path='/pro' element={<Product />}>
          <Route path='boy' element={<Boys />} />
          <Route path='girl' element={ <Girls/>} />
        </Route>
        <Route path='*' element={<Not/>}/>
        <Route path='/cour' element={<Course/>}/>
        <Route path='/cour/:id' element={<CourseDe/>}/>
      </Routes>
    </div>
  )
}

export default App