import React from 'react'
import './css/SunnyNig.css'

const SunnyNight = (props) => {
  return (
    <div>
        <div className='container1'> 
        <div className='time1'>{props.hr}:{props.min<10?'0'+props.min:props.min}</div>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
        <div className='leftContainer'>
      <div className='sky'><i className="material-icons brightness_2">brightness_4</i> {props.wMain}</div>
      <div className='temp'>{props.temp}<span style={{fontSize:'1.8rem',margin:'5px'}}>&#8451;</span></div>
      </div>
      <div className='place'><i className="material-icons locationIcon" style={{fontSize:'18px'}}>place</i> {props.Locate}</div>
        </div>
    </div>
  )
}

export default SunnyNight