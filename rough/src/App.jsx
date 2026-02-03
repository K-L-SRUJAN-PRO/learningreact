// import React from 'react'
// import { useState } from 'react'


// const App = () => {
//   let i=0
//   const [n, setn] = useState([10,20,30])
//     function clikbtn() {
//       const newa=[...n]
//       newa.push(10)
//       setn(newa)
//     }
//     function btnde() {
//       const newa=[...n]
//       newa.pop()
//       setn(newa)
//     }

//     return (
//       <div>
//     <h1>{n}</h1>
//     <button onClick={clikbtn}>inceare</button>
//     <button onClick={btnde}>pop</button>

//   </div>
//   )
// }

// export default App


// practicing object operation

import { React, useState } from 'react'


const App = () => {
  var c=20
  const [n, setn] = useState({ name: "srujan", age: 22 })

  function btn(){
    setn(perv=>({...perv,age:20}))
  }
  return (
    <>
      <div>{n.name},{n.age}</div>
      <button onClick={btn}>click me to change age</button>
    </>
  )
}

export default App