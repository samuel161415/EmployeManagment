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





const Employe=require('./route/Employe')
const Admin=require('./route/Admin')
const AdminCrud=require('./route/AdminCrud')
app.use('/Employe',Employe)
app.use('/Admin',Admin)

app.listen(5000,()=>{console.log("I am listning");})