import { useState,useEffect } from "react";
import './css/Search.css';
import { Icon } from "@iconify/react";
import Component2 from "./Component2";
import Component3 from "./Component3";
import SunnyDay from './cards/SunnyDay';
import SunnyNight from "./cards/SunnyNight";
import RainDay from "./cards/RainDay";
import RainNight from "./cards/RainNight";
import Snow from "./cards/Snow";
import HeavyDay from "./cards/HeavyDay";
import HeavyNight from "./cards/HeavyNight";
const Searchbar = () => {
    const [place,Setplace]=useState(" ");    
    const [data,setData]=useState();
    const [details,setDetails]=useState(true);
    const [detailContent,setDetailContent]=useState(<></>);
  const [weatherCard,setWeatherCard]=useState();
  const [hourComp,setHourComp]=useState([]);
    const handleChange=(e)=>{
        Setplace(e.target.value);
    }
    const DisplayMore=(e)=>{
      setDetails(!details);
      if(details==true){
        setDetailContent(<Component3></Component3>)
      }
      else
      setDetailContent(<></>)
    }
    function generateHourlyCard(data){
      
        let tempAr=[];
      
        
        let imgStr=' http://openweathermap.org/img/wn/';
        let t=new Date();
        let curHour=t.getHours();let j=0;
        for(let i=0;i<48;i++){
          let timeNow=new Date(data[i].dt*1000);
          let tmpHour=timeNow.getHours();
          if(curHour===tmpHour)
          {
            j=i;
            break;
          }
        }

        for(let i=j;i<data.length;i++){
          let timeNow=new Date(data[i].dt*1000);
          let tmpHour=timeNow.getHours();
          timeNow=timeNow.toLocaleTimeString();
          let ind=timeNow.lastIndexOf(':');
          timeNow=timeNow.substring(0,ind)+timeNow.substring(ind+3);
        //console.log(timeNow);
        if(curHour===tmpHour)
        tempAr.push( <Component2 key={i} timeUpper={"Now"} tempDown={Math.round(data[i].temp)} imgLink={imgStr+data[i].weather[0].icon+'@2x.png'} addClass={''} ></Component2>)
        else
        tempAr.push( <Component2 key={i} timeUpper={timeNow} tempDown={Math.round(data[i].temp)} imgLink={imgStr+data[i].weather[0].icon+'@2x.png'} addClass={''} ></Component2>)
        }
    setHourComp(tempAr);

    }
    function generateCard(data){
     
      let w_code=parseInt(JSON.stringify(data.current.weather[0].id));
        let t=new Date((data.current.dt)*1000);
        console.log(data);
        let curTime=t
        t=t.toUTCString();
    
        let ind=t.lastIndexOf(':');
        t=t.substring(0,ind)+t.substring(ind+3);
        
      let hr=parseInt(curTime.getHours());
      let min=parseInt(curTime.getMinutes());
      let curTemp=Math.round(parseFloat(JSON.stringify(data.current.temp)));
      let w_code2=JSON.stringify(data.current.weather[0].main);
      w_code2=w_code2.substring(1,w_code2.length-1);
     // console.log(w_code,curTemp);
      
      if((w_code>=200&&w_code<=232)||(w_code>=300&&w_code<=321)||(w_code>=500&&w_code<=531)){
         if(hr>=6&&hr<=16){
           setWeatherCard(<RainDay hr={hr>12&&hr<=24?hr-12:hr} min={min} temp={curTemp} wMain={w_code2} Locate={data.location.substring(0,data.location.indexOf(','))}></RainDay>);
         }
         else{
          
           setWeatherCard(<RainNight hr={hr>12&&hr<=24?hr-12:hr} min={min} temp={curTemp} wMain={w_code2} Locate={data.location.substring(0,data.location.indexOf(','))}></RainNight>);
         }
      }
      else if((w_code>=801&&w_code<=804))
      {
        if(hr>=6&&hr<=16){
          setWeatherCard(<HeavyDay hr={hr>12&&hr<=24?hr-12:hr} min={min} temp={curTemp}  Locate={data.location.substring(0,data.location.indexOf(','))}></HeavyDay>);
        }
        else{
          setWeatherCard(<HeavyNight hr={hr>12&&hr<=24?hr-12:hr} min={min} temp={curTemp} Locate={data.location.substring(0,data.location.indexOf(','))}></HeavyNight>);
      }
    }
    else if(w_code==800){
      if(hr>=6&&hr<=16)
        setWeatherCard(<SunnyDay hr={hr>12&&hr<=24?hr-12:hr} min={min} temp={curTemp} wMain={"Sunny"} Locate={data.location.substring(0,data.location.indexOf(','))}></SunnyDay>)
        else
        setWeatherCard(<SunnyNight hr={hr>12&&hr<=24?hr-12:hr} min={min} temp={curTemp} wMain={"Clear"} Locate={data.location.substring(0,data.location.indexOf(','))}></SunnyNight>)
    }
    else if(w_code>=701&&w_code<=781){
          if(w_code==741||w_code==781||w_code==761||w_code==711){
            if(hr>=6&&hr<=16){
              setWeatherCard(<RainDay hr={hr>12&&hr<=24?hr-12:hr} min={min} temp={curTemp} wMain={w_code2} Locate={data.location.substring(0,data.location.indexOf(','))}></RainDay>);
            }
            else{
            
              setWeatherCard(<RainNight hr={hr>12&&hr<=24?hr-12:hr} min={min} temp={curTemp} wMain={w_code2} Locate={data.location.substring(0,data.location.indexOf(','))}></RainNight>);
            }
          }
          else
          {
            if(hr>=6&&hr<=16)
            setWeatherCard(<SunnyDay hr={hr>12&&hr<=24?hr-12:hr} min={min} temp={curTemp} wMain={w_code2} Locate={data.location.substring(0,data.location.indexOf(','))}></SunnyDay>)
            else
            setWeatherCard(<SunnyNight hr={hr>12&&hr<=24?hr-12:hr} min={min} temp={curTemp} wMain={w_code2} Locate={data.location.substring(0,data.location.indexOf(','))} ></SunnyNight>)
          }
    }
    else{
      setWeatherCard(<Snow hr={hr>12&&hr<=24?hr-12:hr} min={min} temp={curTemp} Locate={data.location.substring(0,data.location.indexOf(','))}></Snow>)
    }
    generateHourlyCard(data.hourly)
  }
    function DisplayResult()
    {
      
      fetch("/api?"+ new URLSearchParams({
        address: place
    }))
        .then((res) => res.json())
        .then((data) => setData(data.message))
        .then(()=>generateCard(data))
        
     
       // console.log(data);
         // setTmp(data.temp);
    }
  return (
    <div className="box1" >
      <div>
        <input type='text' className='searchBox' placeholder="Search 'location'" onChange={(e)=>handleChange(e)} ></input>
        <button type='submit' className='searchButton' onClick={()=>DisplayResult()} ><Icon icon="bx:search"  width="28" height="28" className="mainButton" /></button>
        </div>
     
         {weatherCard? <button type='button' onClick={(e)=>DisplayMore()}>{details?"View Details":"View Less"}</button>:''}
        
        {weatherCard}
        <div className="detailArea">
        {detailContent}
        </div>
        <div className="mainBox1">        
        {hourComp}
        </div>
    </div>
  )
}

export default Searchbar
/*
data.weather.id -> to determine rain,snow,clear etc
data.current.dt -> epoch time
data.timezone_offset -> timezone

      <SunnyDay></SunnyDay>
        <SunnyNight></SunnyNight>
        <RainDay></RainDay>
        <RainNight></RainNight>
        <Snow></Snow>
        <HeavyDay></HeavyDay>
        <HeavyNight></HeavyNight>
*/