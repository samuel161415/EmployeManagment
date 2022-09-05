const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

const employeCredential=require('../model/EmployeCredential')
const Employe=require('../model/Employe')
router.post('/creatCredential',async(req,res)=>{

    try{
        const{Email,Password}=req.body; 
         
        if(!(Email&&Password)){
            res.status(400).send("All input is required");
        }
 
        // checking if their exists username and if it is reject it
        // const oldUser=await employeCredential.findOne({Email})

        // if(oldUser){
        //     return res.status(409).send("User Already Exist. Please Login")
        // }

        // checks if the user is registered or not
        console.log("email ",Email," pass ",Password);
        // const checkEmail=await Employe.findOne({Email});
        // if(!checkEmail) return res.status(409).send("no user is registered with this email")

        // encrypt the password and store
       const encryptedPassword= await bcrypt.hash(Password,10);
       
       const credential= await employeCredential.create({
           UserName:Email.toLowerCase(),
           Password:encryptedPassword,
       })
       

    //    const token= jwt.sign(
    //        {EmployeId: customer._id, Email },
    //        "samuelismyname",
    //        {
    //            expiresIn: "3h",
    //        }
    //    );
    //    customer.token=token;
       return res.status(201).json(credential)
     } catch(err){
        return res.send(err)
     }
 
 })

 module.exports=router
