const express=require('express');
const app=express();
const importData=require('./data.json')
let port =process.env.port || 3000;

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/student',(req,res)=>{
    res.send(importData)
})
app.listen(port,()=>{
    console.log("listening port in 3000")
})