
import React, { useState } from 'react'
// import Note from './note'
// import Home from './home'

const Screen1 = () => {
  const [details, setdetails] = useState('')
  const [list, setlist] = useState([])

  const d = new Date()
  var date = d.toLocaleDateString()



  function subimtcon(e) {
    e.preventDefault();
    if (details.trim() == "") return
    const cpylist = { title: details, dat: date }
    // cpylist.push(details)
    setlist([...list, cpylist])
    // console.log(list)
    setdetails('')
  }

  function deletes(idx) {
    const copyl = [...list]
    copyl.splice(idx, 1)
    setlist(copyl)
  }

  return (
    <div className='flex w-full'>
      <div className='h-screen w-1/2 bg-blue-300 border border-r-5'>
        <div className='px-10 py-10 flex justify-center'>
          <form className='flex flex-col justify-center ' onSubmit={(e) => {
            subimtcon(e)
          }}>
            <h1 className='text-7xl font-bold font-sans  mb-20 text-blue-100 stroke-black-100 '>NOTES APP</h1>
            <textarea name="mess" id="mess" row="4" placeholder='Enter your thoughts here' className='bg-amber-600 border border-black rounded-2xl h-100 w-full px-10 py-10 resize-none' value={details} onChange={(e) => { setdetails(e.target.value) }}></textarea>
            <button className='border active:scale-95 border-b-black m-10 h-12 w-50 bg-amber-300 rounded-2xl'>Enter</button>

          </form>
        </div>
      </div>



      <div className='h-screen bg-blue-300 w-1/2 border border-l-5 px-20 p-10 overflow-y-auto  '>
   
          {list.map((note, idx) => (
            <div className='flex flex-col justify-center '>
              <div className='bg-orange-300 w-full h-fit p-8 mb-5 rounded-2xl  border shrink-0' >
                <div className='flex justify-between'>
                  <h1 className='text-3xl text-amber-800 '>Notes</h1>
                  <p>{note.dat}</p>
                </div>
                <div className='p-2 text-justify mt-5' id='note'>{note.title}</div>

              </div>
              <button onClick={() => { deletes(idx) }} className='bg-red-500 w-fit active:scale-95 border-2 border-black rounded-2xl px-5 mb-15 py-3 text-white'>Delete</button>
            </div>
          ))}
        </div>

      </div>

  )
}

export default Screen1