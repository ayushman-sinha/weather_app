import React from 'react'
import { Icon } from '@iconify/react';
import cloud2 from './img/HeavyRain.svg'
import './css/HeavyDay.css'
const HeavyNight = (props) => {
  return (
    <div>
         <div className='container6'>
        <div className='cloudBack2'>
                <Icon icon="bi:cloud-drizzle-fill" width="128" height="128" color='lightgrey'/>
                    </div>
        <div className='time1'>{props.hr}:{props.min<10?'0'+props.min:props.min}</div>
        <div className='containerWaves'>
        <img src={cloud2} className='cloudSize' alt='cloud'/>
        </div>
        
        <div className='leftContainer'>
      <div className='sky'> <Icon icon="bi:cloud-drizzle-fill"/> Rain</div>
      <div className='temp'>{props.temp}<span style={{fontSize:'1.8rem',margin:'5px'}}>&#8451;</span></div>
      </div>
      <div className='place'><i className="material-icons locationIcon" style={{fontSize:'18px'}}>place</i> {props.Locate}</div>
            </div>
    </div>
  )
}

export default HeavyNight