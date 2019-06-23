const express = require('express')
const app = express()
const mysql = require('mpysql')

app.all('/',(req,res)=>{
  console.log(req.url);
})

app.listen('9999',()=>{
  console.log('listening : http://localhost:9999');
})