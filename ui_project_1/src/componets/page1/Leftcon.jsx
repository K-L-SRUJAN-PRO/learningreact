import React from 'react'
import Arrow from './Arrow'
import Hero from './Hero'

const Leftcon = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 px-10 py-15'>
        <Hero/>
        <Arrow/>
    </div>
  )
}

export default Leftcon