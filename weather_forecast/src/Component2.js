import { useState,useEffect } from "react";

import './css/SmallContainer.css'
import card1 from './card1.svg'
const Component2 = (props) => {
  return (
   
        <div >
    <div className={`eachBox  ${props.addClass}`}>
    <div className="timeTop">
        {props.timeUpper}
      </div>
    
      <div className="iconMid">        
        <img src={props.imgLink} alt='card'/>
      </div>
      
      <div className="tempBottom">
        {props.tempDown}{'\u00b0'}c
      </div>
      <div  className='imgCont' >
      <img src={card1}/>
      </div>      
    </div> 


    
  
     </div>
       
  )
}

export default Component2