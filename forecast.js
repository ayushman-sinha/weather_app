const request=require('request');

const forecast=(data,callback)=>{
    const urlWeather='https://api.openweathermap.org/data/2.5/onecall?lat='+data.latitude+'&lon='+data.longitude+'&exclude=minutely&appid=eb3e219095e74df7e5dacddd5d3b08ea&units=metric';

    request({url:urlWeather, json: true},(error,response)=>{
        if(error)
        callback('Unable to Connect',undefined)
        else if(response.body.error)
       callback('Cannot Find Location',undefined)
        else{
            callback(undefined,response.body);
        }
    })
}
//&exclude=hourly,minutely
module.exports=forecast;
