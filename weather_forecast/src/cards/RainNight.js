import React from 'react'
import './css/RainNight.css'
import cloud from './img/cloud.svg'
import cloud2 from './img/cloud5.svg'
import { Icon } from '@iconify/react';

const RainNight = (props) => {
  return (
    <div>
      
        <div className='container3'>
        <div className='cloudBack'>
                <Icon icon="bi:cloud" width="128" height="128" color='lightgrey'/>
                    </div>
        <div className='time1'>{props.hr}:{props.min<10?'0'+props.min:props.min}</div>
        <div className='containerWaves'>
        <img src={cloud2} className='cloudSize' alt='cloud'/>
        </div>
        
        <div className='leftContainer'>
      <div className='sky'><i class="material-icons cloud">cloud_queue</i> {props.wMain}</div>
      <div className='temp'>{props.temp}<span style={{fontSize:'1.8rem',margin:'5px'}}>&#8451;</span></div>
      </div>
      <div className='place'><i class="material-icons locationIcon" style={{fontSize:'18px'}}>place</i> {props.Locate}</div>
            </div>
       
    </div>
  )
}

export default RainNight
{/* <div className='wave2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
<path fill="#0099ff" fill-opacity="1" d="M0,288L34.3,266.7C68.6,245,137,203,206,192C274.3,181,343,203,411,181.3C480,160,549,96,617,106.7C685.7,117,754,203,823,208C891.4,213,960,139,1029,117.3C1097.1,96,1166,128,1234,128C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg>
</div>
<div className='wave1'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
<path fill="#a2d9ff" fill-opacity="1" d="M0,288L34.3,266.7C68.6,245,137,203,206,192C274.3,181,343,203,411,181.3C480,160,549,96,617,106.7C685.7,117,754,203,823,208C891.4,213,960,139,1029,117.3C1097.1,96,1166,128,1234,128C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg>
      </div> */}