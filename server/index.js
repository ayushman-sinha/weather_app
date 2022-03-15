// server/index.js

const express = require("express");
const req = require("express/lib/request");
const geocode=require('../geocode')
const forecast=require('../forecast')
const merge=require('merge')
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
 if(req.query.address)
 {
 geocode(encodeURIComponent(req.query.address),(error,data)=>{
 forecast({latitude:data.latitude ,longitude:data.longitude},(error,data1)=>{
 //console.log(error,data1); 
  const k=0;
 // res.json({message :JSON.stringify(data1)+JSON.stringify(data)})
 res.json({message : Object.assign(data1,data)})
})
 })
}

    //res.json({ message: 'lem'});

  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
