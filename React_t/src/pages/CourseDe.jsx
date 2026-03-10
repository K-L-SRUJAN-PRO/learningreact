import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDe = () => {
    let id = useParams()
    console.log(id.id);
    
  return (
    <div>
        <h1>{id.id} Course Details </h1>
    </div>
  )
}

export default CourseDe