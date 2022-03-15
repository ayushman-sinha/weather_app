const request=require('request');
const geocode=require('./geocode');
const forecast=require('./forecast');

const address=process.argv[2];
geocode(address,(error,data)=>{
    if(error)
console.log(error);
else{
forecast({latitude:data.latitude ,longitude:data.longitude},(error,data1)=>{
    console.log(error,tmp);
    
    //console.log(data1);
})
}
})


