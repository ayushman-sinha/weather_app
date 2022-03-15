const request=require('request');

const geocode=(address,callback)=>{
    const urlGeo='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiYXl1c2htYW4tc2luaGEiLCJhIjoiY2t6d3l1YnJ5MDFneDJwa2tkdWNuOGxjMCJ9.E87L9hi5sQmxglxjrlDtPA';

    request({url: urlGeo, json: true},(error,response)=>{
        if(error)
        callback('Unable to Connect',undefined);
        else if(response.body.features.length===0)
        callback('Unable to find Location',undefined);
        else
        callback(undefined,{
         latitude:response.body.features[0].center[1],
         longitude:response.body.features[0].center[0],
         location:response.body.features[0].place_name
        })
    })

}
module.exports=(geocode);