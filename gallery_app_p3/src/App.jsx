import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [ind, setind] = useState(5)
  const [datas, setdata] = useState([])

  
  
  const getima = async () => {
    const ima = await axios.get(`https://picsum.photos/v2/list?page=${ind}&limit=12`)
    console.log(ima);
    setdata(ima.data)
    console.log(ima.data);
  }
  
  useEffect(function(){
    getima()
  },[ind])

  useEffect(function () {
    getima()
  }, [])

  let printdata = <h3 className='absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>Loading...</h3>
  if (datas.length > 0) {
    printdata = datas.map(function (ele, ind) {
      return (
        <div>

          <div className='h-50 bg-amber-50 rounded-2xl w-50 overflow-hidden ' >
            <a href={ele.url}>

              <img className="h-full w-full object-cover" src={ele.download_url} alt="no image" />
            </a>
          </div>
          <h2>{ele.author}</h2>
        </div>
      )
    }
    )

  }

  return (
    <div className='bg-black h-screen w-screen overflow-y-scroll no-scrollbar text-white p-10'>
      <div className='flex justify-between items-center'>
      <h1 className='text-7xl font-windsong '><span className='text-cyan-200'>My</span> gallery </h1>
      <h2 className='font-semibold text-l font-windsong'>current page : <span className='text-cyan-200'>{ind}</span></h2>
      </div>
      <div className='h-[70%] flex flex-wrap justify-center gap-8 m-10 '>
        {printdata}

      </div>
      <div className='flex justify-center gap-11  mx-50'>

        <button
          className='bg-cyan-700 text-shadow-white px-6 py-3 cursor-pointer rounded-xl active:scale-95 active:text-black'
          onClick={() => {
            if (ind > 1) {
              setdata([])
              setind(ind - 1)
            }
          }
        }
        >
          Prev
        </button>
        <div className='flex gap-3'>
        <button className='bg-cyan-900 p-2 rounded active:scale-90' onClick={()=>{ setdata([]) ;setind(ind+1)}}>{ind+1}</button>
        <button className='bg-cyan-900 p-2 rounded active:scale-90' onClick={()=>{ setdata([]) ;setind(ind+2)}}>{ind+2}</button>
        <button className='bg-cyan-900 p-2 rounded active:scale-90' onClick={()=>{ setdata([]) ;setind(ind+3)}}>{ind+3}</button>
        <button className='bg-cyan-900 p-2 rounded active:scale-90' onClick={()=>{ setdata([]) ;setind(ind+4)}}>{ind+4}</button>
        <button className='bg-cyan-900 p-2 rounded active:scale-90' onClick={()=>{ setdata([]) ;setind(ind+5)}}>{ind+5}</button>

        </div>
        <button className='bg-cyan-700 text-shadow-white px-6 py-3 cursor-pointer rounded-xl active:scale-95 active:text-black'
        onClick={()=>{
          setdata([])
          setind(ind+1)
        }}
       >
          Next</button>
      </div>
    </div>
  )
}

export default App