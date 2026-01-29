import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
   
  return (
    <div className='card'>
        <div>
            <div className="top">
            <img src="https://www.citypng.com/public/uploads/preview/round-official-amazon-a-letter-symbol-logo-icon-701751694791936ocsmsimccw.png" alt='com pic'></img>
            <button>save <Bookmark size={12} /></button>
            
        </div>
        <div className="cent">
                <h1>{props.cn} <span>{props.cp}</span></h1>
            <h1>{props.cp}</h1>
            <div className="parts">
                <p>{props.ct1}</p>
                <p>{props.ct2}</p>
            </div>
        </div>
        </div>
        <div className="bottm">
            <div>
                <h1>${props.ep}</h1>
                <p>{props.cl}</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card