import React from 'react'

const Home = () => {
  return (
    <div className='px-10 py-10 flex justify-center'>
        <form className='flex flex-col justify-center '>
            <h1 className='text-7xl font-bold font-sans text-left mb-20 text-blue-100 stroke-black-100 '>NOTES APP</h1>
            <textarea name="mess" id="mess" row="4" placeholder='Enter your thoughts here' className='bg-amber-600 border border-black rounded-2xl h-100 w-full px-10 py-10 resize-none'></textarea>
            <button className='border border-b-black m-10 h-12 w-50 bg-amber-300 rounded-2xl' onClick={() => {console.log("clicked"); window.scrollBy({top:'100vh' ,behavior:'smooth'})}}>Enter</button>
        </form>
    </div>
  )
}

export default Home