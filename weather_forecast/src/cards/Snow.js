import React from 'react'
import './css/Snow.css'
import snow from './img/snow.svg'
import { Icon } from '@iconify/react';
const Snow = (props) => {
  return (
    <div>
            <div className='container4'>
                <div className='snowBack'>
                <Icon icon="mdi:snowflake" width="128" height="128" color='lightgrey'/>
                    </div>
        <div className='time1'>{props.hr}:{props.min<10?'0'+props.min:props.min}</div>
        <div className='containerSnow'>
        <img src={snow} className='cloudSize' alt='cloud'/>
        </div>
        
        <div className='leftContainer'>
      <div className='sky'><Icon icon="mdi:snowflake" width="28" height="28"/> Cool</div>
      <div className='temp'>{props.temp}<span style={{fontSize:'1.8rem',margin:'5px'}}>&#8451;</span></div>
      </div>
      <div className='place'><i className="material-icons locationIcon" style={{fontSize:'18px'}}>place</i> {props.Locate}</div>
            </div>
       
    </div>
  )
}

export default Snow