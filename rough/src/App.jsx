// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { useEffect } from 'react'


// // const App = () => {
// //   let i=0
// //   const [n, setn] = useState([10,20,30])
// //     function clikbtn() {
// //       const newa=[...n]
// //       newa.push(10)
// //       setn(newa)
// //     }
// //     function btnde() {
// //       const newa=[...n]
// //       newa.pop()
// //       setn(newa)
// //     }

// //     return (
// //       <div>
// //     <h1>{n}</h1>
// //     <button onClick={clikbtn}>inceare</button>
// //     <button onClick={btnde}>pop</button>

// //   </div>
// //   )
// // }

// // export default App


// // practicing object operation

// // import { React, useState } from 'react'


// // const App = () => {
// //   var c=20
// //   const [n, setn] = useState({ name: "srujan", age: 22 })

// //   function btn(){
// //     setn(perv=>({...perv,age:20}))
// //   }
// //   return (
// //     <>
// //       <div>{n.name},{n.age}</div>
// //       <button onClick={btn}>click me to change age</button>
// //     </>
// //   )
// // }

// // export default App

// //perventing webpage from reloading after each submission
// // const App = () => {
// //   const subs = (e) => {
// //     e.preventDefault()
// //     console.log("from submitted")
// //   }
// //   return (
// //     <div>
// //       <form onSubmit={(e)=>{
// //         subs(e)
// //       }}>
// //         <input type="text" placeholder='Enter your name'/>
// //         <button>submit</button>
// //       </form>
// //     </div>
// //   )
// // }

// // export default App

// //interacting with input field via DOM----------------------------------------------------------------------------------------------------

// // import React from 'react'


// // const App = () => {
// //   const btn = (e)=>{
// //     e.preventDefault()
// //     // console.log("from submited");

// //   }
// //   const [Text, setText] = useState('')
// //   return (
// //     <div>
// //       <form onSubmit={(e)=>{
// //         btn(e)
// //         console.log("form subitted by ",Text)
// //       }}>
// //         <input 
// //         type="text" 
// //         placeholder='Enter yout text' 
// //         value={Text} 
// //         onChange={(e)=>{
// //           setText(e.target.value)
// //           console.log(e.target.value)
// //         }}
// //           />
// //         <button >Submit</button>
// //       </form>
// //     </div>
// //   )
// // }

// // localStorage---------------------------------------------------------------------------------------------------------------------------------

// // const App = () => {
// //   console.log(localStorage.getItem('u'))
// //   localStorage.removeItem('age')
// //   return (
// //     <>

// //       <div>App</div>

// //     </>
// //   )
// // }

// // gettign response using fecth---------------------------------------------------------------------------------------------------------------------


// // const App = () => {

// //   async function getdata() {
// //     var a = await fetch('https://jsonplaceholder.typicode.com/todos')
// //     var data= await a.json()
// //     console.log(data)
// //   }
// //   return (
// //    <>
// //     <button onClick={()=>{getdata()}}>get data</button>
// //    </>
// //   )
// // }

// // api respose access using axios-------------------------------------------------------------------------------------------------------------------


// // export const App = () => {

// //   const getres=async()=>{
// //     var a = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
// //     console.log(a)
// //   }

// //   return (
// //     <div>
// //       <button onClick={getres}>get response</button>
// //     </div>
// //   )
// // }



// export const App = () => {

//   const [a, seta] = useState(0)
//   const [b, setb] = useState(0)

//   function onChangeA(){
//     console.log("value of a is changed");
    
//   }
//   function onChangeB(){
//     console.log("value of B is changed");
    
//   }
  
//   useEffect(()=>{
//     onChangeA()
//   },[a])
//   useEffect(()=>{
//     onChangeB()
//   },[b])


//   return (
//     <div>
//       <h1>value of A :{a}</h1>
//       <h1>value of B :{b}</h1>
//       <button onClick={()=>{seta(a+1)}}>change A</button>
//       <button onClick={()=>{setb(b+1)}}>change B</button>
//     </div>
//   )
// }




import React from 'react'
import { Route,Routes } from 'react-router-dom' 
import Home from './pages/Home'
import Aboutus from './pages/aboutus'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'

const App = () => {
  return (
    <div className='pag'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </div>
  )
}

export default App