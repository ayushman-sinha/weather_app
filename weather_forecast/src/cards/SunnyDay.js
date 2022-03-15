import React from 'react'
import './css/SunnyDay.css'

const SunnyDay = (props) => {
  return (
    <div>
        
        <div className='container'> 
        <div className='time1'>{props.hr}:{props.min<10?'0'+props.min:props.min}</div>
        <div className="Circle1"></div>
      <div className="Circle2"></div>
      <div className="Circle3"></div>
      <div className='leftContainer'>
      <div className='sky'><i className="material-icons sun">wb_sunny</i> {props.wMain}</div>
      <div className='temp'>{props.temp}<span style={{fontSize:'1.8rem',margin:'5px'}}>&#8451;</span></div>
      </div>
      <div className='place'><i className="material-icons locationIcon" style={{fontSize:'18px'}}>place</i> {props.Locate}</div>

      </div>
    </div>
  )
}

export default SunnyDay