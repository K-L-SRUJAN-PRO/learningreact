import React from 'react'
import { useState } from 'react'


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

// import { React, useState } from 'react'


// const App = () => {
//   var c=20
//   const [n, setn] = useState({ name: "srujan", age: 22 })

//   function btn(){
//     setn(perv=>({...perv,age:20}))
//   }
//   return (
//     <>
//       <div>{n.name},{n.age}</div>
//       <button onClick={btn}>click me to change age</button>
//     </>
//   )
// }

// export default App

//perventing webpage from reloading after each submission
// const App = () => {
//   const subs = (e) => {
//     e.preventDefault()
//     console.log("from submitted")
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         subs(e)
//       }}>
//         <input type="text" placeholder='Enter your name'/>
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

//interacting with input field via DOM

// import React from 'react'

const App = () => {
  const btn = (e)=>{
    e.preventDefault()
    // console.log("from submited");
    
  }
  const [Text, setText] = useState('')
  return (
    <div>
      <form onSubmit={(e)=>{
        btn(e)
        console.log("form subitted by ",Text)
      }}>
        <input 
        type="text" 
        placeholder='Enter yout text' 
        value={Text} 
        onChange={(e)=>{
          setText(e.target.value)
          console.log(e.target.value)
        }}
          />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App