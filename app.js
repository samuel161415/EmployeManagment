const express=require('express')
const mongoose=require('mongoose')
const morgan=require('morgan')
require('./Connection')
console.log("sami");

const app=express()


app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));




//const Admin=require('./route/Admin')
const Employe=require('./route/Employe')

app.use('/Employe',Employe)

app.listen(5000,()=>{console.log("I am listning");})