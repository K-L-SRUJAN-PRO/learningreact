import React from 'react'

import Cards from './Cards'
// import Cards from './Cards';



const Rightcon = () => {
  const arr = [
    {
      im: "https://images.unsplash.com/photo-1651505757766-55291d6d3e53?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbGRpbmclMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
      it: "Prime customers.that have access to bank credit and are satisfied with the current product",
      tb: "Satisfied"
    },
    {
      im: "https://images.unsplash.com/photo-1636928332620-92cc7205b694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
      it: "Prime customers.that have access to bank credit and are satisfied with the current product",
      tb: "Satisfied"
    },
    {
      im: "https://plus.unsplash.com/premium_photo-1675626492183-865d6d8e2e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      it: "Prime customers.that have access to bank credit and are satisfied with the current product",
      tb: "Satisfied"
    },
    {
      im: "https://plus.unsplash.com/premium_photo-1675626492183-865d6d8e2e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      it: "Prime customers.that have access to bank credit and are satisfied with the current product",
      tb: "Satisfied"
    }
  ]
  return (
    <div className='h-full w-2/3 px-8 py-2 flex gap-3'>
      {arr.map((e, index) => {

        return <Cards key={index} imn={e.im} nm={index+1} imt={e.it} imb={e.tb} />
      })}
    </div>
  )
}

export default Rightcon