import React from 'react'
import { ArrowRight } from 'lucide-react'

const Cards = (p) => {
  return (
    <div className=' bg-cover h-full w-1/3 rounded-4xl px-10 py-10 flex flex-col shrink-0 overflow-x-auto justify-between' style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.7)),url(${p.imn})`}}>
        <div className='bg-white px-1 py-1 rounded-full h-12 w-12 flex justify-center items-center '>{p.nm}</div>
        <div> 
        <div className='text-blue-50 '>{p.imt}</div>
        <div className='mt-25 mb-10 px-5 py-3 text-center bg-[#5471F6] rounded-full flex justify-between'>{p.imb}< ArrowRight /></div>
        </div>
      </div>
  )
}

export default Cards